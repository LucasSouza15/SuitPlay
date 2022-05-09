import React, {createContext, useCallback, useContext, useState} from 'react';

import api from '@services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {useDropDown} from '@hooks/dropdown';
import {AxiosError} from 'axios';
import {useAuth} from '@hooks/auth';

export enum TransferType {
  TED,
  TEV,
}

export enum TransferStep {
  Start,
  MainData,
  TransferValue,
  TransferConfirm,
}

export type TransferMainDataProps = {
  name: string;
  document: string;
  bank: string;
  agency: string;
  account: string;
  digit: string;
  typeAccount: string;
};

export type TransferContextProps = {
  transferType: TransferType;
  transferStep: TransferStep;
  mainData: TransferMainDataProps;
  transferValue: number;
  setMainData: (mainData: TransferMainDataProps) => void;
  setTransferValue: (value: number) => void;
  setTransferType: (transferType: TransferType) => void;
  setTransferStep: (transferStep: TransferStep) => void;
  transferMoney: () => Promise<void>;
};

const TransferContext = createContext<TransferContextProps>(
  {} as TransferContextProps,
);

export const TransferProvider: React.FC = ({children}) => {
  //@ts-ignore
  const {ref} = useDropDown();
  const {signOut} = useAuth();

  const [mainData, setMainData] = useState<TransferMainDataProps>(
    {} as TransferMainDataProps,
  );

  const [transferStep, setTransferStep] = useState(TransferStep.Start);
  const [transferType, setTransferType] = useState(TransferType.TED);
  const [transferValue, setTransferValue] = useState(0);

  const transferMoney = useCallback(async () => {
    const {
      account: destinationAccountNumber,
      agency: destinationAgency,
      bank: destinationBankCode,
      digit: destinationAccountNumberDv,
      document: destinationSocialNumber,
      name: destinationName,
      typeAccount: destinationAccountType,
    } = mainData;

    const token = await AsyncStorage.getItem('@SuitPay:token');

    try {
      switch (transferType) {
        case TransferType.TEV:
          break;

        default:
          const response = await api.post(
            '/transaction/ted',
            {
              destinationName,
              destinationSocialNumber,
              destinationBankCode,
              destinationAccountType,
              destinationAgency,
              destinationAccountNumber,
              destinationAccountNumberDv,
              description: 'TED mobile',
              value: transferValue,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                ut: token,
              },
            },
          );

          console.log(response.data);

          break;
      }
    } catch (err: any) {
      if (err.response) {
        const error = err as AxiosError;

        if (error.response?.status == 403) {
          ref.current.alertWithType(
            'error',
            'Erro!',
            'Sua sessão expirou, por favor faça login novamente!',
          );

          signOut();
          return;
        }

        ref.current.alertWithType(
          'error',
          'Erro!',
          String(error.response?.data),
        );
      }
    }
  }, []);

  return (
    <TransferContext.Provider
      value={{
        mainData,
        transferType,
        transferStep,
        transferValue,
        setMainData,
        transferMoney,
        setTransferType,
        setTransferStep,
        setTransferValue,
      }}>
      {children}
    </TransferContext.Provider>
  );
};

export const useTransferContext = () => {
  const context = useContext(TransferContext);

  if (!context) {
    throw new Error(
      'useTransferContext must be used within a TransferProvider',
    );
  }

  return context;
};
