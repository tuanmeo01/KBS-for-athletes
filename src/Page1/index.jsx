import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import "antd/lib/input/Input";
import "antd/lib/radio/radio";
import MenuPlan1 from "./MenuPlan1/index";
import { Radio } from "antd";
import Icon_back from "../Asset/arrow-narrow-left.svg";

const Page1 = (props: any) => {
  const [onClickSubmit, setOnClickSubmit] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("nam");
  const [clickReturnInPlan1, setClickReturnInPlan1] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {onClickSubmit ? (
        <MenuPlan1
          height={height}
          weight={weight}
          setOnClickSubmit={setOnClickSubmit}
        />
      ) : (
        <ContainPage1>
          <img
            style={{ cursor: "pointer" }}
            src={Icon_back}
            alt="backIcon"
            onClick={() => props.setClickType("0")}
          ></img>
          <h2>Người mới bắt đầu</h2>
          <ContainOption>
            <Option>
              Chiều cao(cm)
              <Input
                placeholder="Nhập chiều cao"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
              />
            </Option>
            <Option>
              Cân nặng(kg)
              <Input
                placeholder="Nhập cân nặng"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
              />
            </Option>
            <Option style={{ width: "15%" }}>
              Giới tính
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"nam"}>Nam</Radio>
                <Radio value={"nu"}>Nữ</Radio>
              </Radio.Group>
            </Option>
            <Option>
              Tuổi
              <Input
                placeholder="Nhập tuổi của bạn"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Option>
            {height && weight && setSex && age ? (
              <ButtonSubmit onClick={() => setOnClickSubmit(true)}>
                Xong
              </ButtonSubmit>
            ) : (
              <ButtonSubmit style={{ pointerEvents: "none", opacity: "50%" }}>
                Xong
              </ButtonSubmit>
            )}
          </ContainOption>
        </ContainPage1>
      )}
    </>
  );
};
const ContainPage1 = styled.div`
  padding: 50px 50px;
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
export default Page1;
