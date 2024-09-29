import firebase from "../../firebase/config"
import Usuario from "@/model/Usuario"
import { createContext, useEffect, useState } from "react"
import router from "next/router"
import Cookies from "js-cookie"

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

interface AuthProviderProps {
    children?: any
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{

    const token = await usuarioFirebase.getIdToken()
    
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName ? usuarioFirebase.displayName : '',
        email: usuarioFirebase.email ? usuarioFirebase.email : '',
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId ? usuarioFirebase.providerData[0]?.providerId : '',
        imagemUrl: usuarioFirebase.photoURL ? usuarioFirebase.photoURL : ''
    }
}

function gerenciarCookie(logado: string){

    if(logado) {
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        })
    }
    else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props: AuthProviderProps){

    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    async function configurarSessao(usuarioFirebase: firebase.User | null){

        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie('true');
            setCarregando(false)
            return usuario.email
        }
        else {
            setUsuario(null)
            gerenciarCookie('false')
            setCarregando(false)
            return false
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
            
            if(resp.user){
                await configurarSessao(resp.user)
                router.push("/")
            }
        }
        finally {
            setCarregando(false)
        }
    }

    async function cadastrar(email: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
            
            if(resp.user){
                await configurarSessao(resp.user)
                router.push("/")
            }
        }
        finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            
            if(resp.user){
                await configurarSessao(resp.user)
                router.push("/")
            }
        }
        finally {
            setCarregando(false)
        }
    }

    async function logout() {

        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        }
        finally {
            setCarregando(false)
        }
    }

    useEffect(() => {

        if(Cookies.get('admin-template-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            usuario: usuario ? usuario : undefined,
            carregando,
            cadastrar,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext