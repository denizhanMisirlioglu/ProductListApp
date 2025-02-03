// screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Ürün listesini state ile yönetiyoruz.
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Samsung Galaxy A50',
      description: 'Samsung marka telefon',
      price: '9900 TL',
    },
    {
      id: '2',
      name: 'Samsung Galaxy Tab A9',
      description: 'Samsung marka tablet',
      price: '15000 TL',
    },
    {
      id: '3',
      name: 'Huawei  Metapad',
      description: 'Huawei marka tablet',
      price: '8000 TL',
    },
  ]);

  // Her ürün için liste öğesini render ediyoruz.
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default HomeScreen;
