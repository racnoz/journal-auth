
import axios from 'axios'



const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyAASssXqk_RrWAWFSTScj1O2dW8-ijpxx4'
    }
})

export default authApi


