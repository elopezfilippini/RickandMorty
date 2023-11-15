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
      <div key ={character.id}>
         <h2>id: {character.id}  </h2>
         <h2>name: {character.name} </h2>
         <h2>status: {character.status} </h2>
         <h2>especie: {character.species} </h2>
         <h2>gender: {character.gender} </h2>
         <h2>origin: {character.origin.name}  </h2>
         <img src={character.image} alt='' />
      </div>)
   )}</div>);
}
