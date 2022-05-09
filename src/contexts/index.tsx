import React from 'react';
import {BanksProvider} from './BanksContext';
import {BilletProvider} from './BilletContext';
import {MachineRequestProvider} from './MachineRequestContext';
import {TransferProvider} from './TransferContext';
import {UserContextProvider} from './UserContext';

const ContextProviders: React.FC = ({children}) => {
  return (
    <UserContextProvider>
      <BanksProvider>
        <BilletProvider>
          <MachineRequestProvider>
            <TransferProvider>{children}</TransferProvider>
          </MachineRequestProvider>
        </BilletProvider>
      </BanksProvider>
    </UserContextProvider>
  );
};

export default ContextProviders;
