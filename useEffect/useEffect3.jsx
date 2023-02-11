import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt={`Avatar for ${data.name}`} />
      <p>Location: {data.location}</p>
      <p>Bio: {data.bio}</p>
    </div>
  );
};

export default GithubUser;
