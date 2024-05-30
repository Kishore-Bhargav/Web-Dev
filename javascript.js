function services(){
    document.getElementById("display").textContent="Services";
}

function projects(){
    document.getElementById("display").textContent="Projects";
}

function about(){
    document.getElementById("display").textContent="About";
}

function contact(){
    document.getElementById("display").textContent="Contact";
}

function Form(){
    let form= document.getElementById("form");
    form.style.display="inline-block";
}

function Details(){
    let display2=document.getElementById("display2");
    let u_name=document.getElementById("username").value;
    let u_mail=document.getElementById("email").value;
    let u_pass=document.getElementById("password").value;
    document.getElementById("uname").textContent= u_name;
    document.getElementById("umail").textContent= u_mail;
    document.getElementById("upass").textContent= u_pass;
    display2.style.display="inline-block";
}

