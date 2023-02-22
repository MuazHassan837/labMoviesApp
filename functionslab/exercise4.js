fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then((json) => {
    const completed = json.filter((todo) => {
        return todo.completed == true;
    });
    const count = completed.reduce ((acc, obj) => {
        return acc + 1
    }, 0)
    console.log(count)
  })
  .catch(function(err) { 
    console.log(err);
  });