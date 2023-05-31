document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
  

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(function(comment) {
      const commentElement = createCommentElement(comment.date, comment.text);
      commentList.appendChild(commentElement);
    });
  

    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {

        const newComment = {
          date: getCurrentDate(),
          text: commentText
        };
  
        comments.unshift(newComment);
  
        localStorage.setItem('comments', JSON.stringify(comments));
  
        const commentElement = createCommentElement(newComment.date, newComment.text);
        commentList.insertBefore(commentElement, commentList.firstChild);
  
        commentInput.value = '';
      }
    });
  
    function createCommentElement(date, text) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p class="comment-date">${date}</p>
        <p class="comment-text">${text}</p>
        <hr>
      `;
      return commentElement;
    }
  
    function getCurrentDate() {
      const currentDate = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return currentDate.toLocaleDateString(undefined, options);
    }
  });