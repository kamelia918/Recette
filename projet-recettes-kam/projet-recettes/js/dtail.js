const params = new URLSearchParams(window.location.search);
const id = params.get("lediv");


maphot = document.getElementById("limagedetail");
photo = document.createElement("img");
  nImg = Math.floor(Math.random() * 4) + 1;
  photo.setAttribute(
        "src",
        "../assets/recettes/" + recettesDB[id].id + "/" + nImg + ".png"
  );
photo.setAttribute("alt", recettesDB[id].name);
maphot.appendChild(photo);

nom = document.getElementById("nomDeLaRecette");
nom.innerHTML = recettesDB[id - 1].name;

categorie = document.getElementById("RCategorie");
categorie.innerHTML ="categorie : "+ recettesDB[id - 1].category;

pays = document.getElementById("Rpays");
pays.innerHTML = "origine : " +recettesDB[id - 1].country;

duree = document.getElementById("Rduree");
duree.innerHTML = "Durée : "+recettesDB[id - 1].duration;

note = document.getElementById("Rnote");
notesum = 0;
for (j = 0; j < recettesDB[id-1].comments.length; j++) {
    notesum = notesum + recettesDB[id-1].comments[j].rating;
}
noteavrg = notesum / recettesDB[id].comments.length;
note.innerHTML = "note globale : " + noteavrg;

diving = document.getElementById("ingredient");

ingredient = document.createElement("ul");
for (j = 0; j < recettesDB[id - 1].ingredients.length; j++){
    ing = document.createElement("li");
    ing.innerHTML = recettesDB[id - 1].ingredients[j];
    ingredient.appendChild(ing);
}
diving.appendChild(ingredient);
det=document.getElementById("detaille")
instruction = document.createElement("ol");
for (j = 0; j < recettesDB[id - 1].instructions.length; j++){
    ins = document.createElement("li");
    ins.innerHTML = recettesDB[id - 1].instructions[j];
    instruction.appendChild(ins);
}
det.appendChild(instruction);


commentairediv = document.getElementById("lescommentaires");
commentaire = document.createElement("div");
commentaireimg = document.createElement("div");
for (i = 0; i < recettesDB[id - 1].comments.length; i++){
    commentairediv.innerHTML += `
    <div class="comment">
                    <div>
                        <img src="../more_images/user.jpg" alt="">
                    </div>
                    <h2>${recettesDB[id - 1].comments[i].user}</h2>
                    <h2>${recettesDB[id - 1].comments[i].rating } /10</h2>
                    <p> ${recettesDB[id - 1].comments[i].content}</p>
                </div>
    `
}

