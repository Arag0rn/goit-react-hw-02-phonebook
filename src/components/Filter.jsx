
export const Filter  = ({onChangeFilter, filter}) =>{

    return <div>
        <input type="text" 
        value={filter} 
        placeholder="Search"
        onChange={event => onChangeFilter(event.target.value)}/>
       </div>

  
}