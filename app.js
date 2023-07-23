let container = document.querySelector(".container");
let user_result = document.querySelector(".user_result img");
let cpu_result = document.querySelector(".cpu_result img");
let result = document.querySelector(".result");
let option_image = document.querySelectorAll(".option_image");

option_image.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    image.classList.add("active");

    user_result.src = cpu_result.src = "images/rock.png";
    result.textContent = "Wait...";

    option_image.forEach((image2, index2) => {
      //   console.log(index, index2);
      index !== index2 && image2.classList.remove("active");
    });

    container.classList.add("start");

    let time = setTimeout(() => {
      container.classList.remove("start");

      let imagesrc = e.target.querySelector("img").src;
      user_result.src = imagesrc;

      let randomnum = Math.floor(Math.random() * 3);
      // console.log(randomnum);

      let cpuimgs = [
        "images/rock.png",
        "images/paper.png",
        "images/scissor.png",
      ];
      cpu_result.src = cpuimgs[randomnum];

      let cpu_value = ["R", "P", "S"][randomnum];
      let user_value = ["R", "P", "S"][index];

      let output = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SP: "User",
        SR: "Cpu",
      };

      let output_value = output[user_value + cpu_value];

      // display result
      result.innerHTML =
        user_value === cpu_value ? "Match Draw" : `${output_value} Won!!`;
    }, 2500);
  });
});
