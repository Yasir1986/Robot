document.addEventListener("DOMContentLoaded", () => {
  const eyes = document.querySelectorAll(".eye");
  const mask = document.querySelector(".mask");
  const torso = document.querySelector(".torso");
  const robot = document.querySelector(".robot");
  let position = 0;

  function changeEyes() {
    eyes.forEach((eye) => eye.classList.toggle("blue-eye"));
  }

  mask.addEventListener("dblclick", changeEyes);

  function moveRobot() {
    position += 5;
    robot.style.left = position + "px";
    changeEyes();
  }

  torso.addEventListener("contextmenu", moveRobot);

  function moveBackRobot() {
    position -= 5;
    robot.style.left = position + "px";
    changeEyes();
  }

  torso.addEventListener("click", moveBackRobot);
});
