import { createContext, useContext } from "react";

const AppContext = createContext()
export const AppProvider = ({ children }) => {
    
    

    return (<AppContext.Provider value={{color:"Red"}}>

        {children}
    </AppContext.Provider>
        
    )
}



