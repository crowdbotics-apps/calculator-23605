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

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen0189130")}
      >
        <Text style={styles.Text_2}>calculator</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    backgroundColor: "#b9f5ff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Text_2: {
    width: 150,
    marginTop: 0,
    marginBottom: "05%",
    alignSelf: "center",
    fontSize: 19,
    color: "#173136",
    backgroundColor: "#b9f5ff",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    letterSpacing: 2
  }
})
