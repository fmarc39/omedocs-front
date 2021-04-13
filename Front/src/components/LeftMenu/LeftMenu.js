import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import avatarImg from '../../assets/img_avatar.png';

const LeftMenu = () => {
    return (
        <Box
            boxShadow={1}
            p={2} display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            width="250px"
            height="100%"
            color="primary.contrastText"
            bgcolor="#AAAAAA"
            className="left-menu"
        >
            <Avatar alt="Remy Sharp" src={avatarImg} style={{margin :'1rem'}}/>

            <Typography
            variant="h6"
            component="h6"
            >
                Bienvenue <br/> 
                H.P O’clock
            </Typography>

            <Box display="flex" flexDirection="column" height="75%" justifyContent="space-evenly">
                <Button
                variant="contained"
                color="primary"
                endIcon={<AccountCircleIcon/>}
                size="large"
                >
                    Profil
                </Button>
                <Button
                variant="contained"
                color="primary"
                endIcon={<SearchIcon/>}
                size="large"
                >
                    Rechercher un produit
                </Button>
                <Button
                variant="contained"
                color="primary"
                endIcon={<LocalPharmacyIcon/>}
                size="large"
                >
                    Voire les pharmacies
                </Button>
                <Button
                variant="contained"
                color="primary"
                endIcon={<ShoppingCartIcon/>}
                size="large"
                >
                    Acceder au panier
                </Button>
            </Box>
        </Box>
    )
}

export default LeftMenu
