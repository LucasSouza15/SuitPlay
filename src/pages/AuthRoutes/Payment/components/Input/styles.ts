import styled from "styled-components/native";

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 50px;

  border-color: ${props => props.theme.colors.primary};
  border-bottom-width: 1px;
`;