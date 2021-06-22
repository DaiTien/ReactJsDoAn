import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            name: '',
            price: 0,
            carer:'',
            seller:'',
            conservation:'',
            sowingDate:'',
            harvestDate:'',
            unit:'',
            plantingPlace:'',
            image:'',
            description:''
        }
    }
    onChange(event) {
        var target = event.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            price: this.state.price,
            carer: this.state.carer,
            seller: this.state.seller,
            conservation: this.state.conservation,
            sowingDate: this.state.sowingDate,
            harvestDate: this.state.harvestDate,
            unit: this.state.unit,
            plantingPlace: this.state.plantingPlace,
            image: this.state.image,
            description: this.state.description

        };
        axios.post('http://localhost:4000/products/add', obj)
            .then(
                swal({
                    title: "Thành Công",
                    text: "Thêm mới sản phẩm thành công!",
                    icon: "success",
                    timer: 2500,
                    button: false
                })
            );

        this.setState({
            name: '',
            price: 0,
            carer:'',
            seller:'',
            conservation:'',
            sowingDate:'',
            harvestDate:'',
            unit:'',
            plantingPlace:'',
            image:'',
            description:''
        });

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="pe-7s-cash icon-gradient bg-mean-fruit" />
                            </div>
                            <div>
                                Thêm mới sản phẩm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-lg-10 offset-1">
                        <form onSubmit={this.onSubmit} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group col-6" >
                                            <label>Tên sản phẩm <span className="text-danger">*</span> :</label>
                                            <input id="productName" type="text"
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                className=" form-control"
                                                placeholder="Vui lòng nhập tên sản phẩm"
                                                name="name"
                                                required />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Giá cả <span className="text-danger">*</span> :</label>
                                            <input id="productPrice" type="number"
                                                onChange={this.onChange}
                                                value={this.state.price}
                                                className="form-control "
                                                name="price"
                                                placeholder="Gía sản Phẩm"
                                                required />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Ngày gieo trồng <span className="text-danger">*</span> :</label>
                                            <input id="ngayGieoTrong" type="date"
                                                onChange={this.onChange}
                                                value={this.state.sowingDate}
                                                className=" form-control"
                                                placeholder="Ngày gieo trồng"
                                                name="sowingDate"
                                                required />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Ngày thu hoạch <span className="text-danger">*</span> :</label>
                                            <input id="ngayThuHoach" type="date"
                                                onChange={this.onChange}
                                                value={this.state.harvestDate}
                                                className=" form-control"
                                                placeholder="Ngày Thu Hoạch"
                                                name="harvestDate"
                                                required />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Người chăm sóc :</label>
                                            <input id="nguoiChamSoc" type="text"
                                                className="form-control"
                                                name="carer"
                                                placeholder="Vui lòng điền tên"
                                                onChange={this.onChange}
                                                value={this.state.carer}
                                            />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Người bán <span className="text-danger">*</span> :</label>
                                            <input id="nguoiBanSp" type="text"
                                                name="seller"
                                                onChange={this.onChange}
                                                value={this.state.seller}
                                                className="form-control "
                                                placeholder="Vui lòng điền tên"
                                                required />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Đơn vị :</label>
                                            <input id="donVi" type="text"
                                                onChange={this.onChange}
                                                value={this.state.unit}
                                                className="form-control "
                                                placeholder="Đơn vị cung cấp"
                                                name="unit"
                                            />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Nơi trồng :</label>
                                            <input type="text"
                                                onChange={this.onChange}
                                                value={this.state.plantingPlace}
                                                className=" form-control"
                                                placeholder="Nơi Trồng"
                                                name="plantingPlace"
                                            />
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Bảo quản :</label>
                                            <textarea type="text" name="conservation" className=" form-control" rows="3" onChange={this.onChange}></textarea>
                                        </div>
                                        <div className="form-group col-6" >
                                            <label>Giai đoạn sinh trưởng :</label>
                                            <textarea type="text" name="description" className=" form-control" rows="3" onChange={this.onChange} ></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <label> Hình ảnh của sản phẩm :</label>
                                            <input type="file" id="myFile" name="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Thêm sản phẩm </button>
                                    <Link to={'/san-pham'} className="btn btn-success ml-2">
                                        Quay lại
                                    </Link>
                                </div>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        )
    }
}