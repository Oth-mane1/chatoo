import { useEffect } from "react"
import { hideLoader } from "../utils/Loader";
import Header from "./Header";
import Contact from "./contact/Contact";
import Chat from "./chat/Chat";
import { useState } from "react";

function Ochat(props) {
    const userSelectedState = useState();
    const [userselected, setUserselected] = userSelectedState;

    useEffect(() => {
        return () => hideLoader()
    }, [])

    return (
        <main id="o-app" className="w-full h-screen bg-gray-200">
            <header id="o-header" className="h-16">
                <Header />
            </header>
            <section id="o-main" className="flex h-screen md:h-[calc(100vh_-_4rem)] md:px-4 md:py-2">
                <div id="o-contact" className="w-full md:w-4/12 md:m-3 pt-2 p-1">
                    <Contact userSelected={userSelectedState} />
                </div>
                <div id="o-chat" className="w-full md:w-8/12 md:m-3 md:p-1 md:block bg-white rounded-[2rem] hidden">
                    <Chat userSelected={userselected} />
                </div>
            </section>
        </main>
    )
}

export { Ochat as default }