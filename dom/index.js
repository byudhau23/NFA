const imgs = document.querySelectorAll('.img img');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const closeModal = document.querySelector('.close');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', () => {
    // Display the clicked image in the modal
    modal.style.display = "block";
    modalImg.src = imgs[i].src;

    // Play the corresponding audio
    const audio = new Audio(`./audio/evil${i + 1}.mp3`);
    audio.play();
  });
}

// Close the modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});
