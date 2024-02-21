import { useStore } from "vuex"

const useAuth = () => {

    const store = useStore()
    console.log('useStore', store)

    const createUser = async (user) => {
        console.log('composable/useAuth.createUser()', user)
    }

    return{
        createUser
    }
}

export default useAuth