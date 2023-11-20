import axios from "axios";
import { FormApi, RestApi } from "./RestApi";
import { ApiResponse, ApiResponseDefault } from "./RestApi";
import { regexChecker } from "@/components/Helper";

export const Login = async (
    email: string,
    password: string,
): Promise<ApiResponse> => {

    const resp: ApiResponse = { ...ApiResponseDefault };

    if (email.trim().length == 0) {
        resp['message'] = 'Email address is required'
    } else if (!regexChecker(email, "email")) {
        resp['message'] = 'Invalid email format';
    } else if (password.trim() == "") {
        resp['message'] = 'Password is required'
    } else if (password.length < 8) {
        resp['message'] = 'Password should be atleast 8 characters'
    } else {
        try {
            const response = await RestApi.post('login_email', {
                email,
                password
            });
            console.log(response, "okoko");


            if (response?.data?.statusCode === 200) {
                resp['status'] = true;
                resp['message'] = 'Logged In Successfully';
                resp['data'] = { token: response?.data?.data?.token }
            }

        } catch (e: any) {

            console.log('Error in Login Api', e);
            if (e.response?.data?.message) {
                resp['message'] = e.response.data.message;
            }
        }
    }


    return resp;

}

export const Register = async (
    username: string,
    email: string,
    password: string
): Promise<ApiResponse> => {


    const resp: ApiResponse = { ...ApiResponseDefault };


    if (username.trim().length < 5) {
        resp['message'] = 'Username should be atleast 5 characters long';
    } else if (!regexChecker(username, "special")) {
        resp['message'] = 'Invalid Username: Avoid using special characters';
    } else if (email.trim().length == 0) {
        resp['message'] = 'Email address is required'
    } else if (!regexChecker(email, "email")) {
        resp['message'] = 'Invalid email format';
    } else if (password.trim() == "") {
        resp['message'] = 'Password is required'
    } else if (password.length < 8) {
        resp['message'] = 'Password should be atleast 8 characters'
    } else {

        try {

            const response = await RestApi.post('signup_email', {
                name: username,
                email,
                password
            });

            if (response?.data?.statusCode === 200) {
                resp['status'] = true;
                resp['message'] = 'Signed Up Successfully';
                resp['data'] = { token: response?.data?.data?.token }
            }

        } catch (e: any) {

            console.log('Error in Login Api', e);
            if (e.response?.data?.message) {
                resp['message'] = e.response.data.message;
            }


        }

    }


    return resp;


}



export const SocialLogin = async (access_token: string, provider: string): Promise<ApiResponse> => {

    const resp: ApiResponse = { ...ApiResponseDefault };

    if (provider !== 'google' && provider !== 'linkedin') {
        return resp;
    }

    try {
        const response = await RestApi.post(`social_login_${provider}`, { access_token });
        if (response?.data?.statusCode === 200) {
            console.log('resp', response);
            resp['status'] = true;
            resp['message'] = 'Signed Up Successfully';
            resp['data'] = { token: response?.data?.data?.token }
        }
    } catch (e: any) {
        console.log('Error in SocialLogin API', e);
        if (e.response?.data?.message) {
            resp['message'] = e.response.data.message;
        }

    }

    return resp;
}

export const UpdateProfileModal = async (payload: Record<string, any>): Promise<ApiResponse> => {
    const resp: ApiResponse = { ...ApiResponseDefault };
    try {
        const response = await RestApi.post('profile', payload)
        console.log('resp', response);
        if (response?.data?.statusCode === 200) {
            resp['status'] = true;
            resp['message'] = 'Form Submitted';
            resp['data'] = { token: response?.data?.data?.token }
        }
    } catch (e: any) {
        console.log('Error in UpdateProfileModal API', e);
        if (e.response?.data?.message) {
            resp['message'] = e.response.data.message;
        }
    }

    return resp;
}


export const GetProfileFormData = async (): Promise<ApiResponse> => {
    const resp: ApiResponse = { ...ApiResponseDefault };

    try {
        const response = await RestApi.get('profile')
        if (response?.data?.statusCode === 200) {
            console.log('resp', response);
            resp['status'] = true;
            resp['message'] = 'Data Fetched';
            resp['data'] = response?.data?.data;
        }

    } catch (e: any) {
        console.log('Error in GetProfileModal API', e);
        if (e.response?.data?.message) {
            resp['message'] = e.response.data.message;
        }
    }
    return resp;
}

export const PostSetupBot = async (payload: FormData): Promise<ApiResponse> => {
    const resp: ApiResponse = { ...ApiResponseDefault };

    try {
        const response = await FormApi.post('/setup_bot', payload)
        if (response?.data?.statusCode === 200) {
            console.log('resp', response);
            resp['status'] = true;
            resp['message'] = 'Data Fetched';
            resp['data'] = response?.data?.data;
        }

    } catch (e: any) {
        console.log('Error in PostSetupBot API', e);
        if (e.response?.data?.message) {
            resp['message'] = e.response.data.message;
        }
    }
    return resp;
}


export const GetBot = async (access_token: string): Promise<ApiResponse> => {
    const resp: ApiResponse = { ...ApiResponseDefault };

    try {
        const response = await RestApi.get('/profile', {
            params: { access_token }, // Pass access_token as a query parameter
        });

        if (response?.data?.statusCode === 200) {
            console.log('resp', response);
            resp['status'] = true;
            resp['message'] = 'Data Fetched';
            resp['data'] = response?.data?.data;
        }

    } catch (e: any) {
        console.log('Error in GetBot API', e);
        if (e.response?.data?.message) {
            resp['message'] = e.response.data.message;
        }
    }
    return resp;
}

// ... RestApi and ApiResponseDefault definitions

