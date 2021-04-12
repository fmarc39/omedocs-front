import React from 'react'
import LeftMenu from '../LeftMenu/LeftMenu';
import Container from '@material-ui/core/Container';
import './styles.scss';
import Box from '@material-ui/core/Box';

const SearchProduct = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
            <Box className="header">
                Header
            </Box>
                <LeftMenu/>
            <Box className="footer">
                Footer
            </Box>
        </Box>
    )
}

export default SearchProduct
