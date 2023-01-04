import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../../../Asset/img.jpg";
import "antd/dist/antd.css";
import taoxanh from "../../../../../Asset/taoxanh.jpg";
import vietquat from "../../../../../Asset/vietquat.jpg";
import suaitbeo from "../../../../../Asset/suaitbeo.jpg";
import ucganuong from "../../../../../Asset/ucganuong.jpg";
import rauxalach from "../../../../../Asset/rauxalach.jpg";
import thitga from "../../../../../Asset/thitga.jpg";
import yenmach from "../../../../../Asset/yenmachyenmach.jpg";
import chuoi from "../../../../../Asset/banana.jpg";
import suachua from "../../../../../Asset/suachua.jpg";
import philecahoi from "../../../../../Asset/philecahoi.jpg";
import nuoccam from "../../../../../Asset/nuoccam.jpg";

import Food20 from "../Food20";

import { Button, Checkbox } from "antd";
const Food19 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [finishDay3, setFinishDay3] = useState(false);
  const toggleChecked = () => {
    setChecked1(!checked1);
    setChecked2(!checked2);
    setChecked3(!checked3);
    setChecked4(!checked4);
  };
  const onChange1 = (e) => {
    setChecked1(e.target.checked);
  };
  const onChange2 = (e) => {
    setChecked2(e.target.checked);
  };
  const onChange3 = (e) => {
    setChecked3(e.target.checked);
  };
  const onChange4 = (e) => {
    setChecked4(e.target.checked);
  };
  const label1 = `${checked1 ? "Đã hoàn thành" : "Chưa hoàn thành"}`;
  const label2 = `${checked2 ? "Đã hoàn thành" : "Chưa hoàn thành"}`;
  const label3 = `${checked3 ? "Đã hoàn thành" : "Chưa hoàn thành"}`;
  const label4 = `${checked4 ? "Đã hoàn thành" : "Chưa hoàn thành"}`;
  return (
    <>
      {localStorage.setItem("days", "19")}
      {finishDay3 ? (
        <Food20 />
      ) : (
        <div>
          <h2>Ngày 19</h2>
          <ContainFood>
            <Morning>
              <ContainTitle>
                <h2>Bữa sáng</h2>
                <Checkbox checked={checked1} onChange={onChange1}>
                  {label1}
                </Checkbox>
              </ContainTitle>
              <ContainContent>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={taoxanh}
                    alt="food1"
                  />
                  <TitleContent>
                    <div>1 quả táo xanh</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={vietquat}
                    alt="food1"
                  />
                  <div>2/3 cốc việt quất</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={suaitbeo}
                    alt="food1"
                  />
                  <div> 1 cốc sữa ít béo</div>
                </Content1>
              </ContainContent>
            </Morning>
            <Morning>
              <ContainTitle>
                <h2>Bữa trưa</h2>
                <Checkbox checked={checked2} onChange={onChange2}>
                  {label2}
                </Checkbox>
              </ContainTitle>
              <ContainContent>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={ucganuong}
                    alt="food1"
                  />
                  <TitleContent>
                    <b>200g ức gà tây nướng</b>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={rauxalach}
                    alt="food1"
                  />
                  <div>nửa mớ rau xà lach</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={thitga}
                    alt="food1"
                  />
                  <div> 120g thịt gà nấu</div>
                </Content1>
              </ContainContent>
            </Morning>
            <Morning>
              <ContainTitle>
                <h2>Bữa chiều</h2>
                <Checkbox checked={checked3} onChange={onChange3}>
                  {label3}
                </Checkbox>
              </ContainTitle>
              <ContainContent>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={yenmach}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 1 cốc yến mạch </div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={chuoi}
                    alt="food1"
                  />
                  <div> 1 quả chuối</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={suachua}
                    alt="food1"
                  />
                  <div>1 hộp sữa chua</div>
                </Content1>
              </ContainContent>
            </Morning>
            <Morning>
              <ContainTitle>
                <h2>Bữa tối</h2>
                <Checkbox checked={checked4} onChange={onChange4}>
                  {label4}
                </Checkbox>
              </ContainTitle>
              <ContainContent>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={philecahoi}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 130g cá hồi phi lê</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={nuoccam}
                    alt="food1"
                  />
                  <div>1 cốc nước cam</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={taoxanh}
                    alt="food1"
                  />
                  <div>1 quả táo xanh</div>
                </Content1>
              </ContainContent>
            </Morning>
          </ContainFood>
          {checked1 && checked2 && checked3 && checked4 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <BtnFood onClick={() => setFinishDay3(true)}>
                Ngày tiếp theo
              </BtnFood>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <BtnFood
                style={{
                  pointerEvents: "none",
                  opacity: "50%",
                }}
              >
                Ngày tiếp theo
              </BtnFood>
            </div>
          )}
        </div>
      )}
    </>
  );
};
const ContainFood = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 50px;
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
const Morning = styled.div``;
const ContainTitle = styled.div``;
const ContainContent = styled.div``;
const Content1 = styled.div`
  display: flex;
  margin: 50px;
`;
const TitleContent = styled.div``;
export default Food19;
