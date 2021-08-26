import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Text } from '../../components/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Top = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { transactions } = useSelector((state) => state.trs)

  const prices = transactions.map((transaction) => transaction.price)
  const balance = prices.reduce((prev, cur) => (prev += cur), 0)
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0) * -1

  const income = expense + balance

  return (
    <Box paddingLeft="l" paddingRight="l" style={{ paddingTop: 40 }}>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="title" style={{ fontSize: 30 }}>
          Transaction
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
          <FontAwesome5 name="piggy-bank" size={24} color="white" />
        </TouchableOpacity>
        <AntDesign name="piechart" size={24} color="white" />
        <FontAwesome name="user" size={24} color="white" />
      </Box>
      <Box flexDirection="row" justifyContent="space-between" marginTop="m">
        <Box>
          <Text textAlign="center" variant="body" color="white">
            Income
          </Text>
          <Text
            textAlign="center"
            textAlign="center"
            fontSize={13}
            color="blue"
            fontWeight="700"
          >
            ${income}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" variant="body" color="white">
            Expenses
          </Text>
          <Text
            textAlign="center"
            textAlign="center"
            fontSize={13}
            color="red"
            fontWeight="700"
          >
            -${expense}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" variant="body" color="white">
            Balance
          </Text>
          <Text textAlign="center" fontWeight="700" fontSize={13} color="brown">
            ${balance}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Top
