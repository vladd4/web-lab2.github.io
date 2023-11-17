document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      // Toggle the visibility of the content when the header is clicked
      console.log(header, "clciked");
      item.querySelector(".accordion-content").classList.toggle("active");

      // Close other items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("active");
        }
      });
    });
  });
});
