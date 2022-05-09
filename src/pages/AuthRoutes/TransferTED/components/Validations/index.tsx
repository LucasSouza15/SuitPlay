import {useDropDown} from '@hooks/dropdown';
import {TransferMainDataProps} from '@contexts/TransferContext';
import {number} from 'yup';

const regexDocument =
  /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

// 'info'
// 'warn'
// 'error'
// 'custom'
// 'success';

type PropsResponse = {
  status: boolean;
  typeError?: 'info' | 'warn' | 'error' | 'custom' | 'success';
  title?: string;
  message?: string;
};

export function ValidMainData(data: TransferMainDataProps): PropsResponse {
  if (!data.account) {
    return {
      status: false,
      typeError: 'warn',
      title: 'Ops',
      message: 'Por favor digite o numero da conta do recebedor!',
    };
  }

  return {status: true};
}

export function validValueTransfer(value: number): PropsResponse {
  if (!value) {
    return {
      status: false,
      typeError: 'error',
      title: 'Erro!',
      message: 'O valor da transferencia não pode estar vazio',
    };
  }

  if (value <= 0) {
    return {
      status: false,
      typeError: 'error',
      title: 'Erro!',
      message: 'O valor da transferencia não pode ser negativo ou zero',
    };
  }

  return {status: true};
}
