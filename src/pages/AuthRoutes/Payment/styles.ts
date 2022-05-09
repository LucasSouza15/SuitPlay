import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 100px;

  align-items: center;

  top: -20px;
`;

export const TitleHeader = styled.Text`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #ffffff;
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const BarCodeBox = styled.View`
  width: 327px;
  height: 91px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  top: -30px;

  padding: 10px 10px 10px 10px;
`;

export const TextBox = styled.Text`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: rgba(88, 87, 87, 0.9);
`;

export const ButtonCodeReader = styled.TouchableOpacity`
  width: 178px;
  height: 34px;

  background: #8a8a8a;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  flex-direction: row;

  right: -${Dimensions.get('window').width / 5}px;
`;

export const IconButton = styled.Image`
  margin-right: 15px;
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* line-height: 18px; */
  text-align: center;

  color: #ffffff;
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;