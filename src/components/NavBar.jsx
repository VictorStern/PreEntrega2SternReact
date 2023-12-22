import React from 'react';
import CartWidget from './CartWidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box >
                    Castabarber
                </Box>
                <Spacer />

                <Menu>
                    <MenuButton>
                       Categorias.
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Accesorios de corte.</MenuItem>
                        <MenuItem>Accesorios de peluqueria.</MenuItem>
                        <MenuItem>Muebles.</MenuItem>
                       
                    </MenuList>
                </Menu>
                <Spacer />
                <Box >
                    <CartWidget />

                </Box>
            </Flex>



        </div>
    );
}

export default NavBar;
