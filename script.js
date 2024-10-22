document.getElementById("startButton").onclick = function() {
    document.querySelector(".container").classList.add("hidden");
    document.querySelector(".flying-section").classList.remove("hidden");
};

document.getElementById("memoriesButton").onclick = function() {
    alert("Memory album goes here!"); // Placeholder for memory album link
};

document.getElementById("lettersButton").onclick = function() {
    alert("Letters go here!"); // Placeholder for letters link
};

document.getElementById("futureButton").onclick = function() {
    alert("Future plans go here!"); // Placeholder for future plans link
};
