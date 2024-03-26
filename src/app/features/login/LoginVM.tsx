import { LoaddingModal } from '@components';
import axios from 'axios';

const LoginVM = () => {

    const login = async (
        phoneNumber?: string,
        pin?: any,
        callbackInfo?: (data: any) => void,
    ) => {
        LoaddingModal.show();
        axios.post('https://reqres.in/api/login',
            {
                "email": phoneNumber,
                "password": pin
            }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                LoaddingModal.close();
                callbackInfo && callbackInfo(response.data);
            })
            .catch(error => {
                LoaddingModal.close();
                callbackInfo && callbackInfo(false);
            });

    };

    return {
        login
    }
}

export default LoginVM;