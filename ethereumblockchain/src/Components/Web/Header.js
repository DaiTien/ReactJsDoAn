import React from 'react';
export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <nav className="navbar st-navbar navbar-fixed-top">
                    <div className="head-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="pull-left customer">
                                        <a href="/account/login"><i className="fa fa-sign-in" /> Đăng nhập </a> |
                                        <a href="/account/register"><i className="fa fa-user" /> Đăng ký</a> |
                                        <a href="/cart"><i className="fa fa-shopping-cart" /> Giỏ hàng 0</a>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8 hidden-xs">
                                    <div className="hotline-header pull-right">
                                        <p><i className="fa fa-phone-square" /> Hotline: 0963.647.129 | 01698.45.43.46</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="head-mid clearfix">
                        <div className="navbar-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 col-xs-12 col-md-offset-4">
                                        <div className="logo">
                                            <a title="FreshFood-LV" href="/">
                                                <img alt="FreshFood-LV" src="asset/web/images/logo.png" />
                                            </a>
                                        </div>
                                        <div className="slogan">
                                            <span>Truy xuất nguồn gốc sản phẩm</span>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
                                        <form action="/search" method="get" role="search" id="searchform" className="form-search">
                                            <input type="text" placeholder="Từ khóa tìm kiếm..." defaultValue id="s" className="search-query" name="query" />
                                            <button id="searchsubmit" className="search-icon" type="submit"><i className="fa fa-search" /></button>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bg clearfix" />
                    <div className="navbar-collapse" id="st-navbar-collapse">
                        <div className="container">
                            <div className="main-menu clearfix">
                                <button type="button" className="navbar-toggle collapsed">
                                    <i className="fa fa-bars" /> <span className="btn-only">Danh mục</span>
                                </button>
                                <ul id="mobile">
                                    <li className="current"><a href="/">Trang chủ</a></li>
                                    <li ><a href="/gioi-thieu">Giới thiệu</a></li>
                                    <li >
                                        <a href="/collections/all">Sản phẩm <i className="fa fa-angle-down" /></a>
                                        <ul className="submenu" style={{ display: 'none' }}>
                                            <li><a href="/hoa-qua-sach">Hoa quả sạch</a></li>
                                            <li><a href="/rau-sach">Rau sạch</a></li>
                                            <li><a href="/thit-sach">Thịt sạch</a></li>
                                            <li><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
                                            <li><a href="/gao-hat-kho">Gạo - Hạt khô</a></li>
                                        </ul>
                                    </li>
                                    <li ><a href="/tin-tuc">Tin tức</a></li>
                                    <li ><a href="/tu-van">Tư vấn</a></li>
                                    <li ><a href="/dieu-khoan">Dịch vụ</a></li>
                                    <li ><a href="/lien-he">Liên hệ</a></li>
                                </ul>
                                <div className="col-md-10 col-sm-12 col-xs-12 col-md-offset-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="current"><a href="/">Trang chủ</a></li>
                                        <li ><a href="/gioi-thieu">Giới thiệu</a></li>
                                        <li >
                                            <a href="/collections/all">Sản phẩm <i className="fa fa-angle-down" /></a>
                                            <ul className="submenu">
                                                <li><a href="/hoa-qua-sach">Hoa quả sạch</a></li>
                                                <li><a href="/rau-sach">Rau sạch</a></li>
                                                <li><a href="/thit-sach">Thịt sạch</a></li>
                                                <li><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
                                                <li><a href="/gao-hat-kho">Gạo - Hạt khô</a></li>
                                            </ul>
                                        </li>
                                        <li ><a href="/tin-tuc">Tin tức</a></li>
                                        <li ><a href="/tu-van">Tư vấn</a></li>
                                        <li ><a href="/dieu-khoan">Dịch vụ</a></li>
                                        <li ><a href="/lien-he">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>{/* /.navbar-collapse */}
                </nav>
            </header>
        );
    }
}