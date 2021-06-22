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
            status: true
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
            status: this.state.status

        };
        axios.post('http://localhost:4000/categrories/add', obj)
            .then(
                swal({
                    title: "Thành Công",
                    text: "Thêm mới thành công!",
                    icon: "success",
                    timer: 2500,
                    button: false
                    //dangerMode : true
                })
            );

        this.setState({
            name: '',
            status: ''
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
                                Thêm mới loại sản phẩm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row offset-2">
                        <div className="card" style={{width: '80%'}}>
                            <div className="card-body">
                                <div style={{ marginTop: 10 }}>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>Name: </label>
                                            <input type="text" onChange={this.onChange}
                                                value={this.state.name}
                                                className="form-control"
                                                name="name"
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                            <label>Status: </label>
                                            <input type="checkbox" value={this.state.status}
                                                onChange={this.onChange} name="status" />
                                        </div> */}
                                        <div className="form-group">
                                            <input type="submit" value="Lưu" className="btn btn-primary" />
                                            <Link to={'/loai-san-pham'} className="btn btn-success ml-2">
                                                Quay lại
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}