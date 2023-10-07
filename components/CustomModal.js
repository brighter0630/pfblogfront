function CustomModal({ open, title, children }) {
  return (
    <div
      className={`absolute z-50 p-4 grid grid-flow-row min-w-[500px] min-h-[250px] bg-slate-500 rounded-sm ${
        !open && "hidden"
      }`}
    >
      <h1 className="text-left">{title}</h1>
      <div>{children}</div>
    </div>
  );
}

export default CustomModal;
