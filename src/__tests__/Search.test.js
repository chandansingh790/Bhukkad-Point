import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/mockresListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



// some helper function provide by jest

// it runs before all the test cases wriiten or which is to be tested or you can say it will run fisrt
beforeAll(() => {
	// console.log("Before All")
})

// it runs in last after running all the test cases
afterAll(() => {
	// console.log("After All");
})

// lets say you have 2 test cases, then it will run before each test case start
beforeEach(() => {
	// console.log("Before Each");
})

// lets say you have 2 test cases, then it will run after each test case finished
afterEach(() => {
	// console.log("After Each");
})
// here we will mock/create a same function like fetch()

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});
it("Should render the body component with search", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

    // lets check the number of cards as body renders
	let rescardBeforeSearch = screen.getAllByTestId("resCard");

    expect(rescardBeforeSearch.length).toBe(20);

	// Querying to find a search button

	let searchBtn = screen.getByRole("button", { name: "Search" });
	let inputData = screen.getByTestId("searchInput");

	fireEvent.change(inputData, { target: {value : "Pizza"} }); // we have to do this here in DOM js similar to e.target.value 

	fireEvent.click(searchBtn);

	//we are expecting 2 restaturant cards // so basically we can count a div with id data-testid="resCardId" coz each card have a div with this id
	// get all div with havig id = resCardId

	let rescardAfterSearch = screen.getAllByTestId("resCard");

    // After hitting the search button
    expect(rescardAfterSearch.length).toBe(2);
});
