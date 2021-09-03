import React, { useState } from 'react'
import { Progress, NativeBaseProvider, Center } from 'native-base'
// styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
} from '../../../styles/appStyles'
import { useDispatch, useSelector } from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Entypo } from '@expo/vector-icons'

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage'

const ListItems = ({ todos, setTodos, handleTriggerEdit }) => {
  // List things
  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey)
    newTodos.splice(todoIndex, 1)

    AsyncStorage.setItem('storedTodos', JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos)
      })
      .catch((error) => console.log(error))
  }

  // For styling currently swiped todo row
  const [swipedRow, setSwipedRow] = useState(null)

  // Value of progessBar
  const { transactions } = useSelector((state) => state.trs)
  const prices = transactions.map((transaction) => transaction.price)
  const balance = prices.reduce((prev, cur) => (prev += cur), 0)

  return (
    <>
      {todos.length == 0 && <TodoText>You have no Goals </TodoText>}
      {todos.length != 0 && (
        <SwipeListView
          data={todos}
          renderItem={(data) => {
            const RowText =
              data.item.key == swipedRow ? SwipedTodoText : TodoText
            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => {
                  handleTriggerEdit(data.item)
                }}
              >
                <>
                  <NativeBaseProvider>
                    <Center>
                      <RowText>{data.item.title}</RowText>
                      <RowText>{data.item.price}$</RowText>
                    </Center>
                    <Progress
                      value={(balance / data.item.price) * 100}
                      mx={4}
                      mb={5}
                      mt={5}
                    />
                  </NativeBaseProvider>

                  <TodoDate>{data.item.date}</TodoDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={(data, rowMap) => (
            <ListViewHidden>
              <HiddenButton
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
              >
                <Entypo name="trash" size={25} color={colors.secondary} />
              </HiddenButton>
            </ListViewHidden>
          )}
          leftOpenValue={80}
          previewRowKey={'1'}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
          // Handling swiped Goals row
          onRowOpen={(rowKey) => {
            setSwipedRow(rowKey)
          }}
          onRowClose={() => {
            setSwipedRow(null)
          }}
        />
      )}
    </>
  )
}

export default ListItems
