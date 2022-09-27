import { LeftArrow, DotsVertical } from "./../../utils/icons";
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useId } from "react";

function ChatHeader(props) {
    function handleBackBtn() {
        document.querySelectorAll(".userConversation").forEach(usrc => usrc.classList.remove("bg-blue-jelly", "bg-opacity-20"))
        document.getElementById("o-header").classList.remove("hidden");
        document.getElementById("o-contact").classList.remove("hidden");
        document.getElementById("o-chat").classList.add("hidden");
    }

    return (
        <div className="h-full w-full flex items-center bg-white shadow-xl rounded-full p-2 pt-1">
            <button type="button" className="d-block md:hidden mr-2" onClick={handleBackBtn}>
                <LeftArrow className="w-6 h-6" />
            </button>
            <div className="w-full flex items-center">
                <button type="button" className="p-1 hover:drop-shadow-lg transition duration-200">
                    <img className="w-12" src={require("./../../../images/avatars/black_women_avatar.png")} alt="avatar" />
                </button>
                <div className={"w-full flex justify-between px-1 py-1"}  >
                    <div className="w-full flex flex-col justify-between">
                        <p className="truncate font-semibold">name</p>
                        <span className="truncate text-gray-500">status</span>
                    </div>
                </div>
            </div>

            <Menu as="div" className="h-full relative inline-block text-left">
                <Menu.Button className={'p-2 rounded-full hover:bg-gray-300 transition duration-200'} >

                    <DotsVertical className="w-6 h-6" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 p-1 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        {
                            <Menu.Item>
                                <button className={'w-full flex items-center font-semibold rounded-xl px-2 py-2 text-sm hover:bg-blue-jelly hover:text-white'} >
                                    <span className='mr-2'>
                                        icon
                                    </span>
                                    menu
                                </button>
                            </Menu.Item>
                        }
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export { ChatHeader as default }