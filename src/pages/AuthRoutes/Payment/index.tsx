import React, {useState} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  BarCodeBox,
  ButtonCodeReader,
  ContainerBody,
  ContainerButton,
  ContainerHeader,
  IconButton,
  TextBox,
  TextButton,
  TitleHeader,
} from './styles';
import {BalanceWrapper} from './components/BalanceWrapper';
import {Input} from './components/Input';
import {useForm} from 'react-hook-form';
import {Button} from '@components/index';
import {PaymentFormStep} from './components/PaymentFormStep';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

enum PaymentStep {
  BarCodeScanner,
  PaymentForm,
}

function Payment() {
  const [step, setStep] = useState<PaymentStep>(PaymentStep.BarCodeScanner);

  const [visibleBalance, setVisibleBalance] = useState(false);
  const handleShowBalance = () => setVisibleBalance(state => !state);

  const {control} = useForm();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <ContainerHeader>
          <TitleHeader>Pagamento</TitleHeader>

          <BalanceWrapper
            visibleBalance={visibleBalance}
            handleShowBalance={handleShowBalance}
          />
        </ContainerHeader>
      </ImageBackground>
      <ContainerBody>
        {step === PaymentStep.BarCodeScanner ? (
          <>
            <BarCodeBox>
              <TextBox>Informe o código de barras</TextBox>
              <Input
                control={control}
                name="barcode"
                hint="Informe o código de barras"
              />
            </BarCodeBox>

            <ButtonCodeReader>
              <IconButton
                source={require('../../../assets/icons/camera.png')}
              />
              <TextButton>Leitor de código</TextButton>
            </ButtonCodeReader>

            <ContainerButton>
              <Button
                style={{
                  width: 300,
                  height: 30,
                }}
                title="Validar"
                onPress={() => setStep(PaymentStep.PaymentForm)}
              />
            </ContainerButton>
          </>
        ) : (
          <PaymentFormStep
            returnStep={() => setStep(PaymentStep.BarCodeScanner)}
          />
        )}
      </ContainerBody>
    </>
  );
}

export default Payment;
