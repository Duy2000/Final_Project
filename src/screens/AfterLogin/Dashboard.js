import React from 'react'
import { ExpenseNavigator } from '../../../src/expense__tracker'
import { Provider } from 'react-redux'
import store from '../../../store'
import { ThemeProvider } from '@shopify/restyle'
import { LoadAssets, theme } from '../../../src/components'

const ListScreen = () => {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <ExpenseNavigator />
      </ThemeProvider>
    </Provider>
  )
}
export default ListScreen
