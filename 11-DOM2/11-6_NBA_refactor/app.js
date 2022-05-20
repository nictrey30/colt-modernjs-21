const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
];

// **************************************************
// STEP 2 - Refactored & Re-usable
// **************************************************
const makeChart = (games, targetTeam) => {
  // the function will return the ul based on the data
  const ulParent = document.createElement('ul');
  for (let game of games) {
    // create an li for each game
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);
    ulParent.appendChild(gameLi);
    gameLi.classList.add(isWinnerFunc(game, targetTeam) ? 'win' : 'loss');
  }
  return ulParent;
};

// find the correct team
const isWinnerFunc = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  // return if the targetTeam won or lost
  return target.isWinner;
};

// function to determine the inner text of the li
const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  // create teamNames string
  const teamNames = `${aTeam} @ ${hTeam}`;
  // create scoreLine string
  let scoreLine = '';
  // select the score that have won and bold it
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames, 'Golden State');
document.getElementById('gs').append(chart1);
const chart2 = makeChart(warriorsGames, 'Houston');
document.getElementById('hr').append(chart2);
