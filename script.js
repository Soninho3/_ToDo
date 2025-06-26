window.onload = () => {

    
    /* const inputbar = document.querySelector("input[class=input]"); */
    /* console.log(inputbar); */
    
    const buttonInput = document.querySelector("button[class=btn]");
    /* console.log(buttonInput); */

    /* const listOfTasks = document.querySelector("ul[class=list]"); */
    /* console.log(listOfTasks);  */

    buttonInput.addEventListener("click", CreateTask);
    /* console.log(document.querySelectorAll("button[class=button-delete]")); */


}

const CreateTask = (e) => {
    e.preventDefault();
    // storing the values of the elements input and ul so we can operate with them
    const inputbar = document.querySelector("input[class=input]");
    const listOfTasks = document.querySelector("ul[class=list]");
    
    //create the element that will be inserted 
    const listItem = document.createElement("li");
    const buttonDelete = document.createElement("button");

    //set the element´s class value
    listItem.classList.add("list-item-data");
    
    //add the content that will go into the task we just created
    const contentListItem = `<p class="content-of-item-list">${inputbar.value}</p><button class="button-delete">delete</button>`;
    listItem.style.display = "flex";
    listItem.style.gap = "25px";
    listItem.style.width = "fit-content";
    listItem.style.borderBottom = "1px solid grey";
    /* listItem.style.borderLeft = "1px solid grey"; */
    
    
    listItem.innerHTML = contentListItem;

    listOfTasks.appendChild(listItem);

    inputbar.value = " ";

    console.log(document.querySelectorAll("button[class=button-delete]"));
}

/* const DeleteTask = (e) => {

} */