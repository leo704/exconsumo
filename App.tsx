import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaLogin from './src/components/TelaLogin';
import TelaPerguntas from './src/components/TelaPerguntas';
import TelaResultado from './src/components/TelaResultado';
import AuthProvider from './src/contexto/DadosContext';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <navStack.Navigator>
          <navStack.Screen name="telaLogin" component={TelaLogin} />
          <navStack.Screen name="telaPerguntas" component={TelaPerguntas} />
          <navStack.Screen name="telaResultado" component={TelaResultado} />
        </navStack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
