function CustomModal({ open, title, onClose, x, y, children }) {
  return (
    <div
      className={`absolute ${y} left-[35%] z-50 p-4 grid grid-flow-row min-w-[500px] min-h-[250px] bg-slate-500 ${
        !open && "hidden"
      }`}
    >
      <div className="title grid grid-flow-col max-h-11">
        <h1 className="text-left">{title}</h1>
        <div onClick={onClose} className="cursor-pointer text-right">
          X
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default CustomModal;
