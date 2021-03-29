const shareButton = document.querySelector(".share");
const shareLinks = document.querySelector(".share__links");

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("share")) {
        // if you click the share button
        shareButton.classList.toggle("share-active");
        shareLinks.classList.toggle("links-active");
    } else if (
        // if you didn't click the share button but
        // instead click the elements inside share__links
        event.target.classList.contains("share__links") ||
        event.target.classList.contains("share__links__text") ||
        event.target.parentElement.classList.contains("share__links__link")
    ) {
        shareButton.classList = "share share-active";
        shareLinks.classList = "share__links links-active";
    } else {
        // if you click everywhere else but the above
        shareButton.classList.remove("share-active");
        shareLinks.classList.remove("links-active");
    }
});
