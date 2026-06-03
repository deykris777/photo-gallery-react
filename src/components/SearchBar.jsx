function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;
