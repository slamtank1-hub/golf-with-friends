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
    elevation: "현장/이미지 확인",
    ...hole,
    id: `century21.${courseKey}.${String(hole.no).padStart(2, "0")}`
  };
}

function buildCenturyHoles(courseKey, holes) {
  return holes.map(hole => buildCenturyHole(courseKey, hole));
}

const VALLEY_HOLES = [
  { no: 1, mood: "출발 홀 · 계곡 지형 · 방향성", landing: "첫 홀은 계곡 라인을 의식하되 목표를 페어웨이 중앙으로 단순화", target: "티샷은 80% 리듬. 장타보다 공을 살리는 출발.", danger: "초반 힘 들어간 티샷, 좌우 숲", safe: "중앙 랜딩 후 그린 중앙", green: "첫 퍼트는 라인보다 거리감 확인." },
  { no: 2, mood: "수목 라인 · 랜딩존 · 세컨 각도", landing: "나무 사이 시야보다 실제 착지 폭을 먼저 보기", target: "페어웨이 넓은 쪽. 세컨 각도 남기기.", danger: "나무 쪽으로 감기는 샷", safe: "다음 샷이 보이는 위치", green: "핀보다 넓은 면에 올리기." },
  { no: 3, mood: "고저차 확인 · 클럽 선택 · 중앙", landing: "고저차를 감안해 목표 지점을 보수적으로", target: "무리한 핀 공략보다 그린 중앙.", danger: "짧은 클럽 선택, 좌우 미스", safe: "중앙 착지 후 2퍼트", green: "오르막/내리막 퍼트 방향 먼저 확인." },
  { no: 4, mood: "긴 홀 · 끊어가기 · 리듬", landing: "장타보다 다음 샷 각도를 남기는 위치", target: "위험 구역 앞에서 끊고 편한 거리 남기기.", danger: "무리한 세컨, 계곡 방향", safe: "3온 전략 허용", green: "넓은 면에 올리고 첫 퍼트 거리감." },
  { no: 5, mood: "중간 홀 · 벙커 회피 · 2퍼트", landing: "벙커와 러프 방향을 먼저 제거", target: "짧은 미스보다 방향 미스를 줄이기.", danger: "벙커 방향 핀 공략", safe: "중앙 크게 보고 2퍼트", green: "핀 하이보다 중앙." },
  { no: 6, mood: "후반 진입 · 방향성 · 런 계산", landing: "경사에 따른 런을 보고 목표를 짧게 잡기", target: "중앙 라인 유지. 위험 쪽 핀은 포기.", danger: "오버 런, 좌우 큰 미스", safe: "짧아도 중앙", green: "착지 후 구르는 방향 확인." },
  { no: 7, mood: "파3 가정 · 거리감 · 바람", landing: "바람과 고저차를 같이 보고 클럽 선택", target: "핀보다 그린 넓은 면.", danger: "짧은 미스, 핀 욕심", safe: "중앙 착지", green: "첫 퍼트 속도 우선." },
  { no: 8, mood: "마무리 전 · 페어웨이 우선 · 집중", landing: "스코어 만회보다 공을 살리는 선택", target: "티샷은 중앙. 세컨은 안전 면.", danger: "만회 장타", safe: "페어웨이 우선", green: "내리막 퍼트가 길면 보수적으로." },
  { no: 9, mood: "전반 마무리 · 큰 사고 방지 · 중앙", landing: "마지막 홀 욕심보다 큰 미스 제거", target: "중앙 라인. 벙커와 숲을 확실히 피하기.", danger: "마지막 홀 욕심", safe: "중앙 랜딩, 그린 중앙", green: "2퍼트 기준으로 마무리." }
];

const FIELD_HOLES = [
  { no: 1, mood: "넓은 시야 · 출발 · 페어웨이", landing: "필드 코스는 시작부터 리듬과 방향성 확인", target: "페어웨이 중앙으로 단순하게 시작.", danger: "첫 홀 장타 욕심", safe: "중앙 랜딩", green: "거리감 확인." },
  { no: 2, mood: "개방감 · 바람 · 클럽 선택", landing: "열린 지형이면 바람 영향을 먼저 보기", target: "구질을 만들기보다 안정적인 방향.", danger: "바람 무시, 좌우 미스", safe: "낮고 단순한 목표", green: "핀보다 중앙." },
  { no: 3, mood: "랜딩존 · 벙커 · 세컨", landing: "벙커 위치를 보고 피할 쪽 먼저 결정", target: "세컨 각도 좋은 페어웨이.", danger: "벙커 넘기기 욕심", safe: "벙커 반대쪽", green: "넓은 면에 올리기." },
  { no: 4, mood: "긴 홀 · 거리 배분 · 끊어가기", landing: "남길 거리를 정하고 티샷", target: "장타보다 3샷 계획.", danger: "무리한 세컨", safe: "3온 허용", green: "핀보다 중앙." },
  { no: 5, mood: "중간 홀 · 집중 · 그린 중앙", landing: "중간 홀에서 루틴을 다시 고정", target: "중앙 라인. 짧은 미스 금지.", danger: "핀 직선 공략", safe: "그린 중앙", green: "첫 퍼트 속도." },
  { no: 6, mood: "경사 확인 · 런 · 보수", landing: "런이 커지는 방향 확인", target: "중앙 라인을 지키기.", danger: "오버 런", safe: "짧아도 중앙", green: "굴러가는 방향 체크." },
  { no: 7, mood: "파3 가정 · 클럽 선택 · 안전", landing: "핀보다 그린 면적 우선", target: "한 클럽 여유 있게 중앙.", danger: "짧은 벙커", safe: "중앙 착지", green: "2퍼트 우선." },
  { no: 8, mood: "후반 집중 · 방향성 · 세컨 각도", landing: "티샷 생존이 우선", target: "페어웨이 중앙. 다음 샷 각도 확보.", danger: "만회 장타", safe: "안전한 폭", green: "오르막 퍼트 남기기." },
  { no: 9, mood: "마무리 · 페어웨이 · 2퍼트", landing: "큰 사고 없이 필드 코스 마무리", target: "중앙 라인. 위험 구역 피하기.", danger: "마지막 홀 욕심", safe: "중앙 랜딩", green: "짧지 않게 첫 퍼트." }
];

const LAKE_HOLES = [
  { no: 1, par: 4, white: "402y", mood: "레이크 시작 · 물 의식 · 방향성", landing: "물보다 페어웨이 중앙에 시선을 고정", target: "첫 홀은 공을 살리는 티샷.", danger: "물 의식한 당김/밀림", safe: "중앙 랜딩", green: "첫 퍼트 거리감." },
  { no: 2, par: 5, white: "529y", mood: "긴 홀 · 3샷 계획 · 세컨 욕심 금지", landing: "투온보다 세 번째 샷 거리 설계", target: "티샷은 넓은 쪽, 세컨은 안전한 거리.", danger: "무리한 세컨", safe: "3온 전략", green: "중앙에 올리고 2퍼트." },
  { no: 3, par: 3, white: "162y", mood: "파3 · 물/벙커 회피 · 거리감", landing: "짧은 미스를 먼저 제거", target: "핀보다 그린 중앙.", danger: "짧은 클럽 선택", safe: "중앙 착지", green: "첫 퍼트 속도." },
  { no: 4, par: 4, white: "277y", mood: "짧은 파4 · 유혹 · 클럽 선택", landing: "짧아 보여도 위험 방향 먼저 확인", target: "드라이버가 부담되면 짧은 클럽으로 위치 잡기.", danger: "원온 욕심", safe: "페어웨이 중앙", green: "핀보다 넓은 면." },
  { no: 5, par: 4, white: "308y", mood: "중간 파4 · 방향성 · 세컨", landing: "세컨이 편한 쪽으로 티샷", target: "중앙 라인 유지.", danger: "좌우 큰 미스", safe: "다음 샷 보이는 위치", green: "중앙 공략." },
  { no: 6, par: 3, white: "146y", mood: "짧은 파3 · 클럽 선택 · 바람", landing: "바람과 고저차 확인", target: "한 클럽 보수적으로 그린 중앙.", danger: "짧은 미스", safe: "중앙 착지", green: "거리감 우선." },
  { no: 7, par: 5, white: "515y", mood: "핸디캡 홀 · 긴 전장 · 인내", landing: "가장 어려운 홀로 보고 3샷 계획", target: "위험 구역 피하고 다음 샷 거리 남기기.", danger: "세컨 욕심, 긴 러프", safe: "페어웨이 우선", green: "올리면 성공, 2퍼트 기준." },
  { no: 8, par: 4, white: "335y", mood: "마무리 전 · 페어웨이 · 그린 중앙", landing: "페어웨이에 두고 세컨 승부", target: "중앙 라인. 짧은 미스 금지.", danger: "핀 욕심", safe: "그린 중앙", green: "오르막 퍼트 남기기." },
  { no: 9, par: 4, white: "377y", mood: "레이크 마무리 · 큰 사고 방지", landing: "마지막까지 물/벙커 방향 제거", target: "중앙 라인으로 안전하게.", danger: "마지막 장타 욕심", safe: "중앙 랜딩", green: "2퍼트 마무리." }
];

const PINE_HOLES = [
  { no: 1, mood: "회원제 코스 · 출발 · 수목", landing: "수목 라인을 보고 페어웨이 중앙으로 시작", target: "첫 홀은 방향성 우선.", danger: "초반 장타 욕심", safe: "중앙 랜딩", green: "거리감 확인." },
  { no: 2, mood: "자연 지형 · 세컨 각도 · 중앙", landing: "착지 폭과 세컨 각도를 같이 보기", target: "넓은 쪽으로 티샷.", danger: "나무 방향 미스", safe: "다음 샷 보이는 위치", green: "중앙 공략." },
  { no: 3, mood: "파3 가정 · 거리감 · 바람", landing: "바람과 고저차 확인", target: "핀보다 그린 넓은 면.", danger: "짧은 미스", safe: "중앙 착지", green: "속도 우선." },
  { no: 4, mood: "긴 홀 · 끊어가기 · 안전", landing: "무리하지 않고 다음 샷 거리 설계", target: "페어웨이 우선.", danger: "무리한 세컨", safe: "3온 허용", green: "넓은 면 공략." },
  { no: 5, mood: "중간 홀 · 벙커 회피 · 2퍼트", landing: "벙커 방향을 먼저 제거", target: "중앙 라인 유지.", danger: "핀 욕심", safe: "그린 중앙", green: "2퍼트 기준." },
  { no: 6, mood: "런 계산 · 경사 · 보수", landing: "경사와 런을 보고 목표 설정", target: "짧아도 중앙.", danger: "오버 런", safe: "중앙 착지", green: "굴러가는 방향 확인." },
  { no: 7, mood: "후반 집중 · 방향성 · 리듬", landing: "루틴을 짧게 고정", target: "페어웨이 중앙.", danger: "체력 저하 미스", safe: "안전한 폭", green: "첫 퍼트 속도." },
  { no: 8, mood: "마무리 전 · 세컨 위치 · 중앙", landing: "세컨 위치가 좋은 곳으로 티샷", target: "그린 중앙 공략.", danger: "짧은 세컨", safe: "한 클럽 여유", green: "오르막 퍼트 선호." },
  { no: 9, mood: "피날레 · 큰 사고 방지 · 마무리", landing: "마지막 홀은 공을 살리는 선택", target: "중앙 라인. 위험 방향 제외.", danger: "마지막 홀 욕심", safe: "중앙 랜딩", green: "짧지 않게 2퍼트." }
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