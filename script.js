window.onload = function () {
  document.getElementById("fullNamePlaceholder").innerText = "Your full name";
};

function changeName() {
  let name = "";
  while (!name || !isNaN(name)) {
    name = prompt("Please enter your name:");

    if (!name) {
      alert("Name cannot be empty. Please enter a valid name.");
    } else if (!isNaN(name)) {
      alert("Name must be a string, not a number. Please enter a valid name.");
    }
  }
  document.getElementById("fullNamePlaceholder").innerText = name;
}

document.querySelector(".btn-primary").addEventListener("click", changeName);

window.onload = function () {
  document.getElementById("fullNamePlaceholder").innerText = "Your full name";
};

window.onload = function () {
  document.getElementById("currentDate").innerText =
    new Date().toLocaleDateString();
  document.getElementById("emailPlaceholder").innerText =
    "your.email@example.com";
};

document.getElementById("httpPort").innerText = "80";
document.getElementById("httpsPort").innerText = "443";
document.getElementById("sshPort").innerText = "22";
document.getElementById("dnsPort").innerText = "53";

document.getElementById("itemButton").addEventListener("click", function () {
  let itemCount = prompt("Enter the number of items (1-10):");

  // Ensure the input is within the valid range
  itemCount = parseInt(itemCount);
  if (isNaN(itemCount) || itemCount < 1 || itemCount > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  const itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear the list

  for (let i = 1; i <= itemCount; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = Item`${i}`;
    itemList.appendChild(listItem);
  }
});
