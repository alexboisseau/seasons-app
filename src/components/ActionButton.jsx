export default function ActionButton({ label, action }) {
  return (
    <button
      className="mt-5 rounded bg-red-500 p-3 text-white shadow shadow-md hover:bg-red-600"
      onClick={() => action()}
    >
      {label}
    </button>
  );
}
