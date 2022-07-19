import { useEffect, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const _3dSignUpImg = require("../images/signUp3dObjects.png");
const _3dSignInImg = require("../images/signIn3dObjects.png");

export default function Auth(props) {
    const signState = useState(true);
    const [isSignIn, setIsSignIn] = signState;

    return (
        <main className="flex h-screen bg-blue-jelly">
            <section className="w-2/6 bg-blue-jelly">
                <div className="h-screen flex items-center justify-end relative ml-20 -mr-28">
                    <img className="absolute right-0 drop-shadow-2xl" src={isSignIn ? _3dSignInImg : _3dSignUpImg} alt="3d objects" />
                </div>
            </section>

            <section className="w-4/6 pl-32 shadow-2xl shadow-gray-700 -ml-6 bg-gray-100 rounded-[44px]">
                {
                    isSignIn ? <SignIn signState={signState} /> : <SignUp signState={signState} />
                }
            </section>
        </main>
    );
}
