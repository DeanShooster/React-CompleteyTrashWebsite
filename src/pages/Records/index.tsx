import { useRef, useState, useEffect } from "react";
import { useTitle } from "../../hooks/useTitle";
import { recordTarget, recordsPage } from "../../constants/routing";
import { EOD, IBS, SOTO, w1, w2, w3, w4, w5, w6, w7 } from "../../data/records";

import { WingStrikeScreen } from "./WingScreen";
import { WingStrikeRecords } from "./WingRecords";

import "./index.scss";
import { useLocation } from "react-router";

export const Records = () => {
  useTitle(recordsPage);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryTargetSearch = queryParams.get(recordTarget);

  const [wingStrikeRecords, setWingStrikeRecords] = useState<string>("");
  const recordsRef = useRef<any>(null);

  useEffect(() => {
    recordsRef.current?.scrollIntoView();
  }, []);
  const scrollToRecord = () =>
    setTimeout(() => {
      window.scrollTo({ top: recordsRef?.current?.offsetTop ? recordsRef?.current?.offsetTop - 150 : 0, behavior: "smooth" });
    }, 50);

  useEffect(() => {
    if (!queryTargetSearch) return;
    switch (queryTargetSearch) {
      case "1": {
        setWingStrikeRecords(w1);
        return;
      }
      case "2": {
        setWingStrikeRecords(w2);
        return;
      }
      case "3": {
        setWingStrikeRecords(w3);
        return;
      }
      case "4": {
        setWingStrikeRecords(w4);
        return;
      }
      case "5": {
        setWingStrikeRecords(w5);
        return;
      }
      case "6": {
        setWingStrikeRecords(w6);
        return;
      }
      case "7": {
        setWingStrikeRecords(w7);
        return;
      }
      case "IBS": {
        setWingStrikeRecords(IBS);
        return;
      }
      case "EOD": {
        setWingStrikeRecords(EOD);
        return;
      }
      case "SOTO": {
        setWingStrikeRecords(SOTO);
        return;
      }
      default: {
        return;
      }
    }
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
