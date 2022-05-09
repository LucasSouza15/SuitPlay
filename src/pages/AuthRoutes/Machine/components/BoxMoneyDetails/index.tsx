import React from 'react';
import {View} from 'react-native';
import {
  Container,
  IconBox,
  MoneyValueBox,
  RowMoneyValue,
  TextBox,
  TextBoxMedio,
  TotalTransactionsBox,
  Value,
} from './styles';

interface Props {
  grossAmount: number;
  netAmount: number;
  totalTransactions: number;
}

export const BoxMoneyDetails: React.FC = () => {
  return (
    <Container>
      <View>
        <MoneyValueBox>
          <TextBox>Valor Bruto</TextBox>
          <RowMoneyValue>
            <IconBox
              source={require('../../../../../assets/icons/icon-bank.png')}
            />
            <Value>R$ 2.000,00</Value>
          </RowMoneyValue>
        </MoneyValueBox>

        <MoneyValueBox>
          <TextBox>Valor Líquido</TextBox>
          <RowMoneyValue>
            <IconBox
              source={require('../../../../../assets/icons/icon-money.png')}
            />
            <Value>R$ 1.092,00</Value>
          </RowMoneyValue>
        </MoneyValueBox>
      </View>
      <TotalTransactionsBox>
        <IconBox
          source={require('../../../../../assets/icons/icon-refresh.png')}
        />
        <View style={{marginTop: 20}} />
        <TextBox>Total de Transações</TextBox>
        <TextBoxMedio>6</TextBoxMedio>
      </TotalTransactionsBox>
    </Container>
  );
};
