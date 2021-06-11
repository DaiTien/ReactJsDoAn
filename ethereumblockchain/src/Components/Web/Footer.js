import React from 'react';
export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="newsletter-wrap">
                                    <div className="newsletter">
                                        <form action="#" method="post">
                                            <h4><span>Đăng ký nhận email</span></h4>
                                            <p>Cung cấp email của bạn để nhận được tin nhắn khuyên mại của chúng tôi</p>
                                            <input name="contact[email]" type="email" placeholder="Email của bạn" className="input-text required-entry validate-email" id="newsletter1" />
                                            <button className="subscribe" title="Subscribe" type="submit"><span>Đăng ký</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 hidden-xs hidden-sm">
                                <div className="logo-footer">
                                    <a href="/">
                                        <img src="asset/web/images/logo-footer.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="contact-footer">
                                    <h4><span>Địa chỉ liên hệ</span></h4>
                                    <p>Đ/C: 33 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng</p>
                                    <p>Điện thoại: +84 702.406.546</p>
                                    <p>Email: nguyendaimaitien@gmail.com</p>
                                    <p>website: wwww.daitien.com</p>
                                    <div className="social">
                                        {/* <a href="#"><i className="fa fa-linkedin" /></a> */}
                                        {/* <a href="#"><i className="fa fa-pinterest-p" /></a> */}
                                        <a href="#"><i className="fa fa-facebook-official" /></a>
                                        <a href="#"><i className="fa fa-skype" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}