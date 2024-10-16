/*
Tests de la récupération des boxs:

const box = document.querySelector(".box");
console.log(box);
=> Problème : il ne sélectionne que la première div sur la page qui est de la classe ".box".

const listeBox = document.querySelectorAll(".conteneur div");
console.log(listeBox);
=> On obtient une liste d'objects HMTL, qui contient bien toutes les div "box" de la div de classe Conteneur. 
Problème? L'accès aux propriétés est moins direct : comme les propriétés liées au style sont à deux échellons, autant s'éviter des peines.

const listeBox = document.querySelectorAll(".box");
console.log(listeBox);
Fonctionne et on peut accéder aux propriétés.
*/

const listeBox = document.querySelectorAll(".box");

let totalMort = 0;
let divTotalMort = document.getElementById("totalMort");
let spanTotalMort = `Morts obtenues : ${totalMort} sur ${listeBox.length}`;
divTotalMort.innerText = spanTotalMort;

for (let i = 0; i < listeBox.length; i++ ) {
    listeBox[i].notChecked = true ;
    listeBox[i].addEventListener('click',
        () => {
            if (listeBox[i].notChecked){
                listeBox[i].className ="box_checked";
                listeBox[i].notChecked = false ;
                totalMort += 1;

            } else {
                listeBox[i].className ="box";
                listeBox[i].notChecked = true ;
                totalMort -= 1;
            }
            
            let divTotalMort = document.getElementById("totalMort");
            let spanTotalMort = `Morts obtenues : ${totalMort} sur ${listeBox.length}`;            
            divTotalMort.innerText = spanTotalMort;
        });
}


let niveauProgrammation = 0;
let divNivProg = document.getElementById("compt_01");
let spanNivProg = `💻 Programmation - Niv ${niveauProgrammation}`;
divNivProg.innerText = spanNivProg;

const boxProg = document.querySelector(".box_competences");
boxProg.notChecked = true ;
boxProg.addEventListener('click',
        () => {
            if (niveauProgrammation === 0){
                boxProg.className ="box_competences_checked";
                boxProg.notChecked = false ;
                niveauProgrammation += 1;
            } else {
                if (niveauProgrammation < 10){
                    niveauProgrammation += 1;
                } else {
                    boxProg.className ="box_competences";
                    boxProg.notChecked = true ;
                    niveauProgrammation = 0;
                }
            }
            let divNivProg = document.getElementById("compt_01");
            let spanNivProg = `💻 Programmation - Niv ${niveauProgrammation}`;
            divNivProg.innerText = spanNivProg;
        });
