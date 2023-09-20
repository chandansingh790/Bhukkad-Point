const BasicModal = (props) => {
	return (
		<div>
			<div className="absolute p-6 top-1/4 left-[560px] w-96 bg-teal-100 text-lg rounded-md opacity-70 shadow-2xl text-center z-10">
				{props.data}
				<button className="w-20 shadow-xl p-1 rounded-md bg-blue-200 mt-2" onClick={() => {
                    window.location.reload();
                }}>Reload</button>
			</div>
		</div>
	);
};
export default BasicModal;