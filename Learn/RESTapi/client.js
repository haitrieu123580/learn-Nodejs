fetch('http://localhost:8080/listUsers')
.then(response => response.json())
  .then(data => {
    let  html =  `<ul>
    <li>
      <div>${data.user1.name}  
      </div>
      <div>${data.user2.password}
      </div>
    </li>
    </ul>`
    box.insertAdjacentHTML("afterend", html);
    console.log(data)
  });
  const box  = document.querySelector('.box')
