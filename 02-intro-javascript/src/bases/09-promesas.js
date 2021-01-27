import getHeroesById from './bases/08-imp-export'

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const p1 = getHeroesById(2);
//         //resolve(p1);
//         reject('no se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn( err ));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const p1 = getHeroesById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('no se pudo encontrar el heroe');
            }    
        }, 2000);
    });
}

getHeroeByIdAsync(1)
//envia por defecto la respuesta como primer argumento de la funcion
.then(console.log)
.catch( console.warn);