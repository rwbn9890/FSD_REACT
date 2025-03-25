import { createContext, useState } from "react";



export const AuthContext = createContext()


export const AuthProvider = ({children, data}) => {

    const [user, setUser] = useState({})

    let details = {
        name : "Alishan shaikh",
        pass : "12345"
    }

    return (
        <AuthContext.Provider  value={{details, user, setUser}}>
               {children}
        </AuthContext.Provider>
    )
}


// [details]