const showMessage = (message, callback) => {
  const al = document.getElementById("message-overlay");
  if (al) {
    document.getElementById("message-overlay").innerHTML = `
  <div>
    <div id="message-overlay-content">${message}</div>
    <button id="message-overlay-close-button">OK</button>
  </div>
  `;
  }
  const ul = document.getElementById("message-overlay");
  if(ul){
    document.getElementById("message-overlay").classList.add("active");
  }
  const el = document.getElementById("message-overlay-close-button");
  if (el) {
    document
      .getElementById("message-overlay-close-button")
      .addEventListener("click", () => {
        document.getElementById("message-overlay").classList.remove("active");
        if (callback) {
          callback();
        }
      });
  }
};

export { showMessage };
