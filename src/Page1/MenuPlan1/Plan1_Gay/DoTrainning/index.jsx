import React from "react";
import styled from "styled-components";
import Icon_back from "../../../../Asset/arrow-narrow-left.svg";
import Food1 from "./Food1";
import Food2 from "./Food2";
import Food3 from "./Food3";
import Food4 from "./Food4";
import Food5 from "./Food5";
import Food6 from "./Food6";
import Food7 from "./Food7";

const DoTrainning = (props) => {
  const days = localStorage.getItem("days");
  const renderSwitch = (days) => {
    switch (days) {
      case "1":
        return <Food1 />;
      case "2":
        return <Food2 />;
      case "3":
        return <Food3 />;
      case "4":
        return <Food4 />;
      case "5":
        return <Food5 />;
      case "6":
        return <Food5 />;
      case "7":
        return <Food7 />;
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
          onClick={() => props.setDoTrainning(false)}
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
export default DoTrainning;
