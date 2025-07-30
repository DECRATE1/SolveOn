import "../styles/TopPopularServicesCard.css";
export default function TopPopularServicesCard({
  lowerHeight,
}: {
  lowerHeight: boolean;
}) {
  return (
    <div
      className="TopPopularServicesCard"
      style={{
        opacity: lowerHeight ? 1 : 0,
        transition: "opacity 20s ease",
      }}
    >
      <span className="titleService">Лазерная коррекция зрения</span>
      <div>
        <img
          className="topPopularServicesCardImage"
          src="/slide2.jpg"
          width={361}
          height={361}
        ></img>
      </div>
      <span className="desServise">
        После лазерной коррекции зрение становится лучше за счет того, что лазер
        создает новую форму роговицы — «естественной линзы» нашего глаза,
        вследствие чего она начинает по-другому преломлять световые лучи, они
        фокусируются на сетчатке и изображение становится четким.
      </span>
    </div>
  );
}
