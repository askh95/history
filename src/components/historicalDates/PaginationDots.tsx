import React from "react";

interface IPaginationDots {
	currentPointIndex: number;
	pointsLength: number;
	bulletClickHandler: (id: number) => void;
}

function PaginationDots({
	currentPointIndex,
	pointsLength,
	bulletClickHandler: handleBulletClick,
}: IPaginationDots) {
	const bullets = [];

	for (let i = 1; i <= pointsLength; i++) {
		bullets.push(
			<span
				key={`pagination-bullet-${i}`}
				className={`historical-dates__bullets-pagination__bullet ${
					i === currentPointIndex &&
					"historical-dates__bullets-pagination__bullet_active"
				}`}
				onClick={() => handleBulletClick(i)}
			></span>
		);
	}

	return <div className="historical-dates__bullets-pagination">{bullets}</div>;
}

export default PaginationDots;
