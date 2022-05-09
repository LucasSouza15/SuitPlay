import {NamedInput, Button, ComboBox} from '@components/index';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';

import {ContainerBody, ContainerInputs, TitleBoxProfile} from './styles';

type Props = {
  onPressFunction: () => void;
};
const itensData = [
  {
    name: 'Fisica',
    value: '1',
  },
  {
    name: 'Jurica',
    value: '2',
  },
];

export const SecondStep: React.FC<Props> = ({onPressFunction}) => {
  const {control} = useForm();
  const [tipo, setTipo] = useState(null);
  return (
    <ContainerBody>
      <TitleBoxProfile>Agora sobre o tipo de pessoa:</TitleBoxProfile>

      <ContainerInputs>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <ComboBox
            onSelectValue={setTipo}
            text="Tipo de Pessoa"
            width={250}
            items={[
              {label: 'Fisica', value: '1'},
              {label: 'Jurico', value: '2'},
            ]}
            // items={itensData.map(item => {
            //   return {
            //     label: item.name,
            //     value: item.value,
            //   };
            // })}
          />
          <NamedInput
            control={control}
            name="cpf"
            hint="CPF"
            placeholder="000.000.000-01"
          />
          <NamedInput
            control={control}
            name="naturalidade"
            hint="Naturalidade"
            placeholder="Cidade"
          />
          <NamedInput
            control={control}
            name="nacimento"
            hint="Data de Nacimento"
            placeholder="DD/MM/AAAA"
          />
          <NamedInput
            control={control}
            name="TipoDoc"
            hint="Tipo de Documento"
          />
          <NamedInput
            control={control}
            name="OrgExpeditor"
            hint="Orgão Expeditor"
            placeholder="SSP"
          />
          <NamedInput
            control={control}
            name="NumeroDocumento"
            hint="Número do documento"
            placeholder="0000000"
          />
          <NamedInput
            control={control}
            name="DataExpedicao"
            hint="Data de Expedição"
            placeholder="DD/MM/AAAA"
          />
        </View>
      </ContainerInputs>

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
