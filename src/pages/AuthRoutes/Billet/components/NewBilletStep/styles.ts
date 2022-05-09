import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 309px;
  height: auto;

  min-height: 100px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  top: -30px;

  align-items: center;

  padding: 10px 10px 10px 10px;
`;


export const ContainerButton = styled.View`
  width: 100%;
  
  align-items: center;

  margin-top: ${Dimensions.get('screen').height * 0.05}px;
`;