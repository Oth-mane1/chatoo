import { ChevronDown } from './../utils/icons'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react";

const OCHAT_LOGO = require('./../../images/logo/ochatLogo.png');
const USER_AVATAR = false ? '' : require('./../../images/avatars/men_smiling_avatar.png');

function Header(props) {
    return (
        <div className="h-full flex justify-between py-0.5 px-3">
            <a href="/" className="m-1 hover:drop-shadow-xl transition delay-75">
                <img className="h-full" src={OCHAT_LOGO} alt="ochat logo" />
            </a>

            <div className="m-1">
                <Menu as="div" className="h-full relative inline-block text-left">
                    <Menu.Button className={'h-full flex items-center transition delay-75 hover:drop-shadow-xl rounded-full'} >
                        <img className="h-full" src={USER_AVATAR} alt="user avatar" />
                        <ChevronDown className="w-5 h-5" />
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
                        <Menu.Items className="absolute right-0 p-1 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white shadow-xl shadow-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                <button className={'w-full flex items-center rounded-full px-2 py-2 text-sm hover:bg-blue-jelly hover:text-white'} >
                                    Profil
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className={'w-full flex items-center rounded-full px-2 py-2 text-sm hover:bg-blue-jelly hover:text-white'} >
                                    Settings
                                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export { Header as default }