import store from '@/store'


const isAuthenticadedGuard = async(to, from, next) =>{

    const {ok} = await store.dispatch('auth/checkAuthentication')

    if(ok) next()
    else next({name: 'login'})
}

export default isAuthenticadedGuard