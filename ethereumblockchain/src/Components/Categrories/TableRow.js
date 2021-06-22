import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        swal({
            title: "Bạn có chắc?",
            text: "Bạn có chắc là muốn xóa nó?",
            icon: "warning",
            dangerMode: true,
            cancelMode: true
          })
          .then(willDelete => {
            if (willDelete) {
                axios.get('http://localhost:4000/categrories/delete/'+this.props.obj._id)
                .then(window.location.reload())
                .catch(err => console.log(err))
            }
          });
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          {/* <td>
            {this.props.obj.status}
          </td> */}
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;