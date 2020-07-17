import React from "react"
import { Text, View, Image, AsyncStorage, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Back } from "../../components/icons"
import theme from "../../theme"
import { scale, verticalScale, moderateScale } from "react-native-size-matters"

export default function AddGroup({ navigation }) {
  const [avatar, setAvatar] = React.useState(null)
  const openImagePickerAsync = async () => {
    console.log("helo")
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      alert("Akses Kamera Sangat Dibutuhkan")
      return
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true})
    if (pickerResult.cancelled === true) {
      return
    }
    console.log(pickerResult)
    setAvatar(pickerResult)
  }
  const styles = {
    main: {
      backgroundColor: theme.background,
      flex: 1
    },
    bar: {
      backgroundColor: theme.secondary,
      height: verticalScale(60),
      flexDirection: "row"
    }
  }
  return (
    <>
      <View style={styles.main}>
        <View style={styles.bar}>
          <View style={{ position: "absolute", marginTop: verticalScale(10) }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Back />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "white", fontSize: 20, marginTop: verticalScale(15), marginLeft: "auto", marginRight: "auto" }}>Create Group</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: verticalScale(30), marginLeft: scale(30) }}>
          <TouchableOpacity onPress={() => { openImagePickerAsync() }}>
            {avatar == null ?
              <Image style={{ borderRadius: 100, width: scale(90), zIndex:2 }} source={require("../../assets/addPhoto.png")} />
              :
              <Image style={{ borderRadius: 100, width: scale(90), zIndex:2 }} source={{uri : avatar.uri}} />

            }
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}