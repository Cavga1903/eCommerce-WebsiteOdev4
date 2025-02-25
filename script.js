let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");

// Oda bilgileri (Doğru içeriğin görünmesini sağlamak için)
const roomInfo = [
    { number: "01 — Bed Room", title: "Inner Peace" },
    { number: "02 — Dining", title: "Cozy Dining" },
    { number: "03 — Kitchen", title: "Modern Kitchen" }
];

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Doğru kayma işlemi
    const offset = -currentIndex * 41;
    carousel.style.transform = `translateX(${offset}%)`;

    // Tüm slaytları kontrol et ve sadece aktif olanı güncelle
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);

        // İçindeki metinleri güncelle
        const roomNumber = slide.querySelector(".carousel-text p");
        const roomTitle = slide.querySelector(".carousel-text h3");

        if (roomNumber && roomTitle) {
            roomNumber.textContent = roomInfo[i].number;
            roomTitle.textContent = roomInfo[i].title;
        }
    });

    // Aktif noktayı güncelle
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

// İlk slaytı göster
showSlide(currentIndex);