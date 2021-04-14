import React from 'react';
import './styles.scss';

const index = () => (

  <div className="mainbox">
    <div className="err">4</div>
    <i className="far fa-question-circle fa-spin" />
    <div className="err2">4</div>
    <div className="msg">
      <p>
        Peut-être que cette page a été déplacée?<br />
        Se cacher est-elle en quarantaine?<br />
        N'a jamais existé en premier lieu.<br />
      </p>
      <p>Allons à <a href="/">Accueil</a> et essayons à partir de là</p>
    </div>
  </div>
);

export default index;
