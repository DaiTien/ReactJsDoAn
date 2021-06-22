import React from 'react';
import { Link } from 'react-router-dom';
export default class MMenu extends React.Component {
    render() {
        return (
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src" />
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6" />
                            </span>
                        </button>
                    </span>
                </div>    <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">Dashboards</li>
                            <li>
                                <a href="index.html" className="mm-active">
                                    <i className="metismenu-icon pe-7s-rocket" />
                                    Dashboard
                                </a>
                            </li>
                            <li className="app-sidebar__heading">Quản lý sản phẩm</li>
                            <li>
                                <Link to={'/san-pham'} className="nav-link">
                                    <i className="metismenu-icon pe-7s-eyedropper"></i>
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link to={'/loai-san-pham'} className="nav-link">
                                    <i className="metismenu-icon pe-7s-eyedropper"></i>
                                    Loại sản phẩm
                                </Link>
                            </li>
                            <li className="app-sidebar__heading">Quản lý website</li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2" />
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2" />
                                    Tin tức
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2" />
                                    Tư vấn
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2" />
                                    Dịch vụ
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2" />
                                    Liên hệ
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}