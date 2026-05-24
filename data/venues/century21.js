window.GOLF_VENUES = window.GOLF_VENUES || {};

const CENTURY21_SOURCE_NOTES = [
  "공식 홈페이지: 센추리21 컨트리클럽은 강원 원주시 문막읍 궁말길 193에 위치하며 Pine, Lake, Field, Valley, Mountain 45홀 구성.",
  "원주시 영문 관광 자료: Pine, Lake, Field, Valley 36홀과 대중제 Mountain 9홀을 갖춘 자연 친화형 골프장으로 소개.",
  "보조 예약/코스 자료: Pine/Lake는 회원제, Field/Valley/Mountain은 대중제 코스로 구분되는 자료가 있음.",
  "GolfPass Lake Course 자료: Lake 9홀은 Par 36, White 3051 yards로 등록된 스코어카드 자료가 있음."
];

function buildCenturyHole(courseKey, hole) {
  return {
    par: "확인 예정",
    white: "확인 예정",
    ...hole,
    id: `century21.${courseKey}.${String(hole.no).padStart(2, "0")}`
  };
}

function buildCenturyHoles(courseKey, holes) {
  return holes.map(hole => buildCenturyHole(courseKey, hole));
}

const VALLEY_HOLES = [
  { no: 1, feature: "출발 홀 · 계곡 지형 · 방향성", target: "티샷은 80% 리듬. 장타보다 공을 살리는 출발.", green: "첫 퍼트는 라인보다 거리감 확인." },
  { no: 2, feature: "수목 라인 · 랜딩존 · 세컨 각도", target: "페어웨이 넓은 쪽. 세컨 각도 남기기.", green: "핀보다 넓은 면에 올리기." },
  { no: 3, feature: "고저차 확인 · 클럽 선택 · 중앙", target: "무리한 핀 공략보다 그린 중앙.", green: "오르막/내리막 퍼트 방향 먼저 확인." },
  { no: 4, feature: "긴 홀 · 끊어가기 · 리듬", target: "위험 구역 앞에서 끊고 편한 거리 남기기.", green: "넓은 면에 올리고 첫 퍼트 거리감." },
  { no: 5, feature: "중간 홀 · 벙커 회피 · 2퍼트", target: "짧은 미스보다 방향 미스를 줄이기.", green: "핀 하이보다 중앙." },
  { no: 6, feature: "후반 진입 · 방향성 · 런 계산", target: "중앙 라인 유지. 위험 쪽 핀은 포기.", green: "착지 후 구르는 방향 확인." },
  { no: 7, feature: "파3 가정 · 거리감 · 바람", target: "핀보다 그린 넓은 면.", green: "첫 퍼트 속도 우선." },
  { no: 8, feature: "마무리 전 · 페어웨이 우선 · 집중", target: "티샷은 중앙. 세컨은 안전 면.", green: "내리막 퍼트가 길면 보수적으로." },
  { no: 9, feature: "전반 마무리 · 큰 사고 방지 · 중앙", target: "중앙 라인. 벙커와 숲을 확실히 피하기.", green: "2퍼트 기준으로 마무리." }
];

const FIELD_HOLES = [
  { no: 1, feature: "넓은 시야 · 출발 · 페어웨이", target: "페어웨이 중앙으로 단순하게 시작.", green: "거리감 확인." },
  { no: 2, feature: "개방감 · 바람 · 클럽 선택", target: "구질을 만들기보다 안정적인 방향.", green: "핀보다 중앙." },
  { no: 3, feature: "랜딩존 · 벙커 · 세컨", target: "세컨 각도 좋은 페어웨이.", green: "넓은 면에 올리기." },
  { no: 4, feature: "긴 홀 · 거리 배분 · 끊어가기", target: "장타보다 3샷 계획.", green: "핀보다 중앙." },
  { no: 5, feature: "중간 홀 · 집중 · 그린 중앙", target: "중앙 라인. 짧은 미스 금지.", green: "첫 퍼트 속도." },
  { no: 6, feature: "경사 확인 · 런 · 보수", target: "중앙 라인을 지키기.", green: "굴러가는 방향 체크." },
  { no: 7, feature: "파3 가정 · 클럽 선택 · 안전", target: "한 클럽 여유 있게 중앙.", green: "2퍼트 우선." },
  { no: 8, feature: "후반 집중 · 방향성 · 세컨 각도", target: "페어웨이 중앙. 다음 샷 각도 확보.", green: "오르막 퍼트 남기기." },
  { no: 9, feature: "마무리 · 페어웨이 · 2퍼트", target: "중앙 라인. 위험 구역 피하기.", green: "짧지 않게 첫 퍼트." }
];

const LAKE_HOLES = [
  { no: 1, par: 4, white: "402y", feature: "레이크 시작 · 물 의식 · 방향성", target: "첫 홀은 공을 살리는 티샷.", green: "첫 퍼트 거리감." },
  { no: 2, par: 5, white: "529y", feature: "긴 홀 · 3샷 계획 · 세컨 욕심 금지", target: "티샷은 넓은 쪽, 세컨은 안전한 거리.", green: "중앙에 올리고 2퍼트." },
  { no: 3, par: 3, white: "162y", feature: "파3 · 물/벙커 회피 · 거리감", target: "핀보다 그린 중앙.", green: "첫 퍼트 속도." },
  { no: 4, par: 4, white: "277y", feature: "짧은 파4 · 유혹 · 클럽 선택", target: "드라이버가 부담되면 짧은 클럽으로 위치 잡기.", green: "핀보다 넓은 면." },
  { no: 5, par: 4, white: "308y", feature: "중간 파4 · 방향성 · 세컨", target: "중앙 라인 유지.", green: "중앙 공략." },
  { no: 6, par: 3, white: "146y", feature: "짧은 파3 · 클럽 선택 · 바람", target: "한 클럽 보수적으로 그린 중앙.", green: "거리감 우선." },
  { no: 7, par: 5, white: "515y", feature: "핸디캡 홀 · 긴 전장 · 인내", target: "위험 구역 피하고 다음 샷 거리 남기기.", green: "올리면 성공, 2퍼트 기준." },
  { no: 8, par: 4, white: "335y", feature: "마무리 전 · 페어웨이 · 그린 중앙", target: "중앙 라인. 짧은 미스 금지.", green: "오르막 퍼트 남기기." },
  { no: 9, par: 4, white: "377y", feature: "레이크 마무리 · 큰 사고 방지", target: "중앙 라인으로 안전하게.", green: "2퍼트 마무리." }
];

const PINE_HOLES = [
  { no: 1, feature: "회원제 코스 · 출발 · 수목", target: "첫 홀은 방향성 우선.", green: "거리감 확인." },
  { no: 2, feature: "자연 지형 · 세컨 각도 · 중앙", target: "넓은 쪽으로 티샷.", green: "중앙 공략." },
  { no: 3, feature: "파3 가정 · 거리감 · 바람", target: "핀보다 그린 넓은 면.", green: "속도 우선." },
  { no: 4, feature: "긴 홀 · 끊어가기 · 안전", target: "페어웨이 우선.", green: "넓은 면 공략." },
  { no: 5, feature: "중간 홀 · 벙커 회피 · 2퍼트", target: "중앙 라인 유지.", green: "2퍼트 기준." },
  { no: 6, feature: "런 계산 · 경사 · 보수", target: "짧아도 중앙.", green: "굴러가는 방향 확인." },
  { no: 7, feature: "후반 집중 · 방향성 · 리듬", target: "페어웨이 중앙.", green: "첫 퍼트 속도." },
  { no: 8, feature: "마무리 전 · 세컨 위치 · 중앙", target: "그린 중앙 공략.", green: "오르막 퍼트 선호." },
  { no: 9, feature: "피날레 · 큰 사고 방지 · 마무리", target: "중앙 라인. 위험 방향 제외.", green: "짧지 않게 2퍼트." }
];

window.GOLF_VENUES.century21 = {
  id: "century21",
  name: "센추리21CC",
  location: "강원 원주 문막읍",
  address: "강원 원주시 문막읍 궁말길 193",
  phone: "033-733-1000",
  holes: 45,
  sourceNotes: CENTURY21_SOURCE_NOTES,
  courses: {
    valley: {
      id: "century21.valley",
      venueId: "century21",
      key: "valley",
      name: "밸리",
      nameEn: "Valley",
      holes: 9,
      difficulty: "중상",
      theme: ["계곡 지형", "수목", "방향성"],
      style: "강원 원주 자연 지형을 살린 대중제 코스. 계곡과 수목 라인을 의식하며 안정적인 랜딩이 중요하다.",
      watch: "초반부터 장타 욕심을 줄이고, 계곡/숲 방향 미스를 확실히 피한다.",
      play: "페어웨이 중앙, 세컨 각도, 그린 중앙 순서로 단순하게 운영.",
      principles: ["페어웨이 중앙", "세컨 각도 확보", "그린 중앙 공략"],
      note: "이미지와 홀별 세부 수치는 추후 보완 예정.",
      holesData: buildCenturyHoles("valley", VALLEY_HOLES)
    },
    field: {
      id: "century21.field",
      venueId: "century21",
      key: "field",
      name: "필드",
      nameEn: "Field",
      holes: 9,
      difficulty: "중",
      theme: ["개방감", "바람", "페어웨이"],
      style: "대중제 코스 조합의 한 축. 비교적 열린 시야에서 바람과 방향성이 스코어를 좌우한다.",
      watch: "열린 홀일수록 무리한 구질 만들기보다 반복 가능한 방향을 고른다.",
      play: "티샷 생존, 벙커 회피, 그린 중앙 기준으로 보기 방어.",
      principles: ["티샷 생존 우선", "벙커 방향 제거", "그린 중앙으로 보기 방어"],
      note: "이미지와 홀별 세부 수치는 추후 보완 예정.",
      holesData: buildCenturyHoles("field", FIELD_HOLES)
    },
    lake: {
      id: "century21.lake",
      venueId: "century21",
      key: "lake",
      name: "레이크",
      nameEn: "Lake",
      holes: 9,
      difficulty: "상",
      theme: ["호수", "긴 홀", "거리 배분"],
      style: "회원제 코스 조합의 한 축. Lake 코스는 Par 36, White 3051 yards 자료가 확인된다.",
      watch: "물과 긴 전장에서 무리한 세컨을 피하고, 3샷 계획을 받아들이는 것이 좋다.",
      play: "물 방향을 지우고 페어웨이 중앙, 그린 중앙으로 운영.",
      principles: ["물 방향 지우기", "페어웨이 중앙", "그린 중앙과 2퍼트"],
      note: "Lake White 기준 일부 거리 자료 반영. 나머지 코스 수치는 추후 보완 예정.",
      holesData: buildCenturyHoles("lake", LAKE_HOLES)
    },
    pine: {
      id: "century21.pine",
      venueId: "century21",
      key: "pine",
      name: "파인",
      nameEn: "Pine",
      holes: 9,
      difficulty: "중상",
      theme: ["소나무", "회원제", "자연 지형"],
      style: "레이크와 함께 회원제 코스 조합으로 언급되는 자연형 코스. 수목 라인과 고저차를 같이 봐야 한다.",
      watch: "소나무 라인에 시야가 좁아질 수 있어 목표를 페어웨이 중앙으로 단순화한다.",
      play: "무리한 장타보다 다음 샷이 보이는 곳, 그린 중앙, 2퍼트 기준으로 운영.",
      principles: ["무리한 장타 금지", "다음 샷이 보이는 곳", "그린 중앙과 2퍼트"],
      note: "이미지와 홀별 세부 수치는 추후 보완 예정.",
      holesData: buildCenturyHoles("pine", PINE_HOLES)
    }
  }
};