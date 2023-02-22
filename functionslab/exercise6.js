fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then((json) => {
    const countPerUser = json.reduce((acc,obj) => {
      if (obj.completed) {
        if (acc[obj.userId]) {
          acc[obj.userId] +=  1
      } else {
          acc[obj.userId] = 1
      }
      }
        return acc
    },{})
    console.log(countPerUser)
  })
  .catch(function(err) { 
    console.log(err);
  });
