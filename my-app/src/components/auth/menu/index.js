import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
export default function AuthMenu({
  authPage,
  setAuthPage,
  detailsPage,
  setDetailsPage,
}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>Log In</Text>
        <View style={styles.providerButtonContainer}>
          <TouchableOpacity style={styles.providerButton}>
            <Ionicons name="person" size={24} color="black" />
            <Text style={styles.providerButtonText}>Use Email</Text>
            <View />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerBottomButton}
          onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
        >
          {authPage == 0 ? (
            <Text>
              Don't have an account?{" "}
              <Text style={styles.bottomButtonText}>Sign up</Text>
            </Text>
          ) : (
            <Text>
              Already have an account?{" "}
              <Text style={styles.bottomButtonText}>Sign in</Text>
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
