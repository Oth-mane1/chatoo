import { Emoji, PaperAirplane } from "../../utils/icons";
import UserChatHeader from "./ChatHeader";
import Message from "./Message";
function Chat(props) {
    const { userSelected } = props
    
    return (
        <div className="relative p-3 h-full">
            {
                userSelected ?
                    <>
                        <div className="w-full h-14 absolute -m-3">
                            <UserChatHeader />
                        </div>
                        <div id="messagesContainer" className="h-[calc(100%_-_3.5rem)] overflow-y-auto">
                            <div className="mt-14">
                                <Message />
                            </div>
                        </div>
                        <div className="flex items-center relative w-full px-1 py-2 bg-white rounded-full">
                            <button type="button" className="absolute left-2">
                                <Emoji className="w-10 h-10 hover:stroke-blue-jelly transition duration-200" />
                            </button>
                            <textarea className="w-full pl-12 py-3 mr-4 shadow transition duration-200 outline-none focus:ring-2 ring-offset-1 ring-blue-jelly bg-gray-200 rounded-full resize-none no-scrollbar" placeholder="Message..." rows="1"></textarea>
                            {/* <input type="text" /> */}
                            <button type="button" className="p-2 rounded-full transition duration-200 bg-blue-jelly hover:bg-blue-iceberg text-white outline-none focus:ring-2 ring-offset-1 ring-blue-jelly">
                                <PaperAirplane className="w-8 h-8 pb-1 rotate-45" />
                            </button>
                        </div>
                    </>
                    :
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="p-1">
                            <img className="w-60" src={require("./../../../images/logo/ochat_logo_with_name.png")} alt="avatar" />
                        </div>
                    </div>
            }
        </div>
    )
}

export { Chat as default }