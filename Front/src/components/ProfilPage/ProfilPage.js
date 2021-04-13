import React from 'react'
import LeftMenu from '../LeftMenu/LeftMenu';
import './styles.scss';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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
                        p={8}
                        bgcolor="white"
                        boxShadow={3}
                        borderRadius="10px"
                        className="profil-box"

                        >
                            <h1 className="profil-box__main-title">Vos informations</h1>
                            <div className="profil-box__content">
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">Nom de l'organisme:</p>
                                    <p>Hôpital Paris Saint-Joseph</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">e-mail:</p>
                                    <IconButton aria-label="delete">
                                        <EditIcon />
                                    </IconButton>
                                    <p>hopitalsj@sante-paris.fr</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">N° de téléphonne:</p>
                                    <IconButton aria-label="delete">
                                        <EditIcon />
                                    </IconButton>
                                    <p>01.44.12.33.33</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">RPSS:</p>
                                    <p>680004546</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">Ville:</p>
                                    <p>Paris</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">Adresse:</p>
                                    <p>185 Rue Raymond Losserand</p>
                                </div>
                                <Divider/>
                                <div className="profil-box__content-elt">
                                    <p className="profil-box__content-elt__infos">Code postal:</p>
                                    <p>75 014</p>
                                </div>
                            </div>
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
