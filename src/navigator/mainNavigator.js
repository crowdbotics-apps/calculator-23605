import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn58189136Navigator from '../features/SignIn58189136/navigator';
import BlankScreen5189135Navigator from '../features/BlankScreen5189135/navigator';
import CopyOfCopyOfBlankScreen1189134Navigator from '../features/CopyOfCopyOfBlankScreen1189134/navigator';
import CopyOfCopyOfBlankScreen1189133Navigator from '../features/CopyOfCopyOfBlankScreen1189133/navigator';
import CopyOfBlankScreen1189132Navigator from '../features/CopyOfBlankScreen1189132/navigator';
import BlankScreen1189131Navigator from '../features/BlankScreen1189131/navigator';
import BlankScreen0189130Navigator from '../features/BlankScreen0189130/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn58189136: { screen: SignIn58189136Navigator },
BlankScreen5189135: { screen: BlankScreen5189135Navigator },
CopyOfCopyOfBlankScreen1189134: { screen: CopyOfCopyOfBlankScreen1189134Navigator },
CopyOfCopyOfBlankScreen1189133: { screen: CopyOfCopyOfBlankScreen1189133Navigator },
CopyOfBlankScreen1189132: { screen: CopyOfBlankScreen1189132Navigator },
BlankScreen1189131: { screen: BlankScreen1189131Navigator },
BlankScreen0189130: { screen: BlankScreen0189130Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
