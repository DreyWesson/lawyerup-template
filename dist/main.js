const ul = document.querySelector(".navbar-nav");
if (ul) {
  const navItems = [...ul.getElementsByTagName("li")];
  navItems.forEach((li) => {
    li.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        clearActives(navItems);
        this.classList.toggle("active");
      }
    });
  });
}

function clearActives(classlist) {
  if (classlist) {
    classlist.forEach((classLi, i) => {
      classLi.classList.remove("active");
    });
  }
}
//
//
//
// jQuery version of above
// $(".nav-item").on("click", function (e) {
//   $("li.nav-item").removeClass("active");
//   $(this).addClass("active");
// });

// $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
//   var $e = $(e.relatedTarget);
//   var idx = $e.index();
//   var itemsPerSlide = 3;
//   var totalItems = $('.carousel-item').length;
// console.log(totalItems);
//   if (idx >= totalItems-(itemsPerSlide-1)) {
//       var it = itemsPerSlide - (totalItems - idx);
//       for (var i=0; i<it; i++) {
//           // append slides to end
//           if (e.direction=="left") {
//               $('.carousel-item').eq(i).appendTo('.carousel-inner');
//           }
//           else {
//               $('.carousel-item').eq(0).appendTo('.carousel-inner');
//           }
//       }
//   }
// });
