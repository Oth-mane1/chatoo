import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const _3dSignUpImg = require("../images/signUp3dObjects.png");
const _3dSignInImg = require("../images/signIn3dObjects.png");

export default function Auth(props) {

    return (
        <main className="flex h-screen bg-gray-100">
            <section className="w-2/6 bg-blue-jelly">
                <div className="h-screen flex items-center justify-end relative ml-20 -mr-28">
                    <img className="absolute right-0 drop-shadow-2xl" src={true ? _3dSignInImg : _3dSignUpImg} alt="3d objects" />
                </div>
            </section>
            {
                true ? <SignIn /> : <SignUp />
            }
        </main>
    );
}
