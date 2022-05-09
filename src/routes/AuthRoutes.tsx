import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header as CHeader, PIcon} from '@components/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Home,
  Statement,
  SuitID,
  Payment,
  MoreOptions,
  Profile,
  EditPassword,
  ReceivePix,
  Billet,
  Machine,
  TransferTED,
  VerificarConta,
} from '@pages/index';

import theme from '@globals/styles/theme';

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  EditPassword: undefined;
  ReceivePix: undefined;
  Billet: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

function Header({...props}) {
  //@ts-ignore
  return <CHeader {...props} />;
}

function PaymentRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Payment} />
    </Stack.Navigator>
  );
}

function TransferTEDRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TransferTED} />
    </Stack.Navigator>
  );
}

function MoreOptionsRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
    </Stack.Navigator>
  );
}

function AuthRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: theme.fonts.bold,
          fontSize: 24,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        inactiveTintColor: '#777',
        tabBarIcon: ({color}) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Extrato':
              iconName = 'statement';
              break;
            case 'Máquina':
              iconName = 'tef';
              break;
            case 'SuitID':
              iconName = 'lock-1';
              break;
            case 'Mais':
              iconName = 'apps';
              break;
            default:
              iconName = 'search';
              break;
          }
          return <PIcon icon={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Extrato"
        component={Statement}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Máquina"
        component={Machine}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SuitID"
        component={SuitID}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Mais"
        component={MoreOptions}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="MoreOptionsRoutes"
        component={MoreOptionsRoutes}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="PaymentRoutes"
        component={PaymentRoutes}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="TransferTEDRoutes"
        component={TransferTEDRoutes}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ReceivePix"
        component={ReceivePix}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Billet"
        component={Billet}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="VerificarConta"
        component={VerificarConta}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
