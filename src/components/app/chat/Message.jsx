import { useEffect } from "react";
import { Eye as SeenIcon, Check, CheckCircle } from "./../../utils/icons";

function Message(props) {
    useEffect(() => {
        return () => {
            const element = document.getElementById("messagesContainer");
            element.scrollTop = element.scrollHeight;
        }
    })
    
    return (
        <div>
            <div className="flex justify-end">
                <div className="max-w-[77%] bg-blue-jelly bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tr-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga aliquid. Veniam quaerat, nostrum nisi doloremque fuga laborum voluptatum dolore sequi harum ullam? Sequi, obcaecati porro qui nostrum aut reprehenderit!
                        </p>
                        <div className="flex items-end h-full -ml-4 font-semibold">
                            <span className="px-1">12:23</span>
                            <span className="px-1">
                                <CheckCircle className="w-6 h-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="max-w-[77%] bg-blue-iceberg bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tl-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex items-end h-full -mr-4 font-semibold">
                            <span className="px-1">12:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="max-w-[77%] bg-blue-jelly bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tr-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga aliquid. Veniam quaerat, nostrum nisi doloremque fuga laborum voluptatum dolore sequi harum ullam? Sequi, obcaecati porro qui nostrum aut reprehenderit!
                        </p>
                        <div className="flex items-end h-full -ml-4 font-semibold">
                            <span className="px-1">12:23</span>
                            <span className="px-1">
                                <CheckCircle className="w-6 h-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="max-w-[77%] bg-blue-iceberg bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tl-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex items-end h-full -mr-4 font-semibold">
                            <span className="px-1">12:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="max-w-[77%] bg-blue-jelly bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tr-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga aliquid. Veniam quaerat, nostrum nisi doloremque fuga laborum voluptatum dolore sequi harum ullam? Sequi, obcaecati porro qui nostrum aut reprehenderit!
                        </p>
                        <div className="flex items-end h-full -ml-4 font-semibold">
                            <span className="px-1">12:23</span>
                            <span className="px-1">
                                <CheckCircle className="w-6 h-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="max-w-[77%] bg-blue-iceberg bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tl-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex items-end h-full -mr-4 font-semibold">
                            <span className="px-1">12:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="max-w-[77%] bg-blue-jelly bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tr-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga aliquid. Veniam quaerat, nostrum nisi doloremque fuga laborum voluptatum dolore sequi harum ullam? Sequi, obcaecati porro qui nostrum aut reprehenderit!
                        </p>
                        <div className="flex items-end h-full -ml-4 font-semibold">
                            <span className="px-1">12:23</span>
                            <span className="px-1">
                                <CheckCircle className="w-6 h-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="max-w-[77%] bg-blue-iceberg bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tl-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex items-end h-full -mr-4 font-semibold">
                            <span className="px-1">12:23</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="max-w-[77%] bg-blue-jelly bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tr-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga aliquid. Veniam quaerat, nostrum nisi doloremque fuga laborum voluptatum dolore sequi harum ullam? Sequi, obcaecati porro qui nostrum aut reprehenderit!
                        </p>
                        <div className="flex items-end h-full -ml-4 font-semibold">
                            <span className="px-1">12:23</span>
                            <span className="px-1">
                                <CheckCircle className="w-6 h-6" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="max-w-[77%] bg-blue-iceberg bg-opacity-90 shadow px-6 py-3 m-2 rounded-3xl rounded-tl-none">
                    <div className="w-full h-full flex flex-col items-end mb-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex items-end h-full -mr-4 font-semibold">
                            <span className="px-1">12:23</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Message as default }