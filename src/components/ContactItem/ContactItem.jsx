import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li key={contact.id} className={styles.contactList_item}>
      <p className={styles.item_text}>
        {contact.name}:{' '}
        <span className={styles.item_span}>{contact.number}</span>
      </p>
      <button
        type="button"
        className={styles.item_btn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
