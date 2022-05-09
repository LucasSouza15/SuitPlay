import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {NamedInput, Button} from '@components/index';

import {useDropDown} from '@hooks/dropdown';
import {useBanksContext} from '../../../../../contexts/BanksContext';
import {
  useTransferContext,
  TransferStep,
} from '../../../../../contexts/TransferContext';

import {
  BoxData,
  BoxIcon,
  BoxRecipientData,
  Container,
  ContainerButton,
  ContainerIcon,
  Icon,
  TextBox,
  TitleBox,
} from './styles';
import {validValueTransfer} from '../Validations';

enum TextType {
  NUMBER,
}

export const ValueTransferStep: React.FC = () => {
  //@ts-ignore
  const {ref} = useDropDown();
  const {getBankName} = useBanksContext();
  const {control, handleSubmit} = useForm();
  const {setTransferStep, mainData, setTransferValue, transferMoney} =
    useTransferContext();

  const {name, bank, agency, account, digit} = mainData;

  const handleSubmitForm = async (data: any) => {
    const resultValidation = validValueTransfer(data.value);

    if (!resultValidation.status) {
      const {typeError, title, message} = resultValidation;
      ref.current.alertWithType(typeError, title, message);

      return;
    }

    // setTransferValue(data.value);

    await transferMoney();
  };

  return (
    <>
      <Container>
        <BoxRecipientData>
          <BoxIcon>
            <ContainerIcon>
              <Icon icon="ted" />
            </ContainerIcon>
          </BoxIcon>
          <BoxData>
            <TitleBox>Transferir para</TitleBox>
            <View style={{height: 10}} />
            <TextBox>{name}</TextBox>
            <TextBox>{getBankName(bank)}</TextBox>
            <TextBox>
              Ag. {agency} | C/C {account} - {digit}
            </TextBox>
          </BoxData>
        </BoxRecipientData>

        <NamedInput
          control={control}
          name="value"
          hint="Informe o Valor"
          width={310}
          TypeText={TextType.NUMBER}
        />

        <ContainerButton>
          <Button
            title="Transferir"
            style={{width: 300, height: 30}}
            onPress={handleSubmit(handleSubmitForm)}
          />
        </ContainerButton>
      </Container>
    </>
  );
};
