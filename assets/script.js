setTimeout(fade_out, 3500);

function fade_out() {
  document.getElementById("msg").style.display = "block";
}

function showInput() {
  document.getElementById("msg").style.display = "none";

}

let $draggable = $('#msg').draggabilly();
