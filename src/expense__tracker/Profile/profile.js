import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Box, Center, NativeBaseProvider, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../../components/BackButton'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton goBack={navigation.goBack} />
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />

          <Text style={styles.name}>User </Text>
          <Text style={styles.userInfo}>User@mail.com </Text>
        </View>
      </View>

      <View style={styles.body}>
        <NativeBaseProvider>
          <Button mt={10} onPress={() => console.log('hello world')}>
            Change Password
          </Button>
          <Button mt={5} onPress={() => navigation.navigate('LoginScreen')}>
            Log Out
          </Button>
        </NativeBaseProvider>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'aliceblue',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: 'deepskyblue',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
})

export default Profile
