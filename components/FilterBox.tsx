import {FC} from "react";

const FilterBox: FC<{ searchTerm: string, onSearchInput: (searchTerm: string) => void }> = (props) => {
    const searchTermHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        props.onSearchInput(event.target.value);
    }
    return (
        <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="What are you craving for..."
            value={props.searchTerm}
            onChange={searchTermHandler}
            style={{width: '200px', height: '33px', borderRadius: '7px', zIndex: 1}}
        />
    )
}

export default FilterBox
