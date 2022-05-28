import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onBackdropClick}/>
};

const ModalOverlay = ({children}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('portalOver');

const Modal = ({children, onBackdropClick}) => {
  
  return (
    <>
      {createPortal(<Backdrop onBackdropClick={onBackdropClick}/>, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
