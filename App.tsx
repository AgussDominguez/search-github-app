import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {GluestackUIProvider, Text} from './components';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Users Search Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Repositories Search Screen</Text>
    </View>
  );
}
export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              const iconName = `${route.name === 'Users' ? 'people' : route.name === 'Repositories' ? 'folder' : ''}${!focused ? '-outline' : ''}`;
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={focused ? 'black' : 'grey'}
                />
              );
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
          })}>
          <Tab.Screen name="Users" component={HomeScreen} />
          <Tab.Screen name="Repositories" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
