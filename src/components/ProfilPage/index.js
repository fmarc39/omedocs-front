import React, { useState } from 'react';
import LeftMenu from 'src/components/LeftMenu';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './styles.scss';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  field: {
    display: 'none',
  },
}));

const ProfilPage = ({
  phoneNumer,
  establishment,
  email,
  rpss,
  city,
  adress,
  zipCode,
}) => {
  const classes = useStyles();
  const [editMailInputIsOpen, setEditMailInputIsOpen] = useState(false);
  const [editPhoneInputIsOpen, setEditPhoneInputIsOpen] = useState(false);

  const handleEditPhoneNumberBtn = () => {
    setEditPhoneInputIsOpen(!editPhoneInputIsOpen);
  };

  const handleEditMailBtn = () => {
    setEditMailInputIsOpen(!editMailInputIsOpen);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box p={8} bgcolor="white" boxShadow={3} borderRadius="10px" className="profil-box">
              <h1 className="profil-box__main-title">Vos informations</h1>
              <div className="profil-box__content">
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">Nom de l'organisme:</p>
                  <p className="profil-box__content-elt__content">{establishment}</p>
                </div>
                <Divider color="primary" />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">e-mail:</p>
                  <IconButton aria-label="delete" onClick={handleEditMailBtn}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <p className={editMailInputIsOpen ? 'hidden' : 'profil-box__content-elt__content'}>{email}</p>
                  <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    className={editMailInputIsOpen ? 'profil-box__content-elt__change-email' : classes.field}
                  />
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">N° de téléphonne:</p>
                  <IconButton aria-label="delete" onClick={handleEditPhoneNumberBtn}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <p className={editPhoneInputIsOpen ? 'hidden' : 'profil-box__content-elt__content'}>{phoneNumer}</p>
                  <TextField
                    id="outlined-basic"
                    label="N° de téléphonne"
                    variant="outlined"
                    value={phoneNumer}
                    className={editPhoneInputIsOpen ? 'profil-box__content-elt__change-phone-number' : classes.field}
                  />
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">RPSS:</p>
                  <p className="profil-box__content-elt__content">{rpss}</p>
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">Ville:</p>
                  <p className="profil-box__content-elt__content">{city}</p>
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">Adresse:</p>
                  <p className="profil-box__content-elt__content">{adress}</p>
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">Code postal:</p>
                  <p className="profil-box__content-elt__content">{zipCode}</p>
                </div>
              </div>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

ProfilPage.propTypes = {
  phoneNumer: PropTypes.string.isRequired,
  establishment: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rpss: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default ProfilPage;
