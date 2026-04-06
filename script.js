const birthdayConfig = {
  recipientName: "My Princess",
  fromName: "Hiếu",
  birthdayDate: "2026-06-27",
  heroKicker: "27/06 | Một góc nhỏ cho m",
  heroLead:
    "Ngày 27/06 nên được bắt đầu bằng một điều gì đó dịu dàng, nên mình làm chiếc web này để mọi lời chúc có chỗ ở lại thật lâu.",
  heroNote:
    "Không màu mè gì lắm. Chỉ là tao nhớ sinh nhật mày, nên ngồi gõ mấy dòng này với vài trò linh tinh để mày mở ra thấy vui.",
  heroChips: ["đếm ngược tới 27/06", "mở thư tao viết", "xoay bó hoa ánh sáng"],
  dateNote: "Tới đúng ngày này thì nhớ vui vẻ tử tế hộ tao.",
  storyIntro:
    "Sinh nhật thì không cần làm quá. Chỉ cần hôm đó mày ăn ngon, ngủ kỹ, bớt cáu và thấy đời ổn hơn bình thường một chút là được.",
  finalTitle:
    "Chúc mày tuổi mới bớt mệt và gặp nhiều cái hay ho hơn, xinh đẹp hơn nữa",
  finalCopy:
    "Mong mày làm gì cũng ra kết quả, thích gì thì có cơ hội làm, ghét gì thì bớt phải đụng. Lúc cần nghỉ thì nghỉ, lúc cần lì thì cứ lì. Nói chung là chúc mày năm nay ổn áp hơn năm ngoái.",
  wishes: [
    {
      title: "Ăn ngon ngủ kỹ",
      text: "Ít nhất sinh nhật phải được một ngày đầu óc nhẹ và bụng không bị bỏ đói.",
    },
    {
      title: "Ít drama thôi",
      text: "Bớt mấy chuyện linh tinh làm tụt mood, để mày còn tập trung sống cho vui.",
    },
    {
      title: "May mắn đúng lúc",
      text: "Đúng lúc cần thì có người giúp, đúng lúc cố thì có kết quả, vậy là đẹp.",
    },
  ],
  moments: [
    {
      title: "Mày vui là không khí khác hẳn",
      text: "Lúc mày cười thoải mái thì mọi thứ xung quanh tự nhiên cũng đỡ nhạt hơn hẳn.",
    },
    {
      title: "Bản thân vẫn quan trọng nhất",
      text: "Không cần phải để ý tới cảm xúc của người khác, t chỉ mong mày luôn vui vẻ, hạnh phúc là được rồi, Mỗ Linh number 01",
    },
    {
      title: "Có chất riêng thật",
      text: "Mày không cần cố giống ai cả, vì kiểu của mày tự nó đã đủ nhớ lâu rồi.",
    },
  ],
  gifts: [
    {
      icon: "01",
      title: "Quà số một",
      hint: "Mở ra đi, câu này ngắn thôi.",
      secret: "Chúc mày sinh nhật vui, đỡ suy, và gặp toàn chuyện tử tế.",
    },
    {
      icon: "02",
      title: "Quà số hai",
      hint: "Cái này để dành lúc mày hơi tụt mood.",
      secret:
        "Nếu mệt quá thì nghỉ. Không ai chấm điểm mày vì nghỉ một hôm cả.",
    },
    {
      icon: "03",
      title: "Quà số ba",
      hint: "Dành cho mấy kế hoạch mày chưa nói hết ra.",
      secret:
        "Mong mấy thứ mày đang cố sẽ sớm ra hình ra dạng, đỡ bị đời quay như chong chóng.",
    },
    {
      icon: "04",
      title: "Quà cuối",
      hint: "Coi như một cái vỗ vai online.",
      secret:
        "Tao không đứng trước mặt để chúc được thì dùng cái web này bù vào vậy.",
    },
  ],
  letterTitle: "Mấy dòng tao viết cho mày ngày 27/06",
  letterBody: [
    "Tới sinh nhật mày rồi thì tao không muốn chỉ quăng mỗi câu chúc trên tin nhắn, nên mới ngồi làm luôn cái này.",
    "Tao chúc mày năm nay đỡ mệt hơn, bớt gặp chuyện xàm hơn, và mấy cái mày đang cố thì sớm có kết quả tử tế.",
    "Nếu mở cái web này ra mà mày cười được một cái thì coi như tao làm đúng việc rồi. Sinh nhật vui vẻ nhé.",
  ],
  photos: [
    {
      src: "./assets/photos/portrait.jpg",
      alt: "Chân dung trong tà áo dài xanh nhạt",
      caption: "Tấm này nhìn rất êm."
    },
    {
      src: "./assets/photos/closeup.jpg",
      alt: "Ảnh cận mặt",
      caption: "Tấm này thì sát thương cao."
    }
  ]
};

const elementMap = {
  heroTitle: document.getElementById("heroTitle"),
  heroKicker: document.getElementById("heroKicker"),
  heroLead: document.getElementById("heroLead"),
  heroNote: document.getElementById("heroNote"),
  heroChips: document.getElementById("heroChips"),
  heroDateValue: document.getElementById("heroDateValue"),
  heroDateNote: document.getElementById("heroDateNote"),
  storyIntro: document.getElementById("storyIntro"),
  photoGallery: document.getElementById("photoGallery"),
  wishList: document.getElementById("wishList"),
  momentsGrid: document.getElementById("momentsGrid"),
  giftGrid: document.getElementById("giftGrid"),
  finalTitle: document.getElementById("finalTitle"),
  finalCopy: document.getElementById("finalCopy"),
  letterTitle: document.getElementById("letterTitle"),
  letterBody: document.getElementById("letterBody"),
  letterSignature: document.getElementById("letterSignature"),
  countdownMessage: document.getElementById("countdownMessage"),
  daysValue: document.getElementById("daysValue"),
  hoursValue: document.getElementById("hoursValue"),
  minutesValue: document.getElementById("minutesValue"),
  secondsValue: document.getElementById("secondsValue"),
  letterModal: document.getElementById("letterModal"),
  openLetterBtn: document.getElementById("openLetterBtn"),
  closeLetterBtn: document.getElementById("closeLetterBtn"),
  sparkles: document.getElementById("sparkles"),
  surpriseOverlay: document.getElementById("surpriseOverlay"),
  flowerBurst: document.getElementById("flowerBurst"),
  surpriseTitle: document.getElementById("surpriseTitle"),
  surpriseMessage: document.getElementById("surpriseMessage"),
  closeSurpriseBtn: document.getElementById("closeSurpriseBtn"),
};

function parseBirthdayDate(dateString) {
  const parsed = new Date(`${dateString}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatBirthdayDate(dateString) {
  const parsed = parseBirthdayDate(dateString);

  if (!parsed) {
    return "";
  }

  return `${String(parsed.getDate()).padStart(2, "0")}/${String(parsed.getMonth() + 1).padStart(2, "0")}`;
}

function populateContent() {
  const birthdayLabel = formatBirthdayDate(birthdayConfig.birthdayDate);
  const metaDescription = document.querySelector('meta[name="description"]');

  document.title = `${birthdayLabel} | Chúc mừng sinh nhật, ${birthdayConfig.recipientName}`;

  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `Microsite chúc mừng sinh nhật dành cho ${birthdayConfig.recipientName} vào ngày ${birthdayLabel}.`,
    );
  }

  elementMap.heroTitle.textContent = `Chúc mừng sinh nhật, ${birthdayConfig.recipientName}`;
  elementMap.heroKicker.textContent = birthdayConfig.heroKicker;
  elementMap.heroLead.textContent = birthdayConfig.heroLead;
  elementMap.heroNote.textContent = birthdayConfig.heroNote;
  elementMap.heroDateValue.textContent = birthdayLabel;
  elementMap.heroDateNote.textContent = birthdayConfig.dateNote;
  elementMap.storyIntro.textContent = birthdayConfig.storyIntro;
  elementMap.finalTitle.textContent = birthdayConfig.finalTitle;
  elementMap.finalCopy.textContent = birthdayConfig.finalCopy;
  elementMap.letterTitle.textContent = birthdayConfig.letterTitle;
  elementMap.letterSignature.textContent = `Tao đây, ${birthdayConfig.fromName}`;

  elementMap.heroChips.replaceChildren();
  elementMap.photoGallery.replaceChildren();
  elementMap.wishList.replaceChildren();
  elementMap.momentsGrid.replaceChildren();
  elementMap.giftGrid.replaceChildren();
  elementMap.letterBody.replaceChildren();

  birthdayConfig.heroChips.forEach((chip) => {
    const item = document.createElement("span");
    item.className = "hero-chip";
    item.textContent = chip;
    elementMap.heroChips.appendChild(item);
  });

  birthdayConfig.letterBody.forEach((paragraph) => {
    const textNode = document.createElement("p");
    textNode.textContent = paragraph;
    elementMap.letterBody.appendChild(textNode);
  });

  birthdayConfig.photos.forEach((photo) => {
    const item = document.createElement("figure");
    item.className = "photo-card";
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <figcaption>${photo.caption}</figcaption>
    `;
    elementMap.photoGallery.appendChild(item);
  });

  birthdayConfig.wishes.forEach((wish) => {
    const item = document.createElement("article");
    item.className = "wish-item";
    item.innerHTML = `<strong>${wish.title}</strong><span>${wish.text}</span>`;
    elementMap.wishList.appendChild(item);
  });

  birthdayConfig.moments.forEach((moment) => {
    const item = document.createElement("article");
    item.className = "moment-card";
    item.innerHTML = `<h3>${moment.title}</h3><p>${moment.text}</p>`;
    elementMap.momentsGrid.appendChild(item);
  });

  birthdayConfig.gifts.forEach((gift, index) => {
    const item = document.createElement("article");
    item.className = "gift-card";
    item.innerHTML = `
      <div class="gift-copy">
        <span class="gift-badge">${gift.icon}</span>
        <div>
          <h3>${gift.title}</h3>
          <p class="gift-hint">${gift.hint}</p>
          <p class="gift-secret">${gift.secret}</p>
        </div>
      </div>
      <button class="gift-toggle" type="button" data-index="${index}">Mở quà</button>
    `;
    elementMap.giftGrid.appendChild(item);
  });
}

function createFlowerBurst() {
  const flowers = ["🌸", "🌷", "🌹", "🌺", "💐", "🌼", "🪻"];

  elementMap.flowerBurst.replaceChildren();

  for (let index = 0; index < 18; index += 1) {
    const flower = document.createElement("span");
    flower.className = "burst-flower";
    flower.textContent = flowers[index % flowers.length];
    flower.style.left = `${8 + Math.random() * 84}%`;
    flower.style.top = `${10 + Math.random() * 60}%`;
    flower.style.animationDelay = `${Math.random() * 180}ms`;
    flower.style.setProperty("--drift-x", `${-80 + Math.random() * 160}px`);
    flower.style.setProperty("--drift-y", `${-40 - Math.random() * 140}px`);
    flower.style.setProperty("--spin", `${-25 + Math.random() * 50}deg`);
    elementMap.flowerBurst.appendChild(flower);
  }
}

function showSurpriseCard(gift) {
  createFlowerBurst();
  elementMap.surpriseTitle.textContent = gift.title;
  elementMap.surpriseMessage.textContent = gift.secret;
  elementMap.surpriseOverlay.classList.add("is-visible");
  elementMap.surpriseOverlay.setAttribute("aria-hidden", "false");
}

function hideSurpriseCard() {
  elementMap.surpriseOverlay.classList.remove("is-visible");
  elementMap.surpriseOverlay.setAttribute("aria-hidden", "true");
}

function getNextBirthday(dateString) {
  const parsed = parseBirthdayDate(dateString);

  if (!parsed) {
    return null;
  }

  const now = new Date();
  const upcoming = new Date(
    now.getFullYear(),
    parsed.getMonth(),
    parsed.getDate(),
    0,
    0,
    0,
  );

  if (upcoming.getTime() < now.getTime()) {
    upcoming.setFullYear(upcoming.getFullYear() + 1);
  }

  return upcoming;
}

function updateCountdown() {
  const upcomingBirthday = getNextBirthday(birthdayConfig.birthdayDate);
  const parsed = parseBirthdayDate(birthdayConfig.birthdayDate);
  const birthdayLabel = formatBirthdayDate(birthdayConfig.birthdayDate);
  const now = new Date();

  if (!upcomingBirthday || !parsed) {
    elementMap.countdownMessage.textContent =
      "Chỉ cần cập nhật birthdayDate trong script.js là đồng hồ sẽ chạy đúng.";
    return;
  }

  const isBirthdayToday =
    now.getMonth() === parsed.getMonth() && now.getDate() === parsed.getDate();
  const diff = isBirthdayToday ? 0 : upcomingBirthday.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  elementMap.daysValue.textContent = String(days).padStart(2, "0");
  elementMap.hoursValue.textContent = String(hours).padStart(2, "0");
  elementMap.minutesValue.textContent = String(minutes).padStart(2, "0");
  elementMap.secondsValue.textContent = String(seconds).padStart(2, "0");

  if (totalSeconds === 0) {
    elementMap.countdownMessage.textContent = `Hôm nay là ${birthdayLabel}, tới ngày của mày rồi. Vui lên cho đàng hoàng nhé.`;
    return;
  }

  if (days === 0) {
    elementMap.countdownMessage.textContent = `Chỉ còn một chút nữa là tới ${birthdayLabel}. Tao chuẩn bị lời chúc sẵn hết rồi.`;
    return;
  }

  elementMap.countdownMessage.textContent = `Đồng hồ đang đếm tới ${birthdayLabel}. Ráng chờ thêm chút là tới ngày của mày.`;
}

function createSparkles() {
  const sparkleCount = 16;

  elementMap.sparkles.replaceChildren();

  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${10 + Math.random() * 10}s`;
    sparkle.style.animationDelay = `${Math.random() * 6}s`;
    sparkle.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
    elementMap.sparkles.appendChild(sparkle);
  }
}

function bindEvents() {
  elementMap.openLetterBtn.addEventListener("click", () => {
    elementMap.letterModal.classList.add("is-visible");
    elementMap.letterModal.setAttribute("aria-hidden", "false");
  });

  elementMap.closeLetterBtn.addEventListener("click", () => {
    elementMap.letterModal.classList.remove("is-visible");
    elementMap.letterModal.setAttribute("aria-hidden", "true");
  });

  elementMap.letterModal.addEventListener("click", (event) => {
    if (event.target === elementMap.letterModal) {
      elementMap.letterModal.classList.remove("is-visible");
      elementMap.letterModal.setAttribute("aria-hidden", "true");
    }
  });

  elementMap.closeSurpriseBtn.addEventListener("click", hideSurpriseCard);

  elementMap.surpriseOverlay.addEventListener("click", (event) => {
    if (event.target === elementMap.surpriseOverlay) {
      hideSurpriseCard();
    }
  });

  elementMap.giftGrid.addEventListener("click", (event) => {
    const toggle = event.target.closest(".gift-toggle");

    if (!toggle) {
      return;
    }

    const card = toggle.closest(".gift-card");
    const giftIndex = Number(toggle.dataset.index);
    const isOpen = card.classList.toggle("is-open");
    toggle.textContent = isOpen ? "Gấp lại" : "Mở quà";

    if (isOpen) {
      showSurpriseCard(birthdayConfig.gifts[giftIndex]);
    }
  });
}

populateContent();
createSparkles();
bindEvents();
updateCountdown();
setInterval(updateCountdown, 1000);
