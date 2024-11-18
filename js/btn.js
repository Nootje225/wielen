function toggleInstructions() {
    const instructions = document.getElementById("instructions");
    if (instructions.style.display === "none" || instructions.style.display === "") {
        instructions.style.display = "block";
    } else {
        instructions.style.display = "none";
    }
}
