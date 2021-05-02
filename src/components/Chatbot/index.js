/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

// all available config props
const config = {
  width: '400px',
  height: '500px',
  floating: true,
  background: '#f5f8fb',
  headerBgColor: '#0368a3',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0368a3',
  botFontColor: '#fff',
  userBubbleColor: '#A8C1E2',
  userFontColor: '#fff',
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={config}>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Quel est votre nom ?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Bonjour {previousValue}, comment puis-je vous aider ?',
              trigger: '4',
            },
            {
              id: '4',
              options: [
                { value: 1, label: 'Ajouter un article dans mon inventaire', trigger: '5' },
                { value: 2, label: 'Contacter les responsables du site', trigger: '7' },
                { value: 3, label: 'Modifier mon profil', trigger: '8' },
              ],
            },
            {
              id: '5',
              message: 'Êtes-vous un vendeur ou un acheteur ?',
              trigger: '6',
            },
            {
              id: '6',
              options: [
                { value: 1, label: 'Vendeur', trigger: '9' },
                { value: 2, label: 'Acheteur', trigger: '10' },
              ],
              trigger: '5',
            },
            {
              id: '7',
              component: (
                <div> Bien sur, voici l'adresse mail : <a>o.medocs11@gmail.com</a> </div>
              ),
              asMessage: true,
              end: true,
            },
            {
              id: '8',
              component: (
                <div> Bien sur, rendez-vous sur cette page :<Link to="profil"> Vos informations</Link> </div>
              ),
              asMessage: true,
              end: true,
            },
            {
              id: '9',
              component: (
                <div> Bien sur, rendez-vous sur cette page :<Link to="inventory"> Mon inventaire</Link> </div>
              ),
              asMessage: true,
              end: true,
            },
            {
              id: '10',
              message: 'Désolé, cette fonction est réservée aux vendeurs !',
              trigger: '3',
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
