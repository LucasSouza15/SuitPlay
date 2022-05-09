import React from 'react';
import {Text} from 'react-native-svg';
import {
  ContainerButton,
  ContainerIcon,
  IconLeft,
  IconRight,
  TextButton,
} from './styles';

type ButtonProps = {
  functionOnPress: () => void;
};

const ButtonAlterPass: React.FC<ButtonProps> = ({functionOnPress}) => {
  return (
    <ContainerButton onPress={functionOnPress}>
      <ContainerIcon>
        <IconLeft name="lock" size={30} />
      </ContainerIcon>

      <TextButton>Alterar Senha</TextButton>

      <IconRight name="chevron-right" size={80} />
    </ContainerButton>
  );
};

export default ButtonAlterPass;
