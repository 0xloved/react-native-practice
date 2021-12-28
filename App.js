import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TestComponent from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageList from "./src/screens/ImageScreen";
import CountScreen from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenWithReducer from "./src/screens/SquareScreenWithReducer";
import CounterWithReducer from "./src/screens/CounterWithReducer";
import SplashScreen from "./src/screens/SplashScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: TestComponent,
    List: ListScreen,
    ImageScreen:ImageList,
    Counter:CountScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    SquareWithReducer:SquareScreenWithReducer,
    CounterReducer:CounterWithReducer,
    Splash:SplashScreen,
    Text:TextScreen,
    Box:BoxScreen,
  },
  {
    initialRouteName: "Splash",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
