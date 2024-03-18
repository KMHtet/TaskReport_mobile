import HomeScreen from "../features/home/HomeScreen";
import LoginScreen from "../features/login/LoginScreen";
import MoreScreen from "../features/more/MoreScreen";

export const SCREENS = {
  LOGIN_SCREEN: {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  HOME_SCREEN: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  MORE_SCREEN: {
    name: 'MoreScreen',
    component: MoreScreen,
  }
};
