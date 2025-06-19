# TEACHING REPO: Context API Introduction
This repository contains code and examples used for teaching "Reactjs Context-API" For Frontend and Full Stack Development courses

## Purpose
These examples are intended for instructional use and demonstrate basic concepts. They are not representative of production-level code or my professional work.
<hr>

### Steps:
- In React project, create folder: context, then inside it, create file appContext.jsx
- inside appContext.jsx, import createContext, useState, and useContext from react: ```import { createContext, useContext, useState} from "react"```. 
- inside appContext.jsx, create context called AppContext: ```const AppContext = createContext()```
- inside appContext.jsx, create and export AppProvider arrow function: ```export const AppProvider = ({children}) => {};```
- inside AppProvider , return AppContext.Provider with value={{}} as attribute: ```<AppContext.Provider value={{}}>{children}</AppContext.Provider>```
- inside AppProvider, create your states and functions. **DON'T forget to add them in the value attribute**.
- Make sure you have the children in AppProvider and to its return
- import and render AppProvider in "index.js" or in "main.jsx" if you are using Vite: ```<AppProvider>
    <App />
</AppProvider>```
- inside appContext.jsx "at the bottom" create and export custom hook called useAppContext: ```export const useAppContext = (() => {return useContext(AppContext)})```
- Import and use useAppContext into desired components: ```const {valueName} = useAppContext()```

| Congrats: you just mastered Context API :)

