function is_loading(status) {
    const body = document.querySelector("body");
    const everything = document.querySelectorAll("body *");
    body.classList.add("is-loading");
    if (status == "is-loading") {
        everything.forEach(element => {
            element.classList.add("no-animation");
        });
    } else {
        everything.forEach(element => {
            element.classList.remove("no-animation");
        });

    }
}

function create_bg(dir, list_of_bgs) {
    const parint = document.querySelector(dir);
    list_of_bgs.forEach(bg => {
        let background = document.createElement("div");
        background.style.backgroundImage = `url(${bg})`;
        background.classList.add("elem");
        parint.appendChild(background);
    });
}

function create_array(list_of_elements) {
    let counter = list_of_elements.length - 1;
    let list_of_arrays = new Array;
    if (list_of_elements.length >= 3) {
        list_of_elements.forEach((element, index) => {
            let next_elem;
            if (index == list_of_elements.length - 1) {
                next_elem = 0
            } else {
                next_elem = index + 1
            }
            let arr = new Array(
                list_of_elements[counter],
                element,
                list_of_elements[next_elem]
            )
            list_of_arrays.push(arr);
            counter = index;
        });

    }
    return (list_of_arrays)
}

(function bg(elements) {
  let counter = 0;
  let first_loading = 6000;
  create_bg(".bg", elements);
  is_loading("is-loading");
  window.addEventListener("load", () => {
    setTimeout(() => {
      is_loading();
      document.querySelector("body").classList.remove("is-loading");
    }, 10);
    setInterval(() => {
      const bgs = document.querySelectorAll(".bg-header .elem");
      const array_of_bgs = create_array(bgs);
      const currently_needed = array_of_bgs[counter];
      currently_needed[0].classList.remove("visible", "top");
      currently_needed[1].classList.add("visible", "top");
      currently_needed[2].classList.add("visible");
      if (counter == array_of_bgs.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, first_loading);
  });
})([
  "assets/imgs/bg01.jpg",
  "assets/imgs/bg02.jpg",
  "assets/imgs/bg03.jpg"
]);
