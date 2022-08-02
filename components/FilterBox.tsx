import {FC} from "react";

const FilterBox: FC<{searchTerm: string ,onSearchInput: (searchTerm: string) => void}> = (props) => {
    const searchTermHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        props.onSearchInput(event.target.value);
    }
    return (
        <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search for..."
            value={props.searchTerm}
            onChange={searchTermHandler}
        />
        )
}

export default FilterBox
