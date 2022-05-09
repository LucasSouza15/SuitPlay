import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextInput = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;

  color: #252422;
`;

export const Input = styled.TextInput`
  width: 241px;
  height: 35px;

  background: #ffffff;
  border: 1px solid #dadada;
  /* box-sizing: border-box; */
  border-radius: 5px;

  font-size: 13px;

  text-align: center;
  
  margin-top: 5px;
`;
