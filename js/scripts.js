new WOW({
    animateClass: 'animate__animated',
}).init();

document.getElementById('mini-menu').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})


$('.teachers').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 890,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 649,
            settings: {
                slidesToShow: 1,
            }
        }]
});

$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let form = $('#form');
    let loader = $('.loader');
    let hasError = false;

    if (!name.val()) {
        name.next().show()
        // name.style.borderColor = "red";
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show()
        // name.style.borderColor = "red";
        hasError = true;
    }

    if (!hasError) {

        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    alert('Запрещенное имя');
                } else {
                    form.hide();
                    form.next().css('display', 'block');
                }
            });
    }
});

let servicesButton = document.getElementById('services__button');
let popup = document.getElementById('popup');
let popupBtn = document.getElementById('popup-button');

servicesButton.onclick = function () {
    popup.style.display = 'block';
}

popupBtn.onclick = function () {
    popup.style.display = 'none';
}