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

const registerFirebaseAuth = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user, "result.user");
    })
    .catch(function (error) {
      if (error.message === "The email address is badly formatted.") {
        alert("帳號不得為空或必須為電子郵件格式");
      } else if (error.message === "Password should be at least 6 characters") {
        alert("密碼至少為六碼！");
      } else if (
        error.message === "The password must be 6 characters long or more."
      ) {
        alert("密碼不得為空！");
      }
      console.log(error);
      console.log(error.message);
    });
};

const signInFirebaseAuth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const facebookSignIn = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
};

export {
  fetchProductsData,
  registerFirebaseAuth,
  signInFirebaseAuth,
  facebookSignIn,
  googleSignIn,
};
