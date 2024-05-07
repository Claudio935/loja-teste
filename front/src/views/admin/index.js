import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import '../../App.css';
import { NavBar } from '../../components/navbar';
import { SideBar } from '../../components/sidebar';


function Admin() {


    return (
        <Stack
            rowGap={2}
            height='calc(100vh - 104px)'
            width='calc(100%-200px)'
            marginTop='64px'
            marginLeft='200px'
            padding='20px'>
            <NavBar />
            <SideBar />
            <Outlet />
        </Stack>

    );
}

export default Admin;
