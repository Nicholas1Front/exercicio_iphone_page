const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {

        buttons.forEach(btn => {
            btn.querySelector(".color").classList.remove("selected"); // limpa selected
        });

        const button = event.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        
        image.setAttribute("src" , `images/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing")
        },200)
    });
})   