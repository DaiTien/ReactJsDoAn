import React from 'react';
export default class MenuFooter extends React.Component {
    render() {
        return (
            <div className="navbar-collapse hidden-sm hidden-xs" id="menu-footer" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="container">
                    <div className="main-menu clearfix">
                        <button type="button" className="navbar-toggle collapsed">
                            <i className="fa fa-bars" /> <span className="btn-only">Danh mục</span>
                        </button>
                        <ul id="mobile-footer" className="hidden-lg hidden-md">
                            <li className="current"><a href="/">Trang chủ</a></li>
                            <li className><a href="/gioi-thieu">Giới thiệu</a></li>
                            <li className>
                                <a href="/collections/all">Sản phẩm</a>
                            </li>
                            <li className><a href="/tin-tuc">Tin tức</a></li>
                            <li className><a href="/tu-van">Tư vấn</a></li>
                            <li className><a href="/dieu-khoan">Dịch vụ</a></li>
                            <li className><a href="/lien-he">Liên hệ</a></li>
                        </ul>
                        <div className="col-md-10 col-sm-12 col-xs-12 col-md-offset-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="current"><a href="/">Trang chủ</a></li>
                                <li className><a href="/gioi-thieu">Giới thiệu</a></li>
                                <li className>
                                    <a href="/collections/all">Sản phẩm </a>
                                </li>
                                <li className><a href="/tin-tuc">Tin tức</a></li>
                                <li className><a href="/tu-van">Tư vấn</a></li>
                                <li className><a href="/dieu-khoan">Dịch vụ</a></li>
                                <li className><a href="/lien-he">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}