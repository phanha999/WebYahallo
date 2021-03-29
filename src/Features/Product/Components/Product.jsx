import React from 'react';
import PropTypes from 'prop-types';
import { PLACE_HOLDER, STATIC_HOST } from '../../../Constant/common';
import './styles.scss'

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : PLACE_HOLDER;
    return (
        <div className="home_product-wrapper" style={{padding: '16px 8px 8px 8px'}} > 
        <a className="home_product-item" href="/productdetail">
        <div className="home_product-img" style={{backgroundImage: `url(${thumbnailUrl})`}}>
        </div>
        <div className="home_product-wrapperCart">
            <h4 className="home_product-name">{product.name}</h4>
            <div className="home_product-price">
        
            <span className="home_product-priceDown">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}              
            </span>
            </div>
            <div className="home_product-rank">
            <div className="home_product-like home_product-likeAcitve">
                <i className="home_product-likeWhite fa fa-heart-o" aria-hidden="true" />
                <i className="home_product-likeRed fa fa-heart" aria-hidden="true" />
            </div>
            <div className="home_product-star">
                <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                <i className="home_product-starGold fa fa-star" aria-hidden="true" />
                <i className="home_product-starGold fa fa-star" aria-hidden="true" />
            </div>
            <div className="home_product-sold">69 đã bán</div>
            </div>
            <div className="home_product-origin">
            <div className="home_product-company">Ohui</div>
            <div className="home_product-country">Nhật bản</div>
            </div>
        </div>
        <div className="home_product-favourite">
            <span>
            Yêu thích
            </span>						
        </div>
        <div className="home_product-wrapperSale">
            <div className="home_product-sale">
                {product.promotionPercent > 0 ? `  -${product.promotionPercent}%` : ''}
            </div>
            <div className="home_product-saleoff">GIẢM</div>
        </div>
        <div className="home_product-shoppingcart">
            <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
        </div>
        </a>		
        </div>
           
       
    );
}

export default Product;