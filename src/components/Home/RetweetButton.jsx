import React, { useState, useRef, useEffect } from 'react';

function RetweetButton() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const optionsRef = useRef(null);
    const [repost, setRepost] = useState(71)
    const [repostContent, setRepostContent] = useState('Repost')
    const [requoteContent, setRequoteContent] = useState('Quote')
    const [reposted, setReposted] = useState(false);
    const [success, setSuccess] = useState('')

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const closeOptions = () => {
        setIsOpen(false);
    };

    const handleRetweet = () => {
        console.log('Retweet clicked');
        if (reposted) {
            setRepost(repost - 1);
            setReposted(false);
            setSuccess('text-gray-500')
            setRepostContent('Repost')

        } else {
            setRepost(repost + 1);
            setReposted(true);
            setSuccess('text-green-500')
            setRepostContent('Un-Repost')

        }
        closeOptions();
    };


    const handleQuote = () => {
        console.log('Quote clicked');
        if (reposted) {
            setRepost(repost - 1);
            setReposted(false);
            setSuccess('text-gray-500')
            setRequoteContent('Quote')


        } else {
            setRepost(repost + 1);
            setReposted(true);
            setSuccess('text-green-500')
            setRequoteContent('Un-Quote')

        }
        closeOptions();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                optionsRef.current &&
                !optionsRef.current.contains(event.target)
            ) {
                closeOptions();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [buttonRef, optionsRef]);

    return (
        <div className="relative   inline-block text-left ">

            <button
                ref={buttonRef}
                type="button"
                className={`flex gap-2 justify-center w-full rounded-md ${success} shadow-sm px-4 text-sm font-medium  focus:text-green-600`}
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleOptions}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 " aria-hidden="true">
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                </svg>
                <span id='repost'>{repost}</span>

            </button>

            {isOpen && (
                <div
                    ref={optionsRef}
                    className=" border-2 border-gray-400  origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1 " role="none">
                        <button
                            onClick={handleRetweet}
                            className="text-white flex gap-2 w-[140px] font-bold text-left px-4 py-2 text-sm hover:bg-gray-950"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 " aria-hidden="true">
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                            </svg>

                            {repostContent}
                        </button>
                        <button
                            onClick={handleQuote}
                            className="text-white flex gap-2 w-[140px] text-left px-4 py-2 text-sm hover:bg-gray-950 font-bold"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 " aria-hidden="true">
                                <path d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z"></path>
                            </svg>

                            {requoteContent}
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}

export default RetweetButton;