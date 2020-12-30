import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'black' }
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Welcome" component={Welcome} />
  </Auth.Navigator>
)

export default AuthRoutes
