import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load header component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
// Assertion
    expect(heading).toBeInTheDocument();
});

// test button
test("Should load button component", () => {
	render(<Contact />);
	const button = screen.getByRole("button");
	// Assertion
	expect(button).toBeInTheDocument();
});
// test by text
test("Should load button component", () => {
	render(<Contact />);
	const text = screen.getByText("Submit");
	// Assertion
	expect(text).toBeInTheDocument();
});
// get by placeholder
test("Should contain placeholder text as Leave a comment...", () => {
	render(<Contact />);
	const placeholder = screen.getByPlaceholderText("Leave a comment...");
	// Assertion
	expect(placeholder).toBeInTheDocument();
});
// should load 2 input boxes
test("Should contain 3 input boxes", () => {
	render(<Contact />);

    // Querying
	const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes); // Piece of JSX Element// React Element // Virtual DOM Object // React Fiber Mode // Object
    //console.log(inputBoxes.length); // 3

	// Assertion   // we will check the length of the returned object // it should be 3 coz we have 3 input tags in contact component
	expect(inputBoxes.length).toBe(3);
});

// we can wrapp test cases inside describe // it just use to group test cases

describe("Contact us test cases", () => {
	// test button
	test("Should load button component", () => {
		render(<Contact />);
		const button = screen.getByRole("button");
		// Assertion
		expect(button).toBeInTheDocument();
	});
	// test by text
	test("Should load button component", () => {
		render(<Contact />);
		const text = screen.getByText("Submit");
		// Assertion
		expect(text).toBeInTheDocument();
	});
	it("Should load button component", () => {  // here we can write it in place of test
		render(<Contact />);
		const text = screen.getByText("Submit");
		// Assertion
		expect(text).toBeInTheDocument();
	});
})