import React from 'react';
import {Controller, Control} from 'react-hook-form';
import { ContainerInput } from './styles';

type InputProps = {
  control: Control<any>;
  name: string;
  hint: string;
};

export const Input: React.FC<InputProps> = ({control,hint,name}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => (
        <ContainerInput
          onChangeText={onChange}
          value={value}
        />
      )}
    />
  )
}