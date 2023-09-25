import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  flex: 1;
  height: 100vh;
`;

export const SubContainer = styled.View`
  padding: 20px;
`;

export const Div = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: "Roboto-Bold";
  font-size: 20px;
`;

export const ViewFiles = styled.ScrollView`
  /* padding: 20px; */
  margin-bottom: 180px;
`;
