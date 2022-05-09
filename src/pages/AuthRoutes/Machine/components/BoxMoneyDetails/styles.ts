import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  top: -15px;
`;

export const MoneyValueBox = styled.View`
  width: 203px;
  height: 73px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 10px 10px 17px;
  margin-bottom: 20px;
`;

export const TextBox = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #252422;

  margin-bottom: 10px;
`;

export const RowMoneyValue = styled.View`
  flex-direction: row;
`;

export const IconBox = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  color: #252422;

  margin-left: 20px;
  margin-top: 5px;
`;

export const TextBoxMedio = styled.Text`
  width: 33px;
  height: 62.66px;

  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;

  color: #252422;
`;

export const TotalTransactionsBox = styled.View`
  width: 106px;
  height: 165px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin: 0px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
`;
