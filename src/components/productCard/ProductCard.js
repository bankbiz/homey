import React, { useState } from 'react';
import '@google/model-viewer';

import './ProductCard.css';
import arViewerIcon from './icon-ar-view.svg';
import demoUSDZ from './toy_robot_vintage.usdz';

export default (props) => {
    const [isCollapsed, setCollapsed] = useState(false);
    const openCollapse = () => setCollapsed(!isCollapsed);

    const pushArButton = () => {
        alert('AR Viewer feature support on iOS and Android')
    }

    return (
        <div className="product-card">
            <div className="product-collapse" onClick={openCollapse}>
                <div className="collapse"></div>
            </div>
            <div className="product-category">
                {props.productCategory}
            </div>
            <div className="product-name">
                {props.productName}
            </div>
            <div className="product-des">
                {props.productDes}
            </div>
            <div className={isCollapsed ? "product-3d-img product-3d-img--hide" : "product-3d-img"}>
                <model-viewer
                    src={props.product3dModel}
                    ios-src={demoUSDZ}
                    ar ar-scale="auto"
                    alt="Product Model"
                    auto-rotate
                    camera-controls
                    background-color="rgba(206, 174, 127, 0.75)"
                    data-js-focus-visible
                    quick-look-browsers="safari chrome"
                >
                    <img className="ar-viewer-btn" slot="ar-button" src={arViewerIcon} alt="ar viewer icon" />
                    <div className="product-price">
                        {props.productPrice}
                    </div>
                    <img className="ar-viewer-btn-desktop" onClick={pushArButton} src={arViewerIcon} alt="ar viewer icon" />
                </model-viewer>
                <br /><br />
            </div>
        </div>
    );
}