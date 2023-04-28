const editPostFormHandler = async (event) => {
    event.preventDefault();

    const user_id = document.querySelector('#currentUserId').value.trim();
    const post_id = document.querySelector('#postId').value.trim();
    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();

    if (user_id && post_id  && (title || content)) {
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // If successful, reload page
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

const deletePostFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#postId').value.trim();

    if (post_id) {
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // If successful, go to dashboard page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document
.querySelector('#edit-post-submit')
.addEventListener('click', editPostFormHandler);

document
.querySelector('#delete-post-submit')
.addEventListener('click', deletePostFormHandler);
