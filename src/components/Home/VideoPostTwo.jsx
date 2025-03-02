import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserReactions from "./UserReactions";


const VideoPostTwo = () => {
    const videoRefs = useRef({});


    // Posts Data
    const posts = [
        {
            id: "post1",
            profilePic: "/jaytee.jpg",
            author: "Dev_jaytee",
            username: "@jaytee",
            content: "Solidity & Cairo is building block language one need to learn to build Smart Contracts on EVM & Starknet.",
            hashtags: ["#Solidity ", "  #Cairo", "  #Mano"],
            videoSrc: "/videoOne.mp4",
        }

    ];

    // Auto Play Videos on Scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = videoRefs.current[entry.target.dataset.id];
                    if (video) {
                        entry.isIntersecting ? video.play() : video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        Object.values(videoRefs.current).forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="">

            <div className=" w-[100%]  bg-black border-b-2 border-gray-800 mb-10 ">

                {/* Posts */}
                {posts.map((post) => (
                    <div key={post.id} className="p-4 last:border-none flex border-b-2 border-gray-800 w-full ">

                        <div className="w-[12%] flex">
                            {/* Profile Picture */}
                            <img
                                src={post.profilePic}
                                alt="Profile"
                                className="sm:w-12 w-9 sm:h-12 h-9 rounded-full object-cover"
                            />

                        </div>


                        <div className=" bg-black w-[88%]">

                            {/* USER DETAILS */}
                            <div className="justify-between items-center flex">

                                <div className="flex gap-1 items-center">

                                    <Link to='/Profile'><h1 className="font-extrabold text-lg">{post.author} </h1></Link>

                                    {/* VERIFIED ICON */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 mt-1 items-center" aria-hidden="true">
                                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                                    </svg>
                                    {/* END FOR VERIFIED ICON */}

                                    <p className="font-light text-gray-400 text-lg">{post.username}</p>
                                    <p className="text-gray-400 -mt-2 font-bold">.</p>
                                    <p className="font-light text-[16px] text-gray-400">56m</p>
                                </div>

                                {/* DOTTED ICON */}
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 hover:bg-gray-700 hover:text-blue-500 hover:rounded-full " aria-hidden="true">
                                        <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                    </svg>
                                </div>
                                {/* END FOR DOTTED ICON */}

                            </div>
                            {/* END FOR USER DETAILS */}

                            <div className="font-medium text-[16px]">
                            {post.content}
                            <div className="font-medium text-blue-500 space-x-1.5">
                            {post.hashtags}
                            </div>
                            
                            </div>


                            {post.videoSrc && (
                                <video ref={(el) => (videoRefs.current[post.id] = el)} data-id={post.id} src={post.videoSrc} controls muted loop 
                                className="w-full border-2 border-gray-500 mt-2.5 rounded-lg h-[400px]">

                                </video>
                            )}

                            {post.image && <img src={post.image} alt="Post" className="w-full rounded-lg mb-4" />}
                            {post.images && (
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {post.images.map((img, index) => (
                                        <img key={index} src={img} alt={`Post ${index}`} className="w-full h-[200px] rounded-lg" />
                                    ))}
                                </div>
                            )}

                            <div>
                                <UserReactions/>
                            </div>


                        </div>

                    </div>
                ))}


            </div>
        </div>
    );
};

export default VideoPostTwo;