const itemsRef = document.querySelectorAll(".item");

console.log(`В списке ${itemsRef.length} категории.`);
const children = document.querySelectorAll("#categories>li");
children.forEach((child) =>
  console.log(`Категория:${child.firstElementChild.textContent}
   Количество элементов:${child.lastElementChild.children.length}`)
);
// const firstChild = document.querySelector("#categories").firstElementChild;
// const firstChildTitle = firstChild.firstElementChild;
// const firstChildEl = firstChildTitle.nextElementSibling.children;

// console.log(
//   `Категория:${firstChildTitle.textContent}
//   Количество элементов:${firstChildEl.length}`
// );
// const secondChild = firstChild.nextElementSibling;
// const secondChildTitle = secondChild.firstElementChild;
// const secondChildEl = secondChildTitle.nextElementSibling.children;

// console.log(
//   `Категория:${secondChildTitle.textContent}
//   Количество элементов:${secondChildEl.length}`
// );
// const lastChild = document.querySelector("#categories").lastElementChild;
// const lastChildTitle = lastChild.firstElementChild;
// const lastChildEl = lastChildTitle.nextElementSibling.children;

// console.log(
//   `Категория:${lastChildTitle.textContent}
//   Количество элементов:${lastChildEl.length}`
// );
