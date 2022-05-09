import React from 'react';
import {ContainerButton, TextPageStep} from './styles';
import {Button} from '@components/index';

export const MachineRequestStepFinal: React.FC = () => {
  return (
    <>
      <TextPageStep>O resumo do seu pedido</TextPageStep>
      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={() => {}}
          title="Contratar"
        />
      </ContainerButton>
    </>
  );
};
