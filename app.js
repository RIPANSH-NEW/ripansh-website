const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let isCooldown = false; // Status cooldown

function showError(event) {
    event.preventDefault();

    if (isCooldown) {
        return; // Tidak menampilkan notifikasi jika dalam status cooldown
    }

    // Tampilkan notifikasi
    const notification = document.getElementById("errorNotification");
    notification.style.display = "block";

    // Tutup notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.animation = "slideUp 0.5s";
        setTimeout(() => {
            notification.style.display = "none";
            notification.style.animation = "slideDown 0.5s";
        }, 500);
    }, 3000);

    // Atur cooldown selama 5 detik
    isCooldown = true;
    setTimeout(() => {
        isCooldown = false;
    }, 5000);
}