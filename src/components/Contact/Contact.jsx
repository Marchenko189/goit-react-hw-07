import css from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsSlice";
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";

export default function Contact({ id, nameUser, numberUser }) {
    const dispatch = useDispatch();
    
     const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }

    
    return (
        <li className={css.item}>
            <div className={css.container_one}>
            <div className={css.container}>
                <BiSolidUser className={css.icon} />
                <p className={css.text}>{nameUser}</p>
            </div>
            <div className={css.container}>
                <BiSolidPhone className={css.icon}/>
                <p className={css.text}>{numberUser}</p>
            </div>
            </div>
            <button className={css.button} type="button" onClick={() => { handleDelete(id) }}>Delete</button>
        </li> 
    )
}