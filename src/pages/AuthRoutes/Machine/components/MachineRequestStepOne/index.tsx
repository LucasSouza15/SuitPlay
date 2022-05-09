import React from 'react';

import {Button} from '@components/index';

import {ContainerButton, ImageMachine, TextMachine} from './styles';
import { useMachineRequest, MachineRequestStep } from '../../../../../contexts/MachineRequestContext';

export const MachineRequestStepOne: React.FC = ({}) => {
  const {setCurrentStep} = useMachineRequest();

  return (
    <>
      <TextMachine>
        Ainda não possui a melhor solução de pagamentos para seu negócio?
        Contrate agora a Maquininha de Cartão da SuitPay
      </TextMachine>
      <ImageMachine source={require('../../../../../assets/Machine.png')} />

      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          title="solicitar agora"
          onPress={() => setCurrentStep(MachineRequestStep.Secondary)}
        />
      </ContainerButton>
    </>
  );
};
