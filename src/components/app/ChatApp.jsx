import { useEffect } from "react"
import { hideLoader } from "../utils/Loader";
import Header from "./Header";
import Contact from "./Contact";
import Chat from "./Chat";

function Ochat(props) {
    useEffect(() => {
        return () => hideLoader()
    }, [])

    return (
        <main id="o-app" className="w-screen h-screen">
            <header id="o-header" className="">
                <Header />
            </header>
            <section id="o-main" className="flex">
                <div id="o-contact" className="w-3/12 bg-slate-700">
                    <Contact />
                </div>
                <div id="o-chat" className="w-9/12 bg-slate-900">
                    <Chat />
                </div>
            </section>
        </main>
    )
}

export { Ochat as default }