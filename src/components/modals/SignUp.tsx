"use client"

import Assets from "@/assets"
import Image from "next/image"
import { store } from "../../../store"

interface SignUpProps {
    isVisible: boolean
}

const SignUp: React.FC<SignUpProps> = ({isVisible, ...props}) => {

    const {setViewSignUp} = store()

    if (!isVisible) return null;

    return (
        <></>
    )
}

export default SignUp