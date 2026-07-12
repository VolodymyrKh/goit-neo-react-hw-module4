import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, ref }) => {
  return (
    <div className={css.wrapper}>
      <button ref={ref} className={css.button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
