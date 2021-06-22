import React from 'react';
import './Admin.css';
import Header from './Components/Admin/Header';
import Settings from './Components/Admin/Settings';
import Main from './Components/Admin/Main';
export default class Admin extends React.Component{
    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <Header/>
                <Settings/>
                <Main/>
            </div>
        )
    }
}