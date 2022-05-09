import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  top: -70px;
`;

export const PanelBox = styled.View`
  width: 327px;
  height: auto;

  min-height: 300px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0);
  border-radius: 10px;

  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

export const PanelTopBox = styled.View`
  width: 327px;
  height: 161px;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0);
  border-radius: 10px;

  flex-direction: row;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 30px;
`;

export const ContainerDetails = styled.View`
  width: 57%;
  height: 95%;

  margin-top: 5px;
  margin-right: 5px;
  align-items: center;
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #0c072d;
`;

export const ContainerDetailsBox = styled.View`
  width: 100%;

  margin-left: 20px;
  margin-top: 10px;
`;

export const TextBox = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
`;

export const BorderBox = styled.View`
  width: 150.61px;
  height: 32.05px;
  
  background: #ffffff;
  border: 1px solid #252422;
  box-sizing: border-box;
  border-radius: 5px;
  
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const ImageMachineTopBox = styled.Image`
  width: 135px;
  height: 141px;
`;
