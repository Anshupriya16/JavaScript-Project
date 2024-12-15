const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); // Fixed variable name

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Clear the input field after adding the task
        inputBox.value = '';

        // Add click event to toggle the "checked" class
        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });
    }
}
