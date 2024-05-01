import "./index.scss";

interface IInstructions {
  instructions: string[];
}

export const Instructions = ({ instructions }: IInstructions) => {
  return (
    <>
      <h1 className="instructions-title">Instructions</h1>
      <div className="instructions-container">
        {instructions.map((instruction: string, index: number) => {
          return (
            <div key={index}>
              {instruction}
              <span>{index + 1}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
