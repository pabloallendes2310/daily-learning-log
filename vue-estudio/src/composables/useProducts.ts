import { ref } from "vue";

export const useProducts = () => {
  const products = ref([
    {
      id: 1,
      name: "camiseta",
      qty: 10,
    },
    {
      id: 2,
      name: "pantalon",
      qty: 5,
    },
    {
      id: 3,
      name: "zapatos",
      qty: 3,
    },
  ]);

  function handleIncrementQuantity(productId: number) {
    const product = products.value.find((product) => product.id === productId);
    if (!product) return;
    product.qty++;
  }
  function handleDecrementQuantity(productId: number) {
    const product = products.value.find((product) => product.id === productId);
    if (!product) return;
    if (product.qty <= 0) return;
    product.qty--;
  }

  return {
    //Props
    products,
    //Methods
    handleDecrementQuantity,
    handleIncrementQuantity,
  };
};
