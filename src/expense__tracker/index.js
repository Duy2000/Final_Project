import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/* Components of Exspense*/
import Transactions from './Transactions/Transactions'
import Add from './Transactions/Add'
/* Components of Goals*/
import Goals from './Goals/GoalsList'
import AddGoals from './Goals/InputModal'

export const assets = []

const ExpenseStack = createStackNavigator()

export const ExpenseNavigator = () => (
  <ExpenseStack.Navigator headerMode="none" initialRouteName="Transactions">
    <ExpenseStack.Screen name="Transactions" component={Transactions} />
    <ExpenseStack.Screen name="AddTransaction" component={Add} />
    <ExpenseStack.Screen name="Goals" component={Goals} />
    <ExpenseStack.Screen name="AddGoals" component={AddGoals} />
  </ExpenseStack.Navigator>
)
