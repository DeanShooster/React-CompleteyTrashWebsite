import { ModalMsgText } from "..";

import "./index.scss";
import { Checkmark, markerX } from "../../../../../../assets";

interface IModalMsg {
  strikes: number;
  msg: ModalMsgText;
  continueGame: Function;
}

export const ModalMsg = ({ strikes, msg, continueGame }: IModalMsg) => {
  return (
    <>
      <div className="wall">
        <div className="modal-msg-wrapper">
          <div>
            {msg === "LevelUp" ? (
              <>
                <p>Level Up!</p>
                <img alt="" src={Checkmark} />
              </>
            ) : (
              <>
                <p>Strike</p>
                <img alt="" src={markerX} />
              </>
            )}
          </div>
          {msg === "LevelUp" && strikes > 0 && <p>We'll remove a strike!</p>}
          <button onClick={() => continueGame()}>Continue</button>
        </div>
      </div>
    </>
  );
};
