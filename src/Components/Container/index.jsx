import React from 'react';
import './styles.scss'
// import PropTypes from 'prop-types';

Container.propTypes = {
    
};

function Container(props) {
    return (
        <div id="app_container">

          <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                    <li data-target="#carouselId" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    <img src="image/banner2.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block text-left">
                        <h3>Natural Skincare</h3>
                        <p>Lab Series Skincare for Women - Lookfantastic UK</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="image/banner3.jpg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block text-left">
                        <h3>Natural Skincare</h3>
                        <p>Lab Series Skincare for Women - Lookfantastic UK</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>


          <div className="grid wide app_container-update">
            <div className="row sm-gutter app_content">
              <div className="col l-2 m-0 c-0">
                <nav className="category">
                  <h3 className="category_heading">
                    <i className="fa fa-list-ul" aria-hidden="true" />
                    Danh mục
                  </h3>
                  <ul className="category_list">
                    <li className="category_item category_active"><a href="hehe" className="category_link">Tất cả sản phẩm</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Ohui</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Whoo</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Su:m37</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Set mini</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Thực phẩm chức năng</a></li>
                    <li className="category_item"><a href="hehe" className="category_link">Dịch vụ</a></li>
                  </ul>
                </nav>					
              </div>
              <div className="col l-10 m-12 c-12">
                <div className="mobile_category">
                  <ul className="mobile_category-list">
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Thefirst Tái Sinh </a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Dưỡng Trắng</a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Prime Advancer</a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Dưỡng Ẩm</a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Chống Lão Hóa</a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Make Up</a>
                    </li>
                    <li className="mobile_category-item">
                      <a href className="mobile_category-link">Ohui Chống Nắng</a>
                    </li>
                  </ul>
                </div>
                <div className="home_filter">
                  <div className="home_filter-left">
                    <span className="home_filter-label">Sắp xếp theo</span>
                    <button className="home_filter-btnMy btn ">Phổ biến</button>
                    <button className="home_filter-btnMy btn btn--primary">Mới nhất</button>
                    <button className="home_filter-btnMy btn">Bán chạy</button>
                    <div className="select_input">
                      <div className="select_input-label">
                        <div className="select_input-price">
                          Giá
                        </div>
                        <div className="select_input-icon">
                          <i className="fa fa-angle-down" />
                        </div>								
                      </div>
                      <ul className="select_input-list">
                        <li className="select_input-item">
                          <a href className="select_input-link">
                            Giá : Thấp đến Cao
                          </a>
                        </li>
                        <li className="select_input-item">
                          <a href className="select_input-link">
                            Giá : Cao đến Thấp
                          </a>
                        </li>
                      </ul>
                    </div>	
                  </div>
                  <div className="home_filter-right">
                    <div className="home_filter-pageNum">
                      <span className="home_filter-current">1</span>
                      /1
                    </div>
                    <div className="home_filter-control">
                      <a href className="home_filter-btn home_filter-active">
                        <i className="fa fa-angle-left" aria-hidden="true" />
                      </a>
                      <a href className="home_filter-btn">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* HOME FILTER END  */}				
                <div className="home_product">
                  <div className="row sm-gutter">
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <div className="col l-3 m-4-1 c-6">
                      {/* HOME PRODUCT ITEM */}
                      <a className="home_product-item" href="/productdetail">
                        <div className="home_product-img" style={{backgroundImage: 'url(https://img.abaha.vn/photos/resized/320x/83-1586781803-myphamohui-lgvina.png)'}}>
                        </div>
                        <div className="home_product-wrapperCart">
                          <h4 className="home_product-name">Set kem mắt tái sinh Ohui The First Geniture Eye Cream Edition Grand Blue</h4>
                          <div className="home_product-price">
                            <span className="home_product-priceUp">4.600.000đ</span>
                            <span className="home_product-priceDown">4.140.000đ</span>
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
                          <div className="home_product-sale">10%</div>
                          <div className="home_product-saleoff">GIẢM</div>
                        </div>
                        <div className="home_product-shoppingcart">
                          <i className="home_product-iconcart fa fa-shopping-cart" aria-hidden="true" />
                        </div>
                      </a>		
                      {/* HOME PRODUCT ITEM END*/}
                    </div>
                    {/* HOME PRODUCT END*/}
                    <ul className="home_page">
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          <i className="home_page-icon home_page-iconL fa fa-chevron-left" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="home_page-active  home_page-item">
                        <a href className="home_page-link">
                          1
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          2
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          3
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          4
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          5
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">
                          ...
                        </a>
                      </li>
                      <li className="home_page-item">
                        <a href className="home_page-link">		
                          <i className="home_page-icon home_page-iconR fa fa-chevron-right" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* HOME FILTER END */}
                </div>
                
              </div>
            </div>
            {/* END CONTAINER */}
          </div>
          {/* END CONTENT PRODUCT */}

          <div className="image_container">
            <section className="image_wrapper">
              <div className="image_list">
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i1_540x.jpg?v=1609338265)"}} />
                </div>
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i2_540x.jpg?v=1609338295)"}} />
                </div>
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i6_360x.jpg?v=1609338358)"}} />
                </div>
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i3_360x.jpg?v=1609338382)"}} />
                </div>
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i4_360x.jpg?v=1609338410)"}} />
                </div>
                <div className="image_item">
                  <div className="image_link" style={{"background-image":"url(https://cdn.shopify.com/s/files/1/0514/3497/9480/files/i5_360x.jpg?v=1609338429)"}} />
                </div>
              </div>
            </section>
          </div>

          <div className="grid wide trickger_container">			
            <div className="col l-12">
              <div className="trickger_title">Tips &amp; Tricks</div>
            </div>
            <div className="row sm-gutter">
              <div className="col l-4 m-12 c-12 trickger_hover">
                <div className="trickger_post-top">
                  <a href className="trickger_img">
                    <img src="https://cdn.shopify.com/s/files/1/0514/3497/9480/articles/1_1024x1024.jpg?v=1611901081" alt="" className="trickger_post-img" />
                  </a>
                  <ul className="trickger_post-list">
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link trickger_post-linkv1">29 Jan</a>
                    </li>
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link">By Lindsay Weinberg</a>
                    </li>
                    <li className="trickger_post-item trickger_post-itemv1">
                      <a href className="trickger_post-link">Beauty tips</a>
                    </li>
                  </ul>
                </div>
                <div className="trickger_post-bot">
                  <div className="trickger_post-head">
                    <a href className="trickger_head-link">Easy Home Remedy For Moisture Control...</a>
                  </div>
                  <div className="trickger_post-footer">Like every year, this new year also brought in a lot of resolutions that we p...</div>
                </div>
              </div>
              <div className="col l-4 m-12 c-12 trickger_hover">
                <div className="trickger_post-top">
                  <a href className="trickger_img">
                    <img src="https://cdn.shopify.com/s/files/1/0514/3497/9480/articles/2_1024x1024.png?v=1607855561" alt="" className="trickger_post-img" />
                  </a>
                  <ul className="trickger_post-list">
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link trickger_post-linkv1">13 Dec</a>
                    </li>
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link">By Lindsay Weinberg</a>
                    </li>
                    <li className="trickger_post-item trickger_post-itemv1">
                      <a href className="trickger_post-link">Beauty tips</a>
                    </li>
                  </ul>
                </div>
                <div className="trickger_post-bot">
                  <div className="trickger_post-head">
                    <a href className="trickger_head-link">Breast Augmentation Breast Enlargement...</a>
                  </div>
                  <div className="trickger_post-footer">Breast Augmentation in Philippines and Breast Implants in Philippines comes u...</div>
                </div>
              </div>
              <div className="col l-4 m-12 c-12 trickger_hover">
                <div className="trickger_post-top">
                  <a href className="trickger_img">
                    <img src="https://cdn.shopify.com/s/files/1/0514/3497/9480/articles/4_1024x1024.png?v=1607857245" alt="" className="trickger_post-img" />
                  </a>
                  <ul className="trickger_post-list">
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link trickger_post-linkv1">13 Dec</a>
                    </li>
                    <li className="trickger_post-item">
                      <a href className="trickger_post-link">By Lindsay Weinberg</a>
                    </li>
                    <li className="trickger_post-item trickger_post-itemv1">
                      <a href className="trickger_post-link">Beauty tips</a>
                    </li>
                  </ul>
                </div>
                <div className="trickger_post-bot">
                  <div className="trickger_post-head">
                    <a href className="trickger_head-link">A Sound Way To Treat Hearing Loss In...</a>
                  </div>
                  <div className="trickger_post-footer">Terrible vision affects your life in almost every way. It hinders you from do...</div>
                </div>
              </div>
            </div>				
          </div>

      </div>
      
    );
}

export default Container;