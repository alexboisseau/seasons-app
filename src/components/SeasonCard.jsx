export default function SeasonCard() {
  return (
    <div className="shadow-black-500/50 rounded bg-gray-100 py-24 px-16 shadow-lg">
      <h1 className="text-4xl font-bold">Winter</h1>
      <p className="text-gray-500">Since 21 days</p>
      <button className="mt-5 rounded bg-red-500 p-3 text-white hover:bg-red-600">
        And after ?
      </button>
    </div>
  );
}
