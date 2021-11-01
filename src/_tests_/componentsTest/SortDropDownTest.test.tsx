import {render, screen} from "../test-utils"
import userEvent from "@testing-library/user-event"
import SortDropDown from "../../components/sortdropdown";

describe("SortDropDown", ()=> {
    test("sortdropdown is showing", () => {
        render(<SortDropDown/>)
        expect(screen.getByLabelText("Sort by")).toBeInTheDocument();
    })
    test("Sortdropdown includes correct options", () => {
        const {getByLabelText, getByText} = render(<SortDropDown/>)
        const dropDown = screen.getByLabelText(/Sort by/)
        userEvent.click(dropDown)
        expect(getByText("None")).toBeInTheDocument();
        expect(getByText("Title (Increasing)")).toBeInTheDocument();
        expect(getByText("Title (Decreasing)")).toBeInTheDocument();
        expect(getByText("Release Year (Increasing)")).toBeInTheDocument();
        expect(getByText("Release Year (Decreasing)")).toBeInTheDocument();
    })
    
})