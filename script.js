var counter = 1
function createDivision(important) {
    const texta = document.getElementById('textArea').value.replace(/\n/g, '<br>');
    if (!texta) return alert("Veuillez fournir une valeur valide pour l'article")
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let deleteartc = document.createElement("button");
    let fait = document.createElement("button");
    article.innerHTML = texta
    fait.innerHTML = 'Fait'
    deleteartc.innerHTML = 'Supprimer'
    div.appendChild(article);
    div.appendChild(deleteartc);
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    fait.setAttribute('id', `fait-${counter}`)
    fait.setAttribute('onclick', 'fait(event)')
    deleteartc.setAttribute('id', `deleteartc-${counter}`)
    deleteartc.setAttribute('onclick', 'removeDivision(false)')
    if (important == true) return div.setAttribute('class', 'important')
}
function removeDivision(all) {
    if (all == false) {
    let button = event.target;
    let div = button.parentNode;
    div.remove();
    } else {
        let div = document.getElementById('container');
        let body = document.querySelector('body');
        let footer = document.querySelector('footer');
        footer.remove();
        div.remove();
        let newdiv = document.createElement("div")
        newdiv.setAttribute('id', 'container')
        body.appendChild(newdiv)
        let newfooter = document.createElement("footer")
        body.appendChild(newfooter)
        newfooter.innerHTML = 'Les courses en 2023'
    }
}
function fait(event) {
    let button = event.target;
    let div = button.parentNode;
    button.innerHTML = "Défaire"
    div.setAttribute('style', 'background-color: var(--mygreen)')
    button.setAttribute('onclick', 'défaire(event)')
}
function défaire(event) {
    let button = event.target;
    let div = button.parentNode;
    button.innerHTML = "Fait"
    if (div.className == 'important') {
        div.setAttribute('style', 'background-color: var(--important)')
    } else {
        div.setAttribute('style', 'background-color: var(--main)')
    }
    button.setAttribute('onclick', 'fait(event)')
}
