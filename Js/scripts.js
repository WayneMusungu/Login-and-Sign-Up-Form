function switchForm(className, e){
    e.preventDefault();
    const allForm = document.querySelectorAll("form");
    // console.log(allForm)
    const form = document.querySelector(`form.${className}`);
    // console.log(form)

    allForm.forEach(item => {
        item.classList.remove("active");
    });
    form.classList.add("active");
};

const signPassword = document.querySelector("form.register #password")
const signConfirmPassword = document.querySelector("form.register confirm-password")

// console.log(signConfirmPassword);
signPassword.addEventListener("input", function(){
    signConfirmPassword.pattern = `${this.value}`;
});




