document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault(); //prevents default sumbit action

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  document.querySelector("#link-input").value = encrypted;
});
