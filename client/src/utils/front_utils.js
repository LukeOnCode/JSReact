import axios from 'axios';
//load user
export const useToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    try {
        const res = await axios.get('/api/auth');
    } catch (error) {
        
    }
}
