import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
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

export const ContainerListButtons = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;
