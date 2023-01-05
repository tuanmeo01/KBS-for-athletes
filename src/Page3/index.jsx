import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import "antd/lib/input/Input";
import "antd/lib/radio/radio";
import MenuPlan3 from "./MenuPlan3";
import { Radio, Select } from "antd";
import Icon_back from "../Asset/arrow-narrow-left.svg";
import { NumericFormat } from "react-number-format";

const Page3 = (props) => {
  const [onClickSubmit, setOnClickSubmit] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("nam");
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {onClickSubmit ? (
        <MenuPlan3
          height={height}
          weight={weight}
          setOnClickSubmit={setOnClickSubmit}
        />
      ) : (
        <ContainPage3>
          <img
            style={{ cursor: "pointer" }}
            src={Icon_back}
            alt="backIcon"
            onClick={() => props.setClickType("0")}
          ></img>
          <h2>Người tập chuyên nghiệp</h2>
          <h2>{props.subject}</h2>
          <ContainOption>
            <Option>
              Chiều cao(cm)
              <NumericFormat
                placeholder="Nhập chiều cao >100"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                allowNegative="false"
                onKeyPress={preventMinus}
              />
            </Option>
            <Option>
              Cân nặng(kg)
              <NumericFormat
                placeholder="Nhập cân nặng >20"
                onChange={(e) => setWeight(e.target.value)}
                onKeyPress={preventMinus}
                value={weight}
              />
            </Option>
            <Option>
              Tuổi
              <NumericFormat
                placeholder="Nhập tuổi >10"
                onChange={(e) => setAge(e.target.value)}
                onKeyPress={preventMinus}
                value={age}
              />
            </Option>
            <Option style={{ width: "15%" }}>
              Giới tính
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"nam"}>
                  {localStorage.setItem("gioitinh", value)}
                  Nam
                </Radio>
                <Radio value={"nu"}>
                  {localStorage.setItem("gioitinh", value)}
                  Nữ
                </Radio>
              </Radio.Group>
            </Option>

            <div>Lựa chọn giai đoạn</div>
            <Select
              onChange={(value) => {
                localStorage.setItem("giaidoan", value);
              }}
              defaultValue="daily"
              style={{ width: 200, marginBottom: "50px" }}
              options={[
                {
                  label: "Giai đoạn của bạn",
                  options: [
                    { label: "Hằng ngày", value: "daily" },
                    { label: "Tăng tốc", value: "boost" },
                    { label: "Giảm tốc", value: "unboost" },
                    { label: "Phục hồi", value: "health" },
                    { label: "Nghỉ ngơi", value: "rest" },
                  ],
                },
              ]}
            ></Select>
            {height > 100 &&
            height < 200 &&
            weight > 20 &&
            weight < 150 &&
            setSex &&
            age > 10 &&
            age < 80 ? (
              <ButtonSubmit onClick={() => setOnClickSubmit(true)}>
                Xong
              </ButtonSubmit>
            ) : (
              <ButtonSubmit style={{ pointerEvents: "none", opacity: "50%" }}>
                Xong
              </ButtonSubmit>
            )}
          </ContainOption>
        </ContainPage3>
      )}
    </>
  );
};
const ContainPage3 = styled.div`
  width: 100%;
  h2 {
    text-align: center;
  }
`;
const ContainOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Option = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
const ButtonSubmit = styled.div`
  width: 50px;
  height: 30px;
  background-color: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  color: wheat;
  cursor: pointer;
`;
export default Page3;
