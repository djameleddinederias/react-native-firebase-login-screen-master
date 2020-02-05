import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  UserTypeScreen,
  StoreScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard
} from "./screens";

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    UserTypeScreen,
    StoreScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
