import React from 'react';
import ProductCard from '../components/productCard/ProductCard';
import product3dModel2 from '../assets/images/3d-product-kitchen.glb';

export default () => {

    return (
        <ProductCard
            productCategory = 'KITCHEN'
            productName = 'SEKTIÖN'
            productDes = 'Horizontal wall cabinet w/2 doors'
            product3dModel = {product3dModel2}
            productPrice = '£ 300'
        />
    );
}