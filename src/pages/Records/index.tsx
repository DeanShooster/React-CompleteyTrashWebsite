import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useTitle } from "../../hooks/useTitle";
import { recordTarget, recordsPage } from "../../constants/routing";
import { EOD, IBS, SOTO, w1, w2, w3, w4, w5, w6, w7, w8 } from "../../data/records";

import { WingStrikeScreen } from "./WingScreen";
import { WingStrikeRecords } from "./WingRecords";

import "./index.scss";

export const Records = () => {
  useTitle(recordsPage);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryTargetSearch = queryParams.get(recordTarget);

  const [wingStrikeRecords, setWingStrikeRecords] = useState<string>("");
  const recordsRef = useRef<any>(null);

  const scrollToRecordHandler = () => window.scrollTo({ top: recordsRef?.current?.offsetTop ? recordsRef?.current?.offsetTop - 150 : 0, behavior: "smooth" });

  useEffect(() => {
    recordsRef.current?.scrollIntoView();
  }, []);
  const scrollToRecord = () =>
    setTimeout(() => {
      scrollToRecordHandler();
    }, 50);

  useEffect(() => {
    if (!queryTargetSearch) return;
    switch (queryTargetSearch) {
      case "1": {
        setWingStrikeRecords(w1);
        break;
      }
      case "2": {
        setWingStrikeRecords(w2);
        break;
      }
      case "3": {
        setWingStrikeRecords(w3);
        break;
      }
      case "4": {
        setWingStrikeRecords(w4);
        break;
      }
      case "5": {
        setWingStrikeRecords(w5);
        break;
      }
      case "6": {
        setWingStrikeRecords(w6);
        break;
      }
      case "7": {
        setWingStrikeRecords(w7);
        break;
      }
      case "8": {
        setWingStrikeRecords(w8);
        break;
      }
      case "IBS": {
        setWingStrikeRecords(IBS);
        break;
      }
      case "EOD": {
        setWingStrikeRecords(EOD);
        break;
      }
      case "SOTO": {
        setWingStrikeRecords(SOTO);
        break;
      }
      default: {
        return;
      }
    }
    setTimeout(() => {
      scrollToRecordHandler();
    }, 50);
  }, [queryTargetSearch]);

  return (
    <>
      <section className="records-page">
        <WingStrikeScreen setWingStrikeRecords={setWingStrikeRecords} scrollToRecord={scrollToRecord} />
        <WingStrikeRecords wingStrikeRecords={wingStrikeRecords} recordsRef={recordsRef} />
      </section>
    </>
  );
};
