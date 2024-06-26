document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("h1");
    header.addEventListener("click", () => {
      header.style.color = "yellow";
    });
  });





// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('product-form');

//   form.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const formData = new FormData(form);
//       const category = formData.get('category');
//       const model = formData.get('model');
//       const price = formData.get('price');

//       fetch('/add-product', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               category,
//               model,
//               price
//           })
//       })
//       .then(response => response.json())
//       .then(data => {
//           // Create a new list item for the newly added product
//           const newProduct = document.createElement('li');
//           newProduct.textContent = `${data.Model} - ${data.Price}`;

//           // Append the new product to the correct category list
//           const listId = `${category}-list`;
//           document.getElementById(listId).appendChild(newProduct);

//           // Reset the form fields
//           form.reset();
//       })
//       .catch(error => console.error('Error:', error));
//   });
// });
