import Card from './Card';
import "./cards.css"
export default function Cards(props)  {
   let characters = props.characters;
 
   
   if (!Array.isArray(characters)) {
   
     return null; 
   }
return(
  
  <div  className='cartas'>
    
    {characters.map((character) =>(
      <div className= "carta" key={character.id} > <h2 style={{color:"Black",fontStyle:"Comic Sans MS"}}>{character.name} </h2>
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            OnClose={props.OnClose} 
            />
   </div>))}
   </div>)}
