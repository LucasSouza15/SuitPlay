import React from 'react';
import { ActivityIndicator } from 'react-native';
import {ContainerLoading} from './styles';

const LoadingView: React.FC = () => {
  return (
    <>
      <ContainerLoading>
        <ActivityIndicator size="large" color="#0000ff" />
      </ContainerLoading>
    </>
  );
};

export default LoadingView;
