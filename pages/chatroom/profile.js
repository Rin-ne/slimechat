import React from "react"
import theme from "../../theme"
import { View, Text, TouchableOpacity, Modal, Image } from "react-native"
import { scale, verticalScale, moderateScale } from "react-native-size-matters"
import { Back } from "../../components/icons"
import * as env from "../../constants/env"

const Profile = (props) => {
  //eslint-disable-next-line
  const { receiver, uri } = props
  const styles = {
    main: {
      backgroundColor: theme.background,
      flex: 1
    },
    profilePict: {
      position: "absolute",
      top: verticalScale(50),
      left: 0,
      right: 0,
      height: verticalScale(240),
      backgroundColor: theme.primary
    },
    plastic: {
      position: "absolute",
      top: verticalScale(50),
      left: 0,
      right: 0,
      height: verticalScale(245),
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: 2,
    },
    number: {
      color: "white",
      fontFamily: "Roboto",
      fontSize: 30,
      marginTop: verticalScale(180),
      marginLeft: scale(20)
    },
    name: {
      color: theme.textColor,
      fontFamily: "Roboto",
      fontSize: 20,
      marginTop: verticalScale(10),
      marginLeft: scale(105)
    },
    bar: {
      backgroundColor: theme.background,
      flexDirection: "row"
    }
  }
  return (
    <>
      <Modal animationType={"slide"} hardwareAccelerated={true} {...props}>
        <View style={styles.main}>
          <View style={styles.bar}>
            <TouchableOpacity onPress={props.onRequestClose}>
              <Back />
            </TouchableOpacity>
            <Text style={styles.name}>{receiver.el.name}</Text>
          </View>
          <Image source={{ uri: `http://${env.SERVER_URL}:${env.SERVER_PORT}/img/${receiver.phoneNumber}` }} style={styles.profilePict} />
          <View style={styles.plastic}>
            <Text style={styles.number}>{receiver.phoneNumber}</Text>
          </View>
          <View style={{ marginTop: verticalScale(260), }}>
            <Text style={{ color: theme.primary, marginTop: scale(10), marginLeft: scale(20), fontSize: scale(18), fontFamily: "Roboto" }}>Bio</Text>
            <Text style={{ color: theme.textColor, marginTop: scale(5), marginLeft: scale(20), fontSize: scale(15), fontFamily: "Roboto" }}>{receiver.status}</Text>
            <TouchableOpacity style={{width:"100%", height:verticalScale(50), marginTop:30, flexDirection:"row"}}>
              <Text style={{ color: "rgba(255, 110, 120, 1)", marginTop: scale(10), marginLeft: scale(20), alignSelf:"center", fontSize: scale(18), fontFamily: "Roboto" }}>Block Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%", height:verticalScale(50), flexDirection:"row"}}>
              <Text style={{ color: "rgba(255, 110, 120, 1)", marginTop: scale(10), marginLeft: scale(20), alignSelf:"center", fontSize: scale(18), fontFamily: "Roboto" }}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Profile