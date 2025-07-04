import React from 'react'
import TotalScreenTimeByGame from '../Charts/Games/TotalScreenTimeByGame'
import TotalPlayCountByGame from '../Charts/Games/TotalPlayCountByGame';
import TotalStarsByGame from '../Charts/Games/TotalStarsByGame';
import LastPlayedDataByGame from '../Charts/Games/LastPlayedDataByGame';
import GamesAndHighScores from '../Charts/Games/GamesAndHighScores';

const GameAnalytics = () => {
  return (
    <div className='m-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-0'>
      <TotalScreenTimeByGame />
      <TotalPlayCountByGame />
      <TotalStarsByGame />
      <LastPlayedDataByGame />
      <GamesAndHighScores/>

    </div>
  );
}

export default GameAnalytics