import RestaurantCard, {
	withPromotedLabel,
} from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

// test case for a restaurant name found
it("Should  render RestaurantCard component", () => {

    render(<RestaurantCard resData={MOCK_DATA} />);

    // Querying
    const resname = screen.getByText("McDonald's");

    // Assertion
    expect(resname).toBeInTheDocument();
})

// test case for a HOC opened label
it("Should render with promoted label", () => {

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);

    // Querying
    const promotedLabel = screen.getByText("Opened");

    // Assertion
    expect(promotedLabel).toBeInTheDocument();
})