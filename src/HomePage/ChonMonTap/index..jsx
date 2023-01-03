import React, { useState } from "react";
import styled from "styled-components";
import Page1 from "../../Page1";
import Page2 from "../../Page2";
import Page3 from "../../Page3";
import Icon_back from "../../Asset/arrow-narrow-left.svg";

const ChonMonTap = (props) => {
  const [clickType, setClickType] = useState("0");
  const [subject, setSubject] = useState("asdasd");
  const handleSelectSubject1 = () => {
    setClickType("1");
    setSubject("Tập môn đi bộ");
    localStorage.setItem("subject", "dibo");
  };
  const handleSelectSubject2 = () => {
    setClickType("2");
    setSubject("Tập môn chạy marathon");
    localStorage.setItem("subject", "marathon");
  };
  const handleSelectSubject3 = () => {
    setClickType("3");
    setSubject("Tập môn nhảy cao");
    localStorage.setItem("subject", "nhaycao");
  };
  const handleSelectSubject4 = () => {
    setClickType("4");
    setSubject("Tập môn ném đẩy");
    localStorage.setItem("subject", "nemday");
  };
  const handleSelectSubject5 = () => {
    setClickType("5");
    setSubject("Tập môn nhảy xa ba bước");
    localStorage.setItem("subject", "nhayxa");
  };
  console.log(clickType);
  const x = localStorage.getItem("type");
  console.log(x);
  if (x === "Page1") {
    return (
      <>
        {clickType === "1" ? (
          <Page1 setClickType={setClickType} subject={subject} />
        ) : clickType === "2" ? (
          <Page1 setClickType={setClickType} subject={subject} />
        ) : clickType === "3" ? (
          <Page1 setClickType={setClickType} subject={subject} />
        ) : clickType === "4" ? (
          <Page1 setClickType={setClickType} subject={subject} />
        ) : clickType === "5" ? (
          <Page1 setClickType={setClickType} subject={subject} />
        ) : (
          <ContainHomePage>
            <img
              style={{ cursor: "pointer", width: "2%" }}
              src={Icon_back}
              alt="backIcon"
              onClick={() => props.setClickType("0")}
            ></img>
            <h2
              className="tracking-in-expand-fwd"
              style={{
                fontSize: "21px !important",
                textAlign: "center",
                color: "#f34c91",
              }}
            >
              Chọn môn tập luyện của bạn
            </h2>

            <ContainOption>
              <Form className="bounce-top" onClick={handleSelectSubject1}>
                Đi bộ
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject2}>
                Chạy marathon
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject3}>
                Nhảy cao
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject4}>
                Ném đẩy
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject5}>
                Nhảy xa ba bước
              </Form>
            </ContainOption>
          </ContainHomePage>
        )}
      </>
    );
  } else if (x === "Page2") {
    return (
      <>
        {clickType === "1" ? (
          <Page2 setClickType={setClickType} subject={subject} />
        ) : clickType === "2" ? (
          <Page2 setClickType={setClickType} subject={subject} />
        ) : clickType === "3" ? (
          <Page2 setClickType={setClickType} subject={subject} />
        ) : clickType === "4" ? (
          <Page2 setClickType={setClickType} subject={subject} />
        ) : clickType === "5" ? (
          <Page2 setClickType={setClickType} subject={subject} />
        ) : (
          <ContainHomePage>
            <img
              style={{ cursor: "pointer", width: "2%" }}
              src={Icon_back}
              alt="backIcon"
              onClick={() => props.setClickType("0")}
            ></img>
            <h2
              className="tracking-in-expand-fwd"
              style={{
                fontSize: "21px !important",
                textAlign: "center",
                color: "#f34c91",
              }}
            >
              Chọn môn tập luyện của bạn
            </h2>

            <ContainOption>
              <Form className="bounce-top" onClick={handleSelectSubject1}>
                Đi bộ
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject2}>
                Chạy marathon
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject3}>
                Nhảy cao
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject4}>
                Ném đẩy
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject5}>
                Nhảy xa ba bước
              </Form>
            </ContainOption>
          </ContainHomePage>
        )}
      </>
    );
  } else if (x === "Page3") {
    return (
      <>
        {clickType === "1" ? (
          <Page3 setClickType={setClickType} subject={subject} />
        ) : clickType === "2" ? (
          <Page3 setClickType={setClickType} subject={subject} />
        ) : clickType === "3" ? (
          <Page3 setClickType={setClickType} subject={subject} />
        ) : clickType === "4" ? (
          <Page3 setClickType={setClickType} subject={subject} />
        ) : clickType === "5" ? (
          <Page3 setClickType={setClickType} subject={subject} />
        ) : (
          <ContainHomePage>
            <img
              style={{ cursor: "pointer", width: "2%" }}
              src={Icon_back}
              alt="backIcon"
              onClick={() => props.setClickType("0")}
            ></img>
            <h2
              className="tracking-in-expand-fwd"
              style={{
                fontSize: "21px !important",
                textAlign: "center",
                color: "#f34c91",
              }}
            >
              Chọn môn tập luyện của bạn
            </h2>

            <ContainOption>
              <Form className="bounce-top" onClick={handleSelectSubject1}>
                Đi bộ
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject2}>
                Chạy marathon
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject3}>
                Nhảy cao
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject4}>
                Ném đẩy
              </Form>
              <Form className="bounce-top" onClick={handleSelectSubject5}>
                Nhảy xa ba bước
              </Form>
            </ContainOption>
          </ContainHomePage>
        )}
      </>
    );
  }
};
export default ChonMonTap;
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
