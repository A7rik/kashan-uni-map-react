import { useState, useEffect } from "react";
import axios from "axios";
import useStore from "../../../../store/store";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const roomId = useStore((state) => state.roomId);
  useEffect(() => {   
    const fetchComments = async () => {
      const res = await axios.get(`/api/comments?roomId=${roomId}`);
      setComments(res.data);
    };

    fetchComments();
    console.log(roomId);
    
  }, [roomId]);

  const addComment = async (e) => {
    
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (newComment.trim() === "") return;

    try {
      const res = await axios.post(
        "/api/comments",
        { roomId, text: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments([...comments, res.data]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <div>
        <form onSubmit={addComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <small>
              by {comment.user.username} on{" "}
              {new Date(comment.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
