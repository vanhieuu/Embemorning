const demoConfig = {
  projectTitle: "EmbeMorning Demo",
  recipientName: "My Princess",
  birthdayDate: "2026-06-27",
  heroKicker: "EmbeMorning Demo | bản rút gọn",
  heroLead:
    "Tao cắt trang này xuống còn phần đẹp nhất để làm bản demo: ít section hơn, gọn hơn, nhưng vẫn giữ đúng vibe.",
  heroNote:
    "Bản này chỉ giữ ảnh, bảng lời chúc đầu và một section nội dung nữa để người xem nhìn phát là hiểu hướng thiết kế của cả site.",
  heroChips: ["gallery ảnh", "lời chúc mở đầu", "layout demo tối giản"],
  heroCardCopy:
    "Không còn countdown, quà mở hay 3D. Đây là phiên bản nhẹ để showcase giao diện và tone nội dung.",
  dateNote: "Ngày gốc của trang vẫn là 27/06.",
  storyIntro:
    "Nếu chỉ cần một bản xem nhanh, thế này là đủ: có mở đầu, có lời chúc, có ảnh và có thêm một section nữa để giữ nhịp trang.",
  photoLead:
    "Gallery này đang dùng khung đồng nhất, nên sau này có thêm 5-6 ảnh thì chỉ cần thêm vào data là vẫn lên đều và không bị lệch bố cục.",
  wishes: [
    {
      title: "Một ngày thật vui",
      text: "Ít nhất tới sinh nhật thì mọi thứ nên đi theo hướng khiến mày thấy dễ chịu hơn bình thường."
    },
    {
      title: "Ít chuyện linh tinh",
      text: "Bớt mấy thứ làm tụt mood để còn dành thời gian cho điều đáng vui."
    },
    {
      title: "May mắn đúng lúc",
      text: "Đúng lúc cần thì có cơ hội, đúng lúc cố thì có kết quả, vậy là đẹp."
    }
  ],
  moments: [
    {
      title: "Vibe nhẹ nhưng không nhạt",
      text: "Section này giữ cho bản demo không bị quá cụt, nhưng vẫn đủ gọn để nhìn tổng thể nhanh."
    },
    {
      title: "Ảnh là điểm nhấn chính",
      text: "Chỉ cần ảnh đẹp và layout đúng là bản demo đã có trọng tâm rõ ràng."
    },
    {
      title: "Dễ mở rộng về sau",
      text: "Muốn thêm ảnh hay thêm copy cũng không phải sửa lại cấu trúc lớn."
    }
  ],
  photos: [
    {
      src: "./assets/photos/portrait.jpg",
      alt: "Chân dung trong tà áo dài xanh nhạt",
      caption: "Khung ảnh đầu tiên"
    },
    {
      src: "./assets/photos/closeup.jpg",
      alt: "Ảnh cận mặt",
      caption: "Khung ảnh thứ hai"
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
  heroCardCopy: document.getElementById("heroCardCopy"),
  storyIntro: document.getElementById("storyIntro"),
  photoLead: document.getElementById("photoLead"),
  photoGallery: document.getElementById("photoGallery"),
  wishList: document.getElementById("wishList"),
  momentsGrid: document.getElementById("momentsGrid"),
  sparkles: document.getElementById("sparkles")
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
  const birthdayLabel = formatBirthdayDate(demoConfig.birthdayDate);
  const metaDescription = document.querySelector('meta[name="description"]');

  document.title = `${demoConfig.projectTitle} | ${birthdayLabel}`;

  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `${demoConfig.projectTitle} - phiên bản rút gọn của trang sinh nhật ngày ${birthdayLabel}.`
    );
  }

  elementMap.heroTitle.textContent = `Chúc mừng sinh nhật, ${demoConfig.recipientName}`;
  elementMap.heroKicker.textContent = demoConfig.heroKicker;
  elementMap.heroLead.textContent = demoConfig.heroLead;
  elementMap.heroNote.textContent = demoConfig.heroNote;
  elementMap.heroDateValue.textContent = birthdayLabel;
  elementMap.heroDateNote.textContent = demoConfig.dateNote;
  elementMap.heroCardCopy.textContent = demoConfig.heroCardCopy;
  elementMap.storyIntro.textContent = demoConfig.storyIntro;
  elementMap.photoLead.textContent = demoConfig.photoLead;

  elementMap.heroChips.replaceChildren();
  elementMap.photoGallery.replaceChildren();
  elementMap.wishList.replaceChildren();
  elementMap.momentsGrid.replaceChildren();

  demoConfig.heroChips.forEach((chip) => {
    const item = document.createElement("span");
    item.className = "hero-chip";
    item.textContent = chip;
    elementMap.heroChips.appendChild(item);
  });

  demoConfig.wishes.forEach((wish) => {
    const item = document.createElement("article");
    item.className = "wish-item";
    item.innerHTML = `<strong>${wish.title}</strong><span>${wish.text}</span>`;
    elementMap.wishList.appendChild(item);
  });

  demoConfig.photos.forEach((photo) => {
    const item = document.createElement("figure");
    item.className = "photo-card";
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <figcaption>${photo.caption}</figcaption>
    `;
    elementMap.photoGallery.appendChild(item);
  });

  demoConfig.moments.forEach((moment) => {
    const item = document.createElement("article");
    item.className = "moment-card";
    item.innerHTML = `<h3>${moment.title}</h3><p>${moment.text}</p>`;
    elementMap.momentsGrid.appendChild(item);
  });
}

function createSparkles() {
  const sparkleCount = 14;

  elementMap.sparkles.replaceChildren();

  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${10 + Math.random() * 10}s`;
    sparkle.style.animationDelay = `${Math.random() * 6}s`;
    sparkle.style.opacity = (0.25 + Math.random() * 0.55).toFixed(2);
    elementMap.sparkles.appendChild(sparkle);
  }
}

populateContent();
createSparkles();
