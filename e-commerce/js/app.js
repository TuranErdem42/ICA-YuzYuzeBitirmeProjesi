// Giriş Ekranı Gösterme / Gizleme

let kaydolBtn = document.getElementById("kaydolBtn");
let girisBtn = document.getElementById("girisBtn");
let isimField = document.getElementById("isimField");
let formBaslik = document.getElementById("title");
let navLinks = document.getElementById("navLinks");
let sifre = document.getElementById("sifre");
let adSoyad = document.querySelector(".link .adSoyad");
let isim = document.querySelector("#isimField .input");
let pageTitle = document.querySelector("title");

girisBtn.onclick = function () {
    isimField.style.maxHeight = "0";
    sifre.style.visibility = "visible";
    pageTitle.innerHTML = "Giriş Yap";
    kaydolBtn.classList.add("disable");
    girisBtn.classList.remove("disable");
    formBaslik.innerHTML = "Giriş Yap";
}
kaydolBtn.onclick = function () {
    isimField.style.maxHeight = "65px";
    sifre.style.visibility = "hidden";
    pageTitle.innerHTML = "Kaydol";
    girisBtn.classList.add("disable");
    kaydolBtn.classList.remove("disable");
    formBaslik.innerHTML = "Kaydol";
}

let formBox = document.querySelector(".form-box");
function uyelik() {
    formBox.style.display = "block";
    body.style.overflowY = "hidden";
    pageTitle.textContent = "Kaydol";
}

function formHide() {
    body.style.overflowY = "visible";
    formBox.style.display = "none";
    pageTitle.textContent = "E-commers";
}

//  Favoriler , Sepetim ve Details Gösterme / Gizleme

let favori = document.querySelector(".favori");
let sepet = document.querySelector(".sepet");
let sepetBitir = document.querySelector(".sepetBitir");
let imgSearchCard = document.querySelector(".imgSearchCard")

function favorilerShow() {
    favori.style.left = "0";
    sepet.style.right = "-1300px";
    favori.style.zIndex = "10";
}

function sepetimShow() {
    sepet.style.right = "0";
    sepetBitir.style.right = "0";
    favori.style.left = "-1300px";
    favori.style.zIndex = "-1";
    sepet.style.zIndex = "10";
    sepetBitir.style.zIndex = "10";
}

function imgSearchCardShow() {
    imgSearchCard.style.top = "80px";
}

let searchImg = document.getElementById("searchImg");
let inputFile = document.getElementById("inputFile");

inputFile.onchange = function () {
    const selectedFile = this.files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
        searchImg.src = event.target.result;
    };

    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
    }
};


function imgSearchCardHide() {
    imgSearchCard.style.top = "-450px";
}

function favorilerHide() {
    favori.style.left = "-1000px";
    favori.style.zIndex = "-1";
}

function sepetimHide() {
    sepet.style.right = "-1000px";
    sepetBitir.style.right = "-1000px";
    sepet.style.zIndex = "-1";
    sepetBitir.style.zIndex = "-1";
}

function detailsHide() {
    productDetails.style.left = "-2000px";
    productDetails.style.zIndex = "-1";
}

// MARKA İSİMLERİ
let markaİsim = [
    "",
    "Pull & Bear",
    "adidas",
    "Nike",
    "Puma",
    "Arzum",
    "Apple",
    "Samsung",
    "Xaomi",
    "Philips",
    "Defacto",
    "Protein Ocean"
];

// MARKA RESİMLERİ YERLEŞTİRME
let markalar = document.querySelector(".markalar");

for (let i = 1; i <= 11; i++) {
    let markaLink = document.createElement("a");
    let markaİmgDiv = document.createElement("div");
    markaİmgDiv.classList.add("skeletonİmg");
    let markaİmg = document.createElement("img");
    markaİmgDiv.append(markaİmg);
    markaİmg.src = `img/marka${i}.jpg`;
    let markaTitleDiv = document.createElement("div");
    let markaTitleDiv2 = document.createElement("div");
    markaTitleDiv.classList.add("skeleton-text", "skeleton");
    markaTitleDiv2.classList.add("skeleton-text", "skeleton");
    let markaTitle = document.createElement("span");
    let markaText = document.createTextNode(markaİsim[i]);

    markaTitle.append(markaText);

    markaTitleDiv.append(markaTitle);
    markaLink.append(markaİmgDiv, markaTitleDiv, markaTitleDiv2);
    markalar.append(markaLink);

    markaLink.onclick = function () {
        document.querySelector(".search > input").placeholder = markaTitle.textContent;
    }

    window.addEventListener("load", function () {
        setTimeout(function () {
            markaİmgDiv.classList.remove("skeletonİmg");
            markaTitleDiv.classList.remove("skeleton-text", "skeleton");
            markaTitleDiv2.classList.remove("skeleton-text", "skeleton");
        }, 1200);
    });
}

// Ürün İsimleri
const urunİsmi = [
    "",
    "Pull & Bear Yazılı Kadın T-shirt",
    "Pull & Bear Kadın Crop",
    "Pull & Bear Erkek İşlemeli T-shirt",
    "Pull & Bear Erkek Keten Pantolon",
    "Pull & Bear Kadın Paraşüt Pantolon",
    "Pull & Bear Kadın Pens Detaylı Klasik Pantolon",
    "Pull & Bear Mini Urban Çapraz Askılı Çanta",
    "Pull & Bear Kontrast Detaylı Çapraz Askılı Çanta",
    "Pull & Bear Yüksek Bel Denim Bermuda",
    "Pull & Bear Hakim Yaka Gömlek",
    "adidas Unisex Beyaz Breaknet Spor Ayakkabı",
    "adidas Futbol Krampon X Speedportal",
    "adidas Kadın Günlük Mont",
    "adidas Helionic",
    "adidas Kadın Bluv Q1 Bf T-shirt",
    "adidas Kadın Günlük T-shirt",
    "adidas Ht6933",
    "adidas Çok Renkli Kadın Sırt Çantası",
    "adidas Aeroready 3-stripes Siyah Beyzbol Şapkası",
    "adidas Bej Unisex Şapka",
    "Nike Revolution 6 Yürüyüş Ayakkabısı",
    "Nike Court Borough Low 2 (gs) Günlük Spor Ayakkabı",
    "Nike Sportswear Therma-fıt City Series Dolgulu Kadın Mont",
    "Nike Elmntl Bkpk",
    "Nike Sportswear Boxy Nature Short-sleeve Kadın T-shirt",
    "Nike Sportswear Swoosh Bol Kesimli Fleece Kadın Kapüşonlu Üstü",
    "Nike Essential Women's Pants 7/8 Kadın Koşu Yürüyüş Pantolunu",
    "Nike Pro Kadın Siyah Flex 2-in-1 Şort",
    "Nike Dc3292 410m Unisex Spor Güneş Gözlüğü",
    "Nike Nk Academy - Team Futbol Topu",
    "Puma Smash V2 Buck - Unisex Gri Günlük Ayakkabı",
    "Puma Essentials Kadın Eşofman Altı",
    "Puma AXIS Beyaz Erkek Koşu Ayakkabısı",
    "Puma Cool Cat Sandalet",
    "Puma Graphıc Kapüşonlu Kadın Koşu Ceket",
    "Puma Ess 3/4 Logo Leggings - Siyah 3/4 Kapri Boy Tayt",
    "Puma Classıcs Kadın Parlak Şişme Mont",
    "Puma Phase Cüzdan",
    "Puma Rapido Iıı Fg Ag-c - Siyah Krampon",
    "Puma Unisex Bot & Bootie - DESIERTO v2 PureTEX",
    "Arzum Ar5028 Lisa Xl 32 Mm Seramik Saç Maşası",
    "Arzum Ar2007 Sultane 1800 W Tost Makinesi",
    "Arzum Ar1140 Blanco 1500 W Mini Blender Set - Beyaz",
    "Arzum AR5068 Superstar Touch Saç Düzleştirici Fırça - Siyah",
    "Arzum Ar3129 Deminde Inox Çay Makinesi",
    "Arzum İmaj Saç Kurutma Makinesi",
    "Arzum Ar6021 Listo Buharlı Ütü Yeşil",
    "Arzum Ar2033 Waffy Max Waffle Makinesi",
    "Arzum Ar5500 Ducati By Race 16'sı 1 Arada Erkek Bakım Set",
    "Arzum Ar2062-b Airtasty Air Fryer Sıcak Hava Fritözü - Bakır",
    "Apple Macbook Air 13.6\" M2 8gb 256gb Ssd Gece Yarısı",
    "Apple iPhone 11 128 GB Beyaz Cep Telefonu Aksesuarsız Kutu",
    "Apple iPhone 13 128 GB Yıldız Işığı Cep Telefonu",
    "Apple Airpods 2. Nesil Beyaz Bluetooth Kulaklık",
    "Apple Watch Series 8 41mm GPS Yıldız Işığı",
    "Apple Studio Display Standart Cam Eğim Ayarlı Standlı Monitör",
    "Apple Iphone 14 Pro Uyumlu Max Için Magsafe Özellikli Şeffaf Kılıf",
    "Apple Multi Touch Yüzey Magic Mouse Siyah",
    "Apple Pencil 1. Nesil",
    "Apple Magsafe Battery Pack",
    "Samsung Galaxy A04e 128 GB Mavi Cep Telefonu",
    "Samsung Galaxy Watch5 40mm Silver",
    "Samsung Galaxy A54 5G 128 GB Siyah Cep Telefonu",
    "Samsung Galaxy Tab S6 Lite",
    "Samsung 970 EVO Plus 1TB",
    "Samsung 11 Kg 1400 Devir Siyah Çamaşır Makinesi",
    "Samsung Cr50 27\" 4 Ms 60 Hz Full Hd Curved Va Led Monitör",
    "Samsung Eb-u3300x 25w 10.000mah Powerbank",
    "Samsung VR5000RM İnce Tasarımlı Robot Süpürge",
    "Samsung Galaxy Z Fold 4 Standlı Kalemli Deri Kılıf",
    "Xiaomi Mi Wifi Pro Sinyal Güçlendirici 300Mbps",
    "Xiaomi Redmi Note 12 Pro 8gb/256gb Gr",
    "Xiaomi Redmi 10C 4 GB+128 GB Akıllı Cep Telefonu",
    "Xiaomi Mi Redmi Watch 2 Lite - Siyah",
    "Xiaomi Redmi Buds 3 Bluetooth Kulaklık Beyaz",
    "Xiaomi Mi Robot Vacuum - Mop 2 Beyaz",
    "Xiaomi Mi Pro 2 Elektrikli Scooter",
    "Xiaomi Enchen Sharp X Tıraş Makinesi",
    "Xiaomi Redmi Pad 6 GB Ram 128 GB Tablet",
    "Xiaomi Mi Vacuum Cleaner Light Handheld Dikey",
    "Philips Gc5037/80 Azur Elite Buharlı Ütü",
    "Philips MG3710/15 Multigroom 3000 Series 6 in 1 Erkek Bakım Kiti",
    "Philips Daily Collection Siyah Filtre Kahve Makinesi",
    "Philips Hd 3 Serisi Yeni Versiyon Çaycı",
    "Philips TAH4205BL Kablosuz Kulak Üstü Kulaklık",
    "Philips Tat1215bk True Wireless Kulak Içi Kulaklık",
    "Philips Bha301/00 Airstyler Argan Yağlı Seramik Saç Düzletiştirici",
    "Philips Viva Collection Promix Hr2653/90 800 W Blender Seti",
    "Philips Hr2291/41 3000 Series Blender",
    "Philips 23.8\" 144hz 1ms Hdmı+dp Freesync Fullhd Va Oyuncu Monitörü",
    "Defacto Slim Fit Polo Yaka Kısa Kollu Gömlek",
    "Defacto Regular Fit V Yaka Kısa Kollu Tişört",
    "Defacto Regular Beli Bağcıklı Geri Dönüşümlü Bermuda Şort",
    "Defacto Slim Fit Dar Paça Premium Şort",
    "Defacto Regular Fit Chino Pantolon",
    "Defacto Regular Fit Jean Mini Etek",
    "Defacto Regular Fit Dik Yaka Krinkıl Viskon Kısa Kollu Bluz",
    "Defacto Jogger Standart Fit Esnek Bantlı Paça Eşofman Altı",
    "Defacto Modern Fit Polo Yaka Uzun Kollu Gömlek"
];

// Profil

// Resmi seçmek için bir olay dinleyici ekleyin
let profilResim = document.querySelector(".profil img");
profilResim.addEventListener("click", function () {
    // Resim seçme ile ilgili işlemleri gerçekleştirin
    var fileInput = document.createElement("input");
    fileInput.type = "file";

    fileInput.addEventListener("change", function (event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
            // Seçilen resmi mevcut resimle değiştirin
            profilResim.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    });

    fileInput.click(); // Dosya seçme iletişim kutusunu açın
});



// İmage Slider
let carousel = document.querySelector(".carousel");
let carouselİnner = document.querySelector(".carousel-inner")

for (let i = 2; i <= 13; i++) {
    var carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    let carouselItemImg = document.createElement("img");
    carouselItemImg.classList.add("d-block", "w-100");
    carouselItemImg.src = `img/carousel${i}.jpg`;
    carouselItem.append(carouselItemImg);
    carouselİnner.append(carouselItem);
    carousel.append(carouselİnner);
}

// Product Page
let productDetails = document.querySelector(".product-details");
let badge = document.querySelectorAll(".badge");

for (let i = 1; i <= 100; i++) {

    let productContainer = document.querySelector(".product-container");

    let productBox = document.createElement("div");

    // PRODUCT BOX İÇİNDEKİ MENÜ

    let productUl = document.createElement("ul");
    productUl.classList.add("action");

    // 1. Lİ (FAVORİLERE EKLE)

    let productLiFav = document.createElement("li");
    productLiFav.addEventListener("click", favoriEkle);

    function favoriEklendi() {
        productLiFav.style.background = "#f68a83";
        productLiFav.style.color = "#fff";
        productFavText.textContent = "Favorilere Eklendi";

        productLiFav.addEventListener("mouseleave", function () {
            productLiFav.style.background = "#f68a83";
            productLiFav.style.color = "#fff";
        });
    }

    function favoriCikarildi() {
        productLiFav.style.background = "#fff";
        productLiFav.style.color = "#000";
        productFavText.textContent = "Favorilere Ekle";

        productLiFav.addEventListener("mouseenter", function () {
            productLiFav.style.background = "#f68a83";
            productLiFav.style.color = "#fff";
        });

        productLiFav.addEventListener("mouseleave", function () {
            productLiFav.style.background = "#fff";
            productLiFav.style.color = "#000";
        });
    }

    function favoriEkle() {

        badge[0].classList.remove("d-none");

        favoriEklendi();

        let favBos = document.querySelector(".favBos");
        favBos.style.display = "none";

        let favoriDetails = document.querySelector(".favori > .fav-icerik");

        let favCard = document.createElement("div");
        favCard.classList.add("favCard");

        let favCardLeft = document.createElement("div");
        favCardLeft.classList.add("left");
        let favCardLeftİmg = document.createElement("img");
        favCardLeftİmg.src = productİmg.src;

        favCardLeftİmg.onclick = function () {
            detayGor();
        }
        favCardLeft.append(favCardLeftİmg);

        let favCardRight = document.createElement("div");
        favCardRight.classList.add("right");
        let favCardRightTitle = document.createElement("h2");
        favCardRightTitle.textContent = urunİsmi[i];
        let favCardRightPrice = document.createElement("div");
        favCardRightPrice.classList.add("price");
        favCardRightPrice.textContent = "$" + priceTextDesign;
        let favCardRightButton = document.createElement("button");
        favCardRightButton.textContent = "Sepete Ekle";

        favCardRightButton.onclick = function () {
            sepetEkle();
            favCardRightButton.style.background = "#f68a83"
            favCardRightButton.style.color = "#fff";
            favCardRightButton.textContent = "Sepete Eklendi !";
            favCardRightButton.disabled = true;
        }

        favCardRight.append(favCardRightTitle, favCardRightPrice, favCardRightButton);

        let favDelete = document.createElement("i");
        favDelete.classList.add("fa-solid", "fa-trash");

        favCard.append(favCardLeft, favCardRight, favDelete);
        favoriDetails.append(favCard);

        favDelete.onclick = function () {
            favCard.remove();
            favDelete.style.cursor = "pointer";
            favoriCikarildi();
            badge[0].textContent = favoriDetails.querySelectorAll(".favCard").length;
            if (favoriDetails.querySelectorAll(".favCard").length === 0) {
                favBos.style.display = "block";
                badge[0].classList.add("d-none");
            }

            productLiFav.addEventListener("mouseenter", function () {
                productLiFav.style.background = "#f68a83";
                productLiFav.style.color = "#fff";
            });

            productLiFav.addEventListener("mouseleave", function () {
                productLiFav.style.background = "#fff";
                productLiFav.style.color = "#000";
            });
        }

        badge[0].textContent = favoriDetails.querySelectorAll(".favCard").length;
    }

    let productFavText = document.createElement("span");
    productFavText.textContent = "Favorilere Ekle";
    let productFav = document.createElement("i");
    productFav.classList.add("fa-solid", "fa-heart");
    productLiFav.append(productFav, productFavText);

    // 2. Lİ (SEPETE EKLE)

    let productLiShop = document.createElement("li");
    productLiShop.addEventListener("click", sepetEkle);

    function sepeteEklendi() {
        productLiShop.style.background = "#f68a83";
        productLiShop.style.color = "#fff";
        productShopText.textContent = "Sepete Eklendi";

        productLiShop.addEventListener("mouseleave", function () {
            productLiShop.style.background = "#f68a83";
            productLiShop.style.color = "#fff";
        });
    }

    function sepettenCikarildi() {
        productLiShop.style.background = "#fff";
        productLiShop.style.color = "#000";
        productShopText.textContent = "Sepete Ekle";

        productLiShop.addEventListener("mouseenter", function () {
            productLiShop.style.background = "#f68a83";
            productLiShop.style.color = "#fff";
        });

        productLiShop.addEventListener("mouseleave", function () {
            productLiShop.style.background = "#fff";
            productLiShop.style.color = "#000";
        });
    }


    function sepetEkle() {

        badge[1].classList.remove("d-none");

        sepeteEklendi();

        let sepetBos = document.querySelector(".sepetBos");
        sepetBos.style.display = "none";

        let sepetDetails = document.querySelector(".sepet-icerik");

        let sepetCard = document.createElement("div");
        sepetCard.classList.add("sepetCard");

        let sepetCardLeft = document.createElement("div");
        sepetCardLeft.classList.add("left");
        let sepetCardLeftİmg = document.createElement("img");
        sepetCardLeftİmg.src = productİmg.src;
        sepetCardLeft.append(sepetCardLeftİmg);

        let sepetCardRight = document.createElement("div");
        sepetCardRight.classList.add("right");
        let sepetCardRightTitle = document.createElement("h2");
        sepetCardRightTitle.textContent = urunİsmi[i];

        let sepetCardRightKargo = document.createElement("p");
        sepetCardRightKargo.textContent = "Tahmini Kargoya Teslim : 2 iş günü içinde";

        let kuponElem = document.createElement("span");
        kuponElem.innerHTML = "Kuponu kullan <b>($20)</b>"
        kuponElem.classList.add("kupon");
        let kuponCheck = document.createElement("input");
        kuponCheck.type = "checkbox";
        kuponElem.append(kuponCheck);
        kuponElem.style.display = "none";

        wheelBtn.addEventListener("click", () => {
            kuponElem.style.display = "block";
        })

        let urunFiyat = parseInt(priceTextDesign);

        kuponCheck.addEventListener("change", function () {
            if (this.checked) {
                kuponKullan();
            }
        });
        var indirim = 20;

        function kuponKullan() {
            if (urunFiyat > indirim) {
                urunFiyat -= indirim;
                sepetCardRightPriceDesign.textContent = `$${urunFiyat.toFixed(2)}`;

                sepetCardRightPrice.style.fontSize = "20px";
                sepetCardRightPrice.style.textDecoration = "line-through";
                sepetCardRightPrice.style.marginLeft = "15px";
            }
            else {
                alert("İndirim kuponu kullanılamıyor. Fiyat zaten kupon değerinden düşük.");
                kuponCheck.checked = false;
            }
        }


        sepetCardRight.append(sepetCardRightTitle, sepetCardRightKargo, kuponElem);

        let sepetAdet = document.createElement("div");
        sepetAdet.classList.add("sepetAdet");
        let sepetAdetSpanArttır = document.createElement("span");
        sepetAdetSpanArttır.textContent = "+";


        var adet = 1;
        let sepetAdetSpan = document.createElement("span");
        sepetAdetSpan.textContent = "1";

        let sepetToplam = document.querySelector(".toplam");
        let fiyat = priceText;
        let toplamFiyat = adet * fiyat;

        sepetAdetSpanArttır.onclick = function () {
            adet += 1;
            sepetAdetSpan.textContent = adet;
            toplamFiyat = adet * fiyat;
            sepetCardRightPrice.textContent = `$${toplamFiyat.toFixed(2)}`;
            sepetToplam.textContent = `$${getSepetToplam()}`;
        };

        let sepetAdetSpanAzalt = document.createElement("span");
        sepetAdetSpanAzalt.textContent = "-";

        sepetAdetSpanAzalt.onclick = function () {
            if (adet > 1) {
                adet -= 1;
                sepetAdetSpan.textContent = adet;
                toplamFiyat = adet * fiyat;
                sepetCardRightPrice.textContent = `$${toplamFiyat.toFixed(2)}`;
                sepetToplam.textContent = `$${getSepetToplam()}`;
            }
        };


        sepetAdet.append(sepetAdetSpanArttır, sepetAdetSpan, sepetAdetSpanAzalt);

        let sepetCardRightPrice = document.createElement("div");
        sepetCardRightPrice.classList.add("price");
        let sepetCardRightPriceDesign = document.createElement("div");
        sepetCardRightPriceDesign.classList.add("price");

        sepetCardRightPrice.textContent = `$${toplamFiyat.toFixed(2)}`;
        sepetCardRight.append(sepetAdet, sepetCardRightPrice, sepetCardRightPriceDesign);

        let shopDelete = document.createElement("i");
        shopDelete.style.cursor = "pointer";
        shopDelete.classList.add("fa-solid", "fa-trash");

        shopDelete.onclick = function () {
            sepetCard.remove();
            sepettenCikarildi();
            sepetToplam.textContent = `$${getSepetToplam()}`;
            badge[1].textContent = sepetDetails.querySelectorAll(".sepetCard").length;
            if (sepetDetails.querySelectorAll(".sepetCard").length === 0) {
                sepetBos.style.display = "block";
                badge[1].classList.add("d-none");
            }
            productLiShop.addEventListener("mouseenter", function () {
                productLiShop.style.background = "#f68a83";
                productLiShop.style.color = "#fff";
            });

            productLiShop.addEventListener("mouseleave", function () {
                productLiShop.style.background = "#fff";
                productLiShop.style.color = "#000";
            });

        };
        badge[1].textContent = sepetDetails.querySelectorAll(".sepetCard").length + 1;

        sepetCard.append(sepetCardLeft, sepetCardRight, shopDelete);
        sepetDetails.append(sepetCard);

        sepetToplam.textContent = `$${getSepetToplam()}`;

        let sepetIcerik = [];
        let sepetOnayla = document.querySelector(".sepetBitir a");
        sepetOnayla.addEventListener("click", () => {

            sepetIcerik.push(sepetCard);

            // Önceki sepet klonlarını local storage'dan al
            let eskiKlonlar = JSON.parse(localStorage.getItem("klonlar")) || [];

            // Yeni klonları ve önceki klonları birleştir
            let birlesikKlonlar = [...eskiKlonlar, ...sepetIcerik.map(e => e.cloneNode(true).outerHTML)];

            // Birleştirilmiş klonları Local Storage'a kaydet
            localStorage.setItem("klonlar", JSON.stringify(birlesikKlonlar));

            localStorage.setItem("toplam", JSON.stringify(`$${getSepetToplam()}`))
        });
    }

    function getSepetToplam() {
        let toplamFiyat = 0;
        let sepetCards = document.querySelectorAll(".sepetCard");
        sepetCards.forEach((sepetCard) => {
            let priceElement = sepetCard.querySelector(".price");
            let priceText = priceElement.textContent;
            let price = parseFloat(priceText.replace("$", ""));
            toplamFiyat += price;
        });
        return toplamFiyat.toFixed(2);
    }

    let productShopText = document.createElement("span");
    productShopText.textContent = "Sepete Ekle";
    let productShop = document.createElement("i");
    productShop.classList.add("fa-solid", "fa-cart-shopping");
    productLiShop.append(productShop, productShopText);

    // 3. Lİ (DETAYLARI GÖR)
    let productLiEye = document.createElement("li");
    productLiEye.addEventListener("click", detayGor);

    function detayGor() {

        let btnGroupsEkleBtn = document.querySelector(".add-cart-btn");
        btnGroupsEkleBtn.addEventListener("click", sepetEkle);

        productDetails.style.left = "0";
        productDetails.style.zIndex = "16";

        let detailsİmg = document.querySelectorAll(".detailsİmg");
        detailsİmg.forEach(element => {
            element.src = productİmg.src;
        });
        let slider1 = document.querySelector(".slider1");
        slider1.src = `img/slider${i}.webp`;
        let slider2 = document.querySelector(".slider2");
        slider2.src = `img/slider2_${i}.webp`;
        let productName = document.querySelector(".product-name");
        productName.textContent = urunİsmi[i];
        let productDprice = document.querySelector(".product-price");
        productDprice.textContent = "$" + priceTextDesign;
    }


    let productEyeText = document.createElement("span");
    productEyeText.textContent = "Detayları Gör";
    let productEye = document.createElement("i");
    productEye.classList.add("fa-solid", "fa-eye");
    productLiEye.append(productEye, productEyeText);

    productUl.append(productLiFav, productLiShop, productLiEye);

    // Tüm hover görüntülerini seçme
    const allHoverImages = document.querySelectorAll('.hover-container div img');

    // Resim konteynerini seçme
    const imgContainer = document.querySelector('.img-container');

    // Sayfa yüklendiğinde
    window.addEventListener('DOMContentLoaded', () => {
        // İlk hover resminin üst öğesine 'active' sınıfını ekleme
        allHoverImages[0].parentElement.classList.add('active');
    });

    // Her bir hover resmi için
    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            // Resim konteynerinin içindeki resmin src'sini değiştirme
            imgContainer.querySelector('img').src = image.src;

            // Aktif resmi sıfırlama
            resetActiveImg();

            // Seçilen resmin üst öğesine 'active' sınıfını ekleme
            image.parentElement.classList.add('active');
        });
    });

    // Aktif resmi sıfırlama fonksiyonu
    function resetActiveImg() {
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }
    // -----------------------------------------------------------

    // PRODUCT BOX İÇERİĞİNİ OLUŞTURMA

    let productİmgDiv = document.createElement("div");
    productİmgDiv.classList.add("skeleton");

    let productİmg = document.createElement("img");
    productİmgDiv.append(productİmg);

    productİmg.src = `img/product${i}.webp`;

    let productTitleDiv = document.createElement("div");
    let productTitle = document.createElement("h3");
    productTitle.textContent = urunİsmi[i];
    productTitleDiv.classList.add("skeleton", "skeleton-text");
    productTitleDiv.append(productTitle);

    let priceText = (Math.random() * 50 + 15).toFixed(2);
    let priceTextDesign = priceText;
    let remaining = 5; // 5 saniye sayaç başlangıç değeri

    function generateRandomPrice() {
        priceText = (Math.random() * 50 + 15).toFixed(2);
        priceTextDesign = priceText;
        fiyat = priceText;
        productPrice.textContent = "$" + priceTextDesign;
        // Yeni bir rastgele fiyat oluşturmak için 5 saniye sonra generateRandomPrice fonksiyonunu tekrar çağırma
        setTimeout(generateRandomPrice, 5000);
    }

    // Sayfa yüklendiğinde ve her 5 saniyede bir rastgele fiyat oluşturmak için generateRandomPrice fonksiyonunu çağırma
    window.addEventListener("load", generateRandomPrice);

    function updateremaining() {
        const remainingElement = document.getElementById("remainingTime");
        remainingElement.innerHTML = `Fiyatların Güncellenmesine Kalan Süre : &nbsp; <b>${remaining}</b>`; // Sayaç değerini güncelleme

        if (remaining > 1) {
            remaining--; // Sayaç değerini azaltma
        } else {
            remaining = 5; // Sayaç 0 olduğunda tekrar başa dönme
        }

        setTimeout(updateremaining, 1000); // 1 saniye sonra updateremaining fonksiyonunu tekrar çağırma
    }

    // Sayfa yüklendiğinde ve her 5 saniyede bir sayaç güncellemesi için updateremaining fonksiyonunu çağırma
    window.addEventListener("load", updateremaining);

    let productPrice = document.createElement("div");
    productPrice.classList.add("price", "skeleton", "skeleton-text");

    productBox.classList.add("product");

    // İlk üç ürünü seçin

    var products = productContainer.querySelectorAll(".product");
    var firstFourProducts = Array.from(products).slice(0, 4);

    // Her üç öğeyi bir grupta ele alarak sütun sınıfını ekleyin

    for (let i = 1; i < products.length; i++) {
        if (i % 3 === 0) {
            products[i].classList.add("reveal2");
        } else if (i % 3 === 1) {
            products[i].classList.add("reveal");
        } else {
            products[i].classList.add("reveal3");
        }
    }

    // Seçili ürünlerin classlarını değiştirin

    firstFourProducts.forEach(function (product) {
        product.classList.remove("reveal", "reveal2", "reveal3");
    });

    productİmg.onclick = function () {
        detayGor();
    }

    // ELEMANLARI PRODUCT BOX'A EKLEME

    productPrice.append(priceTextDesign);
    productBox.append(productİmgDiv, productTitleDiv, productUl, productPrice);
    productContainer.append(productBox);

    window.addEventListener("load", function () {
        setTimeout(function () {
            productİmgDiv.classList.remove("skeleton");
            productTitleDiv.classList.remove("skeleton", "skeleton-text");
            productPrice.classList.remove("skeleton", "skeleton-text");
        }, 1200);
        document.querySelector("footer").style.display = "block";
    });
}

// Progress Bar
const progressBar = document.querySelector("#progressBar");
let body = document.querySelector("body");

const animateProgressBar = () => {
    let kaydirmaMesafesi = -body.getBoundingClientRect().top;
    let progressWidth = (kaydirmaMesafesi / body.getBoundingClientRect().height) * 11;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";

    if (value < 0) {
        progressBar.style.width = "0%";
    }
};
window.addEventListener("scroll", animateProgressBar);

// Scroll Animation
window.addEventListener("scroll", reveal);

function reveal() {
    var reveal1 = document.querySelectorAll(".reveal");
    var reveal2 = document.querySelectorAll(".reveal2");
    var reveal3 = document.querySelectorAll(".reveal3");

    for (var i = 0; i < reveal1.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal1[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal1[i].classList.add("active");
        }
        else {
            reveal1[i].classList.remove("active");
        }
    }

    for (var i = 0; i < reveal2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal2[i].classList.add("active2");
        }
        else {
            reveal2[i].classList.remove("active2");
        }
    }

    for (var i = 0; i < reveal3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal3[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal3[i].classList.add("active3");
        }
        else {
            reveal3[i].classList.remove("active3");
        }
    }
}
