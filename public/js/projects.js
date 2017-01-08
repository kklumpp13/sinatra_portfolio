(function() {
  var projectContainer = $('.project-container'),
      projectCards = $('.project-card');

  function reset() {
    $(projectCards).hide();
  }

  $(".tech-select li").on("click", function() {
    var $this = $(this),
        selectedTech = $this.data('tech');

    reset();

    if (selectedTech === "all") {
      $(projectCards).show();
    } else {
      $(projectContainer).find('div' + '[data-techtype*="' + selectedTech + '"]').show();
    }
  });
}());
