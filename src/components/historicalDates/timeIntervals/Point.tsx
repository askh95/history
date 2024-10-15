import React, { RefObject } from "react";

interface IPoint {
	index: number;
	label: string;
	prevPointRef?: RefObject<HTMLDivElement>;
	prevPointNumberRef?: RefObject<HTMLSpanElement>;
	bulletClickHandler: (id: number) => void;
}

function Point({
	index,
	label,
	prevPointRef,
	prevPointNumberRef,
	bulletClickHandler: handleBulletClick,
}: IPoint) {
	return (
		<div className={`time-intervals__point point${index}`} ref={prevPointRef}>
			<span
				className="point-number"
				ref={prevPointNumberRef}
				onClick={() => handleBulletClick(index)}
			>
				{index}
			</span>
			<span className="point-label">{label}</span>
		</div>
	);
}

export default Point;
