import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../../../Asset/img.jpg";
import "antd/dist/antd.css";
import egg from "../../../../../Asset/egg.jpg";
import muttao from "../../../../../Asset/muttao.jpg";
import suaitbeo from "../../../../../Asset/suaitbeo.jpg";
import saladga from "../../../../../Asset/saladga.jpg";
import rauchanvit from "../../../../../Asset/rauchanvit.jpg";
import ga from "../../../../../Asset/thitga.jpg";
import dauden from "../../../../../Asset/dauden.jpg";
import banhmi from "../../../../../Asset/ngucocngucoc.jpg";
import phomai from "../../../../../Asset/cheese.jpg";
import cahoi from "../../../../../Asset/philecahoi.jpg";
import gaolut from "../../../../../Asset/gaolut.jpg";
import dua from "../../../../../Asset/dua.jpg";

import { Button, Checkbox } from "antd";
import Food14 from "../Food14";
const Food13 = () => {
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
      {localStorage.setItem("days", "13")}
      {finishDay3 ? (
        <Food14 />
      ) : (
        <div>
          <h2>Ngày 13</h2>
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
                    src={egg}
                    alt="food1"
                  />
                  <TitleContent>
                    <div>2 trứng</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={muttao}
                    alt="food1"
                  />
                  <div>2 thìa mứt táo</div>
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
                    src={saladga}
                    alt="food1"
                  />
                  <TitleContent>
                    <b> Salad gà</b>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={rauchanvit}
                    alt="food1"
                  />
                  <div>1 mớ rau chân vịt</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={ga}
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
                    src={dauden}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 1/4 bát đậu đen</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={banhmi}
                    alt="food1"
                  />
                  <div> 2 bánh lúa mì nguyên cám</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={phomai}
                    alt="food1"
                  />
                  <div>2 muỗng phô mai ít béo</div>
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
                    src={cahoi}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 130g cá hồi phi lê</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={gaolut}
                    alt="food1"
                  />
                  <div>1/2 bát gạo lức</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={dua}
                    alt="food1"
                  />
                  <div>4 lát dứa</div>
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
export default Food13;
