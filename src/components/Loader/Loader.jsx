import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="#2c6cd4" size={16} />
    </div>
  );
};

export default Loader;
