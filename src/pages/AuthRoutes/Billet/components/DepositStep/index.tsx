import React from 'react';
import {useForm} from 'react-hook-form';
import {NamedInput, Button} from '@components/index';
import {Container, ContainerButton} from './styles';

import {BilletStep, useBillet} from '../../../../../contexts/BilletContext';

export const DepositStep: React.FC = () => {
  const {control} = useForm();
  const {setBilletStep} = useBillet();

  return (
    <>
      <Container>
        <NamedInput control={control} name="value" hint="Valor" />
        <NamedInput control={control} name="dueDate" hint="Vencimento" />
        <NamedInput control={control} name="description" hint="Descrição" />
      </Container>

      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={() => setBilletStep(BilletStep.Report)}
          title="Gerar boleto"
        />
      </ContainerButton>
    </>
  );
};
