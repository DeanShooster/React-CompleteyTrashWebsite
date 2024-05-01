import "./index.scss";

interface IProgress {
  current: number;
  max: number;
}

export const Progress = ({ current, max }: IProgress) => {
  const boxes = new Array(max).fill(0);

  return (
    <div className="progress-box-wrapper">
      {boxes.map((_, index: number) => {
        return <div key={index} className={`${index + 1 < current ? "passed-box" : index + 1 === current ? "passed-box current-box" : ""}`}></div>;
      })}
    </div>
  );
};
