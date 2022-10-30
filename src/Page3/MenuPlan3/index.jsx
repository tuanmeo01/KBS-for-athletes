import React, { useState } from "react";
import styled from "styled-components";
import Plan1 from "../../Page1/MenuPlan1/Plan1/index";
import Plan2 from "../../Page2/MenuPlan2/Plan2/index";
import Plan3 from "../../Page3/MenuPlan3/Plan3/index";

const MenuPlan3 = (props: any) => {
  const weight = props.weight;
  const height = props.height / 100;
  const BMI = Math.round((weight / (height * height)) * 100) / 100;
  const [plan1, setPlan1] = useState(false);
  const [plan2, setPlan2] = useState(false);
  const [plan3, setPlan3] = useState(false);

  return (
    <>
      {plan1 ? (
        <Plan1 />
      ) : plan2 ? (
        <Plan2 />
      ) : plan3 ? (
        <Plan3 />
      ) : (
        <ContainMenu>
          <Title>
            <h2>Chỉ số BMI hiện tại của bạn là: {BMI}</h2>
            {BMI <= 18.5 ? (
              <>
                <div>Gay</div>
                <Suggest>
                  <ul>
                    Phân tích từ cơ thể bạn:
                    <li>
                      Lượng Carbohydrates cần thiết cho cơ thể bạn là :{" "}
                      {10 * weight}g 7-10g/kg/ngày
                    </li>
                    <li>
                      Lượng Protein cần thiết cho cơ thể bạn là : {2 * weight}g
                      1.2-2g/kg/ngày
                    </li>
                    <li>
                      Lượng chất béo (Fats) cần thiết cho cơ thể bạn là :
                      75g/ngày (Không quá 30% năng lượng)
                    </li>
                    <li>
                      Hidrat hóa và chất điện giải : bạn có thể mất 6-10% trọng
                      lượng nước do việc dổ mồ hôi, nên bạn cần bổ sung đủ 4-6
                      ounces mỗi 15p tập luyện.
                    </li>
                    Lời khuyên dành cho bạn
                    <li>loiwf khuyen 1</li>
                    <li>loiwf khuyen 1</li>
                    <li>loiwf khuyen 1</li>
                    <li>loiwf khuyen 1</li>
                  </ul>
                </Suggest>
                <BtnFood
                  onClick={() => {
                    setPlan1(true);
                  }}
                >
                  Đi đến bữa ăn dành cho bạn
                </BtnFood>
              </>
            ) : BMI >= 30 ? (
              <>
                <div>Beo</div>
                <Suggest>loi khuyen</Suggest>
                <BtnFood
                  onClick={() => {
                    setPlan3(true);
                  }}
                >
                  Đi đến bữa ăn dành cho bạn
                </BtnFood>
              </>
            ) : (
              <>
                <div>Binh thuong</div>
                <Suggest>loi khuyen</Suggest>
                <BtnFood
                  onClick={() => {
                    setPlan2(true);
                  }}
                >
                  Đi đến bữa ăn dành cho bạn
                </BtnFood>
              </>
            )}
          </Title>
        </ContainMenu>
      )}
    </>
  );
};
const ContainMenu = styled.div`
  padding: 50px 50px;
`;
const Title = styled.div``;
const Suggest = styled.div`
  padding: 50px 50px;
  li {
    margin-left: 30px;
  }
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
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    background: #9b2259;
  }
`;
export default MenuPlan3;
