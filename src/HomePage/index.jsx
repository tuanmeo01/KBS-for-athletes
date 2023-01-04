import React, { useState } from "react";
import styled from "styled-components";
import ChonMonTap from "./ChonMonTap/index.";
import food from "../data/food.json";
const HomePage = () => {
  const [clickType, setClickType] = useState("0");
  console.log(clickType);
  const endpoint = "food.nguoimoibatdau.mon.chay.gay";
  const selectType1 = () => {
    setClickType("1");
    localStorage.setItem("type", "Page1");
  };
  const selectType2 = () => {
    setClickType("2");
    localStorage.setItem("type", "Page2");
  };
  const selectType3 = () => {
    setClickType("3");
    localStorage.setItem("type", "Page3");
  };
  return (
    <>
      {clickType === "1" ? (
        <ChonMonTap setClickType={setClickType} />
      ) : clickType === "2" ? (
        <ChonMonTap setClickType={setClickType} />
      ) : clickType === "3" ? (
        <ChonMonTap setClickType={setClickType} />
      ) : (
        <ContainHomePage>
          <h2
            className="tracking-in-expand-fwd"
            style={{
              fontSize: "21px !important",
              textAlign: "center",
              color: "#f34c91",
            }}
          >
            Chào mừng đến với hệ thống tư vấn dinh dưỡng dành cho vận động viên
            điền kinh
          </h2>
          {/* <img src={food.nguoimoibatdau.mon.chay.gay.day1.buasang.mon1.img} /> */}
          {/* <div>{food.nguoimoibatdau.mon[0].title}</div>
          <div>{food.nguoimoibatdau.mon[1].title}</div> */}
          <ContainOption>
            <Form className="bounce-top" onClick={selectType1}>
              Người mới bắt đầu
            </Form>
            <Form className="bounce-top" onClick={selectType2}>
              Người tập bán chuyên
            </Form>
            <Form className="bounce-top" onClick={selectType3}>
              Vận động viên chuyên nghiệp
            </Form>
          </ContainOption>
        </ContainHomePage>
      )}
    </>
  );
};

const ContainHomePage = styled.div`
  padding: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContainOption = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Form = styled.div`
  width: 100px;
  height: 100px;
  background: #f34c91;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #9b2259;
  }
`;
export default HomePage;
