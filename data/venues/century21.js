window.GOLF_VENUES = window.GOLF_VENUES || {};

const CENTURY21_ASSETS = {
  valley: { folder: "valley", prefix: "valley" },
  field: { folder: "field", prefix: "field" },
  lake: { folder: "lake", prefix: "lake" },
  pine: { folder: "pine", prefix: "pine" }
};

const CENTURY21_SOURCE_NOTES = [
  "공식 홈페이지: 센추리21 컨트리클럽은 강원 원주시 문막읍 궁말길 193에 위치하며 Pine, Lake, Field, Valley, Mountain 45홀 구성.",
  "Golfify 공개 스코어카드: Valley, Field, Lake, Pine 코스의 Back / Regular / Ladies 티박스별 야드 거리와 Par 자료를 반영.",
  "본 파일은 실제 플레이 예정 코스인 Valley, Field, Lake, Pine 36홀만 앱 데이터로 정리하고 Mountain 코스는 제외.",
  "거리 단위는 공개 스코어카드 기준 yards이며, 앱 표기는 y로 통일. 현장 티마커 운영과 실제 핀 위치에 따라 체감 거리는 달라질 수 있음."
];

function centuryAssetPaths(courseKey, holeNo) {
  const asset = CENTURY21_ASSETS[courseKey];
  return {
    summaryImage: `assets/century21/${asset.folder}/${asset.prefix}summary_hole${holeNo}.jpg`,
    assets: {
      course: `assets/century21/${asset.folder}/${asset.prefix}course_hole${holeNo}.png`,
      slope: `assets/century21/${asset.folder}/${asset.prefix}slope_hole${holeNo}.png`,
      green: `assets/century21/${asset.folder}/${asset.prefix}green_hole${holeNo}.jpg`
    }
  };
}

function buildCenturyHole(courseKey, hole) {
  return {
    par: "확인 예정",
    back: "확인 예정",
    regular: "확인 예정",
    white: "확인 예정",
    ladies: "확인 예정",
    si: "확인 예정",
    ...hole,
    id: `century21.${courseKey}.${String(hole.no).padStart(2, "0")}`,
    ...centuryAssetPaths(courseKey, hole.no)
  };
}

function buildCenturyHoles(courseKey, holes) {
  return holes.map(hole => buildCenturyHole(courseKey, hole));
}

const VALLEY_HOLES = [
  { no: 1, par: 4, back: "375y", regular: "354y", white: "354y", ladies: "303y", si: 9, feature: "출발 Par 4 · 계곡 지형 · 방향성", target: "첫 홀은 장타보다 공을 살리는 티샷. 무리하지 말고 페어웨이 중앙으로 80% 리듬을 만든다.", green: "첫 퍼트는 라인보다 거리감 확인. 짧은 퍼트를 남기는 쪽으로." },
  { no: 2, par: 4, back: "452y", regular: "386y", white: "386y", ladies: "337y", si: 5, feature: "긴 Par 4 · 수목 라인 · 세컨 부담", target: "Regular 기준 353m로 세컨이 남을 수 있다. 티샷은 넓은 쪽으로 보내고, 세컨은 핀보다 그린 중앙 또는 어프로치 쉬운 방향.", green: "그린우측에 숨은 벙커가 있어 그린좌측이나 중앙의 넓은 면으로." },
  { no: 3, par: 3, back: "174y", regular: "145y", white: "145y", ladies: "123y", si: 8, feature: "Par 3 · 클럽 선택 · 중앙 온그린", target: "핀보다 그린 중앙. 바람이나 고저차가 느껴지면 한 클럽 보수적으로 선택한다.", green: "오르막/내리막 퍼트 방향을 먼저 확인하고 속도를 맞춘다." },
  { no: 4, par: 5, back: "580y", regular: "467y", white: "467y", ladies: "401y", si: 1, feature: "핸디캡 홀 · Par 5 · 3샷 계획", target: "오른쪽이 막혀있어 왼쪽으로 가는 경향이 있다. 오히려 약간 중앙 우측을 겨냥. 긴 Par 5는 무리한 2온보다 3샷 설계. 위험 구역 앞에서 끊고 편한 서드샷 거리를 남긴다.", green: "넓은 면에 올리는 것이 우선. 첫 퍼트는 거리감만 맞춰도 성공." },
  { no: 5, par: 3, back: "180y", regular: "138y", white: "138y", ladies: "103y", si: 2, feature: "Par 3 · 거리감 · 짧은 미스 주의", target: "핸디캡이 높은 파3. 짧은 미스보다 중앙까지 확실히 보내는 클럽 선택이 좋다. 우측 해저드를 피하려다 좌측으로 말리는 경우많음", green: "핀 하이보다 중앙. 3퍼트를 막는 속도 조절 우선." },
  { no: 6, par: 4, back: "360y", regular: "322y", white: "322y", ladies: "278y", si: 1, feature: "★최고 난이도 · 방향성 · 보기 방어", target: "전장은 짧지만 그린까지 상당한 오르막인 홀. 티샷은 중앙 라인 유지. 위험 쪽 핀은 포기하고 세컨은 그린 중앙 또는 앞 안전 구역.", green: "착지 후 구르는 방향 확인. 내리막 퍼트가 남으면 보수적으로." },
  { no: 7, par: 4, back: "404y", regular: "385y", white: "385y", ladies: "301y", si: 7, feature: "블라인드 · 페어웨이 우선 · 세컨 각도", target: "에이밍을 좌측으로 하는 경우가 많은데 정중안이나 살짝 우측이 유리. 티샷 생존이 우선이고, 세컨은 핀보다 넓은 면을 본다.", green: "첫 퍼트 속도 우선. 보기 방어가 좋은 결과다." },
  { no: 8, par: 4, back: "447y", regular: "405y", white: "405y", ladies: "362y", si: 6, feature: "매우 긴 Par 4 · 큰 사고 방지 · 집중", target: "매우 긴 파4 홀.  오른쪽 여유가 없으니 OB를 두려워 하지말고 좌측에이밍. 무리한 장타보다 페어웨이 안착, 세컨은 짧아도 어프로치 쉬운 방향으로 보낸다.", green: "긴 퍼트가 남아도 괜찮다. 첫 퍼트는 홀 근처에 붙이는 생각." },
  { no: 9, par: 5, back: "523y", regular: "462y", white: "462y", ladies: "418y", si: 7, feature: "마무리 Par 5 · 거리 배분 · 중앙", target: "티샷은 중앙 라인. 세컨은 벙커와 숲을 확실히 피하고 서드샷 각도를 만든다.", green: "마지막 홀은 2퍼트 기준. 짧지 않게 거리감을 맞춘다." }
];

const FIELD_HOLES = [
  { no: 1, par: 4, back: "450y", regular: "343y", white: "343y", ladies: "304y", si: 9, feature: "출발 Par 4 · 개방감 · 페어웨이", target: "출발 홀은 페어웨이 중앙으로 단순하게. 넓어 보여도 첫 샷은 80% 리듬이 좋다. 티샷은 중앙보다 살짝 우측", green: "첫 퍼트는 거리감 확인. 다음 홀 기준 만들기." },
  { no: 2, par: 4, back: "384y", regular: "317y", white: "317y", ladies: "274y", si: 5, feature: "중간 Par 4 · 좌우OB · 방향성", target: "좌측 벙커를 피해 살짝 우측으로. 짧지만 오르막이 심한홀, 세컨 각도가 좋은 페어웨이 쪽을 선택한다.", green: "핀보다 중앙. 옆 경사는 과하게 보지 않는다." },
  { no: 3, par: 5, back: "508y", regular: "459y", white: "459y", ladies: "420y", si: 4, feature: "Par 5 · 좁은 랜딩존 · 3샷 운영", target: "티샷은 페어웨이 우선. 세컨은 그린 욕심보다 좋은 서드샷 거리와 각도를 남긴다.", green: "좁은 땅콩그린이라 띄워서 공략. 첫 퍼트는 거리감 우선." },
  { no: 4, par: 3, back: "219y", regular: "143y", white: "143y", ladies: "131y", si: 6, feature: "Par 3 · 클럽 선택 · 짧은 미스 금지", target: "핀보다 그린 중앙을 기준으로 하고, 앞쪽 위험은 확실히 넘긴다.", green: "핀보다 중앙. 2퍼트만 해도 좋은 결과." },
  { no: 5, par: 4, back: "338y", regular: "307y", white: "307y", ladies: "260y", si: 3, feature: "전략 Par 4 · 벙커 회피 · 세컨 정확도", target: "장타자는 막창주의, 좌측으로가면 세턴에서 그린 안보임.", green: "첫 퍼트 속도. 짧은 퍼트 남기는 위치가 좋다." },
  { no: 6, par: 3, back: "157y", regular: "136y", white: "136y", ladies: "74y", si: 8, feature: "짧은 Par 3 · 경사 확인 · 중앙", target: "거리 욕심보다 중앙 온그린. 왼쪽으로 당겨지는 샷주의. 바람이 있으면 클럽을 보수적으로 잡는다. ", green: "굴러가는 방향 체크. 내리막 퍼트는 짧게 남긴다." },
  { no: 7, par: 4, back: "373y", regular: "343y", white: "343y", ladies: "206y", si: 7, feature: "후반 Par 4 · 방향성 · 세컨 각도", target: "우측OB이나 왼쪽으로 가면 그린이 안보임. 중앙 우측으로 다음 샷 각도를 확보하는 티샷이 가장 중요하다.", green: "오르막 퍼트가 남는 쪽 선호. 무리한 핀 공략 금지." },
  { no: 8, par: 5, back: "595y", regular: "502y", white: "502y", ladies: "455y", si: 1, feature: "★최고 난이도 · 긴 Par 5 · 거리 배분", target: "가장 긴 축의 Par 5. 장타보다 3샷 계획, 세컨은 위험 구역을 피하는 레이업이 핵심. 우측에 위험요소가 몰려있어 좌측으로 공략하는게 유리", green: "핀보다 중앙. 올리고 2퍼트면 충분하다." },
  { no: 9, par: 4, back: "506y", regular: "467y", white: "467y", ladies: "414y", si: 2, feature: "마무리 장거리 Par 4 · 보기 방어 · 페어웨이", target: "매우 긴 마무리 홀. 티샷은 생존, 세컨은 그린 주변 안전 구역까지 보내는 생각이 현실적이다.", green: "롱퍼트가 남아도 괜찮다. 첫 퍼트는 짧지 않게." }
];

const LAKE_HOLES = [
  { no: 1, par: 4, back: "461y", regular: "402y", white: "402y", ladies: "384y", si: 6, feature: "레이크 시작 · 물 의식 · 긴 Par 4", target: "첫 홀부터 길다. 물을 의식해 힘이 들어가지 않게 중앙 라인으로 출발한다.", green: "첫 퍼트 거리감. 무리한 버디보다 파/보기 방어." },
  { no: 2, par: 5, back: "581y", regular: "529y", white: "529y", ladies: "518y", si: 2, feature: "긴 Par 5 · 3샷 계획 · 세컨 욕심 금지", target: "티샷은 넓은 쪽, 오른쪽을 밀리면 시야 방해됨. 세컨은 안전한 거리. 긴 홀이라 한 번에 만회하려는 샷을 피한다.", green: "중앙에 올리고 2퍼트. 서드샷 거리감이 핵심." },
  { no: 3, par: 3, back: "205y", regular: "162y", white: "162y", ladies: "135y", si: 4, feature: "Par 3 · 물/벙커 회피 · 거리감", target: "핀보다 그린 중앙. 짧은 미스가 위험하면 한 클럽 넉넉하게 본다.", green: "첫 퍼트 속도. 다른 단이면 무조건 2퍼트 목표." },
  { no: 4, par: 4, back: "353y", regular: "277y", white: "277y", ladies: "224y", si: 9, feature: "짧은 Par 4 · 유혹 · 클럽 선택", target: "드라이버가 부담되면 우드/유틸로 위치 잡기. 짧은 홀일수록 티샷 실수가 더 아프다.", green: "핀보다 넓은 면. 어프로치 쉬운 쪽으로 남긴다." },
  { no: 5, par: 4, back: "394y", regular: "308y", white: "308y", ladies: "303y", si: 3, feature: "중간 Par 4 · 방향성 · 세컨 정확도", target: "중앙 라인 유지. 세컨은 핀 위치보다 안전한 착지 면을 먼저 본다.", green: "중앙 공략. 첫 퍼트는 거리 조절." },
  { no: 6, par: 3, back: "208y", regular: "146y", white: "146y", ladies: "132y", si: 5, feature: "Par 3 · 클럽 선택 · 바람", target: "한 클럽 보수적으로 그린 중앙. 바람이 있으면 탄도보다 방향성을 우선한다.", green: "거리감 우선. 옆 경사보다 속도." },
  { no: 7, par: 5, back: "527y", regular: "515y", white: "515y", ladies: "498y", si: 1, feature: "★최고 난이도· 긴 전장 · 인내", target: " 긴 Par 5. 위험 구역을 피하고 다음 샷 거리를 남기는 운영이 좋다.", green: "올리면 성공, 2퍼트 기준. 핀보다 중앙." },
  { no: 8, par: 4, back: "396y", regular: "335y", white: "335y", ladies: "310y", si: 8, feature: "마무리 전 Par 4 · 페어웨이 · 그린 중앙", target: "중앙 라인. 짧은 미스보다 방향 미스를 줄이고, 세컨은 그린 중앙으로 보낸다.", green: "오르막 퍼트 남기기. 첫 퍼트는 짧지 않게." },
  { no: 9, par: 4, back: "424y", regular: "337y", white: "337y", ladies: "348y", si: 7, feature: "레이크 마무리 · 큰 사고 방지 · 방향성", target: "중앙 라인으로 안전하게. 마지막 홀에서 무리한 핀 공략보다 보기 이상 방어가 중요하다.", green: "2퍼트 마무리. 내리막이면 과감함을 줄인다." }
];

const PINE_HOLES = [
  { no: 1, par: 4, back: "399y", regular: "324y", white: "324y", ladies: "319y", si: 9, feature: "수목 · 방향성", target: "첫 홀은 방향성 우선. 페어웨이 중앙으로 80% 리듬을 만든다.", green: "거리감 확인. 첫 퍼트는 넣기보다 붙이기." },
  { no: 2, par: 3, back: "208y", regular: "162y", white: "162y", ladies: "153y", si: 6, feature: "Par 3 · 거리감 · 바람", target: "거리부담 있는 파3. 핀보다 그린 넓은 면을 보고 짧은 미스를 피한다.", green: "속도 우선. 롱퍼트면 2퍼트 기준." },
  { no: 3, par: 5, back: "603y", regular: "524y", white: "524y", ladies: "501y", si: 2, feature: "긴 Par 5 · 자연 지형 · 3샷 운영", target: "장거리 Par 5. 티샷은 넓은 쪽, 세컨은 다음 샷이 보이는 곳으로 안전하게 보낸다.", green: "중앙 공략. 3온 후 2퍼트면 좋은 운영." },
  { no: 4, par: 4, back: "309y", regular: "288y", white: "288y", ladies: "238y", si: 4, feature: "짧은 Par 4 · 선택의 홀 · 세컨 각도", target: "짧아 보여도 무리한 장타 금지. 다음 샷이 편한 페어웨이 지점을 목표로 한다.", green: "넓은 면 공략. 짧은 어프로치도 핀보다 중앙." },
  { no: 5, par: 4, back: "470y", regular: "430y", white: "430y", ladies: "425y", si: 1, feature: "★최고 난이도 · 긴 Par 4 · 보기 방어", target: "매우 긴 Par 4. 티샷 생존이 최우선이고, 세컨은 그린 앞 안전 구역까지 보내도 좋다.", green: "2퍼트 기준. 긴 퍼트는 거리만 맞춘다." },
  { no: 6, par: 3, back: "219y", regular: "168y", white: "168y", ladies: "160y", si: 3, feature: "긴 Par 3 · 클럽 선택 · 중앙", target: "핀보다 그린 중앙. 짧아도 중앙 라인을 지키고 벙커 방향은 제외한다.", green: "굴러가는 방향 확인. 내리막 퍼트가 길면 보수적으로." },
  { no: 7, par: 5, back: "510y", regular: "440y", white: "440y", ladies: "420y", si: 7, feature: "짧은 Par 5 · 3온 설계 · 욕심 관리", target: "무리한 2온보다 좋은 서드샷 거리 만들기. 페어웨이 중앙을 지키면 기회가 온다.", green: "첫 퍼트 속도. 핀보다 중앙이 안전하다." },
  { no: 8, par: 4, back: "367y", regular: "314y", white: "314y", ladies: "272y", si: 8, feature: "전략 Par 4 · 세컨 위치 · 중앙", target: "티샷은 페어웨이 중앙. 세컨은 그린 중앙 공략으로 보기 방어 라인을 만든다.", green: "오르막 퍼트 선호. 과한 라인보다 거리감." },
  { no: 9, par: 4, back: "419y", regular: "344y", white: "344y", ladies: "327y", si: 5, feature: "피날레 Par 4 · 큰 사고 방지 · 마무리", target: "중앙 라인. 위험 방향을 제외하고 마지막 티샷을 안전하게 보낸다.", green: "짧지 않게 2퍼트. 마지막 홀은 욕심보다 마무리." }
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
      difficulty: "상",
      theme: ["계곡 지형", "긴 Par 4", "방향성"],
      style: "계곡과 수목 라인이 만드는 시각적 압박이 있는 코스. 긴 Par 4와 핸디캡 높은 Par 5가 있어 장타보다 다음 샷 위치를 남기는 운영이 중요하다.",
      watch: "초반부터 장타 욕심을 줄이고, 계곡/숲 방향 미스를 확실히 피한다. 긴 홀에서는 그린을 바로 노리기보다 보기 방어 루트를 먼저 정한다.",
      play: "페어웨이 중앙, 세컨 각도, 그린 중앙 순서로 단순하게 운영. 4번·6번·8번은 무리한 만회보다 끊어가기가 안전하다.",
      principles: ["페어웨이 중앙", "긴 홀은 보기 방어", "그린 중앙 공략"],
      note: "계곡 지형이라 방향이 흔들리면 바로 스코어가 무너진다. 멀리 치려 하지 말고, 처음부터 페어웨이 중앙만 보고 가자.",
      holesData: buildCenturyHoles("valley", VALLEY_HOLES)
    },
    field: {
      id: "century21.field",
      venueId: "century21",
      key: "field",
      name: "필드",
      nameEn: "Field",
      holes: 9,
      difficulty: "상",
      theme: ["개방감", "바람", "긴 마무리"],
      style: "비교적 열린 시야가 있지만 바람과 긴 전장이 변수인 코스. 특히 8번 Par 5와 9번 Par 4는 무리한 공격보다 거리 배분이 필요하다.",
      watch: "열린 홀일수록 힘이 들어가기 쉽다. 무리한 구질 만들기보다 반복 가능한 방향을 고르고, 긴 홀은 안전한 다음 샷 위치를 먼저 본다.",
      play: "티샷 생존, 벙커 회피, 그린 중앙 기준으로 보기 방어. 8번·9번은 파보다 큰 실수 방지가 목표다.",
      principles: ["티샷 생존 우선", "벙커 방향 제거", "긴 홀은 3샷/보기 방어"],
      note: "4개 코스 중 가장 편하게 접근할 수 있는 코스다. 그래도 넓어 보인다고 방심하지 말고, 바람과 리듬만 지키자.",
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
      style: "물과 긴 전장이 함께 압박을 주는 코스. Lake 코스는 Par 36, Regular 3011y 자료가 확인되며 1번·2번·7번이 특히 길게 느껴진다.",
      watch: "물과 긴 전장에서 무리한 세컨을 피하고, 3샷 계획을 받아들이는 것이 좋다. 위험 방향을 지우는 에이밍이 먼저다.",
      play: "물 방향을 지우고 페어웨이 중앙, 그린 중앙으로 운영. 짧은 4번 Par 4도 드라이버 욕심보다 위치 선정이 중요하다.",
      principles: ["물 방향 지우기", "긴 홀은 3샷 계획", "그린 중앙과 2퍼트"],
      note: "4개 코스 중 가장 어려운 코스라고 생각하고 시작하자. 물과 긴 홀 앞에서는 마음을 비우고, 3온·2퍼트면 충분하다.",
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
      theme: ["소나무", "회원제", "긴 핸디캡 홀"],
      style: "소나무 라인과 자연 지형을 같이 봐야 하는 코스. Regular 2994y로 총 거리는 과하지 않지만 3번 Par 5와 5번 Par 4가 스코어를 크게 흔들 수 있다.",
      watch: "소나무 라인에 시야가 좁아질 수 있어 목표를 페어웨이 중앙으로 단순화한다. 긴 홀에서는 그린을 직접 노리기보다 다음 샷이 보이는 곳을 택한다.",
      play: "무리한 장타보다 다음 샷이 보이는 곳, 그린 중앙, 2퍼트 기준으로 운영. 5번은 파보다 보기 방어가 현실적이다.",
      principles: ["무리한 장타 금지", "다음 샷이 보이는 곳", "그린 중앙과 2퍼트"],
      note: "수목 라인과 긴 홀이 은근히 부담을 주는 마무리 코스다. 마지막까지 무리하지 말고, 다음 샷이 보이는 곳으로 보내자.",
      holesData: buildCenturyHoles("pine", PINE_HOLES)
    }
  }
};
