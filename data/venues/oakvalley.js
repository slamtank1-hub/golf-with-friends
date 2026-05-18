window.GOLF_VENUES = window.GOLF_VENUES || {};
const OAKVALLEY_HOLE_DEFAULTS = [
  { no: 1, par: "확인 예정", white: "확인 예정", mood: "코스도 · 경사도 · 그린", elevation: "경사 이미지 확인", landing: "첫 홀은 리듬 우선, 페어웨이 중앙을 넓게 보기", target: "티샷은 페어웨이 중앙. 무리한 장타보다 다음 샷이 보이는 위치.", danger: "초반 무리, 좌우 큰 미스", safe: "중앙 랜딩, 그린 중앙", green: "그린 이미지를 보고 높은 쪽과 낮은 쪽을 먼저 확인." },
  { no: 2, par: "확인 예정", white: "확인 예정", mood: "전장 확인 · 랜딩존 · 세컨 위치", elevation: "경사 이미지 확인", landing: "랜딩존을 넓게 보고 세컨이 편한 쪽으로", target: "티샷은 안전한 페어웨이. 세컨 욕심보다 다음 거리 남기기.", danger: "무리한 세컨, 긴 러프", safe: "3온 전략, 보기 방어", green: "핀보다 그린 중앙을 먼저 보고 퍼트 방향을 결정." },
  { no: 3, par: "확인 예정", white: "확인 예정", mood: "방향성 · 중앙 공략 · 리듬", elevation: "경사 이미지 확인", landing: "평소 탄도 기준으로 착지 지점을 보수적으로", target: "페어웨이 중앙을 기준으로 한 클럽 편하게 선택.", danger: "짧은 세컨, 좌우 숲", safe: "중앙 랜딩 후 중앙 공략", green: "색 차이가 큰 구간은 속도 착시가 있을 수 있어 첫 퍼트 거리감 우선." },
  { no: 4, par: "확인 예정", white: "확인 예정", mood: "긴 홀 · 끊어가기 · 안전 운영", elevation: "경사 이미지 확인", landing: "장타보다 다음 샷 각도를 남기는 위치", target: "위험 구역 앞에서 끊고, 다음 샷이 쉬운 방향으로 보내기.", danger: "무리한 장타, 해저드 방향", safe: "페어웨이 우선, 3온 허용", green: "핀 공략보다 넓은 면에 올리고 2퍼트를 목표로." },
  { no: 5, par: "확인 예정", white: "확인 예정", mood: "중간 홀 · 집중 · 거리감", elevation: "경사 이미지 확인", landing: "바람과 경사 보정 후 넉넉한 클럽 선택", target: "그린 또는 페어웨이 중앙. 짧은 미스만 피하기.", danger: "짧은 미스, 벙커 방향", safe: "중앙 크게 보고 2퍼트", green: "높은 구역에서 낮은 구역으로 흐르는 방향을 먼저 체크." },
  { no: 6, par: "확인 예정", white: "확인 예정", mood: "방향성 · 런 계산 · 보수적 선택", elevation: "경사 이미지 확인", landing: "경사에 따른 런을 감안해서 목표를 짧게 잡기", target: "중앙 라인을 지키고, 위험 쪽 핀은 포기해도 됨.", danger: "오버 런, 좌우 미스", safe: "짧아도 중앙", green: "그린 주변 경사를 보고 어프로치 착지 지점을 먼저 정하기." },
  { no: 7, par: "확인 예정", white: "확인 예정", mood: "후반 집중 · 클럽 선택 · 안전", elevation: "경사 이미지 확인", landing: "후반 체력 저하를 감안해서 루틴을 짧게", target: "핀보다 넓은 면. 실수해도 다음 샷이 쉬운 쪽.", danger: "긴 미스, 욕심낸 핀 공략", safe: "그린 중앙, 보기 방어", green: "첫 퍼트는 라인보다 속도. 짧게 남기는 방향으로." },
  { no: 8, par: "확인 예정", white: "확인 예정", mood: "마무리 전 · 고도 보정 · 중앙", elevation: "경사 이미지 확인", landing: "남은 홀 욕심보다 방향성을 우선", target: "페어웨이 중앙. 세컨은 짧지 않게 안전한 면으로.", danger: "짧은 세컨, 벙커 방향", safe: "한 클럽 여유, 중앙 공략", green: "오르막/내리막 퍼트를 이미지에서 확인하고 과한 사이드 금지." },
  { no: 9, par: "확인 예정", white: "확인 예정", mood: "마무리 · 집중력 · 큰 사고 방지", elevation: "경사 이미지 확인", landing: "마지막 홀은 스코어보다 큰 미스 방지", target: "중앙 라인. 벙커와 물을 확실히 피하는 방향.", danger: "마지막 홀 욕심, 해저드", safe: "중앙 랜딩, 그린 중앙", green: "마지막 퍼트는 짧지 않게, 그래도 첫 목표는 2퍼트." }
];

function oakvalleyHoleData(courseKey, folder, prefix) {
  return OAKVALLEY_HOLE_DEFAULTS.map(item => ({
    ...item,
    id: `oakvalley.${courseKey}.${String(item.no).padStart(2, "0")}`,
    summaryImage: `assets/oakvalley/${folder}/${prefix}summary_hole${item.no}.png`,
    assets: {
      course: `assets/oakvalley/${folder}/${prefix}course_hole${item.no}.png`,
      slope: `assets/oakvalley/${folder}/${prefix}slope_hole${item.no}.png`,
      green: `assets/oakvalley/${folder}/${prefix}green_hole${item.no}.jpg`
    }
  }));
}

window.GOLF_VENUES.oakvalley = {
  id: "oakvalley",
  name: "오크밸리CC",
  location: "강원 원주",
  courses: {
    pine: {
      id: "oakvalley.pine",
      venueId: "oakvalley",
      key: "pine",
      name: "파인",
      nameEn: "Pine",
      holes: 9,
      difficulty: "상",
      theme: ["소나무 숲", "물길", "전략형"],
      style: "연못과 계류가 많은 편으로 알려진 전략형 코스",
      watch: "티샷보다 세컨샷 위치가 중요. 물과 숲을 동시에 의식하면 스윙이 급해짐.",
      play: "첫 라운드 시작 코스로 가정하고, 보기 전략과 페어웨이 우선 운영.",
      note: "종합, 코스도, 경사도, 그린 이미지를 홀별로 제공",
      holesData: oakvalleyHoleData("pine", "fine", "pine")
    },
    maple: {
      id: "oakvalley.maple",
      venueId: "oakvalley",
      key: "maple",
      name: "메이플",
      nameEn: "Maple",
      holes: 9,
      difficulty: "중상",
      theme: ["단풍나무", "리듬", "체력 관리"],
      style: "오크와 함께 대회 코스로 쓰인 이력이 있는 18홀 조합의 한 축",
      watch: "오후 라운드라 체력 저하와 집중력 하락 주의. 무리한 장타보다 반복 가능한 방향.",
      play: "티샷 루틴을 짧게 고정하고, 그린 중앙 공략으로 더블 보기 방지.",
      note: "종합, 코스도, 경사도, 그린 이미지를 홀별로 제공",
      holesData: oakvalleyHoleData("maple", "maple", "maple")
    },
    oak: {
      id: "oakvalley.oak",
      venueId: "oakvalley",
      key: "oak",
      name: "오크",
      nameEn: "Oak",
      holes: 9,
      difficulty: "상",
      theme: ["참나무 숲", "고도 변화", "정교한 보정"],
      style: "현재 이미지가 준비된 메인 야디지북 코스",
      watch: "오르막/내리막 차이가 크게 느껴지는 홀들이 있어 평지 거리만 믿으면 위험.",
      play: "200m 기준 랜딩존, 고도 보정, 그린 경사를 함께 확인.",
      note: "코스도, 경사도, 그린 이미지를 홀별로 제공",
      holesData: [
        {
          id: "oakvalley.oak.01",
          no: 1,
          par: 4,
          white: "316m",
          mood: "오르막 · 좌측 벙커 · 우측 숲",
          elevation: "IP +12.6m / 그린 +23.6m",
          landing: "200m 기준 오르막 보정, 약 190m 착지",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole1.png",
          target: "페어웨이 중앙보다 살짝 우측. 무리한 장타보다 살아있는 티샷.",
          danger: "좌측 벙커, 우측 숲",
          safe: "중앙 랜딩 후 한 클럽 길게",
          green: "뒤가 높고 앞이 낮은 그린. 짧으면 굴러 내려올 수 있어 중앙 우측 추천.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole1.png",
            slope: "assets/oakvalley/oak/oakslope_hole1.png",
            green: "assets/oakvalley/oak/oakgreen_hole1.jpg"
          }
        },
        {
          id: "oakvalley.oak.02",
          no: 2,
          par: 5,
          white: "확인 예정",
          mood: "큰 내리막 · 긴 홀 · 세컨 욕심 금지",
          elevation: "IP -14m / IP -31.9m / 그린 -36m",
          landing: "내리막이라 평소보다 더 굴러갈 수 있음",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole2.png",
          target: "티샷은 페어웨이 넓은 쪽으로. 세컨은 다음 샷 편한 거리만 남기기.",
          danger: "과한 드로우, 내리막 과속",
          safe: "짧아도 페어웨이 우선",
          green: "내리막 홀은 거리감이 흔들리기 쉬움. 핀보다 그린 중앙.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole2.png",
            slope: "assets/oakvalley/oak/oakslope_hole2.png",
            green: "assets/oakvalley/oak/oakgreen_hole2.jpg"
          }
        },
        {
          id: "oakvalley.oak.03",
          no: 3,
          par: 4,
          white: "확인 예정",
          mood: "완만한 오르막 · 좌측 라인 주의",
          elevation: "IP +3.6m / 그린 +7.5m",
          landing: "살짝 오르막, 평지보다 반 클럽 정도 보수적으로",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole3.png",
          target: "페어웨이 중앙. 왼쪽으로 감기면 다음 샷 각도가 답답함.",
          danger: "좌측 나무, 짧은 세컨",
          safe: "중앙 랜딩, 그린 중앙",
          green: "그린 주변 경사보다 퍼트 라인 착시를 조심. 안전하게 중앙 공략.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole3.png",
            slope: "assets/oakvalley/oak/oakslope_hole3.png",
            green: "assets/oakvalley/oak/oakgreen_hole3.jpg"
          }
        },
        {
          id: "oakvalley.oak.04",
          no: 4,
          par: 5,
          white: "확인 예정",
          mood: "내리막 · 긴 전장 · 리듬 유지",
          elevation: "IP -12.5m / IP -22.6m / 그린 -20.4m",
          landing: "내리막 보정으로 착지 후 런을 더 계산",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole4.png",
          target: "티샷은 넓은 랜딩존. 세컨은 위험 구역을 피해서 끊어가기.",
          danger: "무리한 세컨, 좌우 숲",
          safe: "3온 전략, 어프로치 거리 남기기",
          green: "앞뒤 거리감이 어려운 홀. 핀 하이보다 중앙에 올리는 쪽.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole4.png",
            slope: "assets/oakvalley/oak/oakslope_hole4.png",
            green: "assets/oakvalley/oak/oakgreen_hole4.jpg"
          }
        },
        {
          id: "oakvalley.oak.05",
          no: 5,
          par: 3,
          white: "확인 예정",
          mood: "짧은 내리막 · 거리감 홀",
          elevation: "그린 -2.9m",
          landing: "짧은 홀, 바람과 내리막만 확인",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole5.png",
          target: "핀보다 안전한 그린 중앙. 벙커 방향은 과감히 제외.",
          danger: "짧은 미스, 그린 주변 벙커",
          safe: "중앙 크게 보고 2퍼트",
          green: "색 차이가 큰 그린. 높은 쪽에서 낮은 쪽으로 흐름을 먼저 보기.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole5.png",
            slope: "assets/oakvalley/oak/oakslope_hole5.png",
            green: "assets/oakvalley/oak/oakgreen_hole5.jpg"
          }
        },
        {
          id: "oakvalley.oak.06",
          no: 6,
          par: 4,
          white: "확인 예정",
          mood: "강한 내리막 · 런 계산 · 방향성",
          elevation: "IP -25.8m / 그린 -36.4m",
          landing: "내리막이 커서 평소보다 멀리 도망갈 수 있음",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole6.png",
          target: "짧게 잡아도 충분. 페어웨이 중앙 라인만 지키기.",
          danger: "오버 런, 좌우 미스",
          safe: "클럽 선택 보수적으로",
          green: "내리막 접근은 캐리보다 착지 지점이 중요. 앞쪽에 세우려 하지 말기.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole6.png",
            slope: "assets/oakvalley/oak/oakslope_hole6.png",
            green: "assets/oakvalley/oak/oakgreen_hole6.jpg"
          }
        },
        {
          id: "oakvalley.oak.07",
          no: 7,
          par: 3,
          white: "확인 예정",
          mood: "내리막 파3 · 클럽 선택",
          elevation: "그린 -23.3m",
          landing: "큰 내리막, 한 클럽 이상 짧게 볼 수 있음",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole7.png",
          target: "핀 위치보다 그린 넓은 면. 짧은 쪽 미스만 피하기.",
          danger: "긴 미스, 바람 오판",
          safe: "중앙 착지 후 2퍼트",
          green: "그린 높낮이 차이가 커 보이는 홀. 첫 퍼트 속도만 살리기.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole7.png",
            slope: "assets/oakvalley/oak/oakslope_hole7.png",
            green: "assets/oakvalley/oak/oakgreen_hole7.jpg"
          }
        },
        {
          id: "oakvalley.oak.08",
          no: 8,
          par: 4,
          white: "확인 예정",
          mood: "오르막 · 그린 뒤 높음 · 짧은 미스 주의",
          elevation: "IP +8.2m / 그린 +24m",
          landing: "오르막 보정 필요, 세컨은 한 클럽 길게",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole8.png",
          target: "페어웨이 중앙. 세컨은 짧지 않게 그린 중앙.",
          danger: "짧은 세컨, 앞쪽 경사",
          safe: "한 클럽 길게, 중앙 공략",
          green: "상단이 높은 그린. 핀보다 앞에 세우면 퍼트가 남고, 너무 짧으면 고생.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole8.png",
            slope: "assets/oakvalley/oak/oakslope_hole8.png",
            green: "assets/oakvalley/oak/oakgreen_hole8.jpg"
          }
        },
        {
          id: "oakvalley.oak.09",
          no: 9,
          par: 4,
          white: "확인 예정",
          mood: "마무리 오르막 · 좌우 벙커 · 집중력",
          elevation: "IP +0.7m / 그린 +6.7m",
          landing: "완만한 오르막, 마지막까지 방향성 우선",
          summaryImage: "assets/oakvalley/oak/oaksummary_hole9.png",
          target: "중앙 라인. 벙커를 피하고 그린 앞 공간 확인.",
          danger: "페어웨이 벙커, 마지막 홀 욕심",
          safe: "중앙 랜딩, 그린 중앙",
          green: "큰 경사보다 속도감 관리. 마지막 퍼트는 과감하지만 짧지 않게.",
          assets: {
            course: "assets/oakvalley/oak/oakcourse_hole9.png",
            slope: "assets/oakvalley/oak/oakslope_hole9.png",
            green: "assets/oakvalley/oak/oakgreen_hole9.jpg"
          }
        }
      ]
    },
    cherry: {
      id: "oakvalley.cherry",
      venueId: "oakvalley",
      key: "cherry",
      name: "체리",
      nameEn: "Cherry",
      holes: 9,
      difficulty: "중상",
      theme: ["벚나무", "리노베이션", "공격과 방어"],
      style: "리노베이션 이후 랜딩 에어리어가 넓어졌다는 공개 설명이 있음",
      watch: "마지막 코스라 체력과 멘탈이 변수. 넓어 보여도 위험 구역 앞에서는 끊어가기.",
      play: "좋은 스코어보다 큰 사고 없는 마무리. 물, 벙커, 숲 중 하나만 확실히 피하기.",
      note: "종합, 코스도, 경사도, 그린 이미지를 홀별로 제공",
      holesData: oakvalleyHoleData("cherry", "cherry", "cherry")
    }
  }
};
