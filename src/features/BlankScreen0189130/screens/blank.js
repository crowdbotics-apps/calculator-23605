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
      <View style={styles.View_118}>
        <View style={styles.View_119}>
          <TextInput
            placeholder="kehakaal"
            keyboardType="numeric"
            style={styles.TextInput_4}
            value={this.state.TextInput_4}
            onChangeText={nextValue =>
              this.setState({ TextInput_4: nextValue })
            }
          />
          <Text style={styles.Text_128}>kg</Text>
        </View>
        <View style={styles.View_120}>
          <TextInput
            placeholder="pikkus"
            keyboardType="numeric"
            style={styles.TextInput_5}
            value={this.state.TextInput_5}
            onChangeText={nextValue =>
              this.setState({ TextInput_5: nextValue })
            }
          />
          <Text style={styles.Text_129}>cm</Text>
        </View>
        <View style={styles.View_121}>
          <TextInput
            placeholder="vanus"
            keyboardType="numeric"
            style={styles.TextInput_6}
            value={this.state.TextInput_6}
            onChangeText={nextValue =>
              this.setState({ TextInput_6: nextValue })
            }
          />
          <Text style={styles.Text_130}>a</Text>
        </View>
        <View style={styles.View_122}>
          <TextInput
            placeholder="eGFR"
            keyboardType="numeric"
            style={styles.TextInput_10}
            value={this.state.TextInput_10}
            onChangeText={nextValue =>
              this.setState({ TextInput_10: nextValue })
            }
          />
        </View>
      </View>
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
  View_118: { width: "100%", alignSelf: "center" },
  View_119: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "flex-start"
  },
  TextInput_4: {
    width: "75%",
    marginTop: 2,
    marginBottom: 2,
    alignSelf: "flex-start",
    backgroundColor: "#f5fdff",
    fontFamily: "Roboto-Regular",
    borderColor: "#669199",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 6
  },
  Text_128: { alignSelf: "flex-end", color: "#669199", textAlign: "right" },
  View_120: { width: "100%", flexDirection: "row", flexWrap: "nowrap" },
  TextInput_5: {
    width: "75%",
    marginTop: 2,
    marginBottom: 2,
    alignSelf: "flex-start",
    backgroundColor: "#f5fdff",
    fontFamily: "Roboto-Regular",
    borderColor: "#669199",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 6
  },
  Text_129: { alignSelf: "flex-end", color: "#669199", textAlign: "right" },
  View_121: { width: "100%", flexDirection: "row", flexWrap: "nowrap" },
  TextInput_6: {
    width: "75%",
    marginTop: 2,
    marginBottom: 2,
    alignSelf: "flex-start",
    backgroundColor: "#f5fdff",
    fontFamily: "Roboto-Regular",
    borderColor: "#669199",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 6
  },
  Text_130: { alignSelf: "flex-end", color: "#669199", textAlign: "right" },
  View_122: { width: "100%", flexDirection: "row", flexWrap: "nowrap" },
  TextInput_10: {
    width: "75%",
    marginTop: 2,
    marginBottom: 2,
    alignSelf: "flex-start",
    backgroundColor: "#f5fdff",
    fontFamily: "Roboto-Regular",
    borderColor: "#669199",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 6
  }
})
