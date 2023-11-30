import React, { useContext, useReducer, createContext, useState } from "react";


const AppContext = createContext()



export const AppProvider = ({ children }) => {


    const [name, setName] = useState("Khaled")
    function flipName() {
        setName("Alabssi")
    }



    return (
        <AppContext.Provider value={{ name, setName, flipName }}>
            {children}

        </AppContext.Provider>

    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}



