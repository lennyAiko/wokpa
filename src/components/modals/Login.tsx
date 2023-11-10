"use client"
import Image from "next/image"
import Assets from "@/assets"
import { store } from "../../../store"
import Options from "./Options"

interface LoginProps {
    isVisible: boolean
}

const Login: React.FC<LoginProps> = ({isVisible, ...props}) => {

    const { setViewLogin } = store()

    if (!isVisible) return null;

    return (
        <div className="flex items-center mx-auto justify-center rounded-[12px] z-40 backdrop-blur-lg bg-black fixed inset-0 bg-opacity-25">
        
            <div className="w-[900px] flex p-8 rounded-[10px] bg-black gap-3">
                <div className="w-1/2 flex flex-col justify-center items-center gap-5 bg-black p-2">
                    <span className="text-white font-bold text-lg">Log in with your socials below </span>

                    <Options text="Choose account" icon1={Assets.GoogleIcon} icon2={Assets.DownIcon} />

                    <span className="text-white font-medium text-base">Log in with email</span>

                    <div className="flex flex-col gap-2 items-center justify-center w-[95%]">
        
                        <input type="text" placeholder="Enter your email"
                        className="text-white placeholder:text-white border-2 border-white rounded-full px-6 py-3 truncate placeholder:bg-transparent bg-transparent w-[95%]" />
        
                        <input type="password" placeholder="Enter password"
                        className="text-white placeholder:text-white border-2 border-white rounded-full px-6 py-3 truncate placeholder:bg-transparent bg-transparent w-[95%]" />

                    </div>

                    <div className="flex w-[85%] items-center justify-between">
                        <button className="bg-[#7B61FF] font-medium text-base px-4 py-2 rounded-full text-black">Log in</button>
                        <span className="text-white font-light text-[13px]">Forgot password?</span>
                    </div>
    
                </div>
                <div className="w-1/2 bg-red-300">
                    Second side
                </div>

                <button className="-mt-3.5 -mr-3.5 place-self-start" onClick={() => setViewLogin()}>
                    <Image src={Assets.CloseIcon} alt="close icon" />
                </button>
            </div>
            
        </div>
    )
}

export default Login