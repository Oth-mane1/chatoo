import { useId } from "react"
import { Search as SearchIcon, Close } from "../../utils/icons"
import UserConversation from "./UserConversation";

// TODO: Add responsive design by hidding the contacts components 
// and replace it with a button in the side or hide the conversation and use a back button
function Contact(props) {
    let contactList = [
        {
            id: useId(),
            name: 'Othmane Ouirdy',
            image: require('./../../../images/avatars/men_smiling_avatar.png'),
            lastMessage: {
                text: 'See you tomorrow at the park in Imlil Inshaalah so that we can hike.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),
                isSeen: false,
                msgUnseen: 3
            }
        },
        {
            id: useId(),
            name: 'Safae',
            image: require('./../../../images/avatars/white_women_avatar.png'),
            lastMessage: {
                text: 'Message from user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),
                isSeen: false,
                msgUnseen: 2
            }
        },
        {
            id: useId(),
            name: 'Karima',
            image: require('./../../../images/avatars/black_women_avatar.png'),
            lastMessage: {
                text: 'Bla bla bla bla',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),
                isSeen: true,
                msgUnseen: 0
            }
        },
        {
            id: useId(),
            name: 'Abdo Ouirdy',
            image: require('./../../../images/avatars/men_with_glasses.png'),
            lastMessage: {
                text: 'Hi son!',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),
                isSeen: true,
                msgUnseen: 2
            }
        }
    ]

    const [userSelected, setUserselected] = props.userSelected


    function setUserActive(id) {
        document.querySelectorAll(".userConversation").forEach(usrc => usrc.classList.remove("bg-blue-jelly", "bg-opacity-20"))
        document.getElementById(id).classList.add("bg-blue-jelly", "bg-opacity-20");
        if (window.screen.width > 768) return
        document.getElementById("o-header").classList.add("hidden");
        document.getElementById("o-contact").classList.add("hidden");
        document.getElementById("o-chat").classList.remove("hidden");
    }

    return (
        <>
            <div className="relative mb-5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5" />
                </div>
                <input type="text" id="contactSearch" className="block w-full pl-10 pr-12 p-3 focus:ring-blue-iceberg ring-offset-1 focus:ring-2 outline-none transition bg-white text-black text-base rounded-[2rem]" placeholder="Search" onChange={(e) => { document.getElementById("clearSearchButton").style.display = e.target.value ? "flex" : "none"; }} />
                <div id="clearSearchButton" className="hidden absolute inset-y-0 right-0 items-center pl-1 pr-5 cursor-pointer hover:text-red-600" onClick={(e) => { document.getElementById("contactSearch").value = ""; document.getElementById("clearSearchButton").style.display = "none"; }}>
                    <Close className="w-5 h-5" />
                </div>
            </div>
            <div className="h-[calc(100%_-_4rem)] overflow-y-auto bg-white text-sm rounded-[2rem]">
                {
                    contactList.map(user => {
                        return <UserConversation {...user} key={user.id} onClick={() => { setUserActive(user.id); setUserselected(user.id) }} />
                    })
                }
            </div>
        </>
    )
}

export { Contact as default }