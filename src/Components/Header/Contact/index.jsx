import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss'

Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <div id="app_container" className="container_contact">
        <div className="grid wide">
          <div className="row">
            <div className="col l-9 m-12 c-12 backgroundContact">
              <div className="entry_contacts">
                <div className="entry_contacts-heading">
                  <h1 className="entry_contacts-title">Trung tâm trợ giúp</h1>
                  <p className="entry_contacts-info">Mọi thắc mắc vui lòng liên hệ:</p>
                  <p className="entry_contacts-info">Hotline: 086.838.7059</p>
                  <p className="entry_contacts-info">
                    <a href="https://www.facebook.com/profile.php?id=100004193595873">
                      https://www.facebook.com/profile.php?id=100004193595873</a>
                  </p>
                  <p className="entry_contacts-info">Email: phanha199.job@gmail.com</p>
                </div>
                <div className="entry_contacts-footer">
                  <span className="entry_contacts-share">Chia sẻ:
                  </span>
                  <a href="https://www.facebook.com/profile.php?id=100004193595873" className="entry_contacts-icon">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col l-3 m-12 c-12 backgroundContact">
              <form className="sidebar_search">
                <input type="search" name id className="sidebar_search-input" placeholder="Nhập từ khóa ..." />
                <div className="sidebar_search-btn">
                  <i className="fa fa-search" aria-hidden="true" />
                </div>
              </form>
              <div className="sidebar_categories">
                <h3 className="sidebar_categories-title">DANH MỤC TIN TỨC</h3>
                <ul className="sidebar_categories-lits">
                  <li className="sidebar_categories-item"><a href className="sidebar_categories-link">Về chúng tôi</a></li>
                  <li className="sidebar_categories-item"><a href className="sidebar_categories-link">Chăm sóc khách hàng</a></li>
                  <li className="sidebar_categories-item"><a href className="sidebar_categories-link">Khuyến Mại</a></li>
                  <li className="sidebar_categories-item"><a href className="sidebar_categories-link">Sản phẩm mới</a></li>
                  <li className="sidebar_categories-item"><a href className="sidebar_categories-link">Tin tức - Sự kiện</a></li>
                </ul>
              </div>
              <div className="sidebar_post">
                <h3 className="sidebar_categories-title">TIN TỨC MỚI NHẤT</h3>
                <ul className="sidebar_post-list">
                  <li className="sidebar_post-item">
                    <img src="image/Item1.png" alt="" className="sidebar_post-img" />
                    <a href className="sidebar_post-link">SIÊU PHẨM MỚI: KEM NỀN DẠNG THỎI OHUI ULTIMATE COVER STICK FOUNDATION</a>
                  </li>
                  <li className="sidebar_post-item">
                    <img src="image/Item2.png" alt="" className="sidebar_post-img" />
                    <a href className="sidebar_post-link">
                      Chương trình khách hàng thân thiết
                    </a>
                  </li>
                  <li className="sidebar_post-item">
                    <img src="image/Item3.png" alt="" className="sidebar_post-img" />
                    <a href className="sidebar_post-link">
                      Tặng ngay combo 5 gói mặt nạ thải độc Su:m37
                    </a>
                  </li>
                  <li className="sidebar_post-item">
                    <img src="image/Item4.png" alt="" className="sidebar_post-img" />
                    <a href className="sidebar_post-link">
                      Day Shield Perfect Sun - Cho nàng thơ tự tin "tỏa nắng"
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar_product">
                <h3 className="sidebar_categories-title">SẢN PHẨM MỚI NHẤT</h3>
                <ul className="sidebar_product-list">
                  <li className="sidebar_product-item">
                    <a href className="sidebar_product-link">
                      <img src="image/Item4.png" alt="" className="sidebar_product-img" />
                      <div className="sidebar_product-info">
                        <div className="sidebar_product-name">Set dưỡng da Hoàn Lưu Cao mini Phục hồi và trẻ hóa làn da.</div>
                        <div className="sidebar_product-price">
                          <div className="sidebar_product-up">2.000.000đ</div>
                          <div className="sidebar_product-down">900.000đ</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar_product-item">
                    <a href className="sidebar_product-link">
                      <img src="image/Item5.png" alt="" className="sidebar_product-img" />
                      <div className="sidebar_product-info">
                        <div className="sidebar_product-name">Set dưỡng da Hoàn Lưu Cao mini Phục hồi và trẻ hóa làn da.</div>
                        <div className="sidebar_product-price">
                          <div className="sidebar_product-up">2.000.000đ</div>
                          <div className="sidebar_product-down">900.000đ</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar_product-item">
                    <a href className="sidebar_product-link">
                      <img src="image/Item6.png" alt="" className="sidebar_product-img" />
                      <div className="sidebar_product-info">
                        <div className="sidebar_product-name">Set dưỡng da Hoàn Lưu Cao mini Phục hồi và trẻ hóa làn da.</div>
                        <div className="sidebar_product-price">
                          <div className="sidebar_product-up">2.000.000đ</div>
                          <div className="sidebar_product-down">900.000đ</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Contact;