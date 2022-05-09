import {NamedInput, Button, ComboBox} from '@components/index';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import {ContainerBody, TitleBoxProfile} from './styles';

type Props = {
  onPressFunction: () => void;
};

const itensSexo = [
  {
    name: 'Masculino',
    value: 'masc',
  },
  {
    name: 'Feminino',
    value: 'Femi',
  },
  {
    name: 'Prefiro não dizer',
    value: 'SemResposta',
  },
];

const EstadoCivil = [
  {
    name: 'Casado',
    value: 'casado',
  },
  {
    name: 'Solteiro',
    value: 'solteiro',
  },
  {
    name: 'Divorciado/a',
    value: 'divorciado',
  },
  {
    name: 'Viuvo/a',
    value: 'viuvo',
  },
];

export const TerciaryStep: React.FC<Props> = ({onPressFunction}) => {
  const {control} = useForm();
  const [tipo, setSexo] = useState(null);
  const [estado, setEstado] = useState(null);
  return (
    <ContainerBody>
      <TitleBoxProfile>Agora sobre o tipo de pessoa:</TitleBoxProfile>
      <ComboBox
        onSelectValue={setSexo}
        text="Tipo de Pessoa"
        width={250}
        items={itensSexo.map(item => {
          return {
            label: item.name,
            value: item.value,
          };
        })}
      />
      <ComboBox
        onSelectValue={setEstado}
        text="Tipo de Pessoa"
        width={250}
        items={EstadoCivil.map(item => {
          return {
            label: item.name,
            value: item.value,
          };
        })}
      />
      <NamedInput
        control={control}
        name="profissao"
        hint="Profissão"
        placeholder="Profissão"
      />
      <NamedInput
        control={control}
        name="NomeMae"
        hint="Nome da Mãe"
        placeholder="Nome da mãe"
      />
      <NamedInput
        control={control}
        name="NomePae"
        hint="Nome da Pai"
        placeholder="Nome da Pai"
      />
      <Button
        style={{
          height: 30,
          width: 320,
          position: 'absolute',
          bottom: 10,
          marginTop: 10,
        }}
        title="Próximo"
        onPress={onPressFunction}
      />
    </ContainerBody>
  );
};
