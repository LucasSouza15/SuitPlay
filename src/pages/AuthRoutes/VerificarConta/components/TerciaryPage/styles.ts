import styled from 'styled-components/native';
import React from 'react';

export const ContainerBody = styled.View`
  width: 327px;
  height: 567px;
  top: -80px;
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const TitleBoxProfile = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height */
  text-align: center;
  color: #252422;
  margin-bottom: 40px;
`;
