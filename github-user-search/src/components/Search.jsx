import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      // Call fetchUserData as ALX expects
      const data = await fetchUserData({ username, location, minRepos }, 1);
      setUsers(data.items || []);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle "Load More" button
  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchUserData({ username, location, minRepos }, nextPage);
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 md:flex-row md:items-end"
      >
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="e.g. Nigeria"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-1">Min Repos</label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 mt-2 md:mt-0"
        >
          Search
        </button>
      </form>

      {/* Loading & Error */}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && (
        <p className="mt-4 text-center text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Users List */}
      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full"
            />
            <h3 className="font-semibold mt-2">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 mt-1"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {users.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
{error && <p className="text-red-600 mt-2 text-center">Looks like we cant find the user</p>}


export default Search;
