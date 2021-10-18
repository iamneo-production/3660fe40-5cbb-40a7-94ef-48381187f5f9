const SearchComponent = () => {
	return (
		<div className="search">
			<input
				className="typing"
				type="text"
				placeholder="Type here to search"
				id="searchBox"
			/>
			<button id="searchButton" className="searchbtn">search</button>
		</div>
	);
};
export default SearchComponent;
