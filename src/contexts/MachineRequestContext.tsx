import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type RequestData = {
  zipCode: string;
  publicPlace?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
};

export enum MachineRequestStep {
  Primary,
  Secondary,
  Tertiary,
  Quaternary,
  Final,
}

interface MachineRequestContextProps {
  isLoading: boolean;
  averageBilling: number;
  machineModel: string;
  machineQuantity: number;
  requestData: RequestData;
  currentStep: MachineRequestStep;
  setCurrentStep: (step: MachineRequestStep) => void;
  setRequestData: (data: RequestData) => void;
  setAverageBilling: (averageBilling: number) => void;
  setMachineModel: (machineModel: string) => void;
  setMachineQuantity: (machineQuantity: number) => void;
  children?: ReactNode;
}

const MachineRequestContext = createContext<MachineRequestContextProps>(
  {} as MachineRequestContextProps,
);

export const MachineRequestProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [averageBilling, setAverageBilling] = useState(0);
  const [machineModel, setMachineModel] = useState('');
  const [machineQuantity, setMachineQuantity] = useState(0);
  const [currentStep, setStep] = useState(MachineRequestStep.Primary);
  const [requestData, setRequestData] = useState<RequestData>(
    {} as RequestData,
  );

  useEffect(() => {
    async function loadAsyncStorangeSetp() {
      const step = await AsyncStorage.getItem('@MachineRequest:step');

      if (step) {
        setStep(parseInt(step));
        setIsLoading(false);
        
        return;
      }

      setStep(MachineRequestStep.Primary);
      setIsLoading(false);
    }

    loadAsyncStorangeSetp();
  }, []);

  const setCurrentStep = async (step: MachineRequestStep) => {
    setStep(step);
    await AsyncStorage.setItem('@MachineRequest:step', step.toString());
  };

  return (
    <MachineRequestContext.Provider
      value={{
        isLoading,
        averageBilling,
        currentStep,
        machineModel,
        machineQuantity,
        requestData,
        setAverageBilling,
        setCurrentStep,
        setMachineModel,
        setMachineQuantity,
        setRequestData,
      }}>
      {children}
    </MachineRequestContext.Provider>
  );
};

export const useMachineRequest = () => {
  const context = useContext(MachineRequestContext);

  if (!context) {
    throw new Error(
      'useMachineRequest must be used within a MachineRequestProvider',
    );
  }

  return context;
};
