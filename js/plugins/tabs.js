$('[data-tab]').click(function() {
    // remove active from all first and add to current new class
    $('[data-tab]').removeClass('active-tab');
    $(this).addClass('active-tab');

    // get current tab id
    var contentId = $(this).data('tab');

    // current tab content
    $('.tab-content.active-content').removeClass('active-content');
    $(contentId).addClass('active-content');
});
