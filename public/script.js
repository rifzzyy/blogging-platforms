window.addEventListener('DOMContentLoaded', () => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(posts => {
      const container = document.querySelector('.container');
      if(window.location.pathname === '/') {
        posts.forEach(post => {
          const div = document.createElement('div');
          div.className = 'post';
          div.innerHTML = `<h2>${post.title}</h2><p>${post.date}</p><p>${post.content.substring(0,50)}... <a href="/post/${post.id}">Read More</a></p>`;
          container.appendChild(div);
        });
      } else if(window.location.pathname.startsWith('/post')) {
        const id = parseInt(window.location.pathname.split('/').pop());
        const post = posts.find(p => p.id === id);
        if(post) {
          container.innerHTML = `<div class="post"><h2>${post.title}</h2><p>${post.date}</p><p>${post.content}</p></div>`;
        }
      }
    });
});