import styles from "../styles/Home.module.css";
import { questions } from "./questionsList";

const getQuestions = (list) => {
  let content = [];
  for (let i = 0; i < list.length; i += 3) {
    content.push(
      <div className={styles.faq_questionDiv}>
        <div
          className={styles.faq_question}
          style={{ backgroundColor: "rgb(255,0,9)", color: "white" }}
        >
          <p className={styles.faq_questionText}>{list[i]["q"]}</p>
        </div>
        <div className={styles.faq_answer}>{getAnswers(list[i]["a"])}</div>
        {i + 1 < list.length && (
          <div
            className={styles.faq_question}
            style={{ backgroundColor: "rgb(0,141,179) ", color: "white" }}
          >
            <p className={styles.faq_questionText}>{list[i + 1]["q"]}</p>
          </div>
        )}
        {i + 1 < list.length && (
          <div className={styles.faq_answer}>
            {getAnswers(list[i + 1]["a"])}
          </div>
        )}
        {i + 2 < list.length && (
          <div
            className={styles.faq_question}
            style={{ backgroundColor: "rgb(255,230,43)", color: "black" }}
          >
            <p className={styles.faq_questionText}>{list[i + 2]["q"]}</p>
          </div>
        )}
        {i + 2 < list.length && (
          <div className={styles.faq_answer}>
            {getAnswers(list[i + 2]["a"])}
          </div>
        )}
      </div>
    );
  }
  return content;
};

const getAnswers = (list) => {
  let content = [];
  if (list.length == 1) {
    content.push(<p className={styles.faq_answerText}>ANS: {list[0]}</p>);
  } else {
    content.push(
      <p className={styles.faq_answerText}>
        ANS:
        <ul className={styles.faq_answerList}>
          {list.map((item, index) => (
            <li key={index} className={styles.faq_answerText}>
              {item}
            </li>
          ))}
        </ul>
      </p>
    );
  }
  return content;
};

export const faqList = getQuestions(questions);
