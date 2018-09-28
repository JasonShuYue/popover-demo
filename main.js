
// plan 1: 监听wrapper，然后点击的时候阻止冒泡，防止document监听会使得悬浮窗
//  消失，但是此方法有个缺点，就是一直在监听document事件，如果有类似很多了popover事件
//  然后监听document会浪费很多内存，故而有了下面的方法。
// let wrapper = document.getElementsByClassName("wrapper")[0];
// let popover = document.getElementsByClassName("popover")[0];
//
// wrapper.addEventListener("click", function(e) {
//     popover.style = "display: block";
//     e.stopPropagation();
// });
//
// document.addEventListener("click", function() {
//     popover.style = "display: none";
// });



// plan2: 这里虽然在clickMe点击后加入对document的监听，但是点击clickMe后会有多个document监听，
let $clickMe = $('.clickMe');
let $popover = $('.popover');
let $wrapper = $('.wrapper');

$clickMe.on('click', function() {
    $popover.show();
    $(document).one("click", function() {
        $($popover).hide();
    });
});

$wrapper.on('click', function(e) {
    e.stopPropagation();
});

