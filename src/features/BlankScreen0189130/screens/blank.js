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
    TextInput_5: "",
    TextInput_6: "",
    TextInput_10: "",
    CheckBox_8: false,
    CheckBox_9: false,
    TextInput_4: ""
  }

  render = () => (
    <View>
      <Text style={styles.Text_3}>Patsiendi andmed</Text>
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
      <View>
        <View>
          <CheckBox
            title="mees"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.CheckBox_8}
            onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
          />
          <CheckBox
            title="naine"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.CheckBox_9}
            onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
          />
        </View>
        <View>
          <TextInput
            placeholder="kehakaal"
            keyboardType="numeric"
            style={styles.TextInput_4}
            value={this.state.TextInput_4}
            onChangeText={nextValue =>
              this.setState({ TextInput_4: nextValue })
            }
          />
        </View>
      </View>
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
  TextInput_5: {
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
  View_14: {},
  View_15: {},
  CheckBox_8: {},
  CheckBox_9: {},
  View_16: {},
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
