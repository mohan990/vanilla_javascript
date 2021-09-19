// 1. document.querySelector("textarea")
// 2. document.querySelector(".btn-primary")
// 3. document.querySelector("#input-btn")
// 4. document.querySelector("input[name='translate']")

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#output-text");
var btnTranslate = document.querySelector("#btn-translate")


function clickEvent()
{
    var input = inputText.value

    fetch(gettransalteURL())
    .then(Response => Response.json())
    .then(json => console.log(json.contents.translated)  )
}
function gettransalteURL(inputText)
{
    return url + "?" + "text=" + inputText;
}

btnTranslate.addEventListener("click", clickEvent)