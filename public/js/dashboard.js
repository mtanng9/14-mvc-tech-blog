const newPostFormHandler = async (event) => {
    event.preventDefault();

    const user_id = document.querySelector('#currentUserId').value.trim();
    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();

    if (user_id && title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // If successful, reload page
            location.reload("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('#new-post-submit')
.addEventListener('click', newPostFormHandler);