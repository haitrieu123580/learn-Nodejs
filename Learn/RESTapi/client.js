fetch('http://localhost:8080/listUsers')
.then(response => response.json())
  .then(data => {
    console.log(data)
  });
