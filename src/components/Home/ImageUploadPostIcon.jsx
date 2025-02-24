import React, { useState, useRef } from 'react';

const ImageUploadPostIcon = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click(); // Programmatically trigger the file input
    };

    return (
        <div className=" ">

            <label
                htmlFor="image-upload"
                className="upload-icon cursor-pointer   "
                onClick={handleClick} // Attach click handler to the label
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </svg>

            </label>
            <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden "
                // ref={fileInputRef} // Ref for programmatic click
                onChange={handleImageUpload} // Attach change handler
            />



        </div>

    );
};

export default ImageUploadPostIcon;