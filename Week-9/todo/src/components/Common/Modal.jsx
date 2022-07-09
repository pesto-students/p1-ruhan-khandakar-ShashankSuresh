import PropTypes from "prop-types";

const Modal = ({ open, children, handleClose, footer, header }) => {
  const handleModalClose = ({ target: { dataset } }) => {
    const { name } = dataset;

    if (name === "modal-body") {
      handleClose();
    }
  };

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none min-h-[40vh]"
            data-name="modal-body"
            onClick={handleModalClose}
          >
            <div className="relative  my-6 mx-auto max-w-3xl md:w-[50vw] w-[96vw]">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-3 pt-4">
                {/* header */}
                {header && (
                  <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                    {header}
                  </div>
                )}
                {/* Body */}
                {children}
                {/*footer*/}
                {footer && <div className="p-2 pb-0 rounded-b">{footer}</div>}
              </div>
            </div>
          </div>
          <div className="opacity-10 fixed inset-0 z-40 bg-slate-800/[.06]"></div>
        </>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

export default Modal;
