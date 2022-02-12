import { formatDistanceToNowStrict } from 'date-fns';
import { getDaysNumberSinceStartSeason } from '../modules/season.module';

import ActionButton from './ActionButton';

export default function SeasonCard({ onClick, season }) {
  const sinceDays = getDaysNumberSinceStartSeason(season);

  return (
    <div className="shadow-black-500/50 rounded bg-gray-100 py-24 px-16 text-center shadow-lg">
      <h1 className="text-4xl font-bold">
        {season.name} {season.icon}
      </h1>
      <p className="text-gray-500">Since {sinceDays}</p>
      <ActionButton label="And after ?" action={onClick} />
    </div>
  );
}
