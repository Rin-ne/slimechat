/* eslint-disable react/prop-types */
import { Attachment, More, Back, Send, Wait, Received, Sent } from "../../components/icons"
import * as DocumentPicker from "expo-document-picker"
import * as env from "../../constants/env"
import { FileSystem } from "react-native-unimodules"
import io from "socket.io-client"
import {
  KeyboardAvoidingView,
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  ActivityIndicator
} from "react-native"
import { moderateScale, verticalScale, scale } from "react-native-size-matters"
import Profile from "./profile"
import React, { useEffect } from "react"
import Svg, { Path } from "react-native-svg"
import theme from "../../theme"
import SyncStorage from "sync-storage"
import auth from '@react-native-firebase/auth'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase("chats.db")
SyncStorage.init()
const conlog = (u) => {
  console.log(u)
}


const contactSchema = {
  name: "contacts",
  properties: {
    number: "string",
    msg: "string",
    time: "string",
    date: "string"
  }
}
class Bubblein extends React.PureComponent {
  constructor() {
    super();
    this.marginTop = 0

  }

  styles() {
    return {
      item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: "row",
        zIndex: 2
      },
      itemIn: {
        marginLeft: 20
      },
      itemOut: {
        alignSelf: "flex-end",
        marginRight: 20
      },
      balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
      },
      arrowContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
      },
      arrowLeftContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-start"
      },

      arrowRightContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },

      arrowLeft: {
        left: moderateScale(-6, 0.5),
      },

      arrowRight: {
        right: moderateScale(-6, 0.5),
      }
    }
  }

  render() {
    const styles = this.styles()
    return (
      <View style={[styles.item, styles.itemOut]}>
        <View style={[styles.balloon, { backgroundColor: theme.primary, marginTop: this.margintop }]}>
          <View style={{ paddingTop: verticalScale(3), paddingBottom: verticalScale(2), flexDirection: "row" }}>
            <Text style={{ color: theme.secondary, marginRight: scale(45) }}>{this.props.message}</Text><Text style={{
              color: theme.secondary,
              fontSize: 10,
              position: "absolute",
              bottom: scale(0),
              right: scale(18)
            }}>  {this.props.date}</Text>{this.props.status === "delivered" ?
              (<View style={{ position: "absolute", right: scale(0), bottom: scale(0) }}>
                <Received width={18} height={18} />
              </View>) : this.props.status === "sent" ?
                (<View style={{ position: "absolute", right: scale(0), bottom: scale(0) }}>
                  <Sent width={18} height={18} />
                </View>) :
                (<View style={{ position: "absolute", right: scale(0), bottom: scale(0) }}>
                  <Wait width={18} height={18} />
                </View>)}
          </View>
          <View
            style={[
              styles.arrowContainer,
              styles.arrowRightContainer,
            ]}
          >
            <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)}
              viewBox="32.485 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
              <Path
                d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                fill={theme.primary}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
}

class BubbleOut extends React.PureComponent {
  constructor() {
    super();
    this.margintop = 0
  }
  styles() {
    return {
      item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: "row",
        zIndex: 2
      },
      itemIn: {
        marginLeft: 20
      },
      itemOut: {
        alignSelf: "flex-end",
        marginRight: 20
      },
      balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
      },
      arrowContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
      },
      arrowLeftContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-start"
      },

      arrowRightContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },

      arrowLeft: {
        left: moderateScale(-6, 0.5),
      },

      arrowRight: {
        right: moderateScale(-6, 0.5),
      }
    }

  }

  render() {
    const styles = this.styles()
    return (
      <View style={[styles.item, styles.itemIn]}>
        <View style={[styles.balloon, { backgroundColor: theme.secondary, marginTop: this.margintop }]}>
          <Text style={{
            paddingTop: verticalScale(3),
            paddingBottom: verticalScale(2),
            color: theme.textColor
          }}>{this.props.message}<Text style={{ color: theme.textColor, fontSize: 10 }}><Text style={{ color: "#ffffff00" }}>aa</Text>{this.props.date}</Text></Text>
          <View
            style={[
              styles.arrowContainer,
              styles.arrowLeftContainer,
            ]}
          >
            <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)}
              viewBox="32.484 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
              <Path
                d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                fill={theme.secondary}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
}
function addZero(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

let socket

let inputText = ""
let loadedChat = 0
const styles = {
  main: {
    backgroundColor: theme.background,
    flex: 1
  },
  header: {
    backgroundColor: theme.secondary,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1
  },
  avatar: {
    backgroundColor: theme.primary,
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: "3%",
    borderRadius: 30
  },
  body: {
    flex: 11
  },
  input: {
    container: {
      backgroundColor: theme.secondary,
      height: "7%",
      flexDirection: "row"
    },
    input: {
      height: 45,
      color: theme.textColor,
      marginLeft: 10,
      width: "75%"
    }
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 10,
  }
}

let willBeStoredInSqlite = []
export default function ChatRoom({ route, navigation }) {
  const nomor = auth().currentUser.phoneNumber
  let { receiver } = route.params
  console.log(nomor)
  const [msg, setMsg] = React.useState(null)
  const [modal, setModal] = React.useState(false)
  const [isLoading, loading] = React.useState(false)
  const [chat, setChat] = React.useState([{ id: 0, message: "...", sender: "", receiver: "" }])
  const inputRef = React.useRef()
  const [render, reRender] = React.useState(false)
  function addToWillBeStored(data){
    willBeStoredInSqlite[willBeStoredInSqlite.length] = data
    console.log(willBeStoredInSqlite.length)
    AsyncStorage.setItem(`willStored@${receiver.phoneNumber}`, JSON.stringify(willBeStoredInSqlite))
  }
  async function loadChats(from, to) {
    const expectedNumberOfReturnedRows = from - to
    if(expectedNumberOfReturnedRows < 0){
      console.error("Number of rows that will be returned cannot be negative")
      return
    }
    db.transaction((tx)=>{
      tx.executeSql(`SELECT * FROM "${receiver.phoneNumber}" WHERE id <= ${from} AND id >= ${to}`, [], (ts, $)=>{
        if(chat == null){
          setChat($.rows._array)
        }else{
          setChat([...$.rows._array, ...chat])
        }
      })
    })
    if(!to<0){
      setTimeout(() => {
        loadChats(from - 20, to - 20)
      }, 10)
      
    }
  }
  useEffect(() => {
    db.transaction(($)=>{
      $.executeSql(`CREATE TABLE IF NOT EXISTS "${receiver.phoneNumber}" (
        "id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
        "sender"	TEXT NOT NULL,
        "receiver"	TEXT NOT NULL,
        "message"	TEXT NOT NULL,
        "date"	TEXT NOT NULL,
        "time"	TEXT NOT NULL,
        "status"	TEXT
      );`)
      
      $.executeSql(`SELECT * FROM "${receiver.phoneNumber}"`, [], (tx, $$)=>{
        $$.rows.length == 0?
        (()=>{
          console.log("chat empty")
        })():
        (()=>{
          setChat($$.rows._array)
        })()
      })
    }, (e)=>{
      console.log(e)
    }, ()=>{
      loading(false)
    })
    loading(true)
    const envi = SyncStorage.get("env")
    const nomor = SyncStorage.get("nomor").split("\"").join("")
    console.log("got " + envi + " and " + nomor + " from sync storage, passed?")
    socket = io(envi, {
      transports: ["websocket"],
    })
    socket.emit("username", nomor)
    socket.on("disconnect", () => {
      socket = io(envi, {
        transport: ["websocket"]
      })
      socket.emit("username", nomor)
    })
    console.log("emited username : " + nomor)
    return(()=>{
      console.log("component unmount")
      SyncStorage.init().then(()=>{
        console.log("chatroom.js will get keys")
        const keys = SyncStorage.getAllKeys()
        console.log("success get all keys, we got "+ keys)
        let i = 0
        const willStoredKeys = []
        const test = (i)=>{
          const reg = /willStored/g
          if(keys[i] === undefined){
            return
          }
          if(reg.test(keys[i])){
            willStoredKeys.push(keys[i])
          }
          test(i + 1)
        }
        test(i)
        console.log(willStoredKeys)
        willStoredKeys.forEach((key)=>{
          console.log(key)
          const values = SyncStorage.get(key)
          console.log(values)
          if(values == null || values === undefined || values === ""){
            return
          }
          db.transaction((tx)=>{
            tx.executeSql(`INSERT INTO "${key.split("@")[1]}"(message, sender, receiver, time, date, status) 
            VALUES ${(()=>{
              return values.map((value)=>{
                return `("${value.message}", "${value.sender}", "${value.receiver}", "${value.time}", "${value.date}", "${value.status}")`
              })
            })()}`)
          }, (e)=>{
            console.log(e)
          }, ()=>{
            console.log("inserted")
          })
        })
      })
  
    })
  }, [])
  const scrollRef = React.useRef()
  if (!receiver) {
    return (<></>)
  } else {
    try {
      socket.removeListener(nomor)
      socket.on(nomor, async (msg) => {
        try {
          msg = JSON.parse(msg)
          console.log("got da message")
          if (chat[chat.length - 1] === undefined) {
            console.log(undefined)
            setChat([{ id: 0, message: "", sender: "", receiver: "" }])
          }
          const chats = {
            id: 4,
            message: msg.message,
            sender: msg.sender,
            receiver: nomor,
            date: msg.date,
            time: msg.time
          }
          scrollRef.current == null ? "" : scrollRef.current.scrollToEnd()
          setChat([...chat, chats])
          setTimeout(() => {
            scrollRef.current == null ? (()=>{})() : scrollRef.current.scrollToEnd()
          }, 0);
          addToWillBeStored(chats)
        } catch (e) {
          console.log(e)
        }
      })
    }
    catch (e) { conlog(e) }
    const send = async () => {
      const msg = inputText
      console.log("passed")
      if (msg !== "") {
        let d = new Date()
        const date = d.getFullYear() + "-" + `${d.getMonth() + 1}-` + d.getDate()
        const time = addZero(d.getHours()) + ":" + addZero(d.getMinutes())
        if (chat[chat.length - 1] === undefined) {
          setChat([{ id: 0, message: "", sender: "", receiver: "" }])
        }
        try {
          let willWrote = {
            id: 1,
            message: msg,
            sender: nomor,
            receiver: receiver.phoneNumber,
            date,
            time,
            status: "wait"
          }
          addToWillBeStored(willWrote)
          let allChatss = [...chat, willWrote]
          setChat(allChatss)
          setTimeout(() => {
            scrollRef.current.scrollToEnd()
          }, 10);
          setTimeout(() => {
            socket.emit("chat", JSON.stringify(willWrote), async (state) => {
              allChatss[allChatss.length - 1].status = state
              setChat(allChatss)
            })
          }, 1);
        
          inputRef.current.setNativeProps({ text: "" })
          inputText = ""
          scrollRef.current == null ? <></> : scrollRef.current.scrollToEnd()
        } catch (E) {
          console.log(E)
        }
      }
    }


    if (receiver.el) {
      let uri
      if (theme.chatBackgroundImage === "") {
        uri = require("../../assets/def-bg.jpg")
      } else {
        uri = { uri: theme.chatBackgroundImage }
      }
      return (
        <>
          <Profile uri={receiver.avatar} receiver={receiver} onRequestClose={() => {
            setModal(false)
          }} visible={modal} />
          <StatusBar backgroundColor={theme.secondary} barStyle={"dark-content"} />
          <View style={styles.main}>
            <Image source={uri} style={{
              position: "absolute",
              flex: 1,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }} />
            <KeyboardAvoidingView behavior="height" enabled style={{ ...styles.header, zIndex: 2 }}>
              <TouchableOpacity onPress={() => {
                navigation.goBack()
              }} style={{
                ...styles.icon,
                marginLeft: scale(0),
                marginTop: verticalScale(10),
                marginRight: scale(10)
              }}>
                <Back />
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                setModal(true)
              }}>

                <Image
                  source={{ uri: `http://${env.SERVER_URL}:${env.SERVER_PORT}/img/${receiver.phoneNumber}` }}
                  fadeDuration={0}
                  style={{ ...styles.avatar }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{
                    color: theme.primary,
                    fontSize: 20,
                    marginTop: "3%"
                  }}>{receiver.el.name}</Text>
                  <Text style={{
                    color: theme.textColor,
                    fontSize: 13,
                    marginTop: 0
                  }}>{receiver.status.length > 20 ? receiver.status.slice(0, 20) + "..." : receiver.status}</Text>
                  <Text style={{ color: "#ffffff00" }}>helo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{
                ...styles.icon,
                position: "absolute",
                top: verticalScale(15),
                right: 10
              }}>
                <More />
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <View style={styles.body}>
              <Text style={{ marginBottom: verticalScale(40) }} />
              <ActivityIndicator animating={isLoading} color={theme.primary} size={"large"} style={{
                top: verticalScale(70),
                right: scale(180),
                left: scale(180),
                position: "absolute"
              }} />
              <FlatList
                renderItem={({ item, index }) => {
                  if (item != null) {
                    const msg = item
                    if (item.receiver === nomor) {
                      return (<BubbleOut margintop={"0%"} date={msg.time}
                        message={unescape(msg.message)} />)
                    } else {
                      return (<Bubblein margintop={"0%"} date={msg.time}
                        status={msg.status === undefined ? "" : msg.status}
                        message={unescape(msg.message)} />)
                    }
                  } else {
                  }
                }}
                data={chat}
                ref={scrollRef}
                initialNumToRender={chat.length === undefined ? 40 : chat.length}
                keyExtractor={(item, index) => index.toString()}
              />
              {(() => {
                setTimeout(() => {
                  const interval = setInterval(() => {
                    try {
                      scrollRef.current.scrollToEnd()
                      clearInterval(interval)
                    } catch (e) {
                      console.log(e)
                    }
                  }, 1)
                }, 100)
              })()}
            </View>
            <KeyboardAvoidingView behavior="height" enabled style={{ ...styles.input.container, zIndex: 2 }}>
              <TextInput ref={inputRef} multiline={true} placeholder="Messages" style={styles.input.input}
                onChangeText={(inp) => {
                  inputText = inp;
                }} />
              <View style={{ marginTop: verticalScale(0) }}>
                <TouchableOpacity onPress={() => {
                  DocumentPicker.getDocumentAsync().then((data) => {
                    if (data.type === "success") {
                      FileSystem.readAsStringAsync(data.uri, { encoding: FileSystem.EncodingType.Base64 }).then((string) => {
                        FileSystem.writeAsStringAsync(data.uri, string)
                        fetch("http://192.168.43.58:3000/up", {
                          body: JSON.stringify({
                            filename: data.name,
                            file: string
                          }),
                          method: "POST",
                          headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                          }
                        })
                      })
                    }
                  })
                }}>
                  <Attachment />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={send} style={{ ...styles.icon, margin: scale(7), marginTop: verticalScale(5) }}>
                <Send />
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </>
      )
    }
  }
}