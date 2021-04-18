import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';

// Import CSS
import './styles.scss';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
    minWidth: '300px',
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '1.2rem',
    flexShrink: 0,
  },
}));

const AccordionsPharmacyDetails = ({
  establishment,
  adress,
  city,
  zipCode,
  email,
  phoneNumer,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{establishment}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.body}>
          <Box
            className="contact"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            width="100%"
            boxShadow={2}
            p={2}
            bgcolor="rgb(155, 230, 247, 0.2)"
          >
            <p>{adress}</p>
            <p>{city}</p>
            <p>{zipCode}</p>
            <Button
              variant="contained"
              color="primary"
              size="small"
              id="phoneBtn"
              className={classes.button}
              href={`tel: ${phoneNumer}`}
              startIcon={<PhoneForwardedIcon />}
            >
              {phoneNumer}
            </Button>
            <Divider />
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<EmailIcon />}
              href={`mailto: ${email}`}
            >
              {email}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

AccordionsPharmacyDetails.propTypes = {
  establishment: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumer: PropTypes.number.isRequired,
};

export default AccordionsPharmacyDetails;
