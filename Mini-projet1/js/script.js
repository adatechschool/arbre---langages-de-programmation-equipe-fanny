
const course =["Pates", "Oeuf", "Sel", "Poivre","Lardon", "Oignon", "Parmesan"];
let taille = course.length ;

console.log(course);

console.log(" Il nous faut " + taille + "ingrédients pour cette recette ");

 let compteur = 1
for (let i in course){
    console.log("Voici la liste des ingrédients:" + compteur + course[i]);
    compteur = compteur+1
}

let alphabet = course.sort()


