import {render, screen} from "../test-utils"
import userEvent from "@testing-library/user-event"
import SideBar from "../../components/sidebar/SideBar"

describe("SideBar", ()=> {
    test("Sidebar is showing 'Filtering options'", () => {
        render(<SideBar/>)
        expect(screen.getByText("Filtering options")).toBeInTheDocument();
    })
    test("Sidebar is including FilterByYear and FilterByGenre components", () => {
        render(<SideBar/>)
        expect(screen.getByText("Genre")).toBeInTheDocument();
        expect(screen.getByText("Year")).toBeInTheDocument();
    })

})