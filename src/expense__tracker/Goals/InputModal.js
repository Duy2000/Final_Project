import React, { useState } from 'react'
import { Modal } from 'react-native'
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle2,
  colors,
} from '../../../styles/appStyles'
import { AntDesign } from '@expo/vector-icons'
import { AddIcon } from '../Svgs'

const InputModal = ({
  modalVisible,
  setModalVisible,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  todoInputValue,
  priceInputValue,
  setTodoInputValue,
  setPriceInputValue,
  handleEditTodo,
  todos,
}) => {
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        price: priceInputValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      })
    } else {
      handleEditTodo({
        title: todoInputValue,
        price: priceInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      })
    }
    setPriceInputValue('')
    setTodoInputValue('')
  }

  const handleCloseModal = () => {
    setTodoInputValue('')
    setPriceInputValue('')
    setModalVisible(false)
    setTodoToBeEdited(null)
  }

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AddIcon />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle2>AddGoals</HeaderTitle2>
              <AntDesign name="edit" size={30} color={colors.tertiary} />
            </ModalIcon>

            <StyledInput
              placeholder="Add a Goals"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            />

            <StyledInput
              placeholder="Price"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              keyboardType="numeric"
              onChangeText={(text) => setPriceInputValue(text)}
              value={priceInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color={colors.buttonX}>
                <AntDesign name="close" size={28} color={colors.secondary} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={colors.buttonV}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default InputModal
