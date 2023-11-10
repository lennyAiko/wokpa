"use client"
import Login from "../modals/Login"
import SignUp from "../modals/SignUp"
import { store } from "../../../store"

export default function Footer() {
    const {viewLogin, viewSignUp} = store()

    return (
        <>
            <div className="text-white bg-[#303030] outline-none sm:p-5 p-3 sm:space-x-12 space-x-6 bottom-0 w-screen">
                <span className="font-medium text-sm">Help</span>
                <span className="font-medium text-sm">Settings</span>
            </div>
            
            <Login isVisible={viewLogin} />
            <SignUp isVisible={viewSignUp} />
        </>
    )
}