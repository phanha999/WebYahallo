import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../Api/productApi';
// import PropTypes from 'prop-types';
import ProductsList from '../Components/ProductsList';
import SkeletonProduct from '../Components/Skeleton';

Pages.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    right: {
        flex: '1 1 0'
    }
}));

function Pages(props) {
    const classes = useStyles();

    const [loading , setLoading] = useState(true);
    const [productList , setProductList] = useState([]);
    const [pagination , setPagination] = useState({
        total: 8,
        limit: 8,
        page: 1
    })
    const [filter , setFilter ] = useState({
        _page: 1 ,
        _limit: 8
    })

     useEffect(() => {
        (async () => {
            try {
                const { data , pagination } = await productApi.getAll(filter);
                setProductList(data);
                setPagination(pagination)
            } catch (error) {
                console.log(error.message);
            }
            setLoading(false);
        })();
    },[filter])

    const handleChangePage = (value , page) => {
        setFilter(previosFilter => ({
            ...previosFilter,
            _page: page
        }));
    }

    return (
        <Box>
           <Container>
               <Grid container spacing={1} >

                   <Grid item className={classes.right} >
                        <Paper>
                            { loading ? <SkeletonProduct/> : <ProductsList data={productList} /> } 
                            
                            <Pagination onChange={handleChangePage} color="primary" 
                            count={Math.ceil(pagination.total / pagination.limit )} 
                            page={pagination.page} 
                            >
                            </Pagination>
                        </Paper>
                   </Grid>

               </Grid>
           </Container>
       </Box>
    );
}

export default Pages;