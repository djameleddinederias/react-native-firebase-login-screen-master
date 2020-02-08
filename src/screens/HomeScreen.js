import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import {loginWithFacebook} from "../api/auth-api.js"; 

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Bienvenue</Header>

    <Paragraph>
      L'application spécial promotion
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Se connecter
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("UserTypeScreen")}
    >
      S'inscrire
    </Button>
    <Button  onPress={() => loginWithFacebook()}>
      Facebook
    </Button>
    
  </Background>
);
export default memo(HomeScreen);
