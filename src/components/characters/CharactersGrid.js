import React from "react";

const CharactersGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<h1>Loading</h1>
	) : (
		<section className="cards">
			{items.map((items) => (
				<h1>{items.name}</h1>
			))}
		</section>
	);
};

export default CharactersGrid;
