import { View, Text, Image, StyleSheet } from 'react-native';
import { CardProductType } from '@/src/app/Types/CardProductType';
const CardProduct = ({ product } :  CardProductType) => {
    return (
        <View style={styles.card}>
        <Image style={styles.image} source={product.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 150,
        height: 200,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
    },
});

export default CardProduct;