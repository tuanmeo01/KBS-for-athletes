import React, { useState } from "react";
import styled from "styled-components";
import Icon_back from "../../../Asset/arrow-narrow-left.svg";
import DoTrainning from "./DoTrainning";
import DontTrainning from "./DontTrainning";
import "../../../components/index.css";

const Plan1_gay = (props) => {
  const [doTrainning, setDoTrainning] = useState(false);
  const [dontTrainning, setDontTrainning] = useState(false);
  const dotrainning = () => {
    setDoTrainning(true);
    localStorage.setItem("trainning", "true");
  };
  const donttrainning = () => {
    setDontTrainning(true);
    localStorage.setItem("trainning", "false");
  };
  return (
    <>
      {doTrainning ? (
        <DoTrainning setDoTrainning={setDoTrainning} />
      ) : dontTrainning ? (
        <DontTrainning setDontTrainning={setDontTrainning} />
      ) : (
        <ContainPlan1 className=" slide-in-blurred-top">
          <img
            style={{ cursor: "pointer" }}
            src={Icon_back}
            alt="backIcon"
            onClick={() => props.setPlan1(false)}
          ></img>
          <ContainOption>
            <h2>Hôm nay bạn có đi tập luyện không</h2>
            <ContainButton>
              <BtnFood onClick={dotrainning}>Có</BtnFood>
              <BtnFood onClick={donttrainning}>Không</BtnFood>
            </ContainButton>
          </ContainOption>
        </ContainPlan1>
      )}
    </>
  );
};
const ContainPlan1 = styled.div`
  padding: 50px 50px;
`;
const ContainOption = styled.div`
  text-align: center;
  width: 100%;
`;
const BtnFood = styled.div`
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f34c91;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #9b2259;
  }
`;
const ContainButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default Plan1_gay;
