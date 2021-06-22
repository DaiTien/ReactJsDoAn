import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { categrories: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/categrories')
            .then(response => {
                console.log(response.data);
                this.setState({ categrories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.categrories.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
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
                                Danh sách loại sản phẩm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="example1_length">
                                <label>
                                    <Link to={'/them-loai-san-pham'} className="btn btn-primary btn-shadow text-white">
                                        Thêm loại sản phẩm <i className="fas fa-plus" />
                                    </Link>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <table id="myTable" className="table table-bordered table-striped dataTable dtr-inline" role="grid" aria-describedby="example1_info" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        {/* <th className="text-center">
                                            Stt
                                        </th> */}
                                        <th>Name</th>
                                        {/* <th>Status</th> */}
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabRow()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}