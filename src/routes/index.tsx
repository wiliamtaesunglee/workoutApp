import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WorkoutSelector from '../pages/WorkoutSelector'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import UserInfo from '../pages/UserInfo'

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
    <Auth.Screen name="UserInfo" component={UserInfo} />
    <Auth.Screen name="WorkoutSelector" component={WorkoutSelector} />
  </Auth.Navigator>
)

export default AuthRoutes
