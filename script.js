function postText() {
    var inputText = document.getElementById("textInput").value;
    var displayDiv = document.getElementById("textDisplay");

    if (inputText.trim() !== "") {
        var newDiv = document.createElement("div");
        newDiv.className = "postedText";
        newDiv.innerHTML = inputText;

        displayDiv.appendChild(newDiv);
        document.getElementById("textInput").value = ""; // Clear the input field
    }
}
