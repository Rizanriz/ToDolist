function addTask() {
    var task = document.getElementById("taskInput").value;

    if (!task) {
        alert("Please enter a task!");
    }else{
    document.getElementById("taskList").innerHTML += `<li> <input type="checkbox">${task} 
    <button onclick="this.parentNode.remove()">Delete</button></li>`

   }
}
