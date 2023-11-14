export default function SearchBar(props) {
   return (
      <div>
          <input type='search' />
         <button onClick={() => props.onsearch("Id: 1")}>Agregar</button> 
      </div>
   );
}