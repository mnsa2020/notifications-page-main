const unreadMsg = document.querySelectorAll(".unread");
const markAll = document.querySelector(".mark-all");
const qty = document.querySelector(".qty");

unreadMsg.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnread = document.querySelectorAll(".unread");
    qty.innerText = newUnread.length;
  });
});

markAll.addEventListener("click", () => {
  unreadMsg.forEach((e) => e.classList.remove("unread"));
  const newUnread = document.querySelectorAll(".unread");
  qty.innerText = newUnread.length;
});
