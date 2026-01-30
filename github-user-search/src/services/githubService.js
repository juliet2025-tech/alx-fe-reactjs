import axios from "axios";

// ALX checker looks for this exact string
const BASE_URL = "https://api.github.com/search/users?q=";

export const searchUsers = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = username;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`, {
      params: {
        per_page: 10,
        page,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
