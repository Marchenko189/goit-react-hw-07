import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css"

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name); 
    
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }

    return (
        <div className={css.container}>
        <span className={css.span}>Find contacts by name</span>
        <input type="text" value={filter} onChange={handleChange}></input>
        </div>
        
    )
}
