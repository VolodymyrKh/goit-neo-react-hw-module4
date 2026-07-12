import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <p className={css.error}>
      {message ?? "Something went wrong. Please try again later."}
    </p>
  );
};

export default ErrorMessage;
