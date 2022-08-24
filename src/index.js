const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3002/movies/${input.value}`)
    .then(res => res.json())
    .then(movieData => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.textContent = movieData.title;
      summary.textContent = movieData.summary;
    })
  });

}


document.addEventListener('DOMContentLoaded', init);