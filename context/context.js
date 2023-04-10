'use client';
import axios from "axios";
import {createContext,useContext,useEffect,useState} from "react";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MemberContext = createContext(null);

function Context({children}) {

    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMemberFromStorage() {
            const token = localStorage.getItem('accessToken')
            const member = localStorage.getItem('member')
            if (token) {
                console.log("token")
                if (member) setMember(JSON.parse(member));
            }
            setLoading(false)
        }

        loadMemberFromStorage()
    }, [])

    const login = async (email, password) => {
        console.log('çalıştı!!')

        let bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);


        await axios({
            method: "post",
            url: "https://flexop.pythonanywhere.com/api/login/",
            data: bodyFormData,
            headers: {"Content-Type": "application/json"}
        })
            .then(function (response) {
                //handle success
                localStorage.setItem('member', JSON.stringify(response.data))
                localStorage.setItem('accessToken', response.data.access)
                localStorage.setItem('refreshToken', response.data.refresh)
                setMember(response.data);
                toast("Successfull Login");
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                toast.error(response.message);
            });

    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('member')
        setMember(null)
        window.location.pathname = '/login'
    }


    return (
        <MemberContext.Provider value={{isAuthenticated: !!member, member, login, loading, logout}}>
            {children}
            <ToastContainer />
        </MemberContext.Provider>
    );
}

export const useAuth = () => useContext(MemberContext)

export default Context;