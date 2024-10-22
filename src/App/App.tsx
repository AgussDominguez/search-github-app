import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import UsersPageTemplate from '../pages/UsersPageTemplate';
import {Box, GluestackUIProvider} from '../ui';
import RepositoriesPageTemplate from '../pages/RepositoriesPageTemplate';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              const iconName = `${route.name === 'Users' ? 'people' : route.name === 'Repositories' ? 'folder' : ''}${!focused ? '-outline' : ''}`;
              return (
                <Box position="absolute" top="$2">
                  <Icon
                    name={iconName}
                    size={focused ? 30 : 28}
                    color={focused ? '#dee8f4' : '#dee8f488'}
                  />
                </Box>
              );
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            headerShown: false,
            title: '',
            tabBarStyle: {
              backgroundColor: '#235086',
              justifyContent: 'center',
              alignItems: 'center',
            },
          })}>
          <Tab.Screen name="Users" component={UsersPageTemplate} />
          <Tab.Screen
            name="Repositories"
            component={RepositoriesPageTemplate}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
