import {NamedInput, Button} from '@components/index';
import React from 'react';
import {useForm} from 'react-hook-form';

import {ContainerBody, TitleBoxProfile} from './styles';

type Props = {
  onPressFunction: () => void;
};

export const PrimaryStep: React.FC<Props> = ({onPressFunction}) => {
  const {control} = useForm();

  return (
    <ContainerBody>
      <TitleBoxProfile>Primeiro, seus dados</TitleBoxProfile>
      <NamedInput
        control={control}
        name="username"
        hint="Usuario"
        placeholder="Usuario"
      />
      <NamedInput
        control={control}
        name="email"
        hint="Email"
        placeholder="Email"
      />
      <NamedInput
        control={control}
        name="NomeCompleto"
        hint="Nome Completo"
        placeholder="Nome Completo"
      />
      <NamedInput
        control={control}
        name="celular"
        hint="Celular"
        placeholder="Celular"
      />
      <Button
        style={{
          height: 30,
          width: 320,
          position: 'absolute',
          bottom: 0,
        }}
        title="Próximo"
        onPress={onPressFunction}
      />
    </ContainerBody>
  );
};
