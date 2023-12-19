import React, {createContext, useState} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [postTitle, setPostTitle] = useState({postTitle: ''})
  return (
    <AppContext.Provider value={{postTitle, setPostTitle}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
