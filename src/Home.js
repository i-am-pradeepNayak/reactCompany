import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const posts = await axios.get('http://127.0.0.1:8000/api/users');
    setpost(posts.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/api/remove/${id}`);
    loadPost();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table table-dark table-hover border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Post-ID</th>
              <th scope="col">Job type</th>
              <th scope="col">Package</th>
              <th scope="col">Experince</th>
              <th scope="col"> Actions</th>
            </tr>
          </thead>
          <tbody>
            {post.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.first_name}</td>
                  <td>{post.last_name}</td>
                  <td>{post.email}</td>
                  <td>
                    <Link
                      className="btn btn-info mr-1"
                      to={`/user/view/${post.id}`}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-light mr-1"
                      to={`/user/edit/${post.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-danger mr-1"
                      onClick={() => deleteUser(post.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
