import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentenceChallengeSelector } from "../../redux/sentence-challenge/sentence-challenge.selector";
import { sentenceChallengeActions } from "../../redux/sentence-challenge/sentence-challenge.slice";
import styles from "./sentence-challenge.screen.module.css";

export const SentenceChallengeScreen = () => {
  const dispatch = useDispatch();
  const sentence = useSelector(sentenceChallengeSelector.sentence);

  useEffect(() => {
    dispatch(sentenceChallengeActions.fetchSentence());
  }, [dispatch]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (!(event.code === "Enter" || event.code === "Space")) {
        return;
      }

      if (!sentence) {
        return;
      }

      dispatch(
        sentenceChallengeActions.completeChallenge({
          sentence: sentence,
        })
      );
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.sentence}>{sentence?.en}</div>
      <textarea className={styles.sentenceMatch}></textarea>
    </div>
  );
};
