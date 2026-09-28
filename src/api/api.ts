import axios from 'axios'
// Platform é para identificar em qual ambiente estamos executando 
import { Platform } from 'react-native'

// IP local padrão do android é 10.0.2.2
export const API_BASE_URL = Platform.OS === 'android' ? 
'http://10.0.2.2:3000' : 'http://localhost:3000'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,  //Define que a requisiçãopode esperar no mai=cimos 10 segundos
    headers: {
        'Content-Type' : 'application/json',  //enviando json
        Accept: 'application/json'  //esperando a resposta no json
    }
})

export default api