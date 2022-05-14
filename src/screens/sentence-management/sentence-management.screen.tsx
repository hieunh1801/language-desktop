import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentenceManagementSelector } from "../../redux/sentence-management/sentence-management.selector";
import { sentenceManagementActions } from "../../redux/sentence-management/sentence-management.slice";
import styles from "./sentence-management.screen.module.css";
export const SentenceManagementScreen = () => {
  const dispatch = useDispatch();
  const sentences = useSelector(sentenceManagementSelector.sentences);
  const [multipleSentenceInput, setMultipleSentenceInput] =
    useState<string>("");
  useEffect(() => {
    dispatch(sentenceManagementActions.fetchSentences());
  }, [dispatch]);

  const handleAddSentences = () => {
    dispatch(
      sentenceManagementActions.createSentences({
        sentencesString: multipleSentenceInput,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.sentenceList}>
        <div className={styles.sentenceListItem__header}>
          <div>Id</div>
          <div>English</div>
          <div>Vietnamese</div>
          <div>Count</div>
          <div>Actions</div>
        </div>
        {sentences?.map((sentence) => {
          return (
            <div key={sentence.id} className={styles.sentenceListItem}>
              <div>{sentence.id}</div>
              <div>{sentence.en}</div>
              <div>{sentence.vi}</div>
              <div>{sentence.count}</div>
              <button className={styles.sentenceListItem__deleteButton}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.addMultipleSentence}>
        <textarea
          placeholder="Add paragraph here, auto separate them by ."
          value={multipleSentenceInput}
          onChange={(e) => setMultipleSentenceInput(e.target.value)}
          className={styles.addMultipleSentence__input}
        />
        <button
          className={styles.addMultipleSentence__addButton}
          onClick={handleAddSentences}
        >
          Add multiple sentence
        </button>
      </div>
    </div>
  );
};
