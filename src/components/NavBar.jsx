
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Container, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function NavBar() {
    return (

        <Container maxW='auto'>
            <Flex className='navbar'>
                <Box >
                    <Link to={'/'}>
                        <h1>CastaBarber</h1>
                    </Link>
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton className='butonn' as={Button} rightIcon={<ChevronDownIcon />}>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/category/Accesorios de corte.'>
                                <p>Accesorios de corte.</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Accesorios de peluqueria.'>
                                <p>Accesorios de peluqueria.</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Muebles.'>
                                <p>Muebles.</p>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </Container>
     
    );
}

export default NavBar;