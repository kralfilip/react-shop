import {FC} from "react";
import styles from '../styles/FilterBox.module.css'

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
            className={styles.main}
        />
    )
}

export default FilterBox
