import React, { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState(null);

  // Called when Search form is submitted
  const handleSearch = async (params) => {
    setSearchParams(params);
    setPage(1); // reset pagination
    setLoading(true);
    setError(false);

    try {
      const data = await searchUsers(params, 1);
      setUsers(data.items || []);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Load more results
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await searchUsers(searchParams, nextPage);
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* Search Form */}
      <Search onSearch={handleSearch} />

      {/* Loading */}
      {loading && <p className="mt-4 text-center">Loading...</p>}

      {/* Error */}
      {error && (
        <p className="mt-4 text-center text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Users List */}
      {users.length > 0 && (
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
      )}

      {/* Load More Button */}
      {users.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
