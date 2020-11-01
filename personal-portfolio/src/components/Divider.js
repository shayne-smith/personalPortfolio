import React from "react";

const Divider = (props) => {
    const { showHighlight } = props

    return (
        <div id="divider">
            {showHighlight && <div id="highlight"></div>}
        </div>
    )
};

export default Divider;