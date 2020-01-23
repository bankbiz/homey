import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import ProductCard from '../productCard/ProductCard';

import '@google/model-viewer';
import '@brainhubeu/react-carousel/lib/style.css';

import './ProductCarousel.css';

export default (props) => {

    return (
        <div className="product-carousel">
            <Carousel
                slidesPerPage = {1}
                infinite
                keepDirectionWhenDragging
                itemWidth = {450}
                // autoPlay = {5000}
                // animationSpeed = {1500}
            >
                <ProductCard
                    productCategory = {props.productCategory1}
                    productName = {props.productName1}
                    productDes = {props.productDes1}
                    product3dModel = {props.product3dModel1}
                    productPrice = {props.productPrice1}
                />
                <ProductCard
                    productCategory = {props.productCategory2}
                    productName = {props.productName2}
                    productDes = {props.productDes2}
                    product3dModel = {props.product3dModel2}
                    productPrice = {props.productPrice2}
                />
                <ProductCard
                    productCategory = {props.productCategory3}
                    productName = {props.productName3}
                    productDes = {props.productDes3}
                    product3dModel = {props.product3dModel3}
                    productPrice = {props.productPrice3}
                />
            </Carousel>
        </div>
    );
}