import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular as PoppinsRegular,
  Poppins_700Bold as PoppinsBold,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': PoppinsRegular,
    'Poppins-Bold': PoppinsBold,
  })

  if (!fontsLoaded) {
    return null;
  }

  const cu = {
    uri: "https://ton.twitter.com/i/ton/data/dm/1560064214764503051/1560064208439492609/qa78Ut7I.png"
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.brand}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>Pokédex</Text>
        </View>
        <View style={styles.controlsContainer}>
            <Text style={styles.controlsText}>#</Text>
            <View style={styles.controlsIcon}></View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Procurar" selectionColor="#808080"></TextInput>
      </View>
      <View style={styles.imageContainer}>
        <Image source={cu} style={styles.image}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  navbar : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
      marginRight: 10,
      width: 50,
      height: 50,
      backgroundColor: '#000',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#212121',
    fontSize: 40,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  controlsText: {
    fontSize: 25,
    marginRight: 5
  },
  controlsIcon: {
    width: 15,
    height: 30,
    backgroundColor: '#000'
  },
  searchContainer: {
    marginTop: 12,
    width: '100%',
  },
  searchInput: {
    height: 50,
    borderRadius: 20,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 100,
  },
  image: {
    height: 50,
    width: 50,
  }
});
