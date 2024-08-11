import { useState } from "react";
import axios from "axios";

const UpdateComment = ({ commentId, currentText, onUpdate }) => {
  const [text, setText] = useState(currentText);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.put(
        `/api/comments/${commentId}`,
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdate(res.data);
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div>
      <h2>Update Comment</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Comment</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateComment;
