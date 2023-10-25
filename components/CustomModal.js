"use client";

function CustomModal({ title, positionX, positionY, width, height, children }) {
  return (
    <div
      className={`absolute z-1 p-1 grid grid-flow-row min-w-[500px] bg-slate-50 rounded-lg shadow-md`}
      style={{
        top: `${positionY}px`,
        left: `${positionX}px`,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <div className="text-left px-8 py-4 h-8">
        <h1>{title}</h1>
      </div>
      <div className="p-4 w-11/12 m-auto h-full">{children}</div>
    </div>
  );
}

export default CustomModal;
