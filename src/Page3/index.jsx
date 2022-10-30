import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import "antd/lib/input/Input";
import "antd/lib/radio/radio";
import MenuPlan3 from "./MenuPlan3";
import { Radio } from "antd";

const Page3 = () => {
  const [onClickSubmit, setOnClickSubmit] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("nam");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {onClickSubmit ? (
        <MenuPlan3 height={height} weight={weight} />
      ) : (
        <ContainPage3>
          <h2>Người mới bắt đầu</h2>
          <ContainOption>
            <Option>
              Chiều cao
              <Input
                placeholder="Nhập chiều cao"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
              />
            </Option>
            <Option>
              Cân nặng
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
