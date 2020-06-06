
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

function finalDrawer() {
    return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen
                  name="Home" 
                  component={HomeStack} 
              />
            
              <Drawer.Screen
                  name="About" 
                  component={AboutStack} 
              />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  export default finalDrawer;