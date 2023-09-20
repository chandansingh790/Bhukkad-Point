import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import {appStore} from "../utils/appStore";
import { cartSlice } from "../utils/appStore";
import cartReducer from "../utils/cartSlice";


global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	})
);

it("Should load restaturant menu component", async () => {
	await act(async () => render(<Provider store={appStore}><RestaurantMenu /></Provider>));

	let headingName = screen.getByText(
		"Shravan - No Onion, No Garlic specials (8)"
	);
});
