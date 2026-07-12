import Modal from "react-modal";
import { FiHeart, FiX } from "react-icons/fi";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) {
    return null;
  }

  const {
    urls: { regular },
    alt_description,
    description,
    likes,
    user,
  } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image details"
    >
      <button className={css.closeBtn} type="button" onClick={onClose}>
        <FiX size={24} />
      </button>

      <img className={css.image} src={regular} alt={alt_description} />

      <div className={css.info}>
        <div className={css.author}>
          <img
            className={css.avatar}
            src={user?.profile_image?.medium}
            alt={user?.name}
          />
          <div>
            <p className={css.name}>{user?.name}</p>
            <p className={css.username}>@{user?.username}</p>
          </div>
        </div>

        {(description || alt_description) && (
          <p className={css.description}>{description ?? alt_description}</p>
        )}

        <p className={css.likes}>
          <FiHeart size={18} />
          <span>{likes} likes</span>
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
