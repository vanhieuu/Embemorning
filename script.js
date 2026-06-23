const birthdayConfig = {
  recipientName: "My Princess",
  fromName: "Hiếu",
  birthdayDate: "2026-06-27",
  heroKicker: "27/06 | Một góc nhỏ cho m",
  heroLead:
    "Ngày 27/06 nên được bắt đầu bằng một điều gì đó dịu dàng, nên mình làm chiếc web này để mọi lời chúc có chỗ ở lại thật lâu.",
  heroNote:
    "Không màu mè gì lắm. Chỉ là tao nhớ sinh nhật mày, nên ngồi gõ mấy dòng này với vài trò linh tinh để mày mở ra thấy vui.",
  heroChips: ["đếm ngược tới 27/06", "mở thư tao viết", "xoay bông hoa ánh sáng"],
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
  fireworksCanvas: document.getElementById("fireworksCanvas"),
  replayFireworksBtn: document.getElementById("replayFireworksBtn"),
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

function initFireworks() {
  const canvas = elementMap.fireworksCanvas;
  const replayButton = elementMap.replayFireworksBtn;

  if (!canvas || !replayButton) {
    return;
  }

  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const particles = [];
  const shells = [];
  const rings = [];
  let width = 0;
  let height = 0;
  let deviceScale = 1;
  let nextLaunchAt = 0;
  let launchCount = 0;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    deviceScale = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * deviceScale);
    canvas.height = Math.round(height * deviceScale);
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
  }

  function addRing(x, y, color) {
    rings.push({
      x,
      y,
      radius: 6,
      growth: 2.8 + Math.random() * 1.4,
      life: 1,
      decay: 0.022,
      color
    });
  }

  function launchBurst(x, y, spread = 1, palette) {
    const colors = palette || ["#ffd166", "#ff8fab", "#9bf6ff", "#cdb4db", "#ffffff"];
    const particleCount = 28 + Math.floor(Math.random() * 14);

    for (let index = 0; index < particleCount; index += 1) {
      const angle = (Math.PI * 2 * index) / particleCount + Math.random() * 0.35;
      const speed = (1.3 + Math.random() * 3.2) * spread;

      particles.push({
        x,
        y,
        previousX: x,
        previousY: y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.011 + Math.random() * 0.018,
        size: 1.8 + Math.random() * 3.1,
        color: colors[index % colors.length],
        trailWidth: 0.8 + Math.random() * 1.8
      });
    }
  }

  function launchShell(x, targetY, spread = 1) {
    const palettes = [
      ["#ffd166", "#ff8fab", "#ffffff"],
      ["#9bf6ff", "#cdb4db", "#ffffff"],
      ["#ffcad4", "#ffd6a5", "#ffffff"]
    ];
    const palette = palettes[Math.floor(Math.random() * palettes.length)];

    shells.push({
      x,
      y: height + 18,
      dx: (Math.random() - 0.5) * 0.7,
      dy: -(5.6 + Math.random() * 1.5),
      targetY,
      spread,
      palette,
      color: palette[0]
    });
  }

  function explodeShell(shell) {
    launchBurst(shell.x, shell.y, shell.spread, shell.palette);
    addRing(shell.x, shell.y, shell.palette[0]);

    if (Math.random() > 0.55) {
      window.setTimeout(() => {
        launchBurst(
          shell.x + (Math.random() - 0.5) * 30,
          shell.y + (Math.random() - 0.5) * 20,
          shell.spread * 0.55,
          shell.palette.slice().reverse()
        );
      }, 120 + Math.random() * 140);
    }
  }

  function scheduleBurst(cluster = false) {
    if (!width || !height) {
      return;
    }

    const total = cluster ? 3 : launchCount % 4 === 3 ? 2 : 1;

    for (let index = 0; index < total; index += 1) {
      const delay = index * (160 + Math.random() * 90);
      window.setTimeout(() => {
        launchShell(
          width * (0.16 + Math.random() * 0.68),
          height * (0.18 + Math.random() * 0.36),
          0.95 + Math.random() * 0.45
        );
      }, delay);
    }

    launchCount += 1;
  }

  function animate(now) {
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(19, 10, 18, 0.2)";
    context.fillRect(0, 0, width, height);

    if (now >= nextLaunchAt) {
      scheduleBurst();
      nextLaunchAt = now + 700 + Math.random() * 420;
    }

    context.globalCompositeOperation = "lighter";

    for (let index = shells.length - 1; index >= 0; index -= 1) {
      const shell = shells[index];
      shell.x += shell.dx;
      shell.y += shell.dy;
      shell.dy += 0.012;

      context.beginPath();
      context.strokeStyle = `${shell.color}cc`;
      context.lineWidth = 2;
      context.moveTo(shell.x, shell.y + 14);
      context.lineTo(shell.x, shell.y);
      context.stroke();

      context.beginPath();
      context.fillStyle = shell.color;
      context.arc(shell.x, shell.y, 2.6, 0, Math.PI * 2);
      context.fill();

      if (shell.y <= shell.targetY || shell.dy >= -0.5) {
        explodeShell(shell);
        shells.splice(index, 1);
      }
    }

    for (let index = rings.length - 1; index >= 0; index -= 1) {
      const ring = rings[index];
      ring.radius += ring.growth;
      ring.life -= ring.decay;

      if (ring.life <= 0) {
        rings.splice(index, 1);
        continue;
      }

      context.globalAlpha = ring.life * 0.45;
      context.beginPath();
      context.strokeStyle = ring.color;
      context.lineWidth = 1.5;
      context.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      context.stroke();
    }

    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.previousX = particle.x;
      particle.previousY = particle.y;
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.dy += 0.02;
      particle.dx *= 0.992;
      particle.life -= particle.decay;

      if (particle.life <= 0) {
        particles.splice(index, 1);
        continue;
      }

      context.globalAlpha = Math.max(particle.life, 0);
      context.beginPath();
      context.strokeStyle = particle.color;
      context.lineWidth = particle.trailWidth * particle.life;
      context.moveTo(particle.previousX, particle.previousY);
      context.lineTo(particle.x, particle.y);
      context.stroke();

      context.beginPath();
      context.fillStyle = particle.color;
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    }

    context.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
  });

  resizeObserver.observe(canvas);
  resizeCanvas();

  replayButton.addEventListener("click", () => {
    for (let index = 0; index < 4; index += 1) {
      window.setTimeout(() => {
        scheduleBurst(index % 2 === 0);
      }, index * 220);
    }
  });

  window.setTimeout(() => {
    scheduleBurst(true);
    window.setTimeout(() => {
      scheduleBurst();
    }, 260);
  }, 250);

  requestAnimationFrame(animate);
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
}

populateContent();
createSparkles();
bindEvents();
initFireworks();
updateCountdown();
setInterval(updateCountdown, 1000);
