import './style.css';

import { name, score, submitButton } from './modules/domElement.js';
import Score from './modules/scores.js';

const scoreObj = new Score();

const getData = () => {
  let nameValue = name.value;
  let scoreValue = score.value;
  if (scoreValue !== '' && nameValue!==''){
    scoreObj.addScore(nameValue, scoreValue);
    name.value = '';
    score.value = '';
  }
}

submitButton.addEventListener('click', getData);