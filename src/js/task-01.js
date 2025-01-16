const numberCategories = categories.children.length;
console.log(`Number of categories: ${numberCategories}`)

const lister = document.querySelectorAll(".item");
lister.forEach((categ) => {
    console.log(`Categories: ${categ.firstElementChild.textContent}`);
    console.log(`Elements: ${categ.lastElementChild.children.length}`);

});