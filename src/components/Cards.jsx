import Card from './Card';

export default function Cards(props)  {
   let characters = props.characters;
 
   // Check if characters is an array before using map
   console.log(characters);
   if (!Array.isArray(characters)) {
     console.error('Characters is not an array!');
     return null; // or handle the error in a way that makes sense for your application
   }
return(
  <div>
    {characters.map((character) =>(
      <div key={character.id} style={{
         backgroundColor: 'grey',
         fontSize: '16px',
         border: '3px solid red',
         margin: '2px',
         width : '400px'
       }}> ;
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            />
   </div>))}
   </div>)}
// onClose={onClose} 