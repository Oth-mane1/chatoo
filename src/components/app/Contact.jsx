import { useId } from "react"
import { Search as SearchIcon } from "./../utils/icons"

function Contact(props) {
    let contactList = [
        {
            id: useId(),
            name: 'Othmane Ouirdy',
            image: require('./../../images/avatars/men_smiling_avatar.png'),
            lastMessage: {
                text: 'See you tomorrow at the park in Imlil Inshaalah so that we can hike.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
            }
        },
        {
            id: useId(),
            name: 'Safae',
            image: require('./../../images/avatars/white_women_avatar.png'),
            lastMessage: {
                text: 'Message from user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
            }
        },
        {
            id: useId(),
            name: 'Karima',
            image: require('./../../images/avatars/black_women_avatar.png'),
            lastMessage: {
                text: 'Bla bla bla bla',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
            }
        },
        {
            id: useId(),
            name: 'Abdo Ouirdy',
            image: require('./../../images/avatars/men_with_glasses.png'),
            lastMessage: {
                text: 'Hi son!',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
            }
        }
    ]

    return (
        <>
            <div className="relative mb-5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5" />
                </div>
                <input type="text" id="input-group-1" className="block w-full pl-10 p-3 focus:ring-blue-iceberg ring-offset-1 focus:ring-2 outline-none transition bg-white text-black text-base rounded-[2rem]" placeholder="Search" />
            </div>
            <div className="h-[calc(100%_-_4rem)] overflow-y-auto bg-white text-sm rounded-[2rem]">
                {
                    contactList.map(user=>{
                        return <UserConversation {...user} key={user.id}/>
                    })
                }               
            </div>
        </>
    )
}

function UserConversation({ name, image, lastMessage: { text, time } }) {
    return (
        <div className="relative w-full flex items-center py-2 px-3 cursor-pointer hover:shadow hover:bg-blue-jelly hover:bg-opacity-20 rounded-[2rem] transition delay-75">
            <div className="w-1/6 hover:drop-shadow-xl transition delay-75">
                <img className="w-14" src={image} alt="ochat logo" />
            </div>
            <div className="w-5/6 flex flex-col px-1 py-1">
                <div className="w-full flex justify-between mb-1 font-semibold">
                    <p>{ name }</p>
                    <span>{ time }</span>
                </div>
                <p className="truncate text-gray-500 ">
                    { text }
                </p>
            </div>
        </div>
    )
}

export { Contact as default }