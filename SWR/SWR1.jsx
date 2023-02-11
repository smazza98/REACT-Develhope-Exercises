import useSWR from "swr";

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username
      ? https //api.github.com/users/${username} : null,
      : (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false }
  );

  return [data, error, mutate];
}

export default useGithubUser;
