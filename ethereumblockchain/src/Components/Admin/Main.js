import React from 'react';
import MMenu from './MMenu';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IndexCategories from '../Categrories/Index';
import CreateCategories from '../Categrories/Create';
import EditCategories from '../Categrories/Edit';

import IndexProducts from '../Products/Index';
import CreateProducts from '../Products/Create';

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-main">
                    <MMenu />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Switch>
                                <Route exact path='/loai-san-pham' component={IndexCategories} />
                                <Route path='/them-loai-san-pham' component={CreateCategories} />
                                <Route path='/edit/:id' component={ EditCategories } />

                                <Route path='/san-pham' component={IndexProducts}/>
                                <Route path='/them-san-pham' component={CreateProducts}/>
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}