import styled from "styled-components/native";

export const ContainerList = styled.View`
  border: 1px solid #7e21f4;
  width: 100%;
  height: 80px;
  border-radius: 13px;
  margin: 10px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

export const SubContainerList = styled.View`
  flex-direction: row;
`;

// export const Img = styled.Image``;
export const Img = styled.View`
  height: 45px;
  width: 45px;
  background-color: #fff;
  border-radius: 50px;
  margin: 0 10px 0 0;
`;

export const Div = styled.View``;

export const Text = styled.Text`
  color: ${({ color }: any) => (color ? color : "#fff")};
  font-size: ${({ size }: any) => (size ? size : "10px")};
  font-family: "Roboto-Bold";
  max-width: 230px;
`;
