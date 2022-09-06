import leaderboard from "./domElement.js";

class Score {
  constructor() {
    this.scoreArray = [];
    this.count = this.scoreArray.length;
  }

  addScore(name, score) {
    const scoreObject = {
        index: this.count,
        name: name,
        score:score,
    };
    this.scoreArray.push(scoreObject);
    this.display(name, score, this.count);
  }

  display(name, score, index) {
    const html = `
    <li class = 'score-line' id = '${index}_score'> ${name}:      ${score}</li>
    `
    const li = document.createElement('li');
    li.innerHTML = html;
    leaderboard.appendChild(li);
    this.count += 1;
  }
}

export default Score;