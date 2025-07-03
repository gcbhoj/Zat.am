import React from 'react'
import TotalScreenTimeByGame from '../Charts/Games/TotalScreenTimeByGame'
import TotalPlayCountByGame from '../Charts/Games/TotalPlayCountByGame';
import TotalStarsByGame from '../Charts/Games/TotalStarsByGame';

const GameAnalytics = () => {
  return (
    <div className='"m-0.5 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <TotalScreenTimeByGame />
      <TotalPlayCountByGame />
      <TotalStarsByGame/>

    </div>
  );
}

export default GameAnalytics