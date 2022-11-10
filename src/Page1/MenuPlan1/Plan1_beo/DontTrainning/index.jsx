import React from "react";
import styled from "styled-components";
import Icon_back from "../../../../Asset/arrow-narrow-left.svg";
import Food1 from "./Food1";
import Food10 from "./Food10";
import Food11 from "./Food11";
import Food12 from "./Food12";
import Food13 from "./Food13";
import Food14 from "./Food14";
import Food15 from "./Food15";
import Food16 from "./Food16";
import Food17 from "./Food17";
import Food18 from "./Food18";
import Food19 from "./Food19";
import Food2 from "./Food2";
import Food20 from "./Food20";
import Food21 from "./Food21";
import Food22 from "./Food22";
import Food23 from "./Food23";
import Food24 from "./Food24";
import Food25 from "./Food25";
import Food26 from "./Food26";
import Food27 from "./Food27";
import Food28 from "./Food28";
import Food29 from "./Food29";
import Food3 from "./Food3";
import Food30 from "./Food30";
import Food4 from "./Food4";
import Food5 from "./Food5";
import Food6 from "./Food6";
import Food7 from "./Food7";
import Food8 from "./Food8";
import Food9 from "./Food9";
const DontTrainning = (props) => {
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
      case "8":
        return <Food8 />;
      case "9":
        return <Food9 />;
      case "10":
        return <Food10 />;
      case "11":
        return <Food11 />;
      case "12":
        return <Food12 />;
      case "13":
        return <Food13 />;
      case "14":
        return <Food14 />;
      case "15":
        return <Food15 />;
      case "16":
        return <Food16 />;
      case "17":
        return <Food17 />;
      case "18":
        return <Food18 />;
      case "19":
        return <Food19 />;
      case "20":
        return <Food20 />;
      case "21":
        return <Food21 />;
      case "22":
        return <Food22 />;
      case "23":
        return <Food23 />;
      case "24":
        return <Food24 />;
      case "25":
        return <Food25 />;
      case "26":
        return <Food26 />;
      case "27":
        return <Food27 />;
      case "28":
        return <Food28 />;
      case "29":
        return <Food29 />;
      case "30":
        return <Food30 />;
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
