import { useState } from "react";
import "./index.scss";

export const KeyboardNotebook = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="keyboard-notebook-container">
      <textarea value={text} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value)} />
      <button onClick={() => setText("")}>Clear Text Board</button>
    </div>
  );
};
