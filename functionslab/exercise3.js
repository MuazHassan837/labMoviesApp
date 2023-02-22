fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then((json) => {
    const uncomplete = json.filter((todo) => todo.completed == false);
    console.log(uncomplete)
    const valid = uncomplete.map ((map) => {
        return {
            userID : map.userId,
            title : map.title
        }
    })
    console.log(valid)
  })
  .catch(function(err) { 
    console.log(err);
  });