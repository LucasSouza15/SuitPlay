import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button, NamedInput} from '@components/index';
import {Container, ContainerButton} from './styles';

import {BilletStep, useBillet} from '../../../../../contexts/BilletContext';

enum Step {
  StepPrincipal,
  StepAddress,
}

export const NewBilletStep: React.FC = () => {
  const {control} = useForm();
  const {setBilletStep} = useBillet();

  const [step, setStep] = useState(Step.StepPrincipal);

  const handleNextStep = () => {
    if (step === Step.StepPrincipal) {
      setStep(Step.StepAddress);
      return;
    }

    setBilletStep(BilletStep.Report);
  };

  return (
    <>
      <Container>
        {step === Step.StepPrincipal ? (
          <>
            <NamedInput control={control} hint="Valor" name="value" />
            <NamedInput control={control} hint="Vencimento" name="dueDate" />
            <NamedInput control={control} hint="Descrição" name="description" />
            <NamedInput
              control={control}
              hint="Beneficiario"
              name="beneficiary"
            />
            <NamedInput control={control} hint="CPF/CNPJ" name="document" />
          </>
        ) : (
          <>
            <NamedInput control={control} hint="CEP" name="value" />
            <NamedInput control={control} hint="Longadouro" name="dueDate" />
            <NamedInput
              control={control}
              hint="Complemento"
              name="description"
            />
            <NamedInput control={control} hint="Bairro" name="beneficiary" />
            <NamedInput control={control} hint="Cidade" name="document" />
            <NamedInput control={control} hint="Estado" name="document" />
          </>
        )}
      </Container>

      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={handleNextStep}
          title={step === Step.StepPrincipal ? 'Próximo' : 'Gerar Boleto'}
        />
      </ContainerButton>
    </>
  );
};
