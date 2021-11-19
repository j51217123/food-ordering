import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);

const fetchProductsData = () => {
  const db = firebase.firestore();

  const ProductsRef = db.collection("Products");
  let productsData = [];

  return ProductsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      productsData.push({ ...doc.data() });
    });
    return productsData;
  });
};

export { fetchProductsData };
