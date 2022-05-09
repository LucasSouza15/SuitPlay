import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const ContainerReport = styled.View`
  width: 327px;
  height: 450px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  top: -30px;
`;

export const ContainerButton = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${Dimensions.get('screen').height * 0.01}px;
`;
