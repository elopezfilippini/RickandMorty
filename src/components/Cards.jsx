import Card from './Card';

export default function Cards(props)  {
   let characters = props.characters;
 
   // Check if characters is an array before using map
   if (!Array.isArray(characters)) {
   
     return null; // or handle the error in a way that makes sense for your application
   }
return(
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
 }} className='Cartas'>
    {characters.map((character) =>(
      <div key={character.id} style={{
         backgroundColor: 'yellow', 
         fontSize: '16  px',
         border: '1px solid red',
         
         width : '400px',

       
       }}> <h2 style={{color:"Black"}}>Personaje </h2>
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
// onClose={onClose} 