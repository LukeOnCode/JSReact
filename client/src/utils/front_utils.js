import axios from 'axios';
import { Navigate, } from 'react-router-dom';
//load user
export const useToken = async token => {
    if(token){
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            }
            const res = await axios.get('http://localhost:5000/api/auth', config)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }else{
        console.log('error');
    }
}

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('Token');
    if(!token){
        return <Navigate to="/registration" replace/>;
    }
    return children;
}
