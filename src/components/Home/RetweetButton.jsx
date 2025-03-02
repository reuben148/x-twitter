import React, { useState, useRef, useEffect } from 'react';

function RetweetButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const optionsRef = useRef(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const closeOptions = () => {
    setIsOpen(false);
  };

  const handleRetweet = () => {
    console.log('Retweet clicked');
    // Add your retweet logic here
    closeOptions();
  };

  const handleQuote = () => {
    console.log('Quote clicked');
    // Add your quote logic here
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
    <div className="relative inline-block text-left">

      <button
        ref={buttonRef}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleOptions}
      >
        Retweet
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={optionsRef}
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              onClick={handleRetweet}
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Retweet
            </button>
            <button
              onClick={handleQuote}
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RetweetButton;