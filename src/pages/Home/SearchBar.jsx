/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-4 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 outline-none focus:ring-2 focus:ring-white/50 transition-all"
      />
    </div>
  );
};

export default SearchBar;
