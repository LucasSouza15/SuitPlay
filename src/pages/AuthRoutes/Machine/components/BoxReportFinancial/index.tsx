import React from 'react';
import {
  BoxLeft,
  BoxRight,
  Container,
  ContainerRow,
  TextBox,
  TitleBox,
} from './styles';

export const BoxReportFinancial: React.FC = () => {
  return (
    <>
      <Container>
        <TitleBox>Relatório Financeiro</TitleBox>
        <ContainerRow>
          <BoxLeft>
            <TextBox style={{fontSize: 16}}>Valor Pago</TextBox>
            <TextBox style={{fontSize: 16}}>Valor A Receber</TextBox>
            <TextBox style={{fontSize: 16}}>Valor Rejeitado</TextBox>
          </BoxLeft>

          <BoxRight>
            <TextBox>R$ 1.921,00</TextBox>
            <TextBox>R$ 5.020,00</TextBox>
            <TextBox>R$ 1.200,00</TextBox>
          </BoxRight>
        </ContainerRow>
      </Container>
    </>
  );
};
