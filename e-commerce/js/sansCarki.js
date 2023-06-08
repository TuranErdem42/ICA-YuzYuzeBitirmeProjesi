let carkAlert = document.querySelector(".alert");
let carkClose = document.querySelector(".close");
let btnCevir = document.querySelector(".btnCevir");
let wheelContainer = document.querySelector(".wheel-container");
let carkBlur = document.querySelector(".blur");
carkBlur.classList.remove("blur");


btnCevir.addEventListener("click", () => {
    wheelContainer.style.transform = "scale(1)";
    carkBlur.classList.toggle("blur");
    body.style.overflowY = "hidden";
})

carkClose.addEventListener("click", () => {
    carkAlert.classList.remove("kaydir");
});
window.onload = function () {
    setTimeout(() => {
        carkAlert.classList.add("kaydir");
    }, 4000);
}


// Spin Wheel

let wheel = document.querySelector(".wheel");
let wheelGift = document.querySelector(".gift");
let wheelBtn = document.querySelector(".gift .giftAdd");
let wheelText = document.querySelector(".gift p");
let spinBtn = document.querySelector(".spin-btn");
let kuponDeger = 20;
let audio = new Audio('img/wheelSound.mpeg');

spinBtn.addEventListener("click", () => {
    wheel.style.transform = "rotate(4545deg)";
        audio.play();

    setTimeout(() => {
        wheelGift.style.transform = "scale(1)";
        wheelText.textContent = `Tebrikler. $${kuponDeger} değerinde bir kupon kazandınız.`;
    }, 5300);
});

wheelBtn.addEventListener("click", () => {
    
    wheelText.textContent = `$${kuponDeger} değerindeki kupon eklendi. Dilediğiniz zaman kullanabilirsiniz.`;
    wheelBtn.style.display = "none";
    setTimeout(() => {
        wheelGift.style.transform = "scale(0)";
        wheelContainer.style.transform = "scale(0)";
        carkAlert.classList.remove("kaydir");
        carkBlur.classList.remove("blur");
        body.style.overflowY = "visible";

        // Geri sayım zamanlayıcısı için başlangıç saati
        var startTime = (23 * 60 * 60) + (59 * 60) + 59; // 23 saat 59 dakika 59 saniye

        // Zamanlayıcıyı güncelleyen fonksiyon
        function updateTimer() {
            var hours = Math.floor(startTime / 3600); // Saatleri al
            var minutes = Math.floor((startTime % 3600) / 60); // Dakikaları al
            var seconds = Math.floor((startTime % 3600) % 60); // Saniyeleri al

            // Zamanı HTML'de görüntülemek için gerekli biçimlendirme
            var timeDisplay =
                (hours < 10 ? "0" : "") + hours +
                ":" +
                (minutes < 10 ? "0" : "") + minutes +
                ":" +
                (seconds < 10 ? "0" : "") + seconds;

            // HTML'deki zamanlayıcıyı güncelle
            let timer = document.getElementById("timer");
            timer.innerHTML = `Çark çevrimek için kalan süre: <b>${timeDisplay}</b>`;

            // Zaman dolmadıysa bir saniye azalt
            if (startTime > 0) {
                startTime--;
            } else {
                // Zaman bittiğinde yapılacak işlemler
                clearInterval(timerInterval); // Zamanlayıcıyı durdur
                alert("Geri sayım tamamlandı!");
            }
        }

        // Zamanlayıcıyı her saniye güncellemek için setInterval kullan
        var timerInterval = setInterval(updateTimer, 1000);
    }, 1500);
});


