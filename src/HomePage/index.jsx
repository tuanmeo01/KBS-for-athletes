import React, { useState } from "react";
import styled from "styled-components";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

const HomePage = () => {
  const [clickType, setClickType] = useState("0");
  console.log(clickType);
  return (
    <>
      {clickType === "1" ? (
        <Page1 setClickType={setClickType} />
      ) : clickType === "2" ? (
        <Page2 setClickType={setClickType} />
      ) : clickType === "3" ? (
        <Page3 setClickType={setClickType} />
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
          <ContainOption>
            <Form className="bounce-top" onClick={() => setClickType("1")}>
              Người mới bắt đầu
            </Form>
            <Form className="bounce-top" onClick={() => setClickType("2")}>
              Người tập bán chuyên
            </Form>
            <Form className="bounce-top" onClick={() => setClickType("3")}>
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
