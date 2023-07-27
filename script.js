
let taskCount =0;

let addTask=() =>{       

    // getting the input texxt of task
    let taskTitleElement= document.querySelector(".title");
    let taskTitle= taskTitleElement.value;

    //making the element
    let task = document.createElement("div");
    
    //adding content as button and cross sign.
    let content = document.createElement("button");
    let omit = document.createElement("button");

    
    content.textContent= taskTitle;

    // to put X cross symbol
    omit.innerHTML= "&#10005"	;

    content.className= "taskContent";
    omit.classList.add("omit");
    task.classList.add("task");

    //adding before the last task
    let tasks= document.querySelector(".tasks");

    // to remove from the to do list.
    omit.onclick= (ev)=>{
        ev.target.parentElement.style.display = "none";
    }

    //to mark checked.
    content.onclick= (ev)=>{
        ev.target.classList.toggle('checked');
    }   

    // to give grey background for odd no. of task
    if(taskCount%2===1){
        content.style.backgroundColor= "grey";
        omit.style.backgroundColor= "grey";
    }

    tasks.appendChild(task);
    task.appendChild(content);
    task.appendChild(omit);
    taskCount++;

    // to change the placeholder of the input
    taskTitleElement.value= "";
    taskTitleElement.setAttribute("placeholder", "Title... ");
}

