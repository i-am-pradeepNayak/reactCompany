import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Showjobs = () => {
  const [post, setdata] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    loadUser();
  }, []);

  // api/getjob/{id}

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8000/api/getjob/${id}`);
    setdata(res.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/api/remove/${id}`);
    loadUser();
  };

  console.log(post);
  return (
    <div className="container">
      <div className="py-4">
        <Link className="btn btn-success" to={`/Addjobs/${id}`}>
          Add post
        </Link>
        <br />
        <br />

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
                <tr key={post.jobid}>
                  <td>{post.jobid}</td>
                  <td>{post.jobtype}</td>
                  <td>{post.jpack}</td>
                  <td>{post.jloc}</td>
                  <td>
                    <Link
                      className="btn btn-info mr-1"
                      to={`/showlist/ViewUser/${post.jobid}`}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-light mr-1"
                      to={`/showlist/EditUser/${post.jobid}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="btn btn-danger mr-1"
                      onClick={() => deleteUser(post.jobid)}
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

export default Showjobs;
