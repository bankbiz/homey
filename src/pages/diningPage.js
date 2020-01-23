import React from 'react';
import ProductCard from '../components/productCard/ProductCard';
import product3dModel3 from '../assets/images/3d-product-dining.glb';

export default () => {
    return (
        <ProductCard
            productCategory = 'DINING ROOM'
            productName = 'ANVÄNDER'
            productDes = 'A sturdy chair with a solid wood'
            product3dModel = {product3dModel3}
            productPrice = '£ 800'
        />
    );
}