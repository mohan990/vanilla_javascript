
var inputText = document.querySelector("#txt-input")
var outputDiv = document.querySelector(".output-text")
var btnTranslate = document.querySelector("#btn-translate")
var btnClear = document.querySelector("#btn-clear")

var FunTransUrl = "https://api.funtranslations.com/translate/minion.json";



function clickEvent()
{
    var input = inputText.value;
    fetch(gettransalteURL(input))
    .then(Response => Response.json())
    .then(json =>{
        var translate = json.contents.translated;
        outputDiv.innerText = translate;
    } )
}

function gettransalteURL(input)
{
    return FunTransUrl + "?" + "text=" + input;
}

btnTranslate.addEventListener("click" , clickEvent)

// function clickClear()
// {
//     var emptyText ="Refresh"
//     fetch(gettransalteURL(emptyText))
//     .then(Response => Response.json())
//     .then(json =>{
//         var translate = json.contents.translated;
//         outputDiv.innerText = translate;
// })
// }

// function gettransalteURL(text)
// {
    
//     return FunTransUrl + "?" + "text="+ text
// }
// btnClear.addEventListener("click", clickClear)

function clear()
{
    outputDiv.innerText = " ";
    inputText.value =" "
}

btnClear.addEventListener("click", clear)