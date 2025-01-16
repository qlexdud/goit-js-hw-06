const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

/*images.forEach((value, i) => {
  const elem = document.createElement("li");
  const image = document.createElement("img");
  image.src = value.url;
  image.alt = value.alt;
  list.append(elem, image);

});
console.log(list);*/


//const markup = images.map((elem) => `<li><img ${elem.url elem.alt}></li>`).join("");

const markup = images.map((elem) => `<li><img src="${elem.url}" alt="${elem.alt}"></li>`).join("");


list.insertAdjacentHTML("beforeend", markup);
console.log(list);
list.style.display = "flex";
list.style.gap = "50px";
list.style.flexDirection = "column";