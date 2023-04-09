const button = document.getElementById("Electronic");

button.addEventListener("click",async function (e) {
  e.preventDefault();

const fetchTodos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/14");
    const data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = `<div>${data.title}</div>`;
    document.getElementById("category").innerHTML = `<h1>${data.category}</h1>`;
    document.getElementById("img").innerHTML = `<img>${data.image}</img>`;
    
  } catch (error) {
    console.log(error);
  }
};
fetchTodos()
});

const button1 = document.getElementById("Jewellery");

button1.addEventListener("click",async function (e) {
  e.preventDefault();

const fetchTodos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/5");
    const data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = `<div>${data.title}</div>`;
    document.getElementById("category").innerHTML = `<h1>${data.category}</h1>`;
    document.getElementById("img").innerHTML = `<img>${data.image}</img>`;
    
  } catch (error) {
    console.log(error);
  }
};
fetchTodos()
});

const button2 = document.getElementById("Mens wearing");

button2.addEventListener("click",async function (e) {
  e.preventDefault();

const fetchTodos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = `<div>${data.title}</div>`;
    document.getElementById("category").innerHTML = `<h1>${data.category}</h1>`;
    document.getElementById("img").innerHTML = `<img>${data.image}</img>`;
    
  } catch (error) {
    console.log(error);
  }
};
fetchTodos()
});

const button3 = document.getElementById("Womens Wearing");

button3.addEventListener("click",async function (e) {
  e.preventDefault();

const fetchTodos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/16");
    const data = await response.json();
    console.log(data);
    document.getElementById("result").innerHTML = `<div>${data.title}</div>`;
    document.getElementById("category").innerHTML = `<h1>${data.category}</h1>`;
    document.getElementById("img").innerHTML = `<img>${data.image}</img>`;
    
  } catch (error) {
    console.log(error);
  }
};
fetchTodos()
});


