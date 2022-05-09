import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, NamedInput} from '@components/index';
import {ContainerButton, TableImage, TextPage, TitlePageStep} from './styles';
import {
  MachineRequestStep,
  useMachineRequest,
} from '../../../../../contexts/MachineRequestContext';

export const MachineRequestStepThree: React.FC = () => {
  const {control} = useForm();
  const {setCurrentStep} = useMachineRequest();

  return (
    <>
      <TitlePageStep>Essas são suas taxas</TitlePageStep>
      <TableImage source={require('../../../../../assets/TabelaTaxas.png')} />
      <TextPage>Agora nos diga quantas máquinas você irá precisar</TextPage>
      <NamedInput
        hint="Numero de máquinas"
        control={control}
        name="numberMachine"
      />
      <ContainerButton>
        <Button
          style={{
            width: 300,
            height: 30,
          }}
          title="Próximo"
          onPress={() => setCurrentStep(MachineRequestStep.Quaternary)}
        />
      </ContainerButton>
    </>
  );
};
