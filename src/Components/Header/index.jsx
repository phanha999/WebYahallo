import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Close } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import Register from '../../Features/Auth/Register';
import Login from '../../Features/Auth/Login';
import { logOut } from '../../Features/Auth/userSlice';
import './styles.scss'
// import PropTypes from 'prop-types';

Header.propTypes = {
    
};

const MODE = { 
    LOGIN: 'login',
    REGISTER: 'register'
}

const useStyles = makeStyles((theme) => ({
    btn: {
        position: 'absolute',
        top: theme.spacing(0),
        right: theme.spacing(0),
      }
}))

function Header(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles(MODE.LOGIN);
    const  [ mode , setMode ] = useState(MODE.LOGIN);
    const dispatch = useDispatch();

    const getLoginID = useSelector(state =>state.user.current)
    const isLoginID = !!getLoginID.id;
    const isLoginName = getLoginID.fullName;

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    const handleLogOut = () => {
    const action = logOut();
    dispatch(action)
    window.location.reload(true);
    }
    
    return (
        <header className id="header">
  <div className="grid wide">
    <nav className="header_navbar">
      <ul className="header_navbar-list">
        <li className="header_navbar-item header_qrHover header_navbar-item--borderR">		
          Vào cửa hàng trên ứng dụng Yahallo
          <span className="header_qr">
            <img src="image/QR.png" alt="" className="header_qr--img" />
            <div className="header_qr-apps">
              <img src="image/ggPlay.png" alt="" className="header_qr-apps--img" />
              <img src="image/appStore.png" alt="" className="header_qr-apps--img" />
            </div>
          </span>
        </li>
        <li className="header_navbar-item header_navbar-item--borderR">
          <i className="fa fa-phone header_navbar-item--icon" aria-hidden="true" />
          <a className="header_navbar-item--link" href="tel:0868387059">0868387059</a>
        </li>
        <li className="header_navbar-item ">
          <i className="fa fa-envelope header_navbar-item--icon" aria-hidden="true" />
          <a className="header_navbar-item--link" href="mailto: boanhtai1@gmail.com">boanhtai1@gmail.com</a>
        </li>
      </ul>
      <ul className="header_navbar-list">
        <li className="header_navbar-item header_navbar-item--bold header_notify-hover">
          <i className="fa fa-bell-o header_navbar-item--icon header_navbar-item--iconL" aria-hidden="true" />
          <NavLink className="header_navbar-item--link" to="/newsp">Tin tức</NavLink>
          <div className="header_notify">
            <header className="header_notify-header">
              <h3 className="header_notify-news">Tin Tức Mới Nhất</h3>
            </header>
            <ul className="header_notify-list">
              {/* NOTIFY ITEM */}
              <li className="header_notify-item header_notify-active">
                <a href className="header_notify-link">
                  <img src="image/Item1.png" alt="" className="header_notify-img" />
                  <div className="header_notify-info">
                    <p className="header_notify-name">Chương trình khách hàng thân thiết</p>
                    <span className="header_notify-title">Để cảm ơn sự ủng hộ và yêu thích của khách hàng đối với chúng tôi chương trình Khách Hàng Thân Thiết đã được tạo ra</span>
                  </div>
                </a>
              </li>
              {/* NOTIFY ITEM END */}
              {/* NOTIFY ITEM */}
              <li className="header_notify-item header_notify-active">
                <a href className="header_notify-link">
                  <img src="image/Item2.png" alt="" className="header_notify-img" />
                  <div className="header_notify-info">
                    <p className="header_notify-name">Tặng ngay combo 5 gói mặt nạ thải độc Su:m37</p>
                    <span className="header_notify-title">Khuyển mãi siêu hot</span>
                  </div>
                </a>
              </li>
              {/* NOTIFY ITEM END */}
              {/* NOTIFY ITEM */}
              <li className="header_notify-item header_notify-active">
                <a href className="header_notify-link">
                  <img src="image/Item3.png" alt="" className="header_notify-img" />
                  <div className="header_notify-info">
                    <p className="header_notify-name">Day Shield Perfect Sun - Cho nàng thơ tự tin "tỏa nắng"</p>
                  </div>
                </a>
              </li>
              {/* NOTIFY ITEM END */}
              {/* NOTIFY ITEM */}
              <li className="header_notify-item header_notify-active">
                <a href className="header_notify-link">
                  <img src="image/Item4.png" alt="" className="header_notify-img" />
                  <div className="header_notify-info">
                    <p className="header_notify-name">CHĂM SÓC KHÔNG QUÊN CHỐNG NĂNG</p>
                    <span className="header_notify-title">Kem Chống nắng Whoo Gongjinhyang Soo</span>
                  </div>
                </a>
              </li>
              {/* NOTIFY ITEM END */}
              {/* NOTIFY ITEM */}
              <li className="header_notify-item header_notify-active">
                <a href className="header_notify-link">
                  <img src="image/Item5.png" alt="" className="header_notify-img" />
                  <div className="header_notify-info">
                    <p className="header_notify-name">DA CÓ DẦU CẦN DƯỠNG ẨM</p>
                    <span className="header_notify-title">Whoo Gongjinhyang Soo</span>
                  </div>
                </a>
              </li>
              {/* NOTIFY ITEM END */}
              {/* NOTIFY ITEM */}
            </ul>
            <footer className="header_footer-notify">
              <a href="/" className="footer_notify-btn">Xem tất cả</a>
            </footer>
          </div>
        </li>
        <li className="header_navbar-item header_navbar-item--bold">
          <i className="fa fa-question-circle-o header_navbar-item--icon
							header_navbar-item--iconL" aria-hidden="true" />
          <NavLink className="header_navbar-item--link" to="/contact">Liên hệ </NavLink>
        </li>
        
        
        {!isLoginID && (
            <Button onClick={handleClickOpen} >Đăng nhập</Button>
        )}

        {isLoginID && (
             <li className="header_navbar-item header_navbar-user">
             <div className="header_navbar-wrapperUser">
               <img src="image/user.png" alt="" className="header_navbar-img" />
               <div className="header_navbar-nameUser">
                 {isLoginName}
               </div>
             </div>
             <ul className="header_navbar-list1">
               <li className="header_navbar-item1"><a href className="header_navbar-childItem">Tài khoản của tôi</a></li>
               <li className="header_navbar-item1"><a href className="header_navbar-childItem">Địa chỉ của tôi</a></li>
               <li className="header_navbar-item1"><a href className="header_navbar-childItem">Ví tích điểm</a></li>
               <li className="header_navbar-item1"><a href className="header_navbar-childItem">Đơn mua</a></li>
               <li className="header_navbar-item1"><a href className="header_navbar-childItem">Đăng ký chương trình PVH</a></li>
               <li onClick={handleLogOut} className="header_navbar-item1"><a href className="header_navbar-childItem header_navbar-itemColor ">Đăng xuất</a></li>
             </ul>
           </li>
        )}
       
      </ul>
    </nav>

    <Dialog 
     disableBackdropClick
     disableEscapeKeyDown
     open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
           
            {mode === MODE.REGISTER && (
              <>
                 <Register handleOnClose={handleClose}/>

                <Box textAlign='center'>
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                      Đăng nhập
                  </Button>
                </Box>
              </>
          )} 
          {mode === MODE.LOGIN && (
              <>
                <Login handleOnClose={handleClose}/>

                <Box textAlign='center'>
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                      Đăng kí tài khoản
                  </Button>
                </Box>
              </>
          )} 
            
        </DialogContent>

        <DialogActions>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            <Close/>
          </Button>
        </DialogActions>

      </Dialog>

    {/* HEADER SEARCH */}
    <div className="header_search">
      <input type="checkbox" id="header_search-click" hidden className="header_search-click" />
      <label htmlFor="header_search-click" className="header_search-icon l-0 m-0 ">
        <i className="fa fa-search header_search-iconChild" aria-hidden="true" />
      </label>
      <div className="header_search-logo">
        <a href="/" className="header_search-link">
          <img src="image/logo1.png" className="header_search-img" alt="error" /></a>		
      </div>
      <div className="header_search-inputSearch none_mobile">
        <div className="header_search-wrapInput">
          <input type="text" placeholder="Nhập để tìm kiếm" className="header_search-input" />
          {/* SEARCH HISTORY */}
          <div className="header_search-history">
            <h3 className="header_search-history--heading">Lịch sử tìm kiếm</h3>
            <ul className="header_search-list">
              <li className="header_search-item">
                <a href className="header_search-save">Lịch sử 1</a>
              </li>
              <li className="header_search-item">
                <a href className="header_search-save">Lịch sử 2</a>
              </li>
            </ul>
          </div>
          {/* SEARCH HISTORY END */}
        </div>
        <div className="header_search-select">
          <span className="header_search-select-label">Cửa hàng</span>
          <i className="fa fa-angle-down header_search-selectIcon " aria-hidden="true" />
          <ul className="header_search-option">
            <li className="header_search-option--item">
              <span>Trong Shop</span>
              <i className="fa fa-check header_search-option--icon" aria-hidden="true" />
            </li>
            <li className="header_search-option--item">
              <span>Ngoài Shop</span>
              {/* <i class="fa fa-check header_search-option--icon" aria-hidden="true"></i> */}
            </li>
          </ul>
        </div>
        <button className="header_search-button">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      <div className="header_search-icon">
        <div className="header_search-classIcon">
          <i className="fa fa-shopping-cart header_search-buttonIcon " aria-hidden="true" />
          <span className="header_search-cartNotice">
            3
          </span>
          {/* TH có Cart : header_search-noCart */}
          <div className="header_search-cart header_search-noCart">
            <img src="image/roHang.png" className="header_search-cartImg" alt="" />
            <span className="header_search-cartText">
              Chưa có sản phẩm
            </span>
            <h3 className="header_cart-heading ">Sản Phẩm Mới Thêm</h3>
            <ul className="header_cart-list">
              <li className="header_cart-item">
                <img src="image/product1.png" alt="" className="header_cart-img" />
                <div className="header_cart-info">
                  <div className="header_cart-head">
                    <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                    <div className="header_cart-wapperPirce">
                      <div className="header_cart-price">9.999.999đ</div>
                      <div className="header_cart-x">x</div>
                      <div className="header_cart-qnt">2</div>
                    </div>
                  </div>		
                  <div className="header_cart-bottom">
                    <div className="header_cart-delete">Xóa</div>
                  </div>	
                </div>				
              </li>	
              <li className="header_cart-item">
                <img src="image/product1.png" alt="" className="header_cart-img" />
                <div className="header_cart-info">
                  <div className="header_cart-head">
                    <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                    <div className="header_cart-wapperPirce">
                      <div className="header_cart-price">9.999.999đ</div>
                      <div className="header_cart-x">x</div>
                      <div className="header_cart-qnt">2</div>
                    </div>
                  </div>		
                  <div className="header_cart-bottom">
                    <div className="header_cart-delete">Xóa</div>
                  </div>	
                </div>				
              </li>	
              <li className="header_cart-item">
                <img src="image/product1.png" alt="" className="header_cart-img" />
                <div className="header_cart-info">
                  <div className="header_cart-head">
                    <h5 className="header_cart-name">Full Bộ Light Novel Darling in the FranXX</h5>
                    <div className="header_cart-wapperPirce">
                      <div className="header_cart-price">9.999.999đ</div>
                      <div className="header_cart-x">x</div>
                      <div className="header_cart-qnt">2</div>
                    </div>
                  </div>		
                  <div className="header_cart-bottom">
                    <div className="header_cart-delete">Xóa</div>
                  </div>	
                </div>				
              </li>	
            </ul>
            <a href="cart.html" className="header_cart-view btn btn--primary">Xem giỏ hàng </a>
          </div>
        </div>
      </div>
    </div>
    {/* HEADER SEARCH END */}
  </div>
  <ul className="header_sort-list">
    <li className="header_sort-item header_sort-active"><a href="/" className="header_sort-link">Phổ biến</a></li>
    <li className="header_sort-item"><a href="/" className="header_sort-link">Mới nhất</a></li>
    <li className="header_sort-item"><a href="/" className="header_sort-link">Bán chạy</a></li>
    <li className="header_sort-item"><a href="/" className="header_sort-link">Giá</a></li>
  </ul>
</header>

    );
}

export default Header;