
import { Box, CircularProgress, Grid, } from '@mui/material';
import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/navbar';
import { useProduct } from '../../hook/useProduct';
import { CardProduct } from '../../components/card';
import { NotFoundItem } from '../notFoundItem';

function Home() {
    const { dataProducts, loading } = useProduct();

    if (loading) {
        return (
            <Box
                padding='20px'
                marginTop='64px'
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSizing={"border-box"}
            >
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box
            padding='20px'
            marginTop='64px'
        >
            <NavBar />

            <Grid
                container
                spacing={2}>
                {dataProducts.length === 0 && < NotFoundItem />}
                {
                    dataProducts?.map((product) => {
                        return (
                            <Grid
                                item
                                key={product._id}
                                md={3}
                                xs={12}
                            >
                                <CardProduct product={product} />
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Box>

    );
}

export default Home;
