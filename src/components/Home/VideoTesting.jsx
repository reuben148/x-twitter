import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const VideoTesting = () => {
    // State Management
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [retweets, setRetweets] = useState({});
    const [showRetweetPopup, setShowRetweetPopup] = useState(null);
    const [showCommentBox, setShowCommentBox] = useState(null);
    const [emoji, setEmoji] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const videoRefs = useRef({});

    // Handle Like Toggle
    const handleLikeToggle = (postId) => {
        setLikes((prev) => ({
            ...prev,
            [postId]: prev[postId] ? 0 : 1, // Toggles between like (1) and unlike (0)
        }));
    };

    // Handle Retweet Popup Toggle
    const handleRetweetClick = (postId) => {
        setShowRetweetPopup(showRetweetPopup === postId ? null : postId);
    };

    // Handle Retweet Selection
    const handleRetweetAction = (postId, type) => {
        setRetweets((prev) => ({
            ...prev,
            [postId]: (prev[postId] || 0) + 1, // Increments retweet count
        }));
        setShowRetweetPopup(null); // Close the retweet popup
        alert(`You selected ${type} for ${postId}`);
    };

    // Handle Comment Box Toggle
    const handleCommentClick = (postId) => {
        setShowCommentBox(showCommentBox === postId ? null : postId);
    };

    // Handle Comment Submission
    const handleCommentSubmit = (postId, comment) => {
        setComments((prev) => ({
            ...prev,
            [postId]: [...(prev[postId] || []), comment],
        }));
        setShowCommentBox(null); // Close the comment box
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    // Posts Data
    const posts = [
        {
            id: "post1",
            profilePic: "/images/aisha.jpg",
            author: "Big Brother Naija",
            username: "@BBnaija",
            content: "With Agent Ben's mission accomplished, Handi, Ozee, and Wanni are left hunting high and low for their missing crates of eggs.",
            hashtags: ["#BBNaija", "#BBNaijaS9"],
            videoSrc: "/StarknetVideo.mp4",
        },
        {
            id: "post2",
            profilePic: "/images/aisha.jpg",
            author: "Colgate Nigeria",
            username: "@Colgate-ng",
            content: "Colgate task is LIVE TODAY!!! Follow @colgate_ng and stand a chance to win a 50k cash prize. Don't sleep on this one.",
            hashtags: ["#DoYangaWithYourSmile"],
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
        <div className="min-h-screen bg-black text-white flex justify-center items-center font-serif">
            <div className="relative w-[557px] mx-auto bg-black px-4 border-l border-r border-gray-600 pl-12">

                {/* Posts */}
                {posts.map((post) => (
                    <div key={post.id} className="mb-6 pb-6 border-b border-gray-600 last:border-none flex space-x-3">
                        {/* Profile Picture */}
                        <img
                            src={post.profilePic}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        <div className="post bg-black border border-gray-600 p-4 rounded-[20px] text-[15px]">
                            <div className="content mb-4">
                                <h3 className="font-bold">{post.author}</h3>
                                <p className="text-sm text-gray-400">{post.username}</p>
                                <p className="mt-2">{post.content}</p>
                            </div>

                            {post.videoSrc && (
                                <video ref={(el) => (videoRefs.current[post.id] = el)} data-id={post.id} src={post.videoSrc} controls muted loop className="w-full rounded-lg h-[400px]"></video>
                            )}

                            {post.image && <img src={post.image} alt="Post" className="w-full rounded-lg mb-4" />}
                            {post.images && (
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {post.images.map((img, index) => (
                                        <img key={index} src={img} alt={`Post ${index}`} className="w-full h-[200px] rounded-lg" />
                                    ))}
                                </div>
                            )}


                        </div>

                    </div>
                ))}


            </div>
        </div>
    );
};

export default VideoTesting;