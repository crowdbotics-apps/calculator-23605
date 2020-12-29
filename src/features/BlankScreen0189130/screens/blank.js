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
    <View style={styles.View_1}>
      <View style={styles.View_18}>
        <Text style={styles.Text_106}>data input</Text>
      </View>
      <Text style={styles.Text_114}>Enter patient metrics below:</Text>
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
      <View style={styles.View_132}>
        <Text style={styles.Text_165}>data</Text>
        <Button
          title="med"
          style={styles.Button_182}
          onPress={() => this.props.navigation.navigate("BlankScreen1189131")}
        />
        <Button
          title="con"
          style={styles.Button_232}
          onPress={() =>
            this.props.navigation.navigate("CopyofBlankScreen1189132")
          }
        />
        <Button
          title="inf"
          style={styles.Button_233}
          onPress={() =>
            this.props.navigation.navigate("CopyofCopyofBlankScreen1189133")
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { justifyContent: "flex-end", alignContent: "flex-start" },
  View_18: {
    width: "100%",
    height: 32,
    alignSelf: "flex-start",
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
  Text_114: { alignSelf: "flex-start" },
  View_118: { width: "100%", alignSelf: "flex-start" },
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
    borderRadius: 6
  },
  View_132: {
    width: "100%",
    height: 32,
    marginTop: "100%",
    alignSelf: "flex-end",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "flex-start"
  },
  Text_165: {
    width: "150%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: "flex-start",
    textAlign: "center"
  },
  Button_182: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  Button_232: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  Button_233: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  }
})
