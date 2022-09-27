function UserConversation(props) {
    const { onClick, id, name, image, lastMessage: { text, time, isSeen, msgUnseen }} = props;
    return (
        <div id={id} onClick={onClick} className="userConversation relative w-full flex items-center py-2 px-3 cursor-pointer hover:shadow hover:bg-blue-jelly hover:bg-opacity-20 rounded-3xl transition delay-75">
            <div className="relative w-1/6 hover:drop-shadow-xl transition delay-75">
                <img className="w-14" src={image} alt="ochat logo" />
                {isSeen ? "" :
                    <span className="flex justify-center top-0 left-10 absolute w-5 h-5 bg-green-400 font-semibold rounded-full">
                        {msgUnseen}
                    </span>
                }
            </div>
            <div className={"w-5/6 flex flex-col px-2 py-1 " + (!isSeen ? "font-semibold" : "")}  >
                <div className="w-full flex justify-between mb-1 font-semibold">
                    <p>{name}</p>
                    <span>{time}</span>
                </div>
                <p className="truncate text-gray-500 ">
                    {text}
                </p>
            </div>
        </div>
    )
}

export { UserConversation as default }