import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  containerMain: { height: "100%", padding: 20, flex: 1 },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "darkslategray",
    textAlign: "center",
  },
  providerButtonContainer: {
    /* Add styles to the container that holds the provider button */
    marginTop: 10, // Adjust margin or padding if needed
  },
  providerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
  },
  providerButtonText: {
    paddingRight: 20,
  },
  containerBottomButton: {
    backgroundColor: "ghostwhite",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  bottomButtonText: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
