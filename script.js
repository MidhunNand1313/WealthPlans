$(document).ready(function() {

    // Open modal
    $('.contact-btn').click(function() {
        const plan = $(this).closest('.plan').data('plan');
        $('#modal-plan-name').text(plan);
        $('#modal-message').text(`You have chosen the "${plan}" plan. Please contact for more details.`);
        $('#contact-modal').addClass('active'); // show modal
    });

    // Close modal
    $('#close-modal').click(function() {
        $('#contact-modal').removeClass('active'); // hide modal
    });

});
