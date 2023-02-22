fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then((json) => {
    const viaReduce = json.reduce((acc,obj) => {
        if (!obj.completed) { 
        acc.push({ userID: obj.userId, title: obj.title });
        }
        return acc
    },[]);
    console.log(viaReduce)
  })
  .catch(function(err) { 
    console.log(err);
  });