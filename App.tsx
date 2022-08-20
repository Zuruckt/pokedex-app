import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView, FlatList } from 'react-native';
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

  const data = [
    {
      id: 1,
      text: '1',
    },
    {
      id: 2,
      text: '2',
    },
    {
      id: 3,
      text: '3',
    },
    {
      id: 4,
      text: '4',
    },
    {
      id: 5,
      text: '1',
    },
    {
      id: 6,
      text: '2',
    },
    {
      id: 7,
      text: '3',
    },
    {
      id: 8,
      text: '4',
    },
    
  ];

  type item = {
    id: Number;
    text: String;
  }

  const renderItem = (item: item) => {
    return(
      <View style={styles.card}>
        <Text>{item.text}</Text>
      </View>
    )
  }

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
        <TextInput style={styles.searchInput} defaultValue="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" placeholder="Procurar" selectionColor="#808080"></TextInput>
      </View>

      
        <FlatList contentContainerStyle={styles.cardContainer}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: item) => item.id}
          numColumns={2}
          horizontal={false}
        />
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  navbar : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    flex: 1,
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
    marginTop: 20,
    width: '100%',
  },
  searchInput: {
    height: 40,
    borderRadius: 20,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  cardContainer: {
    backgroundColor: '#da2424',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    flexBasis: '49.5%',
    height: 100,
    flex: 1
  },
  card: {
    width: '41.5%',
    height: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#74cb48',
  },
});
