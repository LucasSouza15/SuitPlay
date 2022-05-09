import React, {createContext, useContext} from 'react';

type MainData = {
  valueBillet: number;
  dueDate: Date;
  description: string;
  beneficiary: string;
  document: string;
};

type AddressData = {
  zipCode: string;
  street: string;
  complement: string;
  district: string;
  city: string;
  state: string;
};

export type BilletProps = {
  mainData?: MainData;
  address: AddressData;
};

export enum BilletStep {
  Resume,
  NewDeposit,
  NewBillet,
  Report,
}

export type BilletContextProps = {
  billetStep: BilletStep;
  setBilletStep: (step: BilletStep) => void;
};

const BiletContext = createContext<BilletContextProps>(
  {} as BilletContextProps,
);

export const BilletProvider: React.FC = ({children}) => {
  const [billetStep, setBilletStep] = React.useState(BilletStep.Resume);

  return (
    <BiletContext.Provider value={{billetStep, setBilletStep}}>
      {children}
    </BiletContext.Provider>
  );
};

export const useBillet = () => {
  const context = useContext(BiletContext);

  if (!context) {
    throw new Error('useBillet must be used within a BiletProvider');
  }

  return context;
};
