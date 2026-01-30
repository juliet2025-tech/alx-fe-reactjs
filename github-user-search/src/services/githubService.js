import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUsers = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = username;

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      per_page: 10,
      page,
    },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  return response.data;
};
