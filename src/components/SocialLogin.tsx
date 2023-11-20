import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { useGoogleLogin } from '@react-oauth/google';
import { SocialLogin } from '@/backend/User';
import { ApiResponse } from '@/backend/RestApi';
import Image from 'next/image';

interface SocialLoginPropTypes {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    handleLoginResponse: (response: ApiResponse) => void;
}
export default function SocialLogins({ setLoading, handleLoginResponse }: SocialLoginPropTypes) {

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setLoading(true);
            if (tokenResponse?.access_token) {
                const response = await SocialLogin(tokenResponse.access_token, 'google');
                handleLoginResponse(response);
            }
        },
    });

    const { linkedInLogin } = useLinkedIn({
        clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID ?? '',
        redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}/linkedin`,
        onSuccess: async (code) => {
            console.log(code);
            if (code) {
                const response = await SocialLogin(code, 'linkedin');
                handleLoginResponse(response);
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div className="flex justify-center gap-4">

            <button
                onClick={() => linkedInLogin()}
                className="rounded-full w-[80px] flex justify-center p-2 border-[1px] border-blue-200"
                style={{ backgroundColor: "#F5F5F5" }}
            >
                <Image
                    width={"30"}
                    height={"30"}
                    src={"/images/linkedin.jpg"}
                    alt="linkedin"
                />
            </button>
            <button
                onClick={() => googleLogin()}
                className="rounded-full w-[80px] flex justify-center p-2 border-[1px] border-blue-200"
                style={{ backgroundColor: "#F5F5F5" }}
            >
                <Image
                    width={"30"}
                    height={"30"}
                    src={"/images/google.png"}
                    alt="google"
                />
            </button>
        </div>
    )
}