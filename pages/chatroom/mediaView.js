import React from "react"
import { View, Modal, Text, TouchableOpacity, Image } from "react-native"
import { scale, verticalScale } from "react-native-size-matters"

export const MediaView = (props) => {
  const styles = {
    main: {
      backgroundColor:"#000000",
      flex:100,
      flexDirection:"row"
    }
  }
  return (
    <>
      <Modal {...props}>
        <View style={styles.main}>
          <Image style={{width:"100%",height: verticalScale(400), marginTop:"auto", marginBottom:"auto"}} source={{uri:props.uri}}/>
        </View>
      </Modal>
    </>
  )
}