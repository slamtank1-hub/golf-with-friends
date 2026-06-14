const deck = document.getElementById("deck");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentChip = document.getElementById("currentChip");
const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalClose = document.getElementById("imageModalClose");

const genericHoleThemes = [
  "출발 홀 · 티샷 리듬 만들기",
  "방향성 홀 · 페어웨이 우선",
  "그린 중앙 공략",
  "긴 홀 · 끊어가기",
  "파3 · 거리감 확인",
  "위험 구역 회피",
  "후반 집중 · 루틴 유지",
  "스코어 방어",
  "마무리 · 욕심 금지"
];

let app = null;
let slides = [];
let current = 0;
const tabs = new Map();

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`데이터 파일을 불러오지 못했습니다: ${src}`));
    document.head.appendChild(script);
  });
}

function readParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    groupKey: params.get("group"),
    tripKey: params.get("trip")
  };
}

function isSafeKey(value) {
  return /^[a-z0-9-]+$/.test(value || "");
}

function showMessage(title, text) {
  deck.innerHTML = `
    <article class="slide">
      <div class="hero">
        <div class="hero-card">
          <div class="hero-content">
            <p class="eyebrow">Golf Trip Yardage Book</p>
            <h1>${escapeHtml(title)}</h1>
            <p class="hero-copy">${escapeHtml(text)}</p>
          </div>
        </div>
      </div>
    </article>
  `;
  deck.style.transform = "translateX(0)";
  currentChip.textContent = "LINK";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}

function courseList() {
  return app.trip.rounds.map(round => app.venue.courses[round.courseKey]).filter(Boolean);
}

function courseByKey(courseKey) {
  return app.venue.courses[courseKey];
}

function roundByCourse(courseKey) {
  return app.trip.rounds.find(round => round.courseKey === courseKey);
}

function holeFeature(hole, fallback = "홀 정보") {
  return hole?.feature || hole?.mood || fallback;
}
function holeByNumber(course, holeNo) {
  return (course.holesData || []).find(hole => hole.no === holeNo);
}

function coursePrincipleText(course) {
  const principles = course.principles || course.operatingPrinciples || course.strategyPrinciples;
  if (Array.isArray(principles) && principles.length) {
    return principles.join(", ");
  }
  if (typeof principles === "string" && principles.trim()) {
    return principles;
  }
  return "페어웨이 우선, 그린 중앙, 더블 보기 방지.";
}
function holeMessages(holeId) {
  return app.overlay?.holeMessages?.[holeId] || [
    { label: "카트 안 조언", text: "이 홀은 멋있게보다 멀쩡하게. 다음 샷이 보이면 성공." },
    { label: "오늘의 한마디", text: "스코어는 나중에 세고, 지금은 위험 구역 하나만 확실히 피하자." }
  ];
}

function scheduleRows() {
  const rows = [];
  app.trip.rounds.forEach(round => {
    let row = rows.find(item => item.date === round.displayDate);
    if (!row) {
      row = { date: round.displayDate, labels: [], notes: [] };
      rows.push(row);
    }
    row.labels.push(round.label);
    if (round.note) row.notes.push(round.note);
  });
  return rows;
}

function openingSlide() {
  const cover = app.trip.cover || {};
  const subtitle = cover.subtitle || app.venue.name;
  const image = cover.image;
  const mottos = app.overlay?.openingMottos || [];
  return `
    <article class="slide">
      <div class="hero">
        <div class="hero-card">
          <div class="hero-content">
            <div class="cover-title">
              <p class="eyebrow">${escapeHtml(app.venue.name)} Friends Tour</p>
              <h1>${escapeHtml(app.trip.title)}</h1>
              <strong>${escapeHtml(subtitle)}<br>${escapeHtml(app.trip.dateRange.display)}</strong>
            </div>

            ${image ? `
              <div class="cover-photo-slot">
                <img src="${escapeHtml(image)}" alt="${escapeHtml(cover.imageSlotLabel || "모임 참석 이미지")}">
              </div>
            ` : `
              <div class="cover-photo-slot" aria-label="모임 참석 이미지 자리">
                <div>
                  <b>${escapeHtml(cover.imageSlotLabel || "모임 참석 이미지")}</b>
                  <span>${escapeHtml(app.trip.dateRange.display)} 라운드 브리핑</span>
                </div>
              </div>
            `}

            <div class="cover-schedule">
              ${scheduleRows().map(row => `<div class="cover-row"><b>${escapeHtml(row.date)}</b><span>${escapeHtml(row.labels.join(" · "))}</span></div>`).join("")}
            </div>
            ${mottos.length ? `<div class="promise-grid">${mottos.map((text, index) => `<div class="promise"><span class="number-mark">${index + 1}</span><span>${escapeHtml(text)}</span></div>`).join("")}</div>` : ""}
          </div>
        </div>
        <p class="small-note">좌우로 넘기거나 아래 버튼을 눌러 홀을 이동하세요.</p>
      </div>
    </article>
  `;
}

function itinerarySlide() {
  const schedule = app.trip.schedule || {};
  const fallbackTitle = app.trip.rounds.map(round => round.label.replace(" 코스", "")).join("·");
  const eyebrow = schedule.eyebrow || `${scheduleRows().length} Days · ${app.trip.rounds.length} Courses`;
  const title = schedule.title || fallbackTitle;
  const copy = schedule.copy || "이 앱은 스코어 입력 없이 코스 브리핑과 홀별 참고 카드만 빠르게 넘겨보는 투어북이야.";
  return `
    <article class="slide">
      ${topbar("SCHEDULE")}
      <div class="hero">
        <div class="hero-card">
          <div class="hero-content">
            <p class="eyebrow">${escapeHtml(eyebrow)}</p>
            <h1>${escapeHtml(title)}</h1>
            <p class="hero-copy">${escapeHtml(copy)}</p>
            <div class="promise-grid">
              ${scheduleRows().map(row => `<div class="promise"><span class="number-mark">${escapeHtml(row.date.replace(".", ""))}</span><span>${escapeHtml(row.date)} · ${escapeHtml(row.labels.join(" → "))} · ${escapeHtml(row.notes.join(" / "))}</span></div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function topbar(active) {
  return `
    <div class="topbar">
      <div class="course-title">
        <div>
          <div class="brand-line">
            <button class="icon-btn" type="button" data-home="cover" aria-label="표지로 이동" title="표지">⌂</button>
            <button class="icon-btn" type="button" data-home="schedule" aria-label="일정으로 이동" title="일정">≡</button>
            <small>${escapeHtml(app.venue.name)}</small>
          </div>
        </div>
        <span class="pill">${escapeHtml(active)}</span>
      </div>
      <div class="course-actions">
        ${courseList().map(course => `<button class="course-btn" type="button" data-course="${escapeHtml(course.key)}">${escapeHtml(course.name)}</button>`).join("")}
      </div>
    </div>
  `;
}

function courseSlide(courseKey) {
  const info = courseByKey(courseKey);
  return `
    <article class="slide">
      ${topbar(info.name)}
      <section class="hole-head">
        <div class="hole-main">
          <div>
            <h2 class="hole-title">${escapeHtml(info.name)} 코스</h2>
          </div>
          <span class="pill">난이도 ${escapeHtml(info.difficulty)}</span>
        </div>
        <div class="meta-row">
          ${(info.theme || []).map(item => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>

      <section class="quick-card">
        <p class="quick-label">코스 브리핑</p>
        <p class="quick-text">${escapeHtml(info.play)}</p>
      </section>

      <section class="course-brief">
        <div class="brief-grid">
          <div class="brief-box"><b>코스 성격</b><span>${escapeHtml(info.style)}</span></div>
          <div class="brief-box"><b>주의점</b><span>${escapeHtml(info.watch)}</span></div>
          <div class="brief-box"><b>운영 원칙</b><span>${escapeHtml(coursePrincipleText(info))}</span></div>
          <div class="brief-box"><b>Note</b><span>${escapeHtml(info.note)}</span></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-title">
          <h3>${escapeHtml(info.name)} 9홀 체크리스트</h3>
          <span class="pill">탭해서 이동</span>
        </div>
        <div class="hole-grid">
          ${Array.from({ length: info.holes || 9 }, (_, index) => {
            const hole = holeByNumber(info, index + 1);
            const theme = holeFeature(hole, genericHoleThemes[index] || "홀 정보");
            const parLabel = hole?.par ? `H${index + 1}(Par${hole.par})` : `H${index + 1}`;
            return `<button class="hole-mini" type="button" data-course-hole="${escapeHtml(courseKey)}:${index + 1}"><b>${escapeHtml(parLabel)}</b><span>${escapeHtml(theme)}</span></button>`;
          }).join("")}
        </div>
      </section>
    </article>
  `;
}

function assetHoleSlide(courseKey, hole) {
  const course = courseByKey(courseKey);
  const media = [
    { key: "summary", label: "종합", src: hole.summaryImage },
    { key: "course", label: "코스", src: hole.assets?.course },
    { key: "slope", label: "경사", src: hole.assets?.slope },
    { key: "green", label: "그린", src: hole.assets?.green }
  ].filter(item => item.src);
  const savedTab = tabs.get(hole.id);
  const activeTab = media.some(item => item.key === savedTab) ? savedTab : media[0]?.key;
  const img = media.find(item => item.key === activeTab)?.src || "";
  const messages = holeMessages(hole.id);

  return `
    <article class="slide">
      ${topbar(`${course.name} H${hole.no}`)}
      <div class="media-tabs" role="tablist" aria-label="이미지 종류">
        ${media.map(item => `<button class="tab ${activeTab === item.key ? "active" : ""}" type="button" data-tab="${hole.id}:${item.key}">${item.label}</button>`).join("")}
      </div>
      <figure class="image-panel ${activeTab === "summary" ? "summary" : ""}" data-full-image="${escapeHtml(img)}">
        <img src="${escapeHtml(img)}" alt="${escapeHtml(course.name)}코스 ${hole.no}번홀 이미지" loading="lazy">
      </figure>

      <section class="panel">
        <div class="panel-title">
          <h3>공략 메모</h3>
          <span class="pill">${escapeHtml(holeFeature(hole))}</span>
        </div>
        <div class="tips">
          <div class="tip"><b>티/세컨</b><span>${escapeHtml(hole.target)}</span></div>
          <div class="tip"><b>그린</b><span>${escapeHtml(hole.green)}</span></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-title">
          <h3>이 홀에서 명심할 말</h3>
        </div>
        <div class="friends">
          ${messages.map(item => `<div class="friend"><span>${escapeHtml(typeof item === "string" ? item : item.text)}</span></div>`).join("")}
        </div>
      </section>
    </article>
  `;
}

function genericHoleSlide(courseKey, holeNo) {
  const info = courseByKey(courseKey);
  const hole = holeByNumber(info, holeNo);
  const theme = holeFeature(hole, genericHoleThemes[holeNo - 1]);
  return `
    <article class="slide">
      ${topbar(`${info.name} H${holeNo}`)}
      <section class="hole-head">
        <div class="hole-main">
          <div>
            <p class="hole-kicker">${escapeHtml(info.name)} COURSE</p>
            <h2 class="hole-title">HOLE ${holeNo}</h2>
          </div>
          <span class="pill">브리핑 카드</span>
        </div>
        <div class="meta-row">
          <span class="pill">${escapeHtml(theme)}</span>
          <span class="pill">기본 브리핑</span>
        </div>
      </section>

      <div class="placeholder-map">
        <div>
          <b>${escapeHtml(info.name)} ${holeNo}번홀</b>
          <span>홀별 핵심 공략을 빠르게 확인하는 브리핑 카드입니다.</span>
        </div>
      </div>

      <section class="panel">
        <div class="panel-title">
          <h3>공략 메모</h3>
        </div>
        <div class="tips">
          <div class="tip"><b>티/세컨</b><span>${escapeHtml(hole?.target || info.play)}</span></div>
          <div class="tip"><b>그린</b><span>${escapeHtml(hole?.green || "핀보다 그린 중앙, 첫 퍼트 거리감 우선.")}</span></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-title">
          <h3>이 홀에서 명심할 말</h3>
        </div>
        <div class="friends">
          <div class="friend"><span>이 홀은 멋있게보다 멀쩡하게. 다음 샷이 보이면 성공.</span></div>
          <div class="friend"><span>스코어는 나중에 세고, 지금은 위험 구역 하나만 확실히 피하자.</span></div>
        </div>
      </section>
    </article>
  `;
}

function endingSlide() {
  const endings = app.overlay?.endingMessages || [];
  return `
    <article class="slide">
      ${topbar("FINISH")}
      <div class="ending">
        <div class="hero-card">
          <div class="hero-content">
            <p class="eyebrow">Round Complete</p>
            <h1>오늘의 승자는<br>끝까지 웃은 사람</h1>
            <p class="hero-copy">스코어는 잠깐이고, 이 여행은 오래 간다. 오늘의 샷과 웃음까지 오래 기억될 라운드가 된다.</p>
            <div class="promise-grid">
              ${endings.map((text, index) => `<div class="promise"><span class="number-mark">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(text)}</span></div>`).join("")}
            </div>
          </div>
        </div>
        <p class="small-note">${escapeHtml(app.venue.name)} · ${escapeHtml(app.trip.title)}</p>
      </div>
    </article>
  `;
}

function slideHtml(slide) {
  if (slide.type === "opening") return openingSlide();
  if (slide.type === "itinerary") return itinerarySlide();
  if (slide.type === "course") return courseSlide(slide.course);
  if (slide.type === "assetHole") return assetHoleSlide(slide.course, slide.holeData);
  if (slide.type === "genericHole") return genericHoleSlide(slide.course, slide.hole);
  return endingSlide();
}

function findCourseIndex(course) {
  return slides.findIndex(slide => slide.type === "course" && slide.course === course);
}

function findCourseHoleIndex(course, hole) {
  return slides.findIndex(slide => (slide.type === "assetHole" || slide.type === "genericHole") && slide.course === course && slide.hole === hole);
}

function buildSlides() {
  slides = [
    { type: "opening" },
    { type: "itinerary" },
    ...app.trip.rounds.flatMap(round => {
      const course = courseByKey(round.courseKey);
      return [
        { type: "course", course: round.courseKey },
        ...Array.from({ length: course?.holes || 9 }, (_, index) => {
          const holeNo = index + 1;
          const hole = holeByNumber(course, holeNo);
          if (hole?.assets) return { type: "assetHole", course: round.courseKey, hole: holeNo, holeData: hole };
          return { type: "genericHole", course: round.courseKey, hole: holeNo };
        })
      ];
    }),
    { type: "ending" }
  ];
}

function render() {
  deck.innerHTML = slides.map(slideHtml).join("");
  deck.style.transform = `translateX(${-current * 100}%)`;
  const active = slides[current];
  currentChip.textContent = active.type === "opening" ? "OPENING" : active.type === "ending" ? "FINISH" : active.type === "itinerary" ? "SCHEDULE" : active.type === "course" ? `${courseByKey(active.course).name} COURSE` : `${courseByKey(active.course).name} H${active.hole}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;

  document.querySelectorAll("[data-course]").forEach(btn => {
    btn.addEventListener("click", () => go(findCourseIndex(btn.dataset.course)));
  });
  document.querySelectorAll("[data-home]").forEach(btn => {
    btn.addEventListener("click", () => go(btn.dataset.home === "cover" ? 0 : 1));
  });
  document.querySelectorAll("[data-course-hole]").forEach(btn => {
    const [course, hole] = btn.dataset.courseHole.split(":");
    btn.addEventListener("click", () => go(findCourseHoleIndex(course, Number(hole))));
  });
  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      const [holeId, tab] = btn.dataset.tab.split(":");
      tabs.set(holeId, tab);
      render();
    });
  });
  document.querySelectorAll("[data-full-image]").forEach(panel => {
    panel.addEventListener("click", () => {
      const img = panel.querySelector("img");
      openImageModal(panel.dataset.fullImage, img?.alt);
    });
  });
}

function openImageModal(src, alt) {
  if (!imageModal || !imageModalImg || !src) return;
  imageModalImg.src = src;
  imageModalImg.alt = alt || "확대 이미지";
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  if (!imageModal || !imageModalImg) return;
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.removeAttribute("src");
}
function go(next) {
  current = Math.max(0, Math.min(slides.length - 1, next));
  render();
}

imageModalClose?.addEventListener("click", closeImageModal);
imageModal?.addEventListener("click", event => {
  if (event.target === imageModal) closeImageModal();
});

prevBtn.addEventListener("click", () => go(current - 1));
nextBtn.addEventListener("click", () => go(current + 1));

let startX = 0;
let startY = 0;
deck.addEventListener("touchstart", event => {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
}, { passive: true });

deck.addEventListener("touchend", event => {
  const dx = event.changedTouches[0].clientX - startX;
  const dy = event.changedTouches[0].clientY - startY;
  if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    go(current + (dx < 0 ? 1 : -1));
  }
}, { passive: true });

window.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") go(current - 1);
  if (event.key === "ArrowRight") go(current + 1);
  if (event.key === "Escape") closeImageModal();
});

async function init() {
  const { groupKey, tripKey } = readParams();
  if (!groupKey || !tripKey) {
    showMessage("여행 링크가 없습니다", "공유받은 정확한 링크로 접속해주세요. 예: ?group=kimjang-bond&trip=2026-oakvalley-jun");
    return;
  }
  if (!isSafeKey(groupKey) || !isSafeKey(tripKey)) {
    showMessage("잘못된 링크입니다", "그룹 또는 여행 ID 형식이 올바르지 않습니다.");
    return;
  }
  try {
    await loadScript(`data/groups/${groupKey}.js`);
    const group = window.GOLF_GROUPS?.[groupKey];
    const trip = group?.trips?.[tripKey];
    if (!group || !trip) {
      showMessage("여행 정보를 찾을 수 없습니다", "공유받은 링크의 group 또는 trip 값을 확인해주세요.");
      return;
    }
    await loadScript(`data/venues/${trip.venueId}.js`);
    const venue = window.GOLF_VENUES?.[trip.venueId];
    if (!venue) {
      showMessage("골프장 정보를 찾을 수 없습니다", "여행 데이터에 연결된 골프장 데이터가 없습니다.");
      return;
    }
    app = {
      group,
      trip,
      venue,
      overlay: group.overlays?.[tripKey] || {}
    };
    document.title = trip.title;
    buildSlides();
    render();
  } catch (error) {
    showMessage("데이터를 불러오지 못했습니다", error.message || "데이터 파일 경로를 확인해주세요.");
  }
}

init();
