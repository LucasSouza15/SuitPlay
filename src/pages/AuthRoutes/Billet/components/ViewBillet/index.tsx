import React from 'react';
import {ContainerButton, ContainerReport} from './styles';
import {Button} from '@components/index';

import {BilletStep, useBillet} from '../../../../../contexts/BilletContext';

export const ViewBillet: React.FC = () => {
  const {setBilletStep} = useBillet();

  return (
    <>
      <ContainerReport>

      </ContainerReport>

      <ContainerButton>
        <Button
          style={{width: 300, height: 30}}
          onPress={() => setBilletStep(BilletStep.Resume)}
          title="Compartilhar"
        />
      </ContainerButton>
    </>
  );
};
