import React, { ReactNode } from "react";

interface IControlsWrapper {
	children: ReactNode;
}

function ControlsWrapper({ children }: IControlsWrapper) {
	return <div className="historical-dates__controls-wrapper">{children}</div>;
}

export default ControlsWrapper;
