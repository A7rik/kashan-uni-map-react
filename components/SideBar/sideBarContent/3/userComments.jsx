import { useState, useEffect } from "react";
import axios from "axios";
import useStore from "../../../../store/store";

const UserComments = () => {
  const [comments, setComments] = useState([]);
  const profile = useStore((state) => state.profile);
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchComments = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/comments?userId=${profile.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComments(res.data);
      };

      fetchComments();
    }
  }, [profile]); 

  return (
    <div>
      <h2>Your Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <small>on {new Date(comment.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default UserComments;
