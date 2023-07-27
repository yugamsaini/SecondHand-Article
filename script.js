const productsData = {
    Electronics: [
      {
        name: 'Laptop',
        owner: 'Yogesh',
        description: 'A 2 year used laptop with all the working features',
        available: true,
        image: 'https://example.com/laptop.jpg'
      },
      {
        name: 'Water-Cooler',
        owner: 'Prabhjeet',
        description: 'One year used water cooler that works fine',
        available: false,
        image: 'https://example.com/cooler.jpg'
      }
    ],
    Clothing: [
      {
        name: 'T-Shirt',
        owner: 'Binny',
        description: 'GFG logo t-shirt that is comfortable and stylish.',
        available: true,
        image: 'https://example.com/t-shirt.jpg'
      },
      {
        name: 'Blanket',
        owner: 'Dopa',
        description: 'A new used blanket.',
        available: true,
        image: 'https://example.com/blanket.jpg'
      }
    ],
    Books: [
      {
        name: 'Data Structure and Algorithm in java',
        owner: 'Piyush',
        description: 'The book is totally about implementation of data structures in java.',
        available: false,
        image: 'https://example.com/books.jpg'
      },
      {
        name: 'Data Strucutre in C++',
        owner: 'Rohan',
        description: 'This book is totally about implementation of data structure in C++.',
        available: true,
        image: 'https://example.com/books.jpg'
      }
    ]
  };
  
  function showProducts(category) {
    // Hide categories and show products container
    document.getElementById('categories-container').style.display = 'none';
    document.getElementById('products-container').style.display = 'block';
  
    // Set the category title
    document.getElementById('category-title').textContent = category;
  
    // Clear previous product list
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    // Get products for the selected category
    const products = productsData[category] || [];
  
    if (products.length > 0) {
      // Create and append product list items
      for (const product of products) {
        const listItem = document.createElement('li');
        listItem.textContent = product.name;
        listItem.onclick = function() {
          showProductDetails(product);
        };
        productList.appendChild(listItem);
      }
    } else {
      // Display a message if no products found
      productList.innerHTML = '<li>No products found.</li>';
    }
  }
  
  function showProductDetails(product) {
    // Hide product list and show product details
    document.getElementById('products-container').style.display = 'none';
    document.getElementById('product-details').style.display = 'block';
  
    // Set product details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-owner').textContent = 'Owner: ' + product.owner;
    document.getElementById('product-description').textContent = product.description;
  }
  
  function checkAvailability() {
    const availabilityMsg = document.getElementById('availability-msg');
    const isAvailable = Math.random() < 0.5; // Randomly generate availability
  
    if (isAvailable) {
      availabilityMsg.textContent = 'Product is available!';
      availabilityMsg.style.color = 'green';
    } else {
      availabilityMsg.textContent = 'Product is not available.';
      availabilityMsg.style.color = 'red';
    }
  }
  
  function goBackToCategories() {
    // Show categories and hide products or product details
    document.getElementById('categories-container').style.display = 'block';
    document.getElementById('products-container').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('add-product-form').style.display = 'none';
  }
  
  function goBackToProducts() {
    // Show products and hide product details
    document.getElementById('products-container').style.display = 'block';
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('add-product-form').style.display = 'none';
  }
  
  function showAddProductForm() {
    // Hide products and product details, show add product form
    document.getElementById('products-container').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('add-product-form').style.display = 'block';
  }
  
  function submitProduct(event) {
    event.preventDefault();
  
    const productName = document.getElementById('product-name-input').value;
    const productOwner = document.getElementById('product-owner-input').value;
    const productCategory = document.getElementById('product-category-input').value;
    const productDescription = document.getElementById('product-description-input').value;
    const productImage = document.getElementById('product-image-input').value;
  
    if (productName && productOwner && productCategory && productDescription && productImage) {
      // Create a new product object
      const newProduct = {
        name: productName,
        owner: productOwner,
        description: productDescription,
        available: true,
        image: productImage
      };
  
      // Add the new product to the respective category
      if (productsData.hasOwnProperty(productCategory)) {
        productsData[productCategory].push(newProduct);
      } else {
        productsData[productCategory] = [newProduct];
      }
  
      // Clear the form fields
      document.getElementById('product-name-input').value = '';
      document.getElementById('product-owner-input').value = '';
      document.getElementById('product-category-input').selectedIndex = 0;
      document.getElementById('product-description-input').value = '';
      document.getElementById('product-image-input').value = '';
  
      // Show success message and go back to the product list
      alert('Product added successfully!');
      goBackToProducts();
      showProducts(productCategory);
    } else {
      alert('Please fill in all the fields.');
    }
  }
  