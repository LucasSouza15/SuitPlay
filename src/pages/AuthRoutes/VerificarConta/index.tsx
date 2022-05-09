import {Button, KeyboardShift, NamedInput} from '@components/index';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '@hooks/auth';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {ContainerBody, TitlePage} from './styles';
import {PrimaryStep} from './components/PrimaryStep';
import {SecondStep} from './components/SecondPage';
import {TerciaryStep} from './components/TerciaryPage';
import {FinalStep} from './components/Final';
import {ScrollView} from 'react-native';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 20px;
  padding-right: 20px;
`;

enum StepPage {
  PrimaryPage,
  SecondPage,
  TerciaryPage,
  FinalStep,
}

const VerificarConta: React.FC = ({children}) => {
  const {user} = useAuth();

  const [stepPage, setStepPage] = useState(StepPage.PrimaryPage);

  function handleStep() {
    switch (stepPage) {
      case StepPage.SecondPage:
        return (
          <SecondStep
            onPressFunction={() => setStepPage(StepPage.TerciaryPage)}
          />
        );
      case StepPage.TerciaryPage:
        return (
          <TerciaryStep
            onPressFunction={() => setStepPage(StepPage.FinalStep)}
          />
        );
      case StepPage.FinalStep:
        return (
          <FinalStep
            onPressFunction={() => setStepPage(StepPage.PrimaryPage)}
          />
        );
      default:
        return (
          <PrimaryStep
            onPressFunction={() => setStepPage(StepPage.SecondPage)}
          />
        );
    }
  }

  return (
    <>
      <KeyboardShift>
        <ImageBackground
          resizeMode="cover"
          source={require('@assets/images/fundo.png')}>
          <TitlePage>Verificar Conta</TitlePage>
        </ImageBackground>
        <ContainerBody>{handleStep()}</ContainerBody>
      </KeyboardShift>
    </>
  );
};

export default VerificarConta;
