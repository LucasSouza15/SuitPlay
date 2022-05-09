import React from 'react';
import {View} from 'react-native';

import {useUserContext} from '../../contexts/UserContext';
import ShimmerEffect from '../ShimmerEffect';

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

const BalanceWrapper: React.FC<BalanceWrapperProps> = ({
  handleShowBalance,
  visibleBalance,
}) => {
  const {wallet, balanceLoading} = useUserContext();

  return (
    <>
      <BalanceWrapperContainer>
        <View>
          <BalanceTitle>Saldo</BalanceTitle>
          {/* {visibleBalance ? <Title>R$ 5000 </Title> : <HideBalance />} */}
          {!balanceLoading ? (
                  visibleBalance ? (
                    <Title>R$ {wallet.balance} </Title>
                  ) : (
                    <HideBalance />
                  )
                ) : visibleBalance ? (
                  <ShimmerEffect />
                ) : (
                  <HideBalance />
                )}
        </View>
        <Icon
          name={visibleBalance ? 'eye-off' : 'eye'}
          onPress={handleShowBalance}
        />
      </BalanceWrapperContainer>
    </>
  );
};

export default BalanceWrapper;
