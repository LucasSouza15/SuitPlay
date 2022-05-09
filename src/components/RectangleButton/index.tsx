import React from 'react';
import theme from '@globals/styles/theme';

import {
  ContainerButton,
  ContainerIcon,
  IconButton,
  IconRight,
  TextButton,
} from './styles';

type Props = {
  functionOnPress: () => void;
  icon: string;
  buttonText: string;
};

const RectangleButton: React.FC<Props> = ({
  buttonText,
  functionOnPress,
  icon,
}) => {
  return (
    <>
      <ContainerButton
        onPress={functionOnPress}
        style={{
          shadowColor: theme.colors.black[100],
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,

          elevation: 8,
        }}>
        <ContainerIcon alternativeLeft={icon == 'pix' ? 15 : undefined}>
          <IconButton icon={icon} size={icon == 'pix' ? 80 : 25} />
        </ContainerIcon>

        <TextButton>{buttonText}</TextButton>

        <IconRight name="chevron-right" size={80} />
      </ContainerButton>
    </>
  );
};

export default RectangleButton;