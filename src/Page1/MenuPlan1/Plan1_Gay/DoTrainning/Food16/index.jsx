import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../../../Asset/img.jpg";
import ngucoc from "../../../../../Asset/ngucocngucoc.jpg";
import suaitbeo from "../../../../../Asset/suaitbeo.jpg";
import suangucoc from "../../../../../Asset/yenmachyenmach.jpg";
import vietquat from "../../../../../Asset/vietquat.jpg";
import phomat from "../../../../../Asset/cheese.jpg";
import matong from "../../../../../Asset/matongatong.jpg";
import ocho from "../../../../../Asset/occhooccho.jpg";
import nuocchanh from "../../../../../Asset/lemon.jpg";
import nuocepxoai from "../../../../../Asset/nuocepxoai.jpg";
import khoaitaydo from "../../../../../Asset/khoaitaydo.jpg";
import bittetnuong from "../../../../../Asset/bittetnuong.jpg";
import salad from "../../../../../Asset/saladalad.jpg";

import "antd/dist/antd.css";
import { Button, Checkbox } from "antd";
import Food17 from "../Food17";
const Food16 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [finishDay2, setFinishDay2] = useState(false);
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
      {localStorage.setItem("days", "16")}
      {finishDay2 ? (
        <Food17 />
      ) : (
        <div>
          <h2>Ngày 16</h2>
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
                    src={suangucoc}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 2 cốc sữa ngũ cốc nguyên hạt</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={suaitbeo}
                    alt="food1"
                  />
                  <div>1 cốc sữa ít béo</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={vietquat}
                    alt="food1"
                  />
                  <div> 3/4 cốc nước việt quất</div>
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
                    src={phomat}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> Nửa bát pho mát</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={matong}
                    alt="food1"
                  />
                  <div>3 muỗng mật ong</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={ocho}
                    alt="food1"
                  />
                  <div> 1/4 bát hạt óc chó</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={nuocchanh}
                    alt="food1"
                  />
                  <div> 1 cốc nước chanh</div>
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
                    src={ngucoc}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 2 thanh ngũ cốc</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={nuocepxoai}
                    alt="food1"
                  />
                  <div>1/2 cốc nước ép xoài</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={khoaitaydo}
                    alt="food1"
                  />
                  <div> 100g khoai tây đỏ</div>
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
                    src={bittetnuong}
                    alt="food1"
                  />
                  <TitleContent>
                    <div>130g bít tết nướng</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={salad}
                    alt="food1"
                  />
                  <div>1 bát salad</div>
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
          </ContainFood>
          {checked1 && checked2 && checked3 && checked4 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <BtnFood onClick={() => setFinishDay2(true)}>
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
export default Food16;
