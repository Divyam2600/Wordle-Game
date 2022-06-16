import React from "react";

function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="bg-gray-400 bg-opacity-80 w-full top-0 fixed flex justify-center items-center h-full mx-auto">
      {isCorrect && (
        <div className="modal">
          <h1 className="text-xl font-bold border-b-2 pb-2">
            Congratulations!! You Win :){" "}
          </h1>
          <p className="text-red-500 text-lg mt-[1.5px] font-bold uppercase">
            {solution}
          </p>
          <p className="font-semibold">
            You found the solution in {turn} guesses.
          </p>
        </div>
      )}
      {!isCorrect && (
        <div className="modal">
          <h1 className="text-xl font-bold border-b-2 pb-2">Nevermind !!</h1>
          <p className="flex space-x-2 text-center justify-center mt-2">
            <p>The word was: </p>
            <p className=" text-red-500  font-bold uppercase mt-[1.5px]">
              {solution}
            </p>
          </p>
          <p className="font-semibold">Better luck next time!! :)</p>
        </div>
      )}
    </div>
  );
}

export default Modal;
