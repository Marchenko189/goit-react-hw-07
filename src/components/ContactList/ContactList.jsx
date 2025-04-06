import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import css from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} nameUser={name} numberUser={number} />
            ))}
        </ul>
    );
}