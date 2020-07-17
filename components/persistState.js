import React from 'react'
import AsyncStorage from "react-native"
import SyncStorage from 'sync-storage'

SyncStorage.init()

export const usePersistState = (initialValue = null, key)=>{
  const [state, setState] = React.useState(()=>{
    const storedState = SyncStorage.get(key)
    return storedState??initialValue
  })
  React.useEffect(()=>{
    AsyncStorage.setItem(key, state)
  }, [state])
  return [state, setState]
}
