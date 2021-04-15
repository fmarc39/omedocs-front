import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

// Import CSS
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    minWidth: '300px',
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '1.5rem',
    flexBasis: '80%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '1rem',
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
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
          <Typography className={classes.heading}>
            Pharmacie de la gare
          </Typography>
          <Typography className={classes.secondaryHeading}>Contacts</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.body}>
          <Box
            className="contact"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            width="100%"
          >
            <a href="mailto: abc@example.com" className="contact__email">
              abc@example.com
            </a>
            <a href="tel:5551234567" className="contact__phone">
              06.35.11.60.59
            </a>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
