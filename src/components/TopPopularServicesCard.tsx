import "../styles/TopPopularServicesCard.css";

export default function TopPopularServicesCard({
  lowerHeight,
}: {
  lowerHeight: boolean;
}) {
  return (
    <div
      className="service-card"
      style={{
        opacity: lowerHeight ? 1 : 0,
        transition: "opacity 20s ease",
      }}
    >
      <div className="servise-card-table">
        <h3 className="service-card-table__title">Лазерная коррекция зрения</h3>
        <p className="service-card-table__description">
          После лазерной коррекции зрение становится лучше за счет того, что
          лазер создает новую форму роговицы — «естественной линзы» нашего
          глаза, вследствие чего она начинает по-другому преломлять световые
          лучи, они фокусируются на сетчатке и изображение становится четким.
        </p>
      </div>
      <h3 className="service-card__title">Лазерная коррекция зрения</h3>

      <div className="servise-card-mobile">
        <div className="service-card-mobile-container">
          <h3 className="service-card-mobile__title">
            Лазерная коррекция зрения
          </h3>

          <div className="service-card-mobile__image-container">
            <img
              className="service-card__image"
              src="/slide2.jpg"
              width={361}
              height={361}
              alt="Laser eye correction illustration"
            />
            <a href="#" className="service-card__more-link">
              <img
                src="/HeroArrow.svg"
                className="service-card__arrow-icon"
                alt=""
                aria-hidden="true"
              />
              <span className="service-card__more-text">подробнее</span>
            </a>
          </div>
        </div>

        <p className="service-card-mobile__description">
          После лазерной коррекции зрение становится лучше за счет того, что
          лазер создает новую форму роговицы — «естественной линзы» нашего
          глаза, вследствие чего она начинает по-другому преломлять световые
          лучи, они фокусируются на сетчатке и изображение становится четким.
        </p>
      </div>

      <div className="service-card__image-container">
        <img
          className="service-card__image"
          src="/slide2.jpg"
          width={361}
          height={361}
          alt="Laser eye correction illustration"
        />
        <a href="#" className="service-card__more-link">
          <img
            src="/HeroArrow.svg"
            className="service-card__arrow-icon"
            alt=""
            aria-hidden="true"
          />
          <span className="service-card__more-text">подробнее</span>
        </a>
      </div>
      <p className="service-card__description">
        После лазерной коррекции зрение становится лучше за счет того, что лазер
        создает новую форму роговицы — «естественной линзы» нашего глаза,
        вследствие чего она начинает по-другому преломлять световые лучи, они
        фокусируются на сетчатке и изображение становится четким.
      </p>
    </div>
  );
}
