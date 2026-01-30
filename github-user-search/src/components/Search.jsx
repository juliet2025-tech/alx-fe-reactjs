import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers({ username, location, minRepos }, 1);
      setUsers(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await searchUsers({ username, location, minRepos }, nextPage);
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
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-2 py-1"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-2 py-1"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-2 py-1"
        />
        <button type="submit" className="bg-black text-white px-3 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Something went wrong</p>}

      {/* ✅ map() is here */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h3 className="font-semibold mt-2">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
              View Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button onClick={loadMore} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;

