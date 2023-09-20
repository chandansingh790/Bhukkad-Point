import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
	const { loggedInUser } = useContext(UserContext);
	return (
		<div className="w-7/12 bg-purple-200 m-auto p-6 mt-10 shadow-2xl shadow-blue-400 text-start text-yellow-700 font-sans font-semibold">
			<h1 className="text-center text-5xl p-2">ABOUT US</h1>
			<p>
				Americana brings incredible blends of various cultures to the Desert
				Shores community in Las Vegas. The restaurant offers fine dining with a
				blended cultural theme of modern American cuisine. Americana’s authentic
				dishes draw inspiration from early American cuisine with mixed European
				interpretations. Americana is located at 2620 Regatta Drive Suite 118
				and the hours of operation are Tuesday-Saturday 11:30 a.m-10 p.m.,
				closed Mondays. Our Award-winning Sunday Brunch is from 11 a.m.- 2:30
				p.m.Sunday Night Dinner is from 3 p.m.-9 p.m. For more information, call
				us directly at 702-331-5565 or visit americanalasvegas.com or like us on
				Facebook at facebook.com/AmericanaLasVegas and follow us on Twitter
				@AmericanaLV and Instagram at AmericanaLV.
			</p>
			<h2 className="my-3 font-bold">{loggedInUser}</h2>
		</div>
	);
};
export default About;
