function toggleHeart(index) {
  var heartIcon = document.getElementById("heartIcon" + index);
  if (heartIcon.classList.contains("active")) {
    heartIcon.classList.remove("active");
    heartIcon.classList.remove("active_heart");
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
  } else {
    heartIcon.classList.add("active");
    heartIcon.classList.add("active_heart");
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");
  }
}
