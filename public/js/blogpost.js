const commentFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment-input').value.trim();
  const blogpost_id = parseInt(document.querySelector('.comment-form').getAttribute('data-id'))

  if (text && blogpost_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ text, blogpost_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);