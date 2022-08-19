const signupBtn = document.querySelector('.SignUpBtn')
const loginBtn = document.querySelector('.SignInBtn')
const moveBtn = document.querySelector('.moveBtn')
const signup = document.querySelector(".signup")
const login = document.querySelector(".login")


loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn")
})

signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn")
})