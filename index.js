fetch(`http://www.omdbapi.com/?s=avatar&apikey=398f3ed5`)
        .then(res => res.json())
        .then(data => console.log(data.Search))