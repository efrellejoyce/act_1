function ageCheck() {
    let age = prompt("Input your age:");
    
        if (age < 13) {
         alert("You are a child.");
        } else if (age >= 13 && age <= 19) {
        alert("you are a teenager.");
        } else {
        alert("You are an adult.");
        } 
} 