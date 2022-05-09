import React, {ReactNode, useState} from 'react';
import {View} from 'react-native';
import {
  BalanceTitle,
  BalanceWrapperContainer,
  HideBalance,
  Icon,
  Title,
} from './styles';

interface Props {
  visibleBalance: boolean;
  setVisibleBalance: () => void;
}

export const BalanceWrapper: React.FC<Props> = ({
  visibleBalance,
  setVisibleBalance,
}) => {
  return (
    <BalanceWrapperContainer>
      <View>
        <BalanceTitle>Saldo</BalanceTitle>
        {visibleBalance ? <Title>R$ 5.361,00 </Title> : <HideBalance />}
      </View>
      <Icon
        name={visibleBalance ? 'eye-off' : 'eye'}
        onPress={setVisibleBalance}
      />
    </BalanceWrapperContainer>
  );
};
