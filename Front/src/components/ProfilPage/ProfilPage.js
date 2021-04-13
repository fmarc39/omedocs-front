import React from 'react'
import LeftMenu from '../LeftMenu/LeftMenu';
import './styles.scss';
import Box from '@material-ui/core/Box';

const ProfilPage = () => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100vh"
        >
            <Box className="header">
                Header
            </Box>
            <Box
                height="100%"
                width="100%"
                display="flex"
                id='body'
            >
                <LeftMenu/>
                    <Box bgcolor="#C6C6C6"
                    height="100%"
                    width="100%"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Box
                        width="90%"
                        height="80%"
                        bgcolor="white"
                        boxShadow={3}
                        borderRadius="10px"

                        >
                            <h1>Salut</h1>
                        </Box>
                    </Box>
            </Box>
            <Box className="footer">
                Footer
            </Box>
        </Box>
    )
};

ProfilPage.propTypes = {
 
};

export default ProfilPage
