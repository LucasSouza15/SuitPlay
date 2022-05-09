import React, {createContext, useContext, useEffect, useState} from 'react';

import {useAuth} from '../hooks/auth';
import {useDropDown} from '../hooks/dropdown';

import api from '@services/api';
import AsyncStorage from '@react-native-community/async-storage';

type BankProps = {
  id: number;
  name: string;
  strCode: string;
  ispbCode: string;
};

export type BanksContextProps = {
  banks: BankProps[];
  loadingBanks: boolean;
  messageError: string;
  getBankName(id: string): string;
};

const BanksContext = createContext<BanksContextProps>({} as BanksContextProps);

export const BanksProvider: React.FC = ({children}) => {
  //@ts-ignore
  const {ref} = useDropDown();
  const {signOut} = useAuth();

  const [banks, setBanks] = useState<BankProps[]>([]);
  const [messageError, setMessageError] = useState('');
  const [loadingBanks, setLoadingBanks] = useState(true);

  useEffect(() => {
    async function handleGetBankList() {
      const token = await AsyncStorage.getItem('@SuitPay:token');
      const banks = await AsyncStorage.getItem('@SuitPay:banksList');

      if (!banks) {
        api
          .get('/transaction/get-bacen-institutions', {headers: {ut: token}})
          .then(async response => {
            await AsyncStorage.setItem(
              '@SuitPay:banksList',
              JSON.stringify(response.data),
            );

            setBanks(response.data);
            setLoadingBanks(false);
          })
          .catch(err => {
            if (err.response) {
              if (err.response.status === 401 || err.response.status === 403) {
                ref.current.alertWithType(
                  'warn',
                  'Erro!',
                  'Sua sessão expirou, faça login novamente.',
                );
                signOut();
              }
            }

            setMessageError(err.response.data);
            setLoadingBanks(false);
          });
        return;
      }

      setBanks(JSON.parse(banks));
      setLoadingBanks(false);
    }

    handleGetBankList();
  }, []);

  const getBankName = (id: string) => {
    const bank = banks.find(bank => bank.strCode === id);

    return bank ? bank.name : '';
  }

  return (
    <BanksContext.Provider
      value={{
        banks,
        loadingBanks,
        messageError,
        getBankName
      }}>
      {children}
    </BanksContext.Provider>
  );
};

export const useBanksContext = () => {
  const context = useContext(BanksContext);

  if (!context) {
    throw new Error('useBanksContext must be used within a BanksProvider');
  }

  return context;
};
