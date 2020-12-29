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

  state = {
    TextInput_4: "",
    TextInput_5: "",
    TextInput_6: "",
    TextInput_10: ""
  }

  render = () => (
    <View>
      <View style={styles.View_18}>
        <Text style={styles.Text_106}>data input</Text>
      </View>
      <Text>Enter patient metrics below:</Text>
      <TextInput
        placeholder="kehakaal"
        keyboardType="numeric"
        style={styles.TextInput_4}
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="pikkus"
        keyboardType="numeric"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="vanus"
        keyboardType="numeric"
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <TextInput
        placeholder="eGFR"
        keyboardType="numeric"
        style={styles.TextInput_10}
        value={this.state.TextInput_10}
        onChangeText={nextValue => this.setState({ TextInput_10: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_18: {
    width: "100%",
    height: 32,
    alignSelf: "center",
    backgroundColor: "#b9f5ff",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Text_106: {
    backgroundColor: "#b9f5ff",
    fontFamily: "Roboto-Bold",
    letterSpacing: 2
  },
  Text_114: {},
  TextInput_4: {
    marginTop: 2,
    marginBottom: 2,
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
  },
  TextInput_5: {
    marginTop: 2,
    marginBottom: 2,
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
  },
  TextInput_6: {
    marginTop: 2,
    marginBottom: 2,
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
  },
  TextInput_10: {
    marginTop: 2,
    marginBottom: 2,
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
