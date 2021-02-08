/* Add Animate class with animate.css and Waypoint js */
$(document).ready(function(){
    $('.home-card-1').waypoint(function(direction){
        $('.home-card-1').addClass('animated fadeInLeft');
    }, {
        offset: '45%'
    });
    $('.home-card-2').waypoint(function(direction){
        $('.home-card-2').addClass('animated fadeInDown');
    }, {
        offset: '45%'
    });
    $('.home-card-3').waypoint(function(direction){
        $('.home-card-3').addClass('animated fadeInRight');
    }, {
        offset: '45%'
    });
    $('.construction-section-1').waypoint(function(direction){
        $('.construction-section-1').addClass('animated fadeInLeft');
    }, {
        offset: '45%'
    });
    $('.construction-section-2').waypoint(function(direction){
        $('.construction-section-2').addClass('animated fadeInRight');
    }, {
        offset: '45%'
    });
    $('.coustruction-jumbotron').waypoint(function(direction){
        $('.coustruction-jumbotron').addClass('animated fadeInUp');
    }, {
        offset: '45%'
    });
    $('.about-section-1').waypoint(function(direction){
        $('.about-section-1').addClass('animated bounceInLeft');
    }, {
        offset: '45%'
    });
    $('.about-section-2').waypoint(function(direction){
        $('.about-section-2').addClass('animated bounceInRight');
    }, {
        offset: '45%'
    });
    $('.our-team-section-1').waypoint(function(direction){
        $('.our-team-section-1').addClass('animated fadeIn');
    }, {
        offset: '45%'
    });
    $('.our-team-section-2').waypoint(function(direction){
        $('.our-team-section-2').addClass('animated fadeInDown');
    }, {
        offset: '45%'
    });
    $('.our-team-section-3').waypoint(function(direction){
        $('.our-team-section-3').addClass('animated fadeInDownBig');
    }, {
        offset: '45%'
    });
    $('.our-team-section-4').waypoint(function(direction){
        $('.our-team-section-4').addClass('animated fadeInLeft');
    }, {
        offset: '45%'
    });
    $('.our-team-section-5').waypoint(function(direction){
        $('.our-team-section-5').addClass('animated fadeInLeftBig');
    }, {
        offset: '45%'
    });
    $('.our-service-section-1').waypoint(function(direction){
        $('.our-service-section-1').addClass('animated fadeInRight');
    }, {
        offset: '45%'
    });
    $('.our-service-section-2').waypoint(function(direction){
        $('.our-service-section-2').addClass('animated fadeInRightBig');
    }, {
        offset: '45%'
    });
    $('.our-service-section-3').waypoint(function(direction){
        $('.our-service-section-3').addClass('animated fadeInUp');
    }, {
        offset: '45%'
    });
    $('.our-service-section-4').waypoint(function(direction){
        $('.our-service-section-4').addClass('animated fadeInUpBig');
    }, {
        offset: '45%'
    });
    $('.our-service-section-5').waypoint(function(direction){
        $('.our-service-section-5').addClass('animated flip');
    }, {
        offset: '45%'
    });
    $('.our-service-section-6').waypoint(function(direction){
        $('.our-service-section-6').addClass('animated flipInX');
    }, {
        offset: '45%'
    });
    $('.our-service-section-7').waypoint(function(direction){
        $('.our-service-section-7').addClass('animated flipInY');
    }, {
        offset: '45%'
    });
    $('.counter-section-1').waypoint(function(direction){
        $('.counter-section-1').addClass('animated lightSpeedIn');
    }, {
        offset: '45%'
    });
    $('.counter-section-2').waypoint(function(direction){
        $('.counter-section-2').addClass('animated rotateIn');
    }, {
        offset: '45%'
    });
    $('.counter-section-3').waypoint(function(direction){
        $('.counter-section-3').addClass('animated rotateInDownLeft');
    }, {
        offset: '45%'
    });
    $('.counter-section-4').waypoint(function(direction){
        $('.counter-section-4').addClass('animated rotateInDownRight');
    }, {
        offset: '45%'
    });
    $('.testimonial-section-1').waypoint(function(direction){
        $('.testimonial-section-1').addClass('animated rotateInUpLeft');
    }, {
        offset: '45%'
    });
    $('.blog-section-1').waypoint(function(direction){
        $('.blog-section-1').addClass('animated rotateInUpRight');
    }, {
        offset: '45%'
    });
    $('.blog-section-2').waypoint(function(direction){
        $('.blog-section-2').addClass('animated slideInDown');
    }, {
        offset: '45%'
    });
    $('.blog-section-3').waypoint(function(direction){
        $('.blog-section-3').addClass('animated slideInLeft');
    }, {
        offset: '45%'
    });
    $('.blog-section-4').waypoint(function(direction){
        $('.blog-section-4').addClass('animated slideInRight');
    }, {
        offset: '45%'
    });
    $('.contact-section-1').waypoint(function(direction){
        $('.contact-section-1').addClass('animated pulse');
    }, {
        offset: '45%'
    });
    $('.contact-section-2').waypoint(function(direction){
        $('.contact-section-2').addClass('animated rollIn');
    }, {
        offset: '45%'
    });
});
// Client Feedback 
$(".testimonials").owlCarousel({
    slideSpeed : 200,
    items: 1,
    singleItem: true,
    autoPlay : true,
    pagination : false,
    autoplay: true,
    loop: true
});
// Carousel 
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 6000
    }); 
});
// Close Sidebar
$(document).ready(function(){
    $('.toggle-btn').click(function (e) {
        $(".right-sidebar").toggleClass("active");
    });
    $('.right-sidebar ul li a').click(function (e) {
        $(".right-sidebar").removeClass("active");
    });
});
// Slow scroll with anchors
var scroll = new SmoothScroll('a[href*="#"]', {offset: 50, speed: 1000, easing: 'easeOutQuint'});
// Scroll Back To Top
$(document).ready(function(){
    // scroll to top 0px on click
    $('.back-to-top').on('click', function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

