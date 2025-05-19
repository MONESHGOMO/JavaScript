
function highlightWords(){

    const userInput = document.getElementById("textArea").value;
    const words = ["JavaScript", "highlight", "HTML"]
    const regex = new RegExp("\\b(" + words.join("|") + ")\\b", "gi");

    // here gi is a flags [ g -> global ( find allmathces )]
    // and [ i-> make the matches case- insensitive]
    const highlighted = userInput.replace(regex, "<mark>$1</mark>");
    document.getElementById("result").innerHTML = highlighted;
}