import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebarDisplay } from '../store/ui/nav';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import SideNavComponent from './SideNavComponent';
import FetchFlow from './FetchFlow';
import NewFlowPage from './NewFlowPage';
import EditFlowPage from './EditFlowPage';
import BrowseMyFlows from './BrowseMyFlows';
import CatFlows from './CatFlows';
import NotFound from './NotFound';

const Main = ({ match }) => {

    // useEffect(() => {
    //     document.body.classList.add('no-scroll');

    //     return () => {
    //         document.body.classList.remove('no-scroll');
    //     }
    // }, [])

    return (
            <Router>
                <SideNavComponent />
                <Switch>
                    <Route exact path={ match.url + 'flow/fetch'} component={FetchFlow} />
                    <Route exact path={ match.url + 'flow/new'} component={NewFlowPage} />
                    <Route exact path={match.url + 'flow/:id(\\d+)'}>
                        <EditFlowPage />
                    </Route>
                    <Route exact path={match.url + 'my-flows'} component={BrowseMyFlows} />
                    <Route exact path={match.url + 'category/:id(\\d+)'}>
                        <CatFlows />
                    </Route>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Router>
    )
}

export default Main;