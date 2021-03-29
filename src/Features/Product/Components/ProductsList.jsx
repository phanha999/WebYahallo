import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Box, Grid } from '@material-ui/core';


ProductsList.propTypes = {
    data: PropTypes.array,
};
ProductsList.defaultProps = {
    data: [],
}

function ProductsList({data}) {
    return (
        <Box>
        <Grid container >
            { data.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product}/>
                </Grid>
            ))}                     
        </Grid>
    </Box>
    );
}

export default ProductsList;