import React, {useState} from 'react';

import * as Yup from 'yup';

import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Container, ContainerButton} from './styles';
import {Button, ComboBox, LoadingView, NamedInput} from '@components/index';

import {useDropDown} from '@hooks/dropdown';
import {useBanksContext} from '../../../../../contexts/BanksContext';
import {
  TransferMainDataProps,
  TransferStep,
  useTransferContext,
} from '../../../../../contexts/TransferContext';

import {ValidMainData} from '../Validations';

enum TextType {
  DOCUMENT,
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  document: Yup.string().required('O CPF/CNPJ é obrigatório'),
  bank: Yup.string().required('O numero do banco é obrigatório'),
  agency: Yup.string().required('A agência é obrigatória'),
  account: Yup.string().required('O numero da conta é obrigatório'),
  digit: Yup.string().required('O dígito da conta é obrigatório'),
  typeAccount: Yup.string().required('O tipo da conta é obrigatório'),
});

const TypeAccount = [
  {
    label: 'Conta Corrente',
    value: 'CC',
  },
  {
    label: 'Conta Poupança',
    value: 'CP',
  },
];

const regexDocument =
  /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

export const MainDataStep: React.FC = () => {
  const [bankNumber, setBankNumber] = useState('');
  const [typeAccont, setTypeAccont] = useState(TypeAccount[0].value);

  //@ts-ignore
  const {ref} = useDropDown();
  const {loadingBanks, banks} = useBanksContext();
  const {setTransferStep, setMainData} = useTransferContext();

  const {control, handleSubmit} = useForm();

  const handleSubmitForm = (data: any) => {
    const resultValidation = ValidMainData(data);

    if (!resultValidation.status) {
      const {typeError, title, message} = resultValidation;
      ref.current.alertWithType(typeError, title, message);

      return;
    }

    const {account, agency, digit, document, name} =
      data as TransferMainDataProps;

    setMainData({
      account,
      agency,
      digit,
      document,
      name,
      typeAccount: typeAccont,
      bank: bankNumber,
    });

    setTransferStep(TransferStep.TransferValue);
  };

  if (loadingBanks) {
    return <LoadingView />;
  }

  return (
    <>
      <Container>
        <NamedInput control={control} name="name" hint="Nome" />
        <NamedInput
          control={control}
          name="document"
          hint="CPF/CNPJ"
          TypeText={TextType.DOCUMENT}
        />
      </Container>

      <View style={{top: -20}}>
        <ComboBox
          onSelectValue={setBankNumber}
          text="Banco"
          width={310}
          items={banks.map(bank => ({
            label: `${bank.strCode} - ${bank.name}`,
            value: bank.strCode,
          }))}
        />

        <View style={{flexDirection: 'row'}}>
          <NamedInput
            control={control}
            name="agency"
            hint="Agencia"
            width={190}
          />
          <View style={{width: 10}} />
          <NamedInput
            control={control}
            name="digit"
            hint="Digito"
            width={104}
          />
        </View>
        <NamedInput
          control={control}
          name="account"
          hint="Complemento"
          width={310}
        />

        <ComboBox
          onSelectValue={value => setTypeAccont(value)}
          text="Tipo de Conta"
          width={310}
          items={TypeAccount}
        />
      </View>

      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={handleSubmit(handleSubmitForm)}
          title="Informar Valor"
        />
      </ContainerButton>
    </>
  );
};
