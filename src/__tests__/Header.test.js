import { Provider } from "react-redux";
import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


describe("Header component test cases", () => {
	// test login button present or not
	it("Should render login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		// Querying
		// const loginBtn = screen.getByRole("button");
		const loginBtn = screen.getByRole("button", { name: "LogIn" });
		// const loginBtn = screen.getByText("Login");

		// Assertion
		expect(loginBtn).toBeInTheDocument(); //
	});

	// test cart (0) present or not
	it("Should render Cart (0) text", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		// Querying
		// const cart = screen.getByText("Cart (0)");
		const cart = screen.getByText(/Cart/); // we can use regex here also for matching not exact text

		// Assertion
		expect(cart).toBeInTheDocument(); 
	});
	// test on click Login Logout change
	it("Should render Cart (0) text", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		// Querying
		const loginButton = screen.getByRole("button", {name : "LogIn"});

            // fire an click event
        fireEvent.click(loginButton);

        // find logout button in dom
        const loginOut = screen.getByRole("button", { name: "Logout" });

		// Assertion
		expect(loginOut).toBeInTheDocument(); 
	});
});
