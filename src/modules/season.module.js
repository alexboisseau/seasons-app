import {
  formatDistanceStrict,
  formatDistanceToNowStrict,
  isWithinInterval,
} from 'date-fns';

import data from '../data/data.json';

const currentYear = new Date().getFullYear();

function getBeginDate(season) {
  return new Date(
    currentYear + (season.name === 'Winter' ? -1 : 0),
    season.beginAt.month - 1,
    season.beginAt.day
  );
}

function getEndDate(season) {
  return new Date(currentYear, season.endAt.month - 1, season.endAt.day);
}

function determinateCurrentSeason() {
  let currentSeasonName = '';

  Object.entries(data.seasons).forEach(([name, season]) => {
    const start = getBeginDate(season);
    const end = getEndDate(season);

    if (name !== 'winter' && isWithinInterval(new Date(), { start, end })) {
      currentSeasonName = name;
    }
  });

  return currentSeasonName === ''
    ? data.seasons.winter
    : data.seasons[currentSeasonName];
}

function determinateNextSeason(season) {
  return data.seasons[season.next];
}

function getDaysNumberSinceStartSeason(season) {
  return formatDistanceToNowStrict(
    new Date(
      currentYear + (season.name === 'Winter' ? -1 : 0),
      season.beginAt.month - 1,
      season.beginAt.day
    ),
    { unit: 'day', addSuffix: true }
  );
}

function getSeasonDuration(season, unit = 'day') {
  const start = getBeginDate(season);
  const end = getEndDate(season);

  return formatDistanceStrict(start, end, { unit });
}

function startIn(season, unit = 'day') {
  const start = getBeginDate(season);

  return formatDistanceToNowStrict(start, {
    unit,
    addSuffix: true,
  });
}

export {
  determinateCurrentSeason,
  determinateNextSeason,
  getDaysNumberSinceStartSeason,
  startIn,
  getSeasonDuration,
};
