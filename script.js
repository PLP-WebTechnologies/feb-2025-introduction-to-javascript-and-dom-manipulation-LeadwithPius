
document.getElementById("change-text-btn").addEventListener("click", function () {
  const heading = document.getElementById("dynamic-text");
  heading.textContent = "Thanks for Visiting SYL Services!";
});

document.getElementById("change-style-btn").addEventListener("click", function () {
  const heading = document.getElementById("dynamic-text");
  heading.style.color = "white";
  heading.style.backgroundColor = "teal";
  heading.style.padding = "10px";
  heading.style.borderRadius = "8px";
});


document.getElementById("toggle-element-btn").addEventListener("click", function () {
  const container = document.getElementById("box-container");
  const existingBox = document.getElementById("magic-box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "magic-box";
    newBox.textContent = "I'm a new box!";
    newBox.style.width = "200px";
    newBox.style.height = "100px";
    newBox.style.backgroundColor = "coral";
    newBox.style.color = "white";
    newBox.style.display = "flex";
    newBox.style.justifyContent = "center";
    newBox.style.alignItems = "center";
    newBox.style.marginTop = "10px";
    newBox.style.borderRadius = "6px";
    container.appendChild(newBox);
  }
});
