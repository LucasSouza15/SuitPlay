import styled from 'styled-components/native';
import {PIcon} from '@components/index';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const BoxRecipientData = styled.View`
  width: 309px;
  height: 103px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  top: -30px;

  flex-direction: row;
`;

export const BoxIcon = styled.View`
  width: 100px;
  height: 103px;

  align-items: center;
  justify-content: center;

  padding-top: 20px;
`;

export const BoxData = styled.View`
  width: 189px;
  height: 103px;
`;

export const ContainerIcon = styled.View`
  width: 50px;
  height: 50px;
`;

export const Icon = styled(PIcon)``;

export const TitleBox = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;

  color: rgba(138, 138, 138, 0.9);

  margin-top: 10px;

  left: -20px;
`;

export const TextBox = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #252422;
`;

export const ContainerButton = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: ${Dimensions.get('screen').height * 0.2}px;
`;
