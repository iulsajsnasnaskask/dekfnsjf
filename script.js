let result = [];
var counter = 1;
let container = document.getElementById('container');
function createDivision(important) {
    const texta = document.getElementById('textArea').value.replace(/\n/g, '<br>');
    if (!texta) return alert("Veuillez fournir une valeur valide pour l'article")
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let fait = document.createElement("button");
    let btndelete = document.createElement('button');
     article.innerHTML = texta
    fait.innerHTML = 'Fait'
    btndelete.innerHTML = 'Supprimer'
    div.appendChild(article);
    div.appendChild(btndelete);
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', texta)
    div.setAttribute('value', false)
    fait.setAttribute('id', `fait-${counter}`)
    btndelete.setAttribute('onclick', "removeDivision(false)")
    fait.setAttribute('onclick', 'fait(event)')
    if (important == true) { div.setAttribute('class', 'important') }
    result.push({article: texta, important: important, class: div.className, fait: div.getAttribute('value')});
    saveResult();
}
function removeDivision(all) {
        if (all == true) {
        let div = document.getElementById('container');
        let body = document.querySelector('body');
        div.remove();
        let newdiv = document.createElement("div")
        newdiv.setAttribute('id', 'container')
        body.appendChild(newdiv)
        localStorage.removeItem('list')
        location.reload();
        } else {
            let button = event.target;
            let div = button.parentNode;
            div.remove();
            removeLocalTodos(div)
        }
    }
function fait(event) {
    let button = event.target;
    let div = button.parentNode;
    button.innerHTML = "Défaire"
    div.setAttribute('style', 'background-color: var(--mygreen)')
    button.setAttribute('onclick', 'défaire(event)')
    div.setAttribute('value', true)
    saveResult()
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
    div.setAttribute('value', false)
    saveResult()
}
function allliste() {
    Bananes()
    Pain()
}
function bioliste() {
    riz_complet()
    tisane()
}
function tisane() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let fait = document.createElement("button");
    let btndelete = document.createElement('button')
    article.innerHTML = 'Tisane'
    btndelete.innerHTML = 'Supprimer'
    fait.innerHTML = 'Fait'
    div.appendChild(article);
    div.appendChild(btndelete)
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    fait.setAttribute('id', `fait-${counter}`)
    fait.setAttribute('onclick', 'fait(event)')
    div.setAttribute('class', 'important')
    div.setAttribute('value', false)
    result.push({article: 'Tisane', important: true, class: div.className, fait: div.getAttribute('value')});
    saveResult();
}
function riz_complet() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let fait = document.createElement("button");
    let btndelete = document.createElement('button')
    article.innerHTML = 'Riz complet'
    btndelete.innerHTML = 'Supprimer'
    fait.innerHTML = 'Fait'
    div.appendChild(article);
    div.appendChild(btndelete)
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    fait.setAttribute('id', `fait-${counter}`)
    div.setAttribute('value', false)
    fait.setAttribute('onclick', 'fait(event)')
    div.setAttribute('class', 'important')
    result.push({article: 'Riz complet', important: true, class: div.className, fait: div.getAttribute('value')});
    saveResult();
}
function Bananes() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let fait = document.createElement("button");
    let btndelete = document.createElement('button')
    article.innerHTML = 'Bananes'
    btndelete.innerHTML = 'Supprimer'
    fait.innerHTML = 'Fait'
    div.appendChild(article);
    div.appendChild(btndelete)
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    fait.setAttribute('id', `fait-${counter}`)
    fait.setAttribute('onclick', 'fait(event)')
    div.setAttribute('class', 'important')
    div.setAttribute('value', false)
    result.push({article: 'Bananes', important: true, class: div.className, fait: div.getAttribute('value')});
    saveResult();
}
function Pain() {
    counter++
    let div = document.createElement("div");
    let article = document.createElement("h2");
    let fait = document.createElement("button");
    let btndelete = document.createElement('button')
    article.innerHTML = 'Pain'
    btndelete.innerHTML = 'Supprimer'
    fait.innerHTML = 'Fait'
    div.appendChild(article);
    div.appendChild(btndelete)
    div.appendChild(fait);
    document.getElementById('container').appendChild(div);
    div.setAttribute('id', `div-${counter}`)
    fait.setAttribute('id', `fait-${counter}`)
    fait.setAttribute('onclick', 'fait(event)')
    div.setAttribute('class', 'important')
    div.setAttribute('value', false)
    result.push({article: 'Pain', important: true, class: div.className, fait: div.getAttribute('value')});
    saveResult();
}
function saveResult() {
    let json = JSON.stringify(result);
    localStorage.setItem("list", json);
}
chargeResult(container);

function chargeResult(container) {
    let json = localStorage.getItem("list");
    if(json === null || json === undefined) {
        localStorage.setItem("list", JSON.stringify(result));
    }
    let res = JSON.parse(json);
    if(res) {
        for(const item of res) {
            let div = document.createElement("div");
            let article = document.createElement("h2");
            let btnfait = document.createElement("button")
            let btndelete = document.createElement('button')
            article.innerHTML = item.article
            btnfait.innerHTML = 'Fait'
            btndelete.innerHTML = 'Supprimer'

            div.appendChild(article);
            div.appendChild(btndelete)
            div.appendChild(btnfait);

            div.setAttribute('id', `div-${counter}`)
            btnfait.setAttribute('id', `fait-${counter}`)
            btnfait.setAttribute('onclick', 'fait(event)')
            if (item.important == true) { div.setAttribute('class', 'important') }
            if (item.fait == true) { div.setAttribute('style', 'background-color: var(--mygreen)') }

            container.appendChild(div);

            result.push(item);
        }
    }
}
function removeLocalTodos(lis) {
    let list;
    if (localStorage.getItem("list") === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    const listIndex = lis.children[0].innerText;
    list.splice(list.indexOf(listIndex), 1);
    localStorage.setItem("list", JSON.stringify(list));
  }
