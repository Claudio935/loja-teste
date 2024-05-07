import { Add, Person2, ProductionQuantityLimits } from "@mui/icons-material"
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material"
import { useNavigate } from "react-router"

export const SideBar = () => {

    const navigation = useNavigate()

    return (
        <Drawer
            variant="permanent"
            open
            PaperProps={{
                sx: {
                    width: '200px',
                }
            }}
        >
            <Toolbar />
            <Box >
                <List
                    dir="column"
                    sx={{
                        height: '100%',
                        paddingInline: '0px',
                        paddingTop: '20px'
                    }}>

                    <ListItem sx={{ padding: '0px' }}>
                        <ListItemButton
                            onClick={() => navigation('/admin/')}
                        >
                            <ListItemIcon>
                                <ProductionQuantityLimits />
                            </ListItemIcon>
                            <ListItemText primary='Produtos' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ padding: '0px' }}>
                        <ListItemButton
                            onClick={() => navigation('/admin/create')}>
                            <ListItemIcon>
                                <Add />
                            </ListItemIcon>
                            <ListItemText primary='Adicionar' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ padding: '0px' }}>
                        <ListItemButton
                            onClick={() => navigation('/admin/clients/')}
                        >
                            <ListItemIcon>
                                <Person2 />
                            </ListItemIcon>
                            <ListItemText primary='Clientes' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer >
    )
}