import { useEffect, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { hideLoader } from "../utils/Loader";

const _3dSignUpImg = require("../../images/objects/signUp3dObjects.png");
const _3dSignInImg = require("../../images/objects/signIn3dObjects.png");
const _ochat_logo = require("../../images/logo/ochatLogo.png");

export default function Auth(props) {
    const signState = useState(true);
    const [isSignIn, setIsSignIn] = signState;

    useEffect(() => {
        return () => (!props.loading ?? true) && hideLoader()
    })

    return (
        <main className="p-2 md:p-0 flex flex-col md:flex-row h-screen bg-blue-jelly">
            <section className="w-2/6 bg-blue-jelly hidden md:block">
                <div className="h-screen flex items-center justify-end relative ml-20 -mr-28">
                    <img className="absolute right-0 drop-shadow-2xl" src={isSignIn ? _3dSignInImg : _3dSignUpImg} alt="3d objects" />
                </div>
            </section>

            <section className="w-full h-screen md:w-4/6 md:pl-32 md:-ml-6 overflow-y-auto shadow-2xl shadow-gray-700 bg-gray-100 rounded-[44px]">
                <div className="flex items-center justify-center my-5">
                    <a href="/">
                        <img className="h-[100px] drop-shadow-xl" src={_ochat_logo} alt="ochat logo" />
                    </a>
                </div>
                {
                    isSignIn ? <SignIn signState={signState} /> : <SignUp signState={signState} />
                }
            </section>
        </main>
    );
}
