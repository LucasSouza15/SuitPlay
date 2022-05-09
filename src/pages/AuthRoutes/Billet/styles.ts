import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 75%;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  line-height: 30.24px;
  font-weight: 300 bold;
  color: rgba(255, 255, 255, 1);
  font-family: ${({theme}) => theme.fonts.semiBold};
  margin-bottom: 10px;
`;

export const ContainerImageLeft = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 5px;
`;

export const LeftImage = styled.Image``;

export const ContainerBody = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;
