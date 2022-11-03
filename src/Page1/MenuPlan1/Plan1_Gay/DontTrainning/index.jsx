import React from "react";
import styled from "styled-components";
import Icon_back from "../../../../Asset/arrow-narrow-left.svg";
import Food1 from "./Food1";
import Food2 from "./Food2";
import Food3 from "./Food3";
const DontTrainning = (props) => {
  const days = localStorage.getItem("days");
  const food = `Food${days}`;
  const renderSwitch = (days) => {
    switch (days) {
      case "1":
        return <Food1 />;
      case "2":
        return <Food2 />;
      case "3":
        return <Food3 />;
      //case "n":
      //return <Foodn/>
      default:
        return <Food1 />;
    }
  };
  return (
    <>
      <ContainTrainning>
        <img
          style={{ cursor: "pointer" }}
          src={Icon_back}
          alt="backIcon"
          onClick={() => props.setDontTrainning(false)}
        ></img>
        {renderSwitch(days)}
      </ContainTrainning>
    </>
  );
};
const ContainTrainning = styled.div`
  width: 100%;
  padding: 50px 50px;
`;
export default DontTrainning;
