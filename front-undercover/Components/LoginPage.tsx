import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <View>
      <View style={{ marginBottom: 40, alignItems: "center" }}>
        <Image
          style={styles.title_image}
          source={require("../assets/logo-undercover.svg")}
        />
        <Text style={styles.title_text}>UNDERCOVER</Text>
      </View>
      <View>
        <Text style={styles.form_title}>Membre</Text>
        <View style={styles.form_group}>
          <Text style={styles.form_label}>Pseudo / Email</Text>
          <TextInput style={styles.form_input} />
          <Text style={styles.form_label}>Mot de passe</Text>
          <TextInput style={styles.form_input} />
        </View>
        <Button title="Connexion" onPress={() => {}} />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 40,
          alignItems: "center",
        }}
      >
        <View style={styles.separator_view}></View>
        <Text style={styles.separator_text}> OU </Text>
        <View style={styles.separator_view}></View>
      </View>
      <View>
        <Text style={styles.form_title}>Visiteur</Text>
        <View style={styles.form_group}>
          <Text style={styles.form_label}>Pseudo</Text>
          <TextInput style={styles.form_input} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title_text: {
    fontSize: 40,
  },
  title_image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  form_title: {
    fontSize: 30,
    textAlign: "center",
  },
  form_label: {
    fontSize: 20,
  },
  form_input: {
    borderRadius: 5,
    borderWidth: 2,
    padding: 5,
    borderColor: "black",
  },
  form_group: {
    marginVertical: 10,
  },
  separator_text: {
    fontSize: 20,
  },
  separator_view: {
    backgroundColor: "black",
    height: 2,
    flex: 1,
  },
});
