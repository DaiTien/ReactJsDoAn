import React from 'react';
import HMCategory from './HMCategory';
import HMprodtop from './HMprodtop';
import HMProductNews from './HMProductNews';
import HMProductSales from './HMProductSales';
import HMNews from './HMNews';
import HMCardGifts from './HMCardGifts';
import HMFeedCustomer from './HMFeedCustomer';
export default class HomeMain extends React.Component {
    render() {
        return (
            <section className="home-main">
                <HMprodtop/>
                <div className="banner-top">
                    <div className="container hidden-xs">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 col-sm-12">
                                <div className="row">
                                    <div className="col-md-7 col-sm-7">
                                        <a href="/collections/all"><img src="asset/web/images/banner_left.png" className="img-responsive" /></a>
                                    </div>
                                    <div className="col-md-5 col-sm-5">
                                        <a href="/collections/all"><img src="asset/web/images/banner_right.jfif" className="img-responsive" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-xs-12 col-sm-12">
                                <HMProductNews/>
                                <div className="st-border" />
                                <HMProductSales/>
                            </div>
                            <aside className="sidebar col-right col-md-3 col-xs-12 col-sm-12">
                                <HMCategory/>
                                <HMNews/>
                                <div className="block policy">
                                    <div className="policy-content">
                                        <div className="policy-1">
                                            <a href="/chinh-sach"><i className="fa fa-gift" /> Chính sách quà tặng</a>
                                        </div>
                                        <div className="policy-2">
                                            <a href="/dieu-khoan"><i className="fa fa-truck" /> Chính sách vận chuyển</a>
                                        </div>
                                        <div className="policy-3">
                                            <a href="/huong-dan"><i className="fa fa-shopping-basket" /> Chính sách Mua hàng</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="block banner hidden-sm hidden-xs">
                                    <a href="/collections/all"><img src="asset/web/images/block-banner.png" alt="block-banner" /></a>
                                </div>
                            </aside>
                        </div>
                        <div className="st-border" />
                        <div className="row">
                            <div className="col-md-12 hidden-sm hidden-xs">
                                <HMCardGifts/>
                            </div>
                        </div>
                    </div>
                </div>
                <HMFeedCustomer/>
            </section>
        )
    }
}