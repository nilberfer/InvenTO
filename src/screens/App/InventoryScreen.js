import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import InventoryService from '../../api/InventoryService';

const InventoryScreen = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    InventoryService.getInventory().then(setInventory);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventário</Text>
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
  },
  itemQuantity: {
    fontSize: 14,
    color: 'gray',
  },
});

export default InventoryScreen;
