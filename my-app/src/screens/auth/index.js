import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthMenu from "../../components/auth/menu";
import styles from "../../components/auth/menu/style";
export default function AuthScreen() {
  const [authState, setAuthState] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);
  return (
    <View style={styles.container}>
      <AuthMenu
        authPage={authState}
        setAuthPage={setAuthState}
        detailsPage={detailsPage}
        setDetailsPage={setDetailsPage}
      />
    </View>
  );
}
