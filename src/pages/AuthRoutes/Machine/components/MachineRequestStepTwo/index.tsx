import React from 'react';
import {
  useMachineRequest,
  MachineRequestStep,
} from '../../../../../contexts/MachineRequestContext';

import {Button, NamedInput} from '@components/index';
import {
  ContainerButton,
  MachineImage,
  SecondTextStep,
  TitleTextStep,
} from './styles';
import {useForm} from 'react-hook-form';

export const MachineRequestStepTwo: React.FC = () => {
  const {setCurrentStep} = useMachineRequest();

  const {control, handleSubmit} = useForm();

  return (
    <>
      <TitleTextStep>
        Primeiro nos diga qual a média de faturamento do seu negócio
      </TitleTextStep>
      <NamedInput
        control={control}
        name="faturamento"
        hint="Faturamento Médio"
      />

      <SecondTextStep>
        Agora nos diga qual a maquininha de sua preferencia
      </SecondTextStep>
      <NamedInput
        control={control}
        name="faturamento"
        hint="Modelo da máquina"
      />

      <MachineImage source={require('../../../../../assets/machine-two.png')} />

      <ContainerButton>
        <Button
          style={{
            width: 300,
            height: 30,
          }}
          title="Próximo"
          onPress={() => setCurrentStep(MachineRequestStep.Tertiary)}
        />
      </ContainerButton>
    </>
  );
};
