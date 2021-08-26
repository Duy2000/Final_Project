import React from 'react'
import { ImageBackground, SectionList, View, StyleSheet } from 'react-native'

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from '../../../styles/appStyles'
import { Esplash } from '../../../assets/images'
// Icons
import { Entypo } from '@expo/vector-icons'

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>GoalsListss</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={colors.secondary} />
      </HeaderButton>
    </HeaderView>
  )
}

export default Header
