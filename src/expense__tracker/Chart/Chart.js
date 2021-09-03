import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit'
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from '../../../styles/appStyles'
import { Esplash } from '../../../assets/images'
const screenWidth = Dimensions.get('window').width
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
}
const data = [
  {
    name: 'Car',
    population: 30,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: 'black',
    legendFontSize: 15,
  },
  {
    name: 'Food',
    population: 50,
    color: 'cyan',
    legendFontColor: 'black',
    legendFontSize: 15,
  },
  {
    name: 'Shop',
    population: 20,
    color: 'rgb(0, 0, 255)',
    legendFontColor: 'black',
    legendFontSize: 15,
  },
]

export default function App() {
  return (
    <ImageBackground
      source={Esplash}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HeaderTitle style={{ marginBottom: 50, color: 'black' }}>
          SpendingCharts
        </HeaderTitle>
        <PieChart
          data={data}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
    </ImageBackground>
  )
}
