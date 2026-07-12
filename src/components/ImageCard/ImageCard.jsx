import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const {
    urls: { small },
    alt_description,
  } = image;

  return (
    <div className={css.card} onClick={onClick}>
      <img className={css.image} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
