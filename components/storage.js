import { AsyncStorage } from "react-native"

let stack = []

export const StoreItem = async (key, value) => {
  if(typeof value != "string" || typeof key != "string"){
    throw "Unexpected type; expected: string "
  }else{
    return await AsyncStorage.setItem(key, value)
  }
}

export const FetchItem = async (key) => {
  if(typeof key != "string"){
    throw "Unexpected type; expected: string got: "+typeof key
  }else{
    return await AsyncStorage.getItem(key)
  }
}

export const insertLater = async (key, value) => {
  stack.push([key, value])
}

export const insertStacked = () => {
  stack.forEach(([key, value])=>{
    console.log(key, value)
    AsyncStorage.setItem(key, value)
  })
}