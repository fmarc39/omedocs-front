// Import React
import React, { useState } from 'react';

// Import COMPOMENTS
import Footer from 'src/components/Footer';

// Inport NPM
import { InView } from 'react-intersection-observer';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

// image
import logo from 'src/assets/img/mortier.svg';
import pharmacy from 'src/assets/img/pharmacie.svg';
import hopital from 'src/assets/img/hopital.svg';
import money from 'src/assets/img/bank.svg';
import idea from 'src/assets/img/puzzle.svg';
import scrollBtn from 'src/assets/img/scroll.svg';
import upArrow from 'src/assets/img/up-arrow.svg';

// Import CSS
import './styles.scss';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#0368A3',
    borderRadius: '30px',
    padding: '.8rem',
    fontSize: '1rem',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  // Hooks qui va permettre l'apparition de scroll-to-top-btn
  const [visible, setVisible] = useState(false);

  const activeMenu = () => {
    setActive(!active);
  };

  // Gestion du click sur le scroll-down btn
  const handleScrollDownBtn = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  // Gestion de l'apparition du scroll-top-btn
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  // Gestion du click sur le croll-up btn
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Ajout de l'écouteur d'évènement sur le scroll de la page
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={classNames('homepage', { 'homepage--fixed': active })}>
      <header className="header">
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo" />
          <div className="logo__name">O'Médocs</div>
        </div>
        <div className="header__navigation">
          <nav className={classNames('navbar', { isActive: active })}>
            <a className="navbar__link" href="#goal">
              Notre but
            </a>
            <a className="navbar__link" href="#why">
              Pourquoi
            </a>
            <a className="navbar__link" href="#services">
              Nos services
            </a>
            <a className="navbar__link" href="#">
              Nous contacter
            </a>
            <a className="navbar__link navbar__link--connexion" href="#">
              Connexion
            </a>
          </nav>
          <button
            className="header__hamburger"
            type="button"
            onClick={activeMenu}
          >
            {active ? <GrClose size="2rem" /> : <HiMenu size="2.5rem" />}
          </button>
        </div>
        <div className="animated-title">
          <div className="text-top">
            <div>
              <span>Lutter contre</span>
              <span>le gaspillage</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>de médicaments</div>
          </div>
        </div>
        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
        <div className="header__login-btn">
          <Link
            className="login"
            to="/login"
            style={{ textDecoration: 'none' }}
          >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              Connexion/ Inscription
            </Button>
          </Link>
        </div>
        <a onClick={scrollToTop}>
          <img
            src={upArrow}
            alt="scroll-btn"
            className={visible ? 'showBtn' : 'scroll-top-btn'}
          />
        </a>
      </header>

      <div className="goal" id="goal">
        <div className="goal__header">
          <h2 className="goal__header--title"> Notre But</h2>
        </div>
        <InView triggerOnce="true">
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={inView ? 'goal__content' : 'goal__content-hide'}
            >
              <p className="goal__content--text">
                Mettre en relation les professionnels de la santé pour luttre
                contre le gaspillage des médicaments.
              </p>
              <div className="goal__content--img" />
            </div>
          )}
        </InView>
        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
      </div>
      <div className="why" id="why">
        <div className="why__header">
          <h2 className="why__header--title">Pourquoi?</h2>
        </div>
        <InView triggerOnce="true">
          {({ inView, ref }) => (
            <div
              className={inView ? 'why__content' : 'why__content__hide'}
              ref={ref}
            >
              <div className="why__content--card">
                <img
                  className="why__content--card-img"
                  src={pharmacy}
                  alt="pharmacy"
                />
                <p className="why__content--card-text">
                  Actuellement en France, les pharmacies n'ont pas le droit de
                  vendre des médicaments dont la date de péremption est
                  inférieur à 3 à 6 mois.
                </p>
              </div>
              <div className="why__content--card">
                <img
                  className="why__content--card-img"
                  src={money}
                  alt="money"
                />
                <p className="why__content--card-text">
                  Conséquence, les stock sont détruient. En moyenne un
                  pharmacien détruit pour 15 000€ de médicament par ans sans
                  compté les tonnes de déchets que cela représente.
                </p>
              </div>
              <div className="why__content--card">
                <img
                  className="why__content--card-img"
                  src={hopital}
                  alt="hopital"
                />
                <p className="why__content--card-text">
                  A contrario, les hôpitaux peuvent continuer à donner ces
                  médicaments jusqu'à péremption pendant la durée de séjour d'un
                  patient.
                </p>
              </div>
              <div className="why__content--card">
                <img className="why__content--card-img" src={idea} alt="idea" />
                <p className="why__content--card-text">
                  Notre solution: O'médocs met à disposition une plateforme pour
                  que pharmacies et hôpitaux agissent ensemble. Les stock
                  invendable seront mis sur la plateforme par les pharmacies
                  pour que les hopitaux puissent les acheter à prix réduit
                </p>
              </div>
            </div>
          )}
        </InView>

        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
      </div>
      <div className="services" id="services">
        <div className="services__header">
          <h2 className="services__header--title"> Nos services</h2>
        </div>
        <div className="services__content">
          <InView triggerOnce="true">
            {({ inView, ref }) => (
              <div
                className={inView ? 'content-top' : 'content-top__right'}
                ref={ref}
              >
                <p className="content-top__text">
                  Gérer votre stock de médicament invendable et mettez le à
                  disposition sur notre plateforme
                </p>
                <div className="content-top__img" />
              </div>
            )}
          </InView>

          <InView triggerOnce="true">
            {({ inView, ref }) => (
              <div
                className={inView ? 'content-bottom' : 'content-bottom__left'}
                ref={ref}
              >
                <div className="content-bottom__img" />
                <p className="content-bottom__text">
                  Consulter la liste de médicaments disponible sur la
                  plateforme, rechercher une pharmacie et consulter son stock
                </p>
              </div>
            )}
          </InView>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
