import { createContext, use, useEffect, useState } from "react";

//type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

interface AppProviderProps {
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: AppProviderProps) {

    const [tema, setTema] = useState('dark')

    function alternarTema(){
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo =  localStorage.getItem('tema')
        if(temaSalvo != null) setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext