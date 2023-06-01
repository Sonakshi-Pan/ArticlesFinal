import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import{createAppContainer} from "react-navigation"
import{createStackNavigator} from "react-navigation-stack";
import HomeScreen from './Screens/HomeScreen';
import Popular from './Screens/Popular/'
import Reccomended from '.Screens/Reccomended';
export default function App(){
  return<AppContainer/>
}

const appStackNavigator = createStackNavigator(
    {
      Home:{
        screen:HomeScreen,
        navigationOptions:{
          headerShown:false
        }
      },
      Popular:{
        screen:Popular,
        navigationOptions:{
            tabBarLevel:"popular",
            tabBarOptions:{
                tabStyle:{
                    backgroundColor:"#fff"
                },
                levelStyle:{
                    color:"#000"
                },
                indicatorsStyle:{
                    backgroundColor:"#000"
                }
            }
        }
      },
      Reccomended:{
        screen:Reccomended,
        navigationOptions:{
            tabBarLevel:"reccomended",
            tabBarOptions:{
                tabStyle:{
                    backgroundColor:"pink"
                },
                levelStyle:{
                    color:"000"
                },
                indicatorsStyle:{
                    backgroundColor:"000"
                }
            }
        }
      }
        },
        {
          intialRouteName:"Home"
        }
    
    );
    const AppContainer=createAppContainer(appStackNavigator);
      