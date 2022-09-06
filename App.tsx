import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular as PoppinsRegular,
  Poppins_700Bold as PoppinsBold,
} from '@expo-google-fonts/poppins';
import { Pokedex } from './src/screens/Pokedex';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': PoppinsRegular,
    'Poppins-Bold': PoppinsBold,
  })

  if (!fontsLoaded) {
    return null;
  }

  return <Pokedex />;
}