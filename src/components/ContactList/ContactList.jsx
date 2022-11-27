import ContactItem from 'components/ContactItem/ContactItem.jsx';
import { useState, useMemo } from 'react';
import { useGetContactsQuery } from '../../redux/contactsApi.js';
import Filter from '../Filter/Filter';

export default function ContactList() {
  const { isLoading } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const filterContacts = useMemo(() => {
    return (
      contacts?.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <div>
      <Filter filter={filter} onChange={setFilter} />
      <ul>
        {isLoading ? (
          <b>Loading...</b>
        ) : (
          filterContacts.map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })
        )}
      </ul>
    </div>
  );
}
