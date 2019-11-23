// import style sheet 
import '../styles/index.scss'
// QuerySelector funtion
let $ = (e) => {return document.querySelector(e)}
// Query Select from html
let input = $('#input')
let ul = $('#nameList')
// add event listener
input.addEventListener('keypress',function (e) {
    // add kye press value
    if (e.keyCode == 13) {
        // collect value from input field
        let name = e.target.value;
        // passing value from input field
        createLi(ul,name)
        // enter press and input filed value is empty
        e.target.value = ''
    }
})
// add todo apps content
function createLi(ul,name) {
    // add li tag 
    let li = document.createElement('li')
    // add li tag class
    li.className = 'list-group-item d-flex'
    // add li content 
    li.innerHTML = name
    // add span tag
    let span = document.createElement('span')
    // add span class
    span.className = 'ml-auto'
    // add span tag content
    span.innerHTML = '&#10005;'
    // Remove li from list
    span.addEventListener('click',function () {
        ul.removeChild(li)
    })
    // add child 
    li.appendChild(span)
    ul.appendChild(li)
}