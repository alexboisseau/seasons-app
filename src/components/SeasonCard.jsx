import { formatDistanceToNowStrict } from 'date-fns';

export default function SeasonCard({ onClick, season }) {
  const sinceDays = formatDistanceToNowStrict(
    new Date(
      new Date().getFullYear() + (season.name === 'Winter' ? -1 : 0),
      season.beginAt.month - 1,
      season.beginAt.day
    ),
    { unit: 'day', addSuffix: true }
  );

  return (
    <div className="shadow-black-500/50 rounded bg-gray-100 py-24 px-16 text-center shadow-lg">
      <h1 className="text-4xl font-bold">
        {season.name} {season.icon}
      </h1>
      <p className="text-gray-500">Since {sinceDays}</p>
      <button
        className="mt-5 rounded bg-red-500 p-3 text-white shadow shadow-md hover:bg-red-600"
        onClick={() => onClick()}
      >
        And after ?
      </button>
    </div>
  );
}
