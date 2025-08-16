import { Services } from "../data/ServicesData";
import { lazy, useState } from "react";
import "../styles/TopPopularServices.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setVisibleLimit } from "../store/AppSlice";

const TopPopularServiceItem = lazy(() => import("./TopPopularServiceItem"));

export default function TopPopularServices() {
  const [itemOpen, setItemOpen] = useState<null | number>(null);
  const dispatch = useDispatch();
  const visibleLimit = useSelector(
    (state: RootState) => state.app.visibleLimit
  );

  const handleLoadMore = () => {
    dispatch(setVisibleLimit(visibleLimit + 3));
  };

  return (
    <div className="popular-services">
      {Services.slice(0, visibleLimit).map((service, index) => (
        <TopPopularServiceItem
          key={index}
          index={index}
          src={service.src}
          title={service.title}
          description={service.description}
          itemOpen={itemOpen}
          setItemOpen={setItemOpen}
        />
      ))}

      <span className="popular-services__btn" onClick={handleLoadMore}>
        Ещё
      </span>
    </div>
  );
}
