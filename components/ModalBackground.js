export default function ModalBackground({ color }) {
	return (
		<div className={`fixed left-0 top-0 h-screen w-screen bg-opacity-25 ${color ? "bg-black" : "bg-transparent" } z-10`}></div>
	)
}
