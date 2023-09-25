import styled from "styled-components/native";
import { StatusBar } from "react-native";

interface PROPS {
  $font: string;
}

export const HeaderCP = styled.View`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + "px" : 0};
`;

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  gap: 15px;
`;

export const Text = styled.Text`
  font-family: ${(props: PROPS) =>
    props.$font ? props.$font : "Roboto-Regular"};
  color: #fff;
`;

export const Div = styled.View`
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
`;

export const Avatar = styled.View`
  width: 64px;
  height: 64px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #220f3b;
  border-radius: 50px;
`;
