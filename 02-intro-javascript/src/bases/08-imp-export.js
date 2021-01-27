//exportacion normal
//import { heroes } from './data/heroes';
//exportacion por defecto y exportaciones individuales dentro del mismo archivo
//import  heroes, {owners}  from '../data/heroes';
import  heroes from '../data/heroes';
//console.log(owners);

const getHeroesById = (id) => heroes.find(hero=> hero.id === id);
export default getHeroesById;
//console.log(getHeroesById(1));

export const getHeroesByOwner = ( owner ) => heroes.filter(hero=> hero.owner.toLowerCase() === owner.toLowerCase());

//console.log(getHeroesByOwner('DC'));