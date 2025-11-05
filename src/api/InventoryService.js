const getInventory = () => {
  return Promise.resolve([
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 20 },
    { id: 3, name: 'Item 3', quantity: 30 },
  ]);
};

export default {
  getInventory,
};
