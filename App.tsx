import { Text, View } from 'react-native';
import { Container } from './appStyle'


import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from 'expo-font';

import { Home } from './src/pages/home';

export default function App() {

  const customFonts = {
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Bold': Roboto_700Bold,
    // Defina outras variantes da fonte aqui, se necessário
  };

  const useCustomFonts = () => {
    const [fontsLoaded] = useFonts(customFonts);
    return fontsLoaded;
  }

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <>
      <Home />
    </>
  );
}

