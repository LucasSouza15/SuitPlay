import React from 'react';
import {View} from 'react-native';
import {
  BalanceTitle,
  BalanceWrapperContainer,
  HideBalance,
  Icon,
  Title,
} from './styles';

type BalanceWrapperProps = {
  visibleBalance: boolean;
  handleShowBalance: () => void;
};

export const BalanceWrapper: React.FC<BalanceWrapperProps> = ({
  handleShowBalance,
  visibleBalance,
}) => {
  return (
    <>
      <BalanceWrapperContainer>
        <View>
          <BalanceTitle>Saldo</BalanceTitle>
          {visibleBalance ? <Title>R$ 5.361,00 </Title> : <HideBalance />}
        </View>
        <Icon
          name={visibleBalance ? 'eye-off' : 'eye'}
          onPress={handleShowBalance}
        />
      </BalanceWrapperContainer>
    </>
  );
};
