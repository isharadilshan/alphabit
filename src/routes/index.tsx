import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {HOME} from './route-paths';
import createStyle from './styles';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const styles = createStyle();

  const options = {
    gestureEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          // headerLeft: props => (
          //   <Icon
          //     name="arrow-left"
          //     size={30}
          //     style={styles.backIcon}
          //     {...props}
          //   />
          // ),
        }}>
        <Stack.Screen
          // options={{headerShown: false}}
          name={HOME}
          component={HomeScreen}
          options={options}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name={'WELCOME'}
          component={WelcomeScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
