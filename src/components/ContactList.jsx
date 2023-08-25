export const ContactList  = ({items, onDelete}) =>{

    return <>
        <ul>
           { 
           items.map(({name, number, id})=>(
           <li key={id}>{name}:
           <span>{number}</span><button onClick={()=>onDelete(id)}>Delete</button></li>))}

        </ul>
       </>

  
}