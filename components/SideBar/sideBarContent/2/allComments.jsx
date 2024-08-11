import { useState, useEffect } from 'react';
import axios from 'axios';

const AllComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get('/api/comments');
      setComments(res.data);
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h2>All Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <small>by {comment.user.username} on {new Date(comment.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
