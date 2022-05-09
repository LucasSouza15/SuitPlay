import React from 'react';
import {Controller, Control} from 'react-hook-form';
import {ContainerInput, Input, TextInput} from './styles';

enum TextType {
  TEXT,
  NUMBER,
  DOCUMENT,
}

type NamedInputProps = {
  control: Control<any>;
  name: string;
  hint: string;
  isPassword?: boolean;
  width?: number;
  TypeText?: TextType;
  placeholder?: string;
};

const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

const NamedInput: React.FC<NamedInputProps> = ({
  control,
  hint,
  name,
  isPassword,
  width,
  TypeText = TextType.TEXT,
  placeholder,
  ...rest
}) => {
  function formatTextInput(text: string): string {
    if (text.length >= 11 && TypeText === TextType.DOCUMENT) {
      switch (text.length) {
        case 11:
          return text
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2');
        case 14:
          return text
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2');
        default:
          return text;
      }
    }

    return text;
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => (
        <ContainerInput>
          <TextInput>{hint}</TextInput>
          <Input
            placeholder={placeholder || undefined}
            onChangeText={text => onChange(formatTextInput(text))}
            value={value}
            secureTextEntry={isPassword}
            style={{width: !width ? 241 : width}}
          />
        </ContainerInput>
      )}
    />
  );
};

export default NamedInput;
