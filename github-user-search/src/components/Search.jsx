import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError(true);
      return;
    }

    setError(false);

    onSearch({
      username,
      location,
      minRepos,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 md:flex-row md:items-end"
    >
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium">Username</label>
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
        <label className="text-sm font-medium">Location</label>
        <input
          type="text"
          placeholder="e.g. Nigeria"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-sm font-medium">Min Repos</label>
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
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Search
      </button>

      {error && (
        <p className="text-red-600 text-sm">
          Username is required
        </p>
      )}
    </form>
  );
}

export default Search;

