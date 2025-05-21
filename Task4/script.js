const blogForm = document.getElementById('blog-form');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const postsContainer = document.getElementById('blogs');

let postList = JSON.parse(localStorage.getItem('posts')) || [];
let currentEditIndex = -1;

function displayPosts() {
  
  postsContainer.querySelectorAll('.blog:not(#blog-template)').forEach(post => post.remove());

  const postTemplate = document.getElementById('blog-template');

  postList.forEach((post, idx) => {
    const postElement = postTemplate.cloneNode(true);
    postElement.style.display = '';
    postElement.id = '';

    postElement.querySelector('.blog-title').textContent = post.title;

    const entireContent = post.content;
    const previewContent = entireContent.length > 250 ? entireContent.slice(0, 250) + '...' : entireContent;
    const contentElement = postElement.querySelector('.blog-content');
    const toggleBtn = postElement.querySelector('.read-more');

    contentElement.innerHTML = previewContent.replace(/\n/g, '<br>');

    if (entireContent.length > 250) {
      toggleBtn.textContent = 'Read More';
      toggleBtn.style.display = 'inline';
      toggleBtn.onclick = () => {
        if (toggleBtn.textContent === 'Read More') {
          contentElement.innerHTML = entireContent.replace(/\n/g, '<br>');
          toggleBtn.textContent = 'Read Less';
        } else {
          contentElement.innerHTML = previewContent.replace(/\n/g, '<br>');
          toggleBtn.textContent = 'Read More';
        }
      };
    } else {
      toggleBtn.style.display = 'none';
    }

    
    postElement.querySelector('.edit-btn').onclick = () => {
      currentEditIndex = idx;
      inputTitle.value = post.title;
      inputContent.value = post.content;
      blogForm.querySelector('button').textContent = 'Update';
      blogForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    
    postElement.querySelector('.delete-btn').onclick = () => {
      if (confirm('Do you really want to remove this post?')) {
        postList.splice(idx, 1);
        localStorage.setItem('posts', JSON.stringify(postList));
        displayPosts();
        if (currentEditIndex === idx) clearForm();
      }
    };

    postsContainer.appendChild(postElement);
  });
}

function clearForm() {
  blogForm.reset();
  currentEditIndex = -1;
  blogForm.querySelector('button').textContent = 'Publish';
}

blogForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTitle = inputTitle.value.trim();
  const newContent = inputContent.value.trim();

  if (!newTitle || !newContent) return;

  if (currentEditIndex === -1) {
    postList.push({ title: newTitle, content: newContent });
  } else {
    postList[currentEditIndex] = { title: newTitle, content: newContent };
  }

  localStorage.setItem('posts', JSON.stringify(postList));
  displayPosts();
  clearForm();
});

displayPosts();
