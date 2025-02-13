import styles from "./styles.module.scss";

export default function Final() {
  return (
    <div className={styles.final} >
      <div className={styles.final__block} data-aos="fade-up">
        <p className={styles.final__block__text}>
          <span>❤️</span>Я люблю тебя<span>❤️</span>
        </p>
      </div>
      <p className={styles.final__author} data-aos="fade-up">Навеки твой Слекс</p>
    </div>
  );
}
