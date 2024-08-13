import { IEncounterRecord } from "../../../../data/records";

import "./index.scss";
import { NewRecordNote } from "./NewRecordNote";

interface IRecord {
  title: string;
  records: IEncounterRecord[];
}

export const Record = ({ title, records }: IRecord) => {
  if (records.length === 0) return null;
  return (
    <div className="encounter-record-wrapper">
      <h2>{title}</h2>
      <div className="records-container">
        {records.map((record: IEncounterRecord, index: number) => {
          return (
            <div key={index} className="record-wrapper" onClick={() => window.open(record.video)}>
              {record.isNew && <NewRecordNote />}
              <img alt="" src={record.image} loading="lazy" />
              <div className="reddit-log-links-container">
                {record.reddit && <span onClick={() => window.open(record.reddit)}>Reddit Post</span>}
                {record.log && <span onClick={() => window.open(record.log)}>Log</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
