import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../../../Asset/img.jpg";
import banana from "../../../../../Asset/banana.jpg";
import suayen from "../../../../../Asset/yenmachyenmach.jpg";
import nhokho from "../../../../../Asset/nhokho.jpg";
import sanwich from "../../../../../Asset/sanwichga.jpg";
import taoxanh from "../../../../../Asset/taoxanh.jpg";
import banhquy from "../../../../../Asset/cookieookie.jpg";
import ngucoc from "../../../../../Asset/ngucocngucoc.jpg";
import nuoccam from "../../../../../Asset/nuoccam.jpg";
import ucga from "../../../../../Asset/ucga.jpg";
import khoailang from "../../../../../Asset/khoailang.jpg";
import sua from "../../../../../Asset/suaitbeo.jpg";

import "antd/dist/antd.css";
import { Button, Checkbox } from "antd";
import Food8 from "../Food8";
const Food7 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [finishDay1, setFinishDay1] = useState(false);
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
      {localStorage.setItem("days", "7")}
      {finishDay1 ? (
        <Food8 />
      ) : (
        <div>
          <h2>Ngày 7</h2>
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
                    src={banana}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 1 quả chuối chín</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={suayen}
                    alt="food1"
                  />
                  <div> sữa yến mạch nấu chín</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={nhokho}
                    alt="food1"
                  />
                  <div> 2 muỗng nho khô</div>
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
                    src={sanwich}
                    alt="food1"
                  />
                  <TitleContent>
                    <b>Sanwich gà </b>
                    <div> 4 lát gà hấp bia </div>
                    <div> 2 lát bánh mì nguyên hạt</div>
                    <div> 1 thìa mù tạt+ 2 lát cà chua</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={taoxanh}
                    alt="food1"
                  />
                  <div> 1 quả táo xanh</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={banhquy}
                    alt="food1"
                  />
                  <div> 2 miếng bánh quy + nửa cốc nước ép cà rốt</div>
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
                    <div> 2 Thanh ngũ cốc</div>
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
                    src={Img1}
                    alt="food1"
                  />
                  <div>Món tùy chọn</div>
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
                    src={ucga}
                    alt="food1"
                  />
                  <TitleContent>
                    <div> 130g ức gà luộc</div>
                  </TitleContent>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={khoailang}
                    alt="food1"
                  />
                  <div>1 củ khoai lang nướng</div>
                </Content1>
                <Content1>
                  <img
                    style={{ width: "50%", height: "50%", marginRight: "50px" }}
                    src={sua}
                    alt="food1"
                  />
                  <div>1 cốc sữa ít béo</div>
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
              <BtnFood onClick={() => setFinishDay1(true)}>
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
  width: 150px;
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
  margin: 30px 30px;
`;
const TitleContent = styled.div``;
export default Food7;
