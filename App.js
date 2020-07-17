import * as actions from "./redux/actions"
import { AsyncStorage, Vibration, YellowBox, Platform } from "react-native"
import AddGroup from "./pages/Contact/addGroup"
import ChatRoom from "./pages/chatroom/chatroom"
import Contact from "./pages/Contact/contact"
import SyncStorage from "sync-storage"
import { createStackNavigator } from "@react-navigation/stack"
import { createStore } from "redux"
import Daftar from "./pages/daftar"
import Main from "./pages/home.js"
import CoinWallet from './pages/market/wallet'
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import Preferences from "./pages/static/preferences"
import React from "react"
import io from "socket.io-client"
import reducer from "./redux/reducers"
import Signup from "./pages/signup.js"
import Realm from 'realm'
import * as Sqlite from 'expo-sqlite'
import messaging from '@react-native-firebase/messaging'
import PushNotification from 'react-native-push-notification'

const LocalNotification = () => {


}
const RemotePushController = () => {
  React.useEffect(() => {
    const unsub = messaging().onMessage(async remoteMessage => {
      console.log("got notif")
      const body = remoteMessage.notification.body
      const msg = body.length > 20 ? body.substr(0, 20) : body
      await SyncStorage.init()
      const data = JSON.parse(remoteMessage.data.msg)
      const friends = SyncStorage.get("friends")
      friends.forEach(($)=>{
        try{
          if($.el.number === remoteMessage.notification.title){
            remoteMessage.notification.title = $.el.name
          }
        }catch(e){
          console.log(e)
        }
      })
      PushNotification.localNotification({
        autoCancel: true,
        bigText: body,
        subText: 'SlimeChat',
        title: remoteMessage.notification.title,
        message: msg,
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default'
      })
      Vibration.vibrate([0, 400, 100, 400])
    });
    return ()=>{
      unsub()
    }
  }, [])
  return (
    <>
    </>)
}
// import * as TaskManager from "expo-task-manager"
// import * as BackgroundFetch from "expo-background-fetch"
import VIForegroundService from '@voximplant/react-native-foreground-service'
const db = Sqlite.openDatabase("chats.db")
// import * as Sql from 'expo-sqlite'

// const db = Sql.openDatabase("app.db")
// db.transaction((ts)=>{
//   ts.executeSql(`CREATE TABLE IF NOT EXISTS "chats" (
// \t"id"\tINTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
// \t"sender"\tTEXT NOT NULL,
// \t"receiver"\tTEXT NOT NULL,
// \t"message"\tTEXT NOT NULL,
// \t"date"\tTEXT NOT NULL,
// \t"time"\tTEXT NOT NULL
// );`)
// }, (e)=>{console.log(e)}, ()=>{console.log("table created")})
// TaskManager.defineTask("notification", () => {
//   const socket = io("http://slimeserver.herokuapp.com")
//   console.log("background task executed")
//   AsyncStorage.getItem("nomor").then((nomor) => {
//     socket.emit("username", nomor)
//     socket.on(nomor, msg => {
//       setTimeout(() => {
//         try {
//           msg = JSON.parse(msg)
//           console.log("got da message")

//           const chats = {
//             message: msg.message,
//             sender: msg.sender,
//             receiver: nomor,
//             date: msg.date,
//             time: msg.time
//           }
//           AsyncStorage.getItem("friends").then(async (res) => {
//             const contact = JSON.parse(res)
//             console.log(contact)
//             try {
//               let newContact = {}
//               contact.forEach((cont) => {
//                 if (cont.el != null) {
//                   newContact[cont.el.number] = cont.el.name
//                 }
//               })
//               await Notifications.presentLocalNotificationAsync({ title: newContact[msg.sender] || msg.sender, body: msg.message })
//               Vibration.vibrate([250, 250, 250, 250])
//             }
//             catch (e) {
//               await Notifications.presentLocalNotificationAsync({ title: msg.sender, body: msg.message })
//               Vibration.vibrate([250, 250, 250, 250])
//               console.log(e)
//             }
//           })
//           AsyncStorage.getItem("contacts").then(data => {
//             data = JSON.parse(data)
//             data[msg.sender] = {
//               msg: msg.message,
//               time: msg.time,
//               date: msg.date
//             }
//             AsyncStorage.setItem("contacts", JSON.stringify(data))
//           })
//           AsyncStorage.getItem(msg.sender).then(async data => {
//             data = JSON.parse(data)
//             let arr
//             if (Array.isArray(data)) {
//               arr = [...data, chats]
//             } else {
//               arr = [data, chats]
//             }
//             await AsyncStorage.setItem(msg.sender, JSON.stringify(arr))

//           })
//         }
//         catch (e) {
//           console.log(e)
//         }
//       }, 10)
//     })
//   })
// })
// BackgroundFetch.registerTaskAsync("notification")
const Stack = createStackNavigator()
const store = createStore(reducer)
const contactSchema = {
  name: "contacts",
  properties: {
    number: "string",
    msg: "string",
    time: "string",
    date: "string"
  }
}
Realm.open({ schema: [contactSchema] }).then((realm) => {
  const contacts = realm.objects("contacts")
  if (contacts.length == 0) {
    realm.write(() => {
      const newContacts = realm.create('contacts', {
        number: "+6667778889990",
        msg: "Welcome To SlimeChats!",
        time: "20:20",
        date: "2020-5-19"
      });
    })
  }
})

const load = (type = "CONTACT", store, add = null) => {
  switch (type) {
    case "CONTACT":
      AsyncStorage.getItem("contacts")
        .then(data => JSON.parse(data))
        .then((data) => {
          store.dispatch(actions.newState(data))
        })
        .catch(() => {
        })
      break
    case "CHAT":
      AsyncStorage.getItem(add)
        .then(data => JSON.parse(data))
        .then((data) => {
          store.dispatch(actions.newState(data))
        })
        .catch(() => {
        })
      break
    default:
      break
  }
}
YellowBox.ignoreWarnings(["Remote debugger"])
export default function App() {
  const [mainComponent, setMainComponent] = React.useState(null)
  const [isDone, done] = React.useState(false)
  AsyncStorage.getItem("isLoggedIn").then((data) => {
    if (data === "true") {
      setMainComponent("Contact")
    } else {
      setMainComponent("Home")
    }
  })
  React.useEffect(() => {
    setTimeout(() => {
      LocalNotification()
    }, 1000);
    console.log("useeffect in app.js executed")
    load("CONTACT", store)
    AsyncStorage.getItem("nomor")
      .then((nomor) => {
        nomor = nomor.split("\\").join("").split(`"`).join("")
        SyncStorage.set("nomor", `${nomor}`)
        console.log("nomor = " + nomor)
        // eslint-disable-next-line
        fetch("http://sl-aliceblue.herokuapp.com/route?nomor=" + encodeURIComponent(nomor))
          .then(data => data.text())
          .then(
            data => {
              SyncStorage.set("env", data)
              done(true)
            }
          ).catch((e) => {
            console.log(e)
            done(true)
          })
      }).finally(() => {
        done(true)
      })
    SyncStorage.init().then(() => {
      console.log("app.js will get keys")
      const keys = SyncStorage.getAllKeys()
      console.log("success get all keys, we got " + keys)
      let i = 0
      const willStoredKeys = []
      const test = (i) => {
        const reg = /willStored/g
        if (keys[i] === undefined) {
          return
        }
        if (reg.test(keys[i])) {
          willStoredKeys.push(keys[i])
        }
        test(i + 1)
      }
      test(i)
      console.log(willStoredKeys)
      willStoredKeys.forEach((key) => {
        console.log(key)
        const values = SyncStorage.get(key)
        if (values === "") {
          return
        }
        console.log(values)
        db.transaction((tx) => {
          tx.executeSql(`INSERT INTO "${key.split("@")[1]}"(message, sender, receiver, time, date, status) 
          VALUES ${(() => {
              return values.map((value) => {
                return `("${value.message}", "${value.sender}", "${value.receiver}", "${value.time}", "${value.date}", "${value.status}")`
              })
            })()}`)
        }, (e) => {
          console.log(e)
        }, () => {
          console.log("inserted")
          AsyncStorage.setItem(key, "")
        })
      })
    })

  }, [])
  if (mainComponent == null || !isDone) {
    return (<></>)
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={mainComponent}>
            <Stack.Screen
              name="Home"
              component={Main}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options=
              {
                {
                  headerStyle:
                  {
                    backgroundColor: "#5550a2"
                  },
                  headerTitleStyle:
                  {
                    color: "#ffffff",
                    fontFamily: "Roboto"
                  },
                  headerTruncatedBackTitle:
                  {
                    style:
                    {
                      backgroundColor: "#ffffff"
                    }
                  }
                }
              }
            /><Stack.Screen
              name="Daftar"
              component={Daftar}
              options={
                {
                  headerStyle:
                  {
                    backgroundColor: "#5550a2"
                  },
                  headerTitleStyle:
                  {
                    color: "#ffffff"
                  },
                  headerTruncatedBackTitle:
                  {
                    style:
                    {
                      backgroundColor: "#ffffff"
                    }
                  }
                }
              }
            />
            <Stack.Screen
              name="Preferences"
              component={Preferences}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
            <Stack.Screen
              name="AddGroup"
              component={AddGroup}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
            <Stack.Screen
              name="Contact"
              component={Contact}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoom}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
            <Stack.Screen
              name="wallet"
              component={CoinWallet}
              options={
                {
                  headerStyle: {
                    opacity: 0,
                    height: 0
                  }
                }
              }
            />
          </Stack.Navigator>
        </NavigationContainer>
        <RemotePushController />
      </Provider>
    )
  }
}