const question = document.querySelectorAll(".question");

question.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedItem = e.target.closest("li");
    const answer = clickedItem.querySelector(".answer");
    const clickedItemHidden = answer.classList.contains("hidden");
    const arrow = clickedItem.querySelector("img");
    const quest = clickedItem.querySelector(".question");

    answer.classList.toggle("hidden");
    arrow.classList.toggle("arrow-up");
    quest.classList.toggle("bold");
  });
});
