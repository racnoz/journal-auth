import authApi from "@/api/authApi"

export const createUser = async ( {commit} , user) => {
    console.log('commit',commit)
    const {name, email, password} = user

    try {
        const {data} = await authApi.post(`:signUp?`, {email, password, returnSecureToken: true})
        
        const {idToken} = data

        await authApi.post(`:update?`, {displayName: name, idToken})

        return{ ok: true}


    } catch (error) {
        return {ok: false, message: error.response.data.error.message}
    }
}

