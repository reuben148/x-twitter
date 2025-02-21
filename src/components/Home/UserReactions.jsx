import { useState } from "react";

export default function UserReactions() {
    const [likes, setLikes] = useState(98);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>

      <button onClick={handleLike} className="flex items-center text-gray-500 hover:text-red-500">
              <h1>Hello</h1>
              <span>{likes}</span>
            </button>
    </div>
  )
}
