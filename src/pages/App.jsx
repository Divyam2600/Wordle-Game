import { useEffect, useState } from "react";
import Wordle from "../components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3005/solutions")
      .then((res) => res.json())
      .then((json) => {
        // Random number between 0-19
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="text-center m-0 text-base">
      <div>
        <h1 className=" text-3xl py-3 border-b-2 border-gray-200 border mb-4 text-gray-800 font-semibold">
          Wordle Game
        </h1>
      </div>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
