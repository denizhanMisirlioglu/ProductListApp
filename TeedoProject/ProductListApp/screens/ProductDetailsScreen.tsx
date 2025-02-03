// screens/ProductDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  // route.params üzerinden gönderilen ürün bilgisine erişiyoruz.
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 20,
    color: '#333',
  },
});

export default ProductDetailsScreen;
