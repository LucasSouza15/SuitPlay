import React from 'react';
import {ReactangleButton} from '@components/index';
import {BoxListContacts, ContainerButton} from './styles';

import {
  useTransferContext,
  TransferType,
  TransferStep,
} from '../../../../../contexts/TransferContext';

export const SelectOptionsStep: React.FC = () => {
  const {setTransferStep} = useTransferContext();

  return (
    <>
      <ContainerButton>
        <ReactangleButton
          buttonText="Fazer nova transferência"
          functionOnPress={() => setTransferStep(TransferStep.MainData)}
          icon="ted"
        />
      </ContainerButton>
      <BoxListContacts></BoxListContacts>
    </>
  );
};
