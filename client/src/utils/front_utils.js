import axios from 'axios';
import { Navigate, } from 'react-router-dom';
import HomePage from '../components/layout/home_page';
import NotAllowed from '../components/layout/not_allowed';
//load user
export const useToken = async token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
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
        return <NotAllowed />;
    }
    return children;
}


export const getInfo = async token =>{
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const res = await axios.get('http://localhost:5000/api/profile', config)
            .then(res=>{
                return {res}
            })
        } catch (error) {
            console.log(error);
        }
    }else{
        console.log('error');
    }
}
export const setLocalBanner = token => {
    if(token === false){
        localStorage.setItem('Banner', false);
    }
}
