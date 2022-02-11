import { useState } from 'react';
import SeasonCard from './components/SeasonCard';
import SeasonModal from './components/SeasonModal';

export default function App() {
  const [seasonModalIsShow, setSeasonModalIsShow] = useState(false);

  const onClick = () => {
    const modalIsShow = seasonModalIsShow;
    setSeasonModalIsShow(!modalIsShow);
  };

  return (
    <div className="w-100 flex h-screen flex-col items-center justify-center">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Seasons Application</h1>
        <p className="text-gray-500">
          Developped by Alex Boisseau during React courses
        </p>
      </div>
      <SeasonCard onClick={onClick} />
      {seasonModalIsShow ? <SeasonModal onBackClick={onClick} /> : false}
    </div>
  );
}
