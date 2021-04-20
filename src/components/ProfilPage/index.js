// Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Import from MATERIAL-UI
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DialogModal from 'src/containers/ModalChangeInformations';
import Grow from '@material-ui/core/Grow';

// Import CSS
import './styles.scss';

// Modifications des stymes MATERIAL_UI
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
  handleChange,
  newEmail,
  newPhoneNumber,
  handleSave,
}) => {
  const classes = useStyles();

  // Gestion de l'ouverture et de la fermeture des forms de modification de mail et du phoneNumber
  const [editMailInputIsOpen, setEditMailInputIsOpen] = useState(false);
  const [editPhoneInputIsOpen, setEditPhoneInputIsOpen] = useState(false);

  const handleEditPhoneNumberBtn = () => {
    setEditPhoneInputIsOpen(!editPhoneInputIsOpen);
  };

  const handleEditMailBtn = () => {
    setEditMailInputIsOpen(!editMailInputIsOpen);
  };

  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const handleSaveBtn = () => {
    handleSave();
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
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              p={4}
              bgcolor="white"
              boxShadow={3}
              borderRadius="10px"
              className="profil-box"
            >
              <h2 className="profil-box__main-title">Vos informations</h2>
              <div className="profil-box__content">
                <div className="profil-box__content-elt">
                  <p className="profil-box__content-elt__infos">
                    Nom de l'organisme:
                  </p>
                  <p className="profil-box__content-elt__content">
                    {establishment}
                  </p>
                </div>
                <Divider color="primary" />
                <div className="profil-box__content-elt">
                  <p
                    className={
                      editMailInputIsOpen
                        ? 'hidden'
                        : 'profil-box__content-elt__infos'
                    }
                  >
                    e-mail:
                  </p>
                  <IconButton onClick={handleEditMailBtn}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <p
                    className={
                      editMailInputIsOpen
                        ? 'hidden'
                        : 'profil-box__content-elt__content'
                    }
                  >
                    {email}
                  </p>
                  <Grow
                    in={editMailInputIsOpen}
                    style={{ transformOrigin: '0 200 0' }}
                    {...(editMailInputIsOpen ? { timeout: 1000 } : {})}
                  >
                    <TextField
                      id="outlined-basic"
                      label="E-mail"
                      name="newEmail"
                      variant="outlined"
                      type="email"
                      value={newEmail}
                      onChange={handleChangeInput}
                      className={
                        editMailInputIsOpen
                          ? 'profil-box__content-elt__change-email'
                          : classes.field
                      }
                    />
                  </Grow>
                  <IconButton
                    color="primary"
                    onClick={handleSaveBtn}
                    className={editMailInputIsOpen ? '' : classes.field}
                  >
                    <SaveIcon />
                  </IconButton>
                </div>
                <Divider />
                <div className="profil-box__content-elt">
                  <p
                    className={
                      editPhoneInputIsOpen
                        ? 'hidden'
                        : 'profil-box__content-elt__infos'
                    }
                  >
                    N° de téléphonne:
                  </p>
                  <IconButton
                    aria-label="delete"
                    onClick={handleEditPhoneNumberBtn}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                  <p
                    className={
                      editPhoneInputIsOpen
                        ? 'hidden'
                        : 'profil-box__content-elt__content'
                    }
                  >
                    {phoneNumer}
                  </p>
                  <Grow
                    in={editPhoneInputIsOpen}
                    style={{ transformOrigin: '0 200 0' }}
                    {...(editPhoneInputIsOpen ? { timeout: 1000 } : {})}
                  >
                    <TextField
                      id="outlined-basic"
                      label="N° de téléphonne"
                      variant="outlined"
                      name="newPhoneNumber"
                      type="number"
                      value={newPhoneNumber}
                      onChange={handleChangeInput}
                      className={
                        editPhoneInputIsOpen
                          ? 'profil-box__content-elt__change-phone-number'
                          : classes.field
                      }
                    />
                  </Grow>
                  <IconButton
                    color="primary"
                    onClick={handleSaveBtn}
                    className={editPhoneInputIsOpen ? '' : classes.field}
                  >
                    <SaveIcon />
                  </IconButton>
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
              <DialogModal />
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
  handleChange: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  newPhoneNumber: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default ProfilPage;
