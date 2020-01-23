import React from 'react';
import ProductCard from '../components/productCard/ProductCard';
import product3dModel1 from '../assets/images/3d-product-living.glb';

export default () => {
    return (
        <ProductCard
            productCategory = 'LIVING ROOM'
            productName = 'ANVÄNDER'
            productDes = 'A sturdy chair with a solid wood'
            product3dModel = {product3dModel1}
            productPrice = '£ 200'
        />
    );
}