import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.mainHeader}>
      <div className={style.logo}>
        <h1 className={style.mainTitle}>MyPet</h1>
        <h2 className={style.secondaryTitle}>Store Control</h2>
      </div>
    </div>
  );
}
