import {NamedInput, Button} from '@components/index';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ContainerInputs} from '../SecondPage/styles';

import {ContainerBody, TitleBoxProfile} from './styles';

type Props = {
  onPressFunction: () => void;
};

export const FinalStep: React.FC<Props> = ({onPressFunction}) => {
  const {control} = useForm();

  return (
    <ContainerBody>
      <TitleBoxProfile>Por último seu endereço</TitleBoxProfile>
      <ContainerInputs>
        <NamedInput
          control={control}
          name="cep"
          hint="CEP"
          placeholder="00000-000"
        />
        <NamedInput
          control={control}
          name="logradouro"
          hint="Logradouro"
          placeholder="Lougradouro"
        />
        <NamedInput
          control={control}
          name="complemento"
          hint="Complemento"
          placeholder=""
        />
        <NamedInput
          control={control}
          name="bairro"
          hint="Bairro"
          placeholder="Bairro"
        />
        <NamedInput
          control={control}
          name="cidade"
          hint="Cidade"
          placeholder="Cidade"
        />
        <NamedInput
          control={control}
          name="estado"
          hint="Estado"
          placeholder="Estado"
        />
      </ContainerInputs>
      <Button
        style={{
          height: 30,
          width: 320,
          position: 'absolute',
          bottom: 10,
          marginTop: 50,
        }}
        title="Salvar Perfil"
        onPress={onPressFunction}
      />
    </ContainerBody>
  );
};
