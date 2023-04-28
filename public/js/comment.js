const commentFormHandler = async (event) => {
    event.preventDefault();

    const user_id = document.querySelector('#currentUserId').value.trim();
    const post_id = document.querySelector('#postId').value.trim();
    const comment = document.querySelector('#comment-comment').value.trim();

    if (user_id && post_id && comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, user_id, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            // If successful, reload page
            location.reload();
        } else {
            alert(response.statusText);
        }
    }

};

document
.querySelector('#comment-submit')
.addEventListener('click', commentFormHandler);
