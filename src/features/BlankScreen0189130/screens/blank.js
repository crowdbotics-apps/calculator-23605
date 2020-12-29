import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "" }

  render = () => (
    <View>
      <Text style={styles.Text_3}>Patsiendi andmed</Text>
      <TextInput
        placeholder="kehakaal"
        keyboardType="numeric"
        style={styles.TextInput_4}
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {
    paddingTop: 6,
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    textAlign: "center"
  },
  TextInput_4: {
    alignSelf: "flex-start",
    backgroundColor: "#f5f8ff",
    fontFamily: "Roboto-Regular",
    borderColor: "#808080",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 6
  }
})
