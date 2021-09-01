const loginInput = document.querySelector("#login_id");

function loginSubmit(){
    const id = loginInput.value;
    localStorage.setItem("MANGO_ID", id);
}