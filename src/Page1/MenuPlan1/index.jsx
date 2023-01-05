import React, { useState } from "react";
import styled from "styled-components";
import Plan1_gay from "./Plan1_Gay";
import Plan1Normal from "./Plan1_binh_thuong";
import Plan1Beo from "./Plan1_beo";
import Icon_back from "../../Asset/arrow-narrow-left.svg";
import "../../components/index.css";

const MenuPlan1 = (props) => {
  const weight = props.weight; // cân nặng
  const height = props.height / 100; // chiều cao
  const BMI = Math.round((weight / (height * height)) * 100) / 100;
  const [plan1, setPlan1] = useState(false);
  const [plan2, setPlan2] = useState(false);
  const [plan3, setPlan3] = useState(false);

  return (
    <>
      {plan1 ? (
        <Plan1_gay setPlan1={setPlan1} />
      ) : plan2 ? (
        <Plan1Normal setPlan2={setPlan2} />
      ) : plan3 ? (
        <Plan1Beo setPlan3={setPlan3} />
      ) : (
        <ContainMenu className=" slide-in-blurred-top">
          <Title>
            <img
              style={{ cursor: "pointer" }}
              src={Icon_back}
              alt="backIcon"
              onClick={() => props.setOnClickSubmit(false)}
            ></img>
            <h2>Chỉ số BMI hiện tại của bạn là: {BMI}</h2>
            {BMI <= 18.5 ? ( //gay
              <>
                {localStorage.setItem("thetrang", "gay")}
                <div>
                  Theo như chiều cao và cân nặng của bạn, chúng tôi đã tính ra
                  được BMI của bạn là {BMI}, bạn đang ở mức độ gầy
                </div>
                <Suggest>
                  <ul>
                    Phân tích từ cơ thể bạn:
                    <li>
                      Lượng Carbohydrates cần thiết cho cơ thể bạn là :{" "}
                      {10 * weight}g 10g/kg/ngày{" "}
                      {/* lượng carb người gầy cần nạp trong ngày */}
                    </li>
                    <li>
                      Lượng Protein cần thiết cho cơ thể bạn là : {2 * weight}g
                      2g/kg/ngày
                    </li>
                    <li>
                      Lượng chất béo (Fats) cần thiết cho cơ thể bạn là :
                      {0.4 * weight}g/ngày (Không quá 30% năng lượng)
                    </li>
                    <li>
                      Hidrat hóa và chất điện giải : bạn có thể mất 6-10% trọng
                      lượng nước do việc dổ mồ hôi, nên bạn cần bổ sung đủ 4-6
                      ounces mỗi 15p tập luyện.
                    </li>
                    Lời khuyên của chúng tôi dành cho bạn
                    <li>
                      Thể trạng của bạn là gầy, bạn cần bổ sung nhiều protetin,
                      đạm, carb, chất béo...
                    </li>
                    <li>
                      Năng lượng bạn nạp vào trong ngày phải gấp 1,5 lần năng
                      lượng mà bạn tiêu thụ
                    </li>
                    <li>
                      Cần lựa chọn những thực phẩm lành mạnh, tốt cho sức khỏe
                    </li>
                    <li>Chia tỉ lệ dinh dưỡng phù hợp</li>
                    <li>Ăn ngủ đủ giấc, tránh việc thức khuya</li>
                    <li>
                      Bổ sung tinh bột từ các loại ngũ cốc, ăn các loại thịt đỏ
                      như bò, lợn , dê..., ăn nhiều rau xanh
                    </li>
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
            ) : BMI >= 30 ? ( //beo
              <>
                {localStorage.setItem("thetrang", "beo")}
                <div>
                  Theo chỉ số BMI của bạn là {BMI} thì bạn đang ở mức béo
                </div>
                <Suggest>
                  <ul>
                    Phân tích từ cơ thể bạn:
                    <li>
                      Lượng Carbohydrates cần thiết cho cơ thể bạn là :{" "}
                      {7 * weight}g 7-10g/kg/ngày
                    </li>
                    <li>
                      Lượng Protein cần thiết cho cơ thể bạn là : {1.2 * weight}
                      g 1.2-2g/kg/ngày
                    </li>
                    <li>
                      Lượng chất béo (Fats) cần thiết cho cơ thể bạn là :{" "}
                      {0.2 * weight}
                      /ngày (Không quá 30% năng lượng)
                    </li>
                    <li>
                      Hidrat hóa và chất điện giải : bạn có thể mất 6-10% trọng
                      lượng nước do việc dổ mồ hôi, nên bạn cần bổ sung đủ 4-6
                      ounces mỗi 15p tập luyện.
                    </li>
                    Lời khuyên của chúng tôi dành cho bạn
                    <li>
                      Theo chỉ số BMI thì hiện bạn đang có thể trạng người béo,
                      bạn cần tăng cường luyện tập nhiều hơn, tránh ăn những đồ
                      ăn nhiều dầu mỡ
                    </li>
                    <li>
                      Nạp năng lượng vừa đủ để có thể tập luyện và sinh hoạt
                    </li>
                    <li>Tránh ăn vặt </li>
                    <li>Ăn nhiều rau xanh</li>
                    <li>Hạn chế sử dụng bia rượu và thức khuya</li>
                  </ul>
                </Suggest>
                <BtnFood
                  onClick={() => {
                    setPlan3(true);
                  }}
                >
                  Đi đến bữa ăn dành cho bạn
                </BtnFood>
              </>
            ) : (
              //binh thuong
              <>
                {localStorage.setItem("thetrang", "binhthuong")}

                <div>
                  Theo chỉ số BMI dựa trên chiều cao và cân nặng của bạn {BMI}{" "}
                  thì bạn đang có thể trạng bình thường
                </div>
                <Suggest>
                  <ul>
                    Phân tích từ cơ thể bạn:
                    <li>
                      Lượng Carbohydrates cần thiết cho cơ thể bạn là :{" "}
                      {8 * weight}g 7-10g/kg/ngày
                    </li>
                    <li>
                      Lượng Protein cần thiết cho cơ thể bạn là : {1.7 * weight}
                      g 1.2-2g/kg/ngày
                    </li>
                    <li>
                      Lượng chất béo (Fats) cần thiết cho cơ thể bạn là :
                      67g/ngày (Không quá 30% năng lượng)
                    </li>
                    <li>
                      Hidrat hóa và chất điện giải : bạn có thể mất 6-10% trọng
                      lượng nước do việc dổ mồ hôi, nên bạn cần bổ sung đủ 4-6
                      ounces mỗi 15p tập luyện.
                    </li>
                    Lời khuyên của chúng tôi dành cho bạn
                    <li>
                      Bạn đang có thân hình cân đối, rất nhiều người mơ ước
                    </li>
                    <li>
                      Bạn cần duy trì thói quen ăn uống và sinh hoạt như hiện
                      tại
                    </li>
                    <li>
                      Bổ sung đầy đủ chất dinh dưỡng và năng lượng để có 1 ngày
                      tập luyện đầy năng lượng
                    </li>
                    <li>
                      Tránh sử dụng các chất kích thích như rượu bia, thuốc
                      lá....
                    </li>
                  </ul>
                </Suggest>
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
export default MenuPlan1;
