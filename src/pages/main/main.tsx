import style from "./styles.module.scss";
import Heart from "../../assets/heart.svg";
export default function Main() {
  return (
    <div className={style.main}>
      <h1>Я назову сайт твоим именем</h1>

      <div className={style.main__block}>
        <p>От кого: Слекс</p>
        <p>Для кого: Полеша</p>
      </div>
      <img src={Heart} alt="heart" />
    </div>
  );
}
