import React from 'react';
import {View} from 'react-native';
import {ReactangleButton} from '@components/index';
import {ContainerBox, RowTextBox, TextBox, TitleBox} from './styles';

import {BilletStep, useBillet} from '../../../../../contexts/BilletContext';

export const SelectStep: React.FC = () => {
  const {setBilletStep} = useBillet();

  return (
    <>
      <View style={{top: -25}}>
        <ReactangleButton
          buttonText="Fazer novo depósito"
          functionOnPress={() => setBilletStep(BilletStep.NewDeposit)}
          icon="boleto"
        />
      </View>
      <View style={{top: -25}}>
        <ReactangleButton
          buttonText="Emitir novo boleto"
          functionOnPress={() => setBilletStep(BilletStep.NewBillet)}
          icon="boleto"
        />
      </View>

      <ContainerBox>
        <TitleBox>Relatório Boletos</TitleBox>

        <RowTextBox>
          <TextBox>Boletos Pagos</TextBox>
          <View style={{width: 74}} />
          <TextBox style={{fontSize: 19}}>R$ 1.920,00</TextBox>
        </RowTextBox>
        <RowTextBox>
          <TextBox>Boletos Pendentes</TextBox>
          <View style={{width: 41}} />
          <TextBox style={{fontSize: 19}}>R$ 5.020,00</TextBox>
        </RowTextBox>
        <RowTextBox>
          <TextBox>Boletos Venc. E Canc.</TextBox>
          <View style={{width: 18}} />
          <TextBox style={{fontSize: 19}}>R$ 1.200,00</TextBox>
        </RowTextBox>
      </ContainerBox>
    </>
  );
};
