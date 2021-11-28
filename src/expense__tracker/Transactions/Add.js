import React, { useRef, useState } from 'react'
import { StyleSheet, Dimensions, TextInput, View, Picker } from 'react-native'
import {
  BorderlessButton,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { StackActions } from '@react-navigation/native'

import theme, { Box, Text } from '../../components/theme'
import { BackArrow } from '../Svgs'
import { addTransaction } from '../../../store/actions/transactionActions'
import { useDispatch } from 'react-redux'
//DataBase
import { firebase } from '../../../src/DataBase/DataBase'
/* Dimension */
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 3,
    paddingTop: 40,
    padding: theme.spacing.l,
    bottom: 0,
  },
})

const Add = ({ navigation }) => {
  const dispatch = useDispatch()
  const { navigate } = navigation
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(new Date().toLocaleString())
  const titleRef = useRef(null)

  const onPop = () => {
    const popAction = StackActions.pop(1)
    navigation.dispatch(popAction)
  }

  const onSubmit = () => {
    const transaction = {
      price,
      title,
      date,
    }
    //database api
    firebase
      .database()
      .ref('User')
      .child('Transaction')
      .push({
        price,
        title,
        date,
      })
      .catch((error) => {
        console.log('error', error)
      })

    if (!price || !title) return alert('Details Empty')

    dispatch(addTransaction(transaction))
    setPrice('')
    setTitle([])
    setDate([])
    navigate('Transactions')
  }
  return (
    <Box padding="l" flex={1}>
      <Box flexDirection="row" alignItems="center" paddingTop="l">
        <TouchableOpacity onPress={onPop}>
          <Box>
            <BackArrow />
          </Box>
        </TouchableOpacity>
        <Text
          variant="title1"
          color="primary2"
          style={{ marginLeft: 30, fontSize: 18 }}
        >
          Add Amount
        </Text>
      </Box>

      <Box flexDirection="row" flexDirection="column" marginTop="xl">
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={2}
          paddingBottom="s"
          marginTop="m"
        >
          <Text variant="title" color="primary">
            $
          </Text>

          <TextInput
            placeholderTextColor={theme.colors.primary}
            placeholder="Amount"
            keyboardType="number-pad"
            style={{
              padding: 10,
              fontSize: 30,
              width: '80%',
            }}
            onChangeText={(price) => setPrice(price)}
            autoFocus={true}
            onSubmitEditing={() => titleRef.current.focus()}
            defaultValue={price}
          />

          <Text variant="title" color="primary" style={{ fontSize: 20 }}>
            Dollar
          </Text>
        </Box>
        {/* title */}
        <Box marginTop="xl" borderBottomWidth={2}>
          <Picker
            selectedValue={title}
            style={{ height: 30, width: 300 }}
            onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}
          >
            <Picker.Item label="Choose your expend..." value="None" />
            <Picker.Item label="Salary +" value="Salary" />
            <Picker.Item label="Passive income +" value="Passive" />
            <Picker.Item label="Other income +" value="Other" />
            <Picker.Item label="Food -" value="Food" />
            <Picker.Item label="Entertainment -" value="entertain" />
            <Picker.Item label="Shopping -" value="Shop" />
            <Picker.Item label="Luxury goods(should not) -" value="Luxury" />
          </Picker>
        </Box>

        <Box marginTop="xxl">
          <BorderlessButton onPress={onSubmit}>
            <Box
              borderRadius="l"
              height={55}
              backgroundColor="primary"
              alignItems="center"
              justifyContent="center"
            >
              <Text variant="title1">Submit</Text>
            </Box>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Add
