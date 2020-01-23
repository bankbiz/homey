import React, { useState } from 'react';
import arViewerIcon from './icon-ar-view.svg';

import './ArViewer.css';

export default () => {
    const pushArButton = () => {

        // let isFirefox = typeof InstallTrigger !== 'undefined';
        // let isEdge = !isIE && !!window.StyleMedia;
        // let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        // let isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

        // if (navigator.userAgent.match(/Android/i) && isChrome) {}
        // else if ( navigator.userAgent.match(/iPhone/i)
        //             || navigator.userAgent.match(/iPad/i)
        //             || navigator.userAgent.match(/iPod/i)
        //             && isSafari) {}
        // else console.log(false);
        console.log('isPushed')
    };

    return (
        <div className="ar-viewer">
            {/* <img slot="ar-button" onClick={pushArButton} src={arViewerIcon} alt="ar viewer icon" /> */}
            <button slot="ar-button" onClick={pushArButton}>
                <img slot="ar-button" src={arViewerIcon} alt="ar viewer icon" />
            </button>
        </div>
    );
}