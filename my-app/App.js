import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/redux/reducers";
import { initializeApp } from "firebase/app";
import AuthScreen from "./src/screens/auth";

const app = initializeApp({
  apiKey: "AIzaSyD4_74v9GpYCtCmt0_8dM7AN70RIvzd92o",
  authDomain: "rate-demo.firebaseapp.com",
  projectId: "rate-demo",
  storageBucket: "rate-demo.appspot.com",
  messagingSenderId: "864589193091",
  appId: "1:864589193091:web:78456d231efafc412120b6",
  measurementId: "G-DR3SXRX5SM",
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
