import { MouseNotebook } from "./MouseNotebook";
import { KeyboardNotebook } from "./KeyboardNotebook";

import "./index.scss";

export const Notebook = () => {
  return (
    <div className="notebook-container">
      <MouseNotebook />
      <KeyboardNotebook />
    </div>
  );
};
