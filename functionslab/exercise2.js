fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then((json) => {
    const todoTitles = json.map((indMap) => {
        return indMap.title
    });
    todoTitles.forEach( (todo, index) => {
      console.log(`${todo}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });