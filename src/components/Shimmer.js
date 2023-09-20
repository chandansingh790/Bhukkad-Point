import BasicModal from "./Modal";
import { Oval } from "react-loader-spinner";
const Shimmer = (props) => {
    return (
			<>
				{props?.data == null || props == null || props == "" ? (
					<>
						<div className="justify-center top-44 p-0 left-[45%] shadow-2xl shadow-black rounded-full  mt-36 absolute z-10">
							<Oval
								height={79}
								width={78}
								color="#4fa94d"
								wrapperStyle={{}}
								wrapperClass=""
								visible={true}
								ariaLabel="oval-loading"
								secondaryColor="#4fa94d"
								strokeWidth={4}
								strokeWidthSecondary={4}
							/>
						</div>
						<div className="flex flex-wrap p-4 ml-12 mt-6 animate-pulse">
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-200 p-4 w-80 rounded-xl h-[360px] m-4"></div>
						</div>
					</>
				) : (
					<>
						<div className="">
							<BasicModal data={props.data} />
						</div>
						<div className="flex flex-wrap p-4 ml-12 mt-6 animate-pulse">
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
							<div className="bg-gray-100 p-4 w-80 rounded-xl h-[360px] m-4"></div>
						</div>
					</>
				)}
			</>
		);
}
export default Shimmer;