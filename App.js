import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TestComponent from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageList from "./src/screens/ImageScreen";
import CountScreen from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: TestComponent,
    List: ListScreen,
    ImageScreen:ImageList,
    Counter:CountScreen,
    Color:ColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
