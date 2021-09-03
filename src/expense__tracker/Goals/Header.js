import React from 'react'
import { ImageBackground, SectionList, View, StyleSheet } from 'react-native'
import BackButton from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()
  return (
    <HeaderView>
      <BackButton goBack={navigation.goBack} />
      <HeaderTitle style={{ marginLeft: 60 }}>GoalsListss</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={colors.secondary} />
      </HeaderButton>
    </HeaderView>
  )
}

export default Header
