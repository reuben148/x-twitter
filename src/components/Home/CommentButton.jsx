import React, { useState } from 'react';

const CommentButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(10);

  const handleCommentClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleReplyClick = () => {
    setCommentCount((prevCount) => prevCount + 1);
    setIsPopupOpen(false);
  };

  return (
    <div className=''>
      <button
        onClick={handleCommentClick}
        className="flex items-center text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 "
          aria-hidden="true"
        >
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
        </svg>
        {commentCount > 0 && <span className="text-sm">{commentCount}</span>}
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex w-[95%] justify-center items-center">
          <div className="bg-black border-2  border-gray-800 rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={handleClosePopup}
              className="top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <textarea
              className="w-full border border-gray-800 rounded p-2 mb-4 mt-6"
              placeholder="Write your comment..."
            />

            <div className="flex justify-end">
              <button
                onClick={handleReplyClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentButton;