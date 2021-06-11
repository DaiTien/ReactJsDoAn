import React from 'react';
export default class HMNews extends React.Component {
    render() {
        return (
            <div className="block blog-sidebar">
                <div className="title">
                    <h2>Tin mới</h2>
                </div>
                <div className="blog-content">
                    <ul className="list-article">
                        <li><a href="/cach-nhan-biet-chuoi-chin-tu-nhien-va-chuoi-chin-do-nhung-hoa-chat">Cách nhận biết chuối chín tự nhiên và chuối chín do nhúng hóa chất</a></li>
                        <li><a href="/nhung-nguoi-nay-khong-nen-an-dua-trong-dong">Những người này không nên ăn dứa trong đông</a></li>
                        <li><a href="/3-bi-quyet-lua-chon-thuc-pham-sach">3 bí quyết lựa chọn thực phẩm sạch</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}