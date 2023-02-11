import { useState, useEffect, useCallback } from "react";

function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
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

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username, fetchData]);

  return [data, loading, error, fetchData];
}

export default useGithubUser;
