import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const ContactPage = () => {
  const [status, setStatus] = useState('Envoyer');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    const result = await response.json();
    alert(result.status);
  };
  return (
    <Box bgcolor="#FFF" p={4} borderRadius="10px" mt={4} boxShadow={4}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box display="flex" flexDirection="column">
          <Box mb={4} display="flex" justifyContent="space-between">
            <TextField label="Nom" variant="outlined" />
            <TextField label="Mail" variant="outlined" type="email" />
          </Box>

          <Box mb={4}>
            <TextField
              id="outlined-multiline-static"
              label="Votre message"
              multiline
              fullWidth="true"
              rows={8}
              variant="outlined"
            />
          </Box>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            {status}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactPage;
