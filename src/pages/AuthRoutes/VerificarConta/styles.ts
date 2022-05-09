import styled from 'styled-components/native';
import React from 'react';

export const TitlePage = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: bold;
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;
