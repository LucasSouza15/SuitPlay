import {TextStyle} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const TextPicker = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;

  color: #252422;
`;

export const Box = styled.View`
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 5px;

  align-items: center;
  justify-content: center;

  margin-top: 5px;
`;

export const PickerBox: TextStyle = {
  height: 35,
};

export const PickerText: TextStyle = {
  fontFamily: 'Sora',
  // fontStyle: 'normal',
  // fontWeight: 400,
  fontSize: 13,
  // lineHeight: 20,
  textAlign: 'center',
  color: '#252422',
};
