import { StyleSheet, Text, View, Image } from 'react-native';
// Francisco Costa 
import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import { products } from '@/assets/dummyData/Products';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {
        products.map((product) => (
          <View key={product.id} style={styles.itemContainer}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color:  Colors.primary,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image : {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemContainer: {
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGrey,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
 }
});
