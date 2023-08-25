export const ContactList  = ({items}) =>{

    return <>
        <ul>
           { items.contacts.map(({name, number, id})=>(<li key={id}>{name}:<span>{number}</span></li>))}

        </ul>
       </>

  
}