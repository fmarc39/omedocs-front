import React, { useState } from 'react';
import './styles.scss';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

// image
import logo from 'src/assets/img/logo.svg';
import chip from 'src/assets/img/pill.svg';
import pharmacy from 'src/assets/img/pharmacie.svg';
import hopital from 'src/assets/img/hopital.svg';
import money from 'src/assets/img/bank.svg';
import idea from 'src/assets/img/puzzle.svg';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#2b88b4',
    width: '150px',
    borderRadius: '20px',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const activeMenu = () => {
    setActive(!active);
  };
  return (
    <div className={classNames('homepage', { 'homepage--fixed': active })}>
      <header className="header">
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo" />
          <div className="logo__name">O'Médocs</div>
        </div>
        <div className="header__navigation">
          <nav className={classNames('navbar', { active: active })}>
            <a className="navbar__link" href="#goal" onClick={activeMenu}>
              Notre but
            </a>
            <a className="navbar__link" href="#why" onClick={activeMenu}>
              Pourquoi
            </a>
            <a className="navbar__link" href="#services" onClick={activeMenu}>
              Nos services
            </a>
            <a className="navbar__link" href="#" onClick={activeMenu}>
              Nous contacter
            </a>
            <a className="navbar__link navbar__link--connexion" href="#" onClick={activeMenu}>
              Connexion
            </a>
          </nav>
          <button className="header__hamburger" type="button" onClick={activeMenu}>
            {active ? <GrClose size="2rem" /> : <HiMenu size="2.5rem" />}
          </button>
        </div>
        <h1 className="header__title">Lutter ensemble contre le gaspillage de médicaments</h1>
        <Link className="login" to="/login">
          <Button className={classes.button} variant="contained" color="primary">
            Connexion
          </Button>
        </Link>
      </header>

      <div className="goal" id="goal">
        <div className="goal__header">
          <img className="goal__header--chip chip" src={chip} alt="pill" />
          <h2 className="goal__header--title"> Notre But</h2>
        </div>
        <div className="goal__content">
          <p className="goal__content--text">
            Mettre en relation les professionnels de la santé pour luttre contre le gaspillage des
            médicaments
          </p>
          <div className="goal__content--img" />
        </div>
      </div>
      <div className="why" id="why">
        <div className="why__header">
          <img className="why__header--chip chip" src={chip} alt="pill" />
          <h2 className="why__header--title">Pourquoi?</h2>
        </div>
        <div className="why__content">
          <div className="why__content--card">
            <img className="why__content--card-img" src={pharmacy} alt="pharmacy" />
            <p className="why__content--card-text">
              Actuellement en France, les pharmacies n'ont pas le droit de vendre des médicaments
              dont la date de péremption est inférieur à 3 à 6 mois.
            </p>
          </div>
          <div className="why__content--card">
            <img className="why__content--card-img" src={money} alt="money" />
            <p className="why__content--card-text">
              Conséquence, les stock sont détruient. En moyenne un pharmacien détruit pour 15 000€
              de médicament par ans sans compté les tonnes de déchets que cela représente.
            </p>
          </div>
          <div className="why__content--card">
            <img className="why__content--card-img" src={hopital} alt="hopital" />
            <p className="why__content--card-text">
              A contrario, les hôpitaux peuvent continuer à donner ces médicaments jusqu'à
              péremption pendant la durée de séjour d'un patient.
            </p>
          </div>
          <div className="why__content--card">
            <img className="why__content--card-img" src={idea} alt="idea" />
            <p className="why__content--card-text">
              Notre solution: O'médocs met à disposition une plateforme pour que pharmacies et
              hôpitaux agissent ensemble. Les stock invendable seront mis sur la plateforme par les
              pharmacies pour que les hopitaux puissent les acheter à prix réduit
            </p>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div className="services__header">
          <img className="servces__header--chip chip" src={chip} alt="pill" />
          <h2 className="services__header--title"> Nos services</h2>
        </div>
        <div className="services__content">
          <div className="content-top">
            <p className="content-top__text">
              Gérer votre stock de médicament invendable et mettez le à disposition sur notre
              plateforme
            </p>
            <div className="content-top__img" />
          </div>
          <div className="content-bottom">
            <div className="content-bottom__img" />
            <p className="content-bottom__text">
              Consulter la liste de médicaments disponible sur la plateforme, rechercher une
              pharmacie et consulter son stock
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
