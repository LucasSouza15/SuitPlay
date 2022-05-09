import React from 'react';
import {useForm} from 'react-hook-form';
import {Container, ContrainerButton} from './styles';
import {Button, NamedInput} from '@components/index';

type PaymentFormStepProps = {
  returnStep?: () => void;
};

export const PaymentFormStep: React.FC<PaymentFormStepProps> = ({
  returnStep,
}) => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    if (returnStep) {
      returnStep();
    }
  };

  return (
    <>
      <Container>
        <NamedInput name="value" control={control} hint="Valor" />
        <NamedInput name="recipient" control={control} hint="Beneficiário" />
        <NamedInput name="document" control={control} hint="CPF/CNPJ" />
        <NamedInput name="dueDate" control={control} hint="Vencimento" />
        <NamedInput
          name="financialInstitution"
          control={control}
          hint="Instituição Financeira"
        />
      </Container>

      <ContrainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={handleSubmit(onSubmit)}
          title="Pagar"
        />
      </ContrainerButton>
    </>
  );
};
