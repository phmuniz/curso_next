import firebase from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { getFirestore, collection, doc, getDoc, setDoc, addDoc, deleteDoc, getDocs, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {

        toFirestore(cliente: Cliente){

            return { 
                nome: cliente.nome,
                idade: cliente.idade
            }
        },

        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente{
            
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente | undefined> {
        const db = getFirestore(firebase); // Obtém o Firestore
        const clienteData = this.#conversor.toFirestore(cliente)
        if (cliente?.id) {
            // Atualizar documento existente
            await setDoc(doc(db, 'clientes', cliente.id), clienteData)
            return cliente;
        } else {
            // Adicionar novo documento
            const colecao = collection(db, 'clientes').withConverter(this.#conversor)
            const docRef = await addDoc(colecao, cliente)
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        const db = getFirestore(firebase)
        if (cliente?.id) {
            await deleteDoc(doc(db, 'clientes', cliente.id))
        }
    }

    async obterTodos(): Promise<Cliente[]> {
        const db = getFirestore(firebase)
        const colecao = collection(db, 'clientes').withConverter(this.#conversor)
        const querySnapshot = await getDocs(colecao);
        return querySnapshot.docs.map((doc) => doc.data() as Cliente) ?? [];
    }
}