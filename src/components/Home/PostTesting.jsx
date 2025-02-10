import React from 'react'
import { Link } from 'react-router-dom';
import {
    ChatBubbleLeftEllipsisIcon,
    ArrowPathRoundedSquareIcon,
    HeartIcon,
    EyeIcon,
    BookmarkIcon,
    ShareIcon,
    CameraIcon,
    PhotoIcon,
    ChartBarIcon,
    FaceSmileIcon,
    CalendarDaysIcon,
  } from "@heroicons/react/24/outline";
  
// Add libraries for date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PostTesting() {
  const [likes, setLikes] = useState({ post1: 478, post2: 478 });
  const [comments, setComments] = useState({ post1: 15, post2: 15 });
  const [retweets, setRetweets] = useState({ post1: 10, post2: 10 });
  const [emoji, setEmoji] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleStatChange = (post, statType) => {
    if (statType === "like") {
      setLikes((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    } else if (statType === "comment") {
      setComments((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    } else if (statType === "retweet") {
      setRetweets((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    }
  };

  const handleEmojiSelect = (emoji) => {
    setEmoji(emoji);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };


  return (
    <div>
      {/* Post Input */}
      <div className="bg-black border border-gray-600 p-4 rounded-[20px] mb-10">
            <div className="flex items-center mb-4">
              <Link to="https://x.com/IrmiyaJeth79445">
                <img
                  src="./images/jay.jpg"
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
              <textarea
                className="ml-4 w-full p-2 rounded-lg resize-none text-white bg-black placeholder-gray-500 focus:outline-none"
                placeholder="What's happening?!"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <div className="icons flex space-x-4 text-blue-400">
                {/* Camera Icon: File Input for Images/Videos */}
                <label htmlFor="file-input" className="cursor-pointer">
                  <CameraIcon className="w-5 h-5" />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                />
                {/* Photo Icon: File Input for Images */}
                <label htmlFor="photo-input" className="cursor-pointer">
                  <PhotoIcon className="w-5 h-5" />
                </label>
                <input
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                {/* ChartBar Icon: Placeholder for statistics/graph (example) */}
                <ChartBarIcon className="w-5 h-5 cursor-pointer" />
                {/* FaceSmile Icon: Placeholder for emoji picker */}
                <div className="relative">
                  <FaceSmileIcon className="w-5 h-5 cursor-pointer" onClick={() => handleEmojiSelect("😊")} />
                  {emoji && <span className="absolute left-8 bottom-0 text-xl">{emoji}</span>}
                </div>
                {/* Calendar Icon: Date Picker */}
                <div className="relative">
                  <CalendarDaysIcon
                    className="w-5 h- cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  />
                  {showDatePicker && (
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      inline
                      className="absolute top-8 left-0 bg-white text-black rounded-md shadow-lg"
                    />
                  )}
                </div>
              </div>
              <button className="bg-gray-600 text-black px-4 py-1 rounded-[20px] hover:bg-gray-200">
                Post
              </button>
            </div>
          </div>

    </div>
  )
}
