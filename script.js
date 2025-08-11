// NodeList = Static Collection of HTML elements by id class element
//            can be created by using querySelectorAll() 
//             Similar to array but no map filter reduce 
//             Wont automatically update to reflect changes

let buttons = document.querySelectorAll(".myBtns");

// Adding HTML/CSS properties

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😇";
// })

// buttons.forEach(button => {
//     button.addEventListener("click" , event => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😇";
//     })

//     button.addEventListener("mouseover", event => {
//         button.style.backgroundColor = "hsl(205, 100%, 40%)";
//     })

//     button.addEventListener("mouseout", event => {
//         button.style.backgroundColor = "hsl(205, 100%, 60%)";
//     })
// })

//  ADD AN ELEMENT

// const newButton = document.createElement("button");

// newButton.textContent = "Button 5";
// newButton.classList = "myBtns";

// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myBtns");

// console.log(buttons)

// REMOVE ALL

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        document.querySelectorAll(".myBtns");
        console.log(buttons)
    })
})