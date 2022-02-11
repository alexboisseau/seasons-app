import { isWithinInterval } from 'date-fns';
import { useState } from 'react';

import SeasonCard from './components/SeasonCard';
import SeasonModal from './components/SeasonModal';

import data from './data/data.json';

function determinateCurrentSeason() {
  const currentYear = new Date().getFullYear();

  let currentSeasonName = '';
  Object.entries(data.seasons).forEach(([name, season]) => {
    const start = new Date(
      currentYear,
      season.beginAt.month - 1,
      season.beginAt.day
    );
    const end = new Date(currentYear, season.endAt.month - 1, season.endAt.day);

    if (name !== 'winter' && isWithinInterval(new Date(), { start, end })) {
      currentSeasonName = name;
    }
  });

  if (currentSeasonName === '') return data.seasons.winter;
  return data.seasons[currentSeasonName];
}

export default function App() {
  const [seasonModalIsShow, setSeasonModalIsShow] = useState(false);

  const onClick = () => {
    const modalIsShow = seasonModalIsShow;
    setSeasonModalIsShow(!modalIsShow);
  };

  const currentSeason = determinateCurrentSeason();
  const nextSeason = data.seasons[currentSeason.next];

  return (
    <div className="w-100 flex h-screen flex-col items-center justify-center">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Seasons Application</h1>
        <p className="text-gray-500">
          Developped by Alex Boisseau during React courses
        </p>
      </div>
      <SeasonCard onClick={onClick} season={currentSeason} />
      {seasonModalIsShow ? (
        <SeasonModal onBackClick={onClick} nextSeason={nextSeason} />
      ) : (
        false
      )}
    </div>
  );
}
