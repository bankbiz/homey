import React, { useState } from 'react';

import './Popup.css';

export default (props) => {
    const [isPopupOpened, setPopupOpen] = useState(false);
    props.openPopup = () => setPopupOpen(!isPopupOpened);

    return(
        <div className="popup">

        </div>
    );
}