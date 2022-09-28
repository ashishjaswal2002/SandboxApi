const output =document.getElementById('output');
 document.getElementById('getUsers').addEventListener('click',getUsers); 
document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getPosts').addEventListener('click',getPosts);
function getText(){
    // fetch('sample.txt').then(function(res){
    //    return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })


    
    fetch('sample.txt').then((res)=> res.text()).then((data)=> output.innerHTML = data)
    .catch((err)=>console.log(err));
}


function getUsers(){
      fetch('user.json').then((res)=>res.json()).then((data)=>{
        let out = '<h2>Users</h2>';
         data.forEach(function(user){
            out += `
               <ul class="list-group">
               <li class="list-group-item">ID:${user.id}</li>
               <li class="list-group-item">Name:${user.name}</li>
               <li class="list-group-item">Email:${user.email}</li>
              </ul>
               `;
         });
         
         document.getElementById('output').innerHTML = out;
      })
    }
document.getElementById('addPost').addEventListener('submit',addPost);

function addPost(e){
    e.preventDefault();

    let title  = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain,*/*',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title: title,
            body: body
        })
       
    }) .then((res)=>res.json())
    .then((data)=> console.log(data))
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>{
      let outs = '<h2 class="mb-4 mt-4">Posts</h2>';
       data.forEach(function(post){
          outs += `
               <div class="card card-body mb-3">
               <h3>${post.title}</h3>
               <p>${post.body}</p>
               </div>
             `;
       })
       document.getElementById('output').innerHTML = outs;
    })
  

}