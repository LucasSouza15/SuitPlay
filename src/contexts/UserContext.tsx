import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '@services/api';
import {useAuth, User as UserData} from '@hooks/auth';
import AsyncStorage from '@react-native-community/async-storage';

type UserWallet = {
  balance?: number;
  totalEntries?: number;
  totalOutputs?: number;
};

type UserDataProps = {
  user: UserData;
  wallet: UserWallet;
};

type UserContextProps = {
  wallet: UserWallet;
  balanceLoading: boolean;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserContextProvider: React.FC = ({children}) => {
  const {user} = useAuth();

  const [wallet, setWalletData] = useState<UserWallet>({} as UserWallet);
  const [balanceLoading, setBalanceLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUserData() {
      const walletBalance = await AsyncStorage.getItem('@SuitPay:balance');

      if (!walletBalance) {
        const token = await AsyncStorage.getItem('@SuitPay:token');

        const balanceAccount = await api.post(
          '/balance/get-current',
          {username: user.username},
          {headers: {ut: token}},
        );

        const balance = {value: balanceAccount.data};

        await AsyncStorage.setItem('@SuitPay:balance', JSON.stringify(balance));
        return;
      }

      const wallet = JSON.parse(walletBalance);

      setWalletData({balance: wallet.value});
      setBalanceLoading(false);
    }

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{wallet, balanceLoading}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
