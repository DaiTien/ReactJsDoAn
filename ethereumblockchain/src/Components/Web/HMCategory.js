import React from 'react';
export default class HMCategory extends React.Component {
    render() {
        return (
            <div className="block category">
                <div className="title">
                    <h2>Danh mục</h2>
                </div>
                <div className="category-content">
                    <ul className="list-collections submenu">
                        <li className="level0 "><a href="/hoa-qua-sach">Hoa quả sạch</a></li>
                        <li className="level0 "><a href="/rau-sach">Rau sạch</a></li>
                        <li className="level0 "><a href="/thit-sach">Thịt sạch</a></li>
                        <li className="level0 "><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
                        <li className="level0 "><a href="/gao-hat-kho">Gạo - Hạt khô</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}