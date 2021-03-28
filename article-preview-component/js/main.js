const shareButton = document.querySelector(".share");
const shareLinks = document.querySelector(".share__links");

document.body.addEventListener("click", (event) => {
     if (
         event.target.classList.contains("share") ||
         event.target.classList.contains("share__links") ||
         event.target.classList.contains("share__links__text") ||
         event.target.parentElement.classList.contains("share__links__link")
     ) {
         shareButton.classList = "share share-active";
         shareLinks.classList = "share__links links-active";
     } else {
         shareButton.classList = "share";
         shareLinks.classList = "share__links";
     }
});
