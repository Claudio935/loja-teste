import React from 'react'
import { Home, Person, ShoppingCart } from '@mui/icons-material'
import {
    AppBar,
    Badge,
    Container,
    IconButton,
    Stack,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material/'
import { useLocation, useNavigate } from 'react-router'
import { useLocalStorageOrder } from '../../hook/useLocalStorageOrder'


export const NavBar = () => {
    const navigation = useNavigate()
    let location = useLocation();
    const { data } = useLocalStorageOrder()


    return (
        <AppBar
            position='fixed'
            sx={{
                backgroundColor: '#BFF7A3',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
            <Container>
                <Toolbar>
                    <Stack
                        width='100%'
                        direction='row'
                        justifyContent='space-between'>
                        <Typography variant='h4' color='#544242'>Sua Loja</Typography>
                        <Stack
                            width="15%"
                            direction='row'
                            justifyContent='space-between'>
                            {!(location.pathname === "/") &&
                                <Tooltip title='Voltar para a página de produtos'>
                                    <IconButton
                                        sx={{ background: '#ffff' }}
                                        onClick={() => navigation('/')}>
                                        <Home />
                                    </IconButton>
                                </Tooltip>
                            }
                            {!location.pathname.includes("admin") &&
                                <Tooltip title='Voltar para a Página do administrador'>
                                    <IconButton
                                        sx={{ background: '#ffff' }}
                                        onClick={() => navigation('/admin')}>
                                        <Person />
                                    </IconButton>
                                </Tooltip>
                            }
                            <Tooltip title='Ir para a página do carrinho!'>

                                <IconButton
                                    sx={{ background: '#ffff' }}
                                    onClick={() => navigation('/cart')}>
                                    <Badge color="secondary" variant={data.length > 0 ? "dot" : "standard"}>
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}