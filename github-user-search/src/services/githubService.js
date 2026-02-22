import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = username;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const token = import.meta.env.VITE_GITHUB_TOKEN; // Vite env variable

  try {
    const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`, {
      params: {
        per_page: 10,
        page,
      },
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response.data;
  } catch (err) {
    console.error("GitHub API Error:", err.response?.status, err.response?.data);
    throw err;
  }
};
