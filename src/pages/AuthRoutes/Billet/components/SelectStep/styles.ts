import styled from 'styled-components/native';

export const ContainerBox = styled.View`
  width: 327px;
  height: 206px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 20px 10px 10px 20px;
`;

export const TitleBox = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.bold};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

export const RowTextBox = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TextBox = styled.Text`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  /* identical to box height */

  color: #252422;
`;
