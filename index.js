document.onkeydown = handle;
let cnt = 0;
let lastTime = Date.now();

function handle(event) {
  if (event.shiftKey) {
    cnt++;
  }

  if (Date.now() - lastTime < 5000 && cnt > 5) {
    console.log("stickykeys");
    let tex = document.getElementById("text");
    tex.innerHTML = "stickyKey";
  }
}
