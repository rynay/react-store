import s from './Modal.module.css';

const Modal = ({ item, isOpen, message }) => {
  const classes = isOpen ? `${s.title} ${s.open}` : s.title;
  return (
    <div className={classes}>
      <p>
        {item?.title || 'Item'} {message || 'was added to the cart'}
      </p>
    </div>
  );
};

export default Modal;
