import { useState } from "react";
import RetweetButton from "./RetweetButton";
import CommentButton from "./CommentButton";

export default function UserReactions() {
    const [likes, setLikes] = useState(40);
    const [liked, setLiked] = useState(false);
    const [love, setLove] = useState(22)
    const [comment, setComment] = useState(2)
    const [successLiked, setSuccessLiked] = useState('')
    

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
            setSuccessLiked('text-gray-500')
        } else {
            setLikes(likes + 1);
            setLiked(true);
            setSuccessLiked('text-red-500')
        }
    };

    return (
        <div className="my-3">

            <div className="flex items-center justify-between ">

               

                {/* COMMENT BUTTON */}
                <div>
                <CommentButton/>
                </div>
                {/* <button  className="flex items-center text-gray-500 gap-1 hover:text-blue-500 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 " aria-hidden="true">
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                    </svg>
                    <span>{comment}</span> 
                </button> */}
                {/* END FOR COMMENT BUTTON */}

                {/* REPOST BUTTON */}
                <button className="flex items-center text-gray-500 gap-1 hover:text-green-500 hover:cursor-pointer">
                    <RetweetButton/>
                    
                </button>
                {/* END FOR REPOST BUTTON */}

                {/* LOVE BUTTON */}
                <button onClick={handleLike} className={`flex items-center text-gray-500 gap-1 hover:text-red-500 hover:cursor-pointer ${successLiked}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5  " aria-hidden="true">
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </svg>
                    <span>{likes}</span>
                </button>
                {/* END FOR LOVE BUTTON */}

                {/* VIEWS */}
                <button className="flex items-center text-gray-500 gap-1 hover:text-blue-500 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 " aria-hidden="true">
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                    </svg>
                    <span>20M</span>
                </button>
                {/* END FOR VIEWS */}

                {/* SHARE BUTTON */}
                <button className="flex items-center text-gray-500 gap-1  hover:cursor-pointer">

                    {/* BOOKMARK ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 hover:text-blue-500 " aria-hidden="true">
                        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                    </svg>

                    {/* SHARE ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 hover:text-blue-500 " aria-hidden="true">
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                    </svg>

                </button>
                {/* END FOR SHARE */}

            </div>

        </div>
    )
}
