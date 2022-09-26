import styled from "styled-components/native";
import { TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled.View`
  margin-bottom: 17px;
`;

export const Label = styled.Text`
  font-family: "Rubik_400Regular";
  font-size: 15px;
  color: #888d97;
  margin-bottom: 7px;
`;

export const Error = styled.Text`
  color: #e83f5b;
  margin-bottom: 4px;
  font-family: "Rubik_300Light";
  font-size: 13px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  border: 1px #e3e4e5;
  padding: 0 20px;
  border-radius: 4px;
  height: 56px;
  width: 100%;
`;

export const FormInput = styled(TextInput)`
  color: #3d434d;
  font-size: 15px;
  flex: 1;
  height: 100%;
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: "#888D97",
})`
  opacity: 0.6;
`;
