"use client"

import Assets from "@/assets"
import Image from "next/image"
import { store } from "../../../store"
import Options from "./Options"

interface SignUpProps {
    isVisible: boolean
}

const SignUp: React.FC<SignUpProps> = ({isVisible, ...props}) => {

    const { setViewSignUp } = store()

    if (!isVisible) return null;

    return (
        <div className="flex items-center mx-auto justify-center rounded-[12px] z-40 backdrop-blur-lg bg-black fixed inset-0 bg-opacity-25">
        
            <div className="w-[900px] flex p-8 rounded-[10px] bg-black gap-3">
                <div className="w-1/2 flex flex-col justify-center items-center gap-5 bg-black p-2">
                    <span className="text-white font-bold text-lg">Create an account</span>

                    <Options text="Continue with google" icon1={Assets.GoogleIcon} icon2={Assets.Right} />
                    <Options text="Continue with facebook" icon1={Assets.FacebookIcon} icon2={Assets.Right} />
                    <Options text="Continue with apple ID" icon1={Assets.AppleIcon} icon2={Assets.Right} />
                    <Options text="Continue with your email" icon1={Assets.EnvelopeIcon} icon2={Assets.Right} />

                    <span className="text-white font-medium text-base">Log in with email</span>
    
                </div>
                <div className="w-1/2 bg-red-300">
                    Second side
                </div>

                <button className="-mt-3.5 -mr-3.5 place-self-start" onClick={() => setViewSignUp()}>
                    <Image src={Assets.CloseIcon} alt="close icon" />
                </button>
            </div>
            
        </div>
    )
}

export default SignUp