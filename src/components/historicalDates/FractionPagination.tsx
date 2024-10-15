import React from "react";

interface IFractionPagination {
	currentPointIndex: number;
	pointsLength: number;
}

function FractionPagination({
	currentPointIndex,
	pointsLength,
}: IFractionPagination) {
	return (
		<span className="historical-dates__fraction-pagination">{`0${currentPointIndex}/0${pointsLength}`}</span>
	);
}

export default FractionPagination;
