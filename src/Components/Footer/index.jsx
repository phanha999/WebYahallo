import React from 'react';
// import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer id="footer">
  <div className="grid wide">
    <div className="grid__row app_footer">
      <div className="col wide l-2-4 m-6 c-6">
        <h3 className="footer-title">Chăm sóc khách hàng</h3>
        <ul className="footer_list">
          <li className="footer_item">
            <a href className="footer_link">Trung Tâm Trợ Giúp</a>							
          </li>
          <li className="footer_item">
            <a href className="footer_link">Yahallo Blog</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Yahallo Mall</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Hướng Dẫn Mua Hàng</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Hướng Dẫn Bán Hàng</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Thanh Toán</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Yahallo Xu</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Vận Chuyển</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Trả Hàng &amp; Hoàn Tiền</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Chăm Sóc Khách Hàng</a>
          </li>
          <li className="footer_item">							
            <a href className="footer_link">Chính Sách Bảo Hành</a>
          </li>
        </ul>
      </div>
      <div className="col wide l-2-4 m-6 c-6">
        <h3 className="footer-title">Về Yahallo</h3>
        <ul className="footer_list">
          <li className="footer_item">
            <a href className="footer_link">Giới Thiệu Về Yahallo Việt Nam</a>			
          </li>
          <li className="footer_item">
            <a href className="footer_link">Tuyển Dụng</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Điều Khoản Yahallo</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Chính Sách Bảo Mật</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Chính Hãng</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Kênh Người Bán</a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">Chương Trình Tiếp Thị Liên Kết Yahallo</a>
          </li>
        </ul>
      </div>
      <div className="col wide l-2-4 m-6 c-12">
        <h3 className="footer-title">Theo dõi chúng tôi trên</h3>
        <ul className="footer_list">
          <li className="footer_item">
            <a href className="footer_link">
              <i className="footer_icon fa fa-facebook-square" aria-hidden="true" />
              <span>Facebook</span> 
            </a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">
              <i className="footer_icon fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li className="footer_item">
            <a href className="footer_link">
              <i className="footer_icon fa fa-linkedin-square" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col wide l-2-4 m-6 c-12">
        <h3 className="footer-title">Tải ứng dụng Yahallo ngay thôi</h3>
        <div className="footer_dowm">
          <img src="image/QR_PEEE.png" className="footer_img" alt="" />
          <span>						
            <img src="image/iconApp.png" className="footer_app" alt="" />
            <img src="image/PLAY.png" className="footer_app" alt="" />
            <img src="image/gallery.png" className="footer_app" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div className="grid__row">
      <p className="footer_copy">© 2021 Yahallo. Tất cả các quyền được bảo lưu.</p>
    </div>
  </div>
</footer>

    );
}

export default Footer;