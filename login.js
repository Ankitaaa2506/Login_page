
let text=document.getElementById("text");
let password=document.getElementById("password");
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let submit=document.getElementById("submit");

/*function effect1(a,b){
    if(a==="ankitaaa2506" || b==="123456"){
        submit.addEventListener("mouseenter",()=>{
            submit.innerHTML="welcome.html";
        })}
        else if(a===" " || b===" "){
            submit.addEventListener("mouseenter",()=>{
                throw new Error("please fill all boxes!");

            })

        } else {
            submit.addEventListener("mouseenter",()=>{
                throw new Error("Try Again!");

            
         } )}
    }
    effect1(a,b);*/
    // Submit button par ek hi baar listener lagayein
/*submit.addEventListener("mouseenter", () => {
    // Input values ko check karte waqt hi uthayein
    const a = text.value;
    const b = password.value;

    if (a === "ankitaaa2506" && b === "123456") {
        submit.innerHTML = "Welcome!";
        // Agar page redirect karna hai toh: window.location.href = "welcome.html";
    } 
    else if (a === "" || b === "") {
        console.error("Please fill all boxes!");
        alert("Saare boxes bhariye!");
    } 
    else {
        console.error("Try Again!");
        alert("Galat details!");
    }
});*/
