import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  AppButton,
  AppFormField,
  AppTextInput,
  ErrorMessage,
  Screen,
} from "../components";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched }) => (
          <>
            <AppFormField
              name="email"
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 120,
  },
});

export default LoginScreen;
