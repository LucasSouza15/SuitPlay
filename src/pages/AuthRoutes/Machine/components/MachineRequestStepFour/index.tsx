import React from 'react';
import {useForm} from 'react-hook-form';
import {NamedInput, Button} from '@components/index';
import {ContainerButton, TextPageStep} from './styles';
import {
  useMachineRequest,
  MachineRequestStep,
} from '../../../../../contexts/MachineRequestContext';

export const MachineRequestStepFour: React.FC = () => {
  const {control} = useForm();
  const {setCurrentStep} = useMachineRequest();

  return (
    <>
      <TextPageStep>
        Para qual endereço devemos enviar sua nova maquininha
      </TextPageStep>
      <NamedInput control={control} hint="CEP" name="zipCode" />
      <NamedInput control={control} hint="Longadouro" name="street" />
      <NamedInput control={control} hint="Complemento" name="complement" />
      <NamedInput control={control} hint="Bairro" name="district" />
      <NamedInput control={control} hint="Cidade" name="city" />
      <NamedInput control={control} hint="Estado" name="state" />
      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          title="próximo"
          onPress={() => setCurrentStep(MachineRequestStep.Final)}
        />
      </ContainerButton>
    </>
  );
};
