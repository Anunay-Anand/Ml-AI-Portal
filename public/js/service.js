AOS.init();
const servicebtn = document.querySelectorAll(".service-button");
const content = document.querySelector(".box-content");

$(document).on("click", "button", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

servicebtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.innerText == "Prepare and ingest Data") {
      btn.classList.add("active");
      content.innerHTML =
        "Data preparation and ingestion is often the first step in ML. Some of our partners have unique capabilities and automated solutions to help prepare, label, and ingest data.";
    } else if (event.target.innerText == "Train Model") {
      btn.classList.add("active");
      content.innerHTML =
        "Training an ML model requires experimentation, fine-tuning, and optimization to get the desired outputs. Many partners excel at ML model development for specific use cases.";
    } else if (event.target.innerText == "Deploy Model") {
      btn.classList.add("active");
      content.innerHTML =
        "Trained models are used on a variety of platforms to perform real-world predictions on new data. Many partners offer products to deploy and manage models throughout the entire ML lifecycle.";
    }
  });
});
