import React from 'react';
import { Route } from 'react-router';
import Container from '../Components/Container';
import ProductDetail from '../Components/Container/ProductDetail';
import Contact from '../Components/Header/Contact';
import NewSP from '../Components/Header/NewSP';
// import PropTypes from 'prop-types';

Router.propTypes = {
    
};

function Router(props) {
    return (
        <div>
            <Route path="/" component={Container} exact/>
            <Route path="/newsp" component={NewSP} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/productdetail" component={ProductDetail} exact/>
        </div>
        
    );
}

export default Router;