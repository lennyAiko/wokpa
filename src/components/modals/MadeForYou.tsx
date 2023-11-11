import Assets from "@/assets";
import Image from "next/image";

import { store } from "../../../store";

interface MFYProps {
    isVisible: boolean
}

const MadeForYou: React.FC<MFYProps> = ({isVisible, ...props}) => {

    const {setViewLogin, setViewSignUp} = store()

    if (isVisible) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full z-40 absolute inset-0 bg-opacity-25 backdrop-blur-lg bg-[#5E1C0080]">
            
            <h3 className="font-bold text-2xl text-white">Jump back in to enjoy!</h3>
            <span className="font-semibold text-lg text-white">Join other publishers and listeners on Wokpa</span>

            <div className="flex flex-row items-center mt-3 sm:space-x-6 space-x-3">

                <button className="flex flex-row items-center space-x-1 bg-[#1EAEA3] py-2 px-3 rounded-xl" onClick={() => setViewSignUp()}>
                    <Image src={Assets.WokpaPodcasters} alt="sign up icon" className="sm:w-[18px] sm:h-[18px] w-4 h-4" />
                    <span className="tracking-tighter font-semibold text-sm sm:text-base text-white">SIGN UP</span>
                </button>

                <button className="flex flex-row items-center space-x-1 border-2 rounded-xl border-white py-1.5 px-2.5" onClick={() => setViewLogin()}>
                    <Image src={Assets.User} alt="user icon" className="sm:w-[18px] sm:h-[18px] w-4 h-4" />
                    <span className="tracking-tighter font-semibold text-sm sm:text-base text-white">LOG IN</span>
                </button>

            </div>

        </div>
    )
}

export default MadeForYou