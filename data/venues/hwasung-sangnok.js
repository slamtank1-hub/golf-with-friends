window.GOLF_VENUES = window.GOLF_VENUES || {};

const HWASUNG_SANGNOK_SOURCE_NOTES = [
  "사용자가 제공한 화성상록CC, 서코스, 남코스, 2026년 6월 26일 오전 라운드 정보를 기준으로 작성.",
  "홀별 상세 거리와 이미지는 추후 실제 자료를 받아 보완 예정.",
  "경사도 이미지는 현재 없음. 데이터에 없는 이미지 탭은 화면에 표시하지 않는다."
];

const HWASUNG_SANGNOK_ASSETS = {
  west: {
    folder: "west",
    prefix: "west",
    courseExt: "gif",
    greenExt: "jpg",
    summaryExtByHole: {
      1: "jpg",
      2: "jpg",
      3: "jpg",
      4: "jpg",
      5: "jpg",
      6: "jpg",
      7: "jpg",
      8: "jpg",
      9: "jpg"
    }
  },
  south: {
    folder: "south",
    prefix: "south",
    courseExt: "png",
    greenExt: "jpg",
    summaryExtByHole: {
      1: "jpg",
      2: "jpg",
      3: "jpg",
      4: "jpg",
      5: "jpg",
      6: "jpg",
      7: "jpg",
      8: "jpg",
      9: "jpg"
    }
  }
};

function hwasungSangnokAssetPaths(courseKey, holeNo) {
  const asset = HWASUNG_SANGNOK_ASSETS[courseKey];
  const base = `assets/hwasung-sangnok/${asset.folder}/${asset.prefix}`;
  const summaryExt = asset.summaryExtByHole[holeNo];
  return {
    ...(summaryExt ? { summaryImage: `${base}summary_hole${holeNo}.${summaryExt}` } : {}),
    assets: {
      course: `${base}course_hole${holeNo}.${asset.courseExt}`,
      green: `${base}green_hole${holeNo}.${asset.greenExt}`
    }
  };
}

function buildHwasungSangnokHole(courseKey, hole) {
  return {
    par: null,
    white: null,
    ...hole,
    id: `hwasung-sangnok.${courseKey}.${String(hole.no).padStart(2, "0")}`,
    ...hwasungSangnokAssetPaths(courseKey, hole.no)
  };
}

function buildHwasungSangnokHoles(courseKey, holes) {
  return holes.map(hole => buildHwasungSangnokHole(courseKey, hole));
}

const HWASUNG_SANGNOK_WEST_HOLES = [
  { no: 1, par: 4, white: "345m", feature: "첫단추 · 내리막티샷 · 중앙좌측", target: "슬라이스가 나기 쉬운 구조이므로 티샷은 페어웨이 중앙보다 약간 좌측을 겨냥.", green: "그린이 뒤에서 앞으로 흐르는 경사." },
  { no: 2, par: 5, white: "485m", feature: "우도그렉 · 우측벙커조심 ·정교한아이언", target: "티샷 시 우측 모서리를 가로지르고 싶은 유혹이 생기지만, 무리한 투온보다는 확실한 3온 전략이 스코어를 지킵니다.", green: "그린 좌우로 벙커가 위협적으로 버티고 있습니다. 핀을 바로 보기보다는 그린 중앙을 안전하게" },
  { no: 3, par: 3, white: "152m", feature: "첫파3 · 맞바람체크 · 실거리위주", target: "시각적으로는 편안해 보이지만 바람의 영향을 많이 받습니다. 티잉 구역에서 숨겨진 맞바람이 불어오는지 꼭 확인하고 클럽을 선택", green: "핀보다 약간 우측을 공략하는 것이 유리함" },
  { no: 4, par: 4, white: "314m", feature: "미들홀 · 정교한아이언 · 그린중앙타깃", target: "세컨샷에서 변별력이 생기는 파4 미들홀", green: "오르막 퍼트가 남는 쪽 선호." },
  { no: 5, par: 4, white: "335m", feature: "오르막지형 · 포대그린 · 한클럽더", target: "완만하게 올라가는 오르막 파4 홀입니다. 세컨샷 지점에서는 경사도를 감안해 실거리보다 반 클럽에서 한 클럽 이상 길게", green: "짧으면 다시 굴러내려올 위험이 있습니다. 정확한 캐리필요" },
  { no: 6, par: 3, white: "135m", feature: "안전한온그린", target: "화성상록CC 특성상 그린 주변의 숨은 바람만 살짝 체크하고 내 평소 스윙 템포대로 부드럽게", green: "무리하게 핀을 직접 꽂으려다 그린 앞 벙커에 빠지는 것만 주의하면 됩니다." },
  { no: 7, par: 5, white: "530m", feature: "★핸디캡 높은 롱홀 · 양측해저드", target: "전방에 오르막 경사지를 넘기는 티샷. 확실한 타깃(캐노피 지붕)을 알고 들어가면 티박스에서의 불안감 감소", green: "전장이 긴 홀이라 써드샷에서도 숏아이언이나 웨지가 아닌 미들아이언 잡아야 할 수 있다. 핀을 바로 보기보다 그린 중앙을 기본으로" },
  { no: 8, par: 4, white: "324m", feature: "★최고 난이도 ·해저드 · 세컨 폰드", target: "세컨은 내리막 폰드를 넘겨야 하므로, 애매하면 한 클럽 여유 있게", green: "그린 중앙 안착이 우선. 폰드를 의식하면 몸이 빨리 열릴 수 있으니, 끝까지 헤드업을 참는 것이 중요" },
  { no: 9, par: 4, white: "331m", feature: "심한 오르막 · 우측 OB · 좁은 그린 주변", target: "우측으로 밀리면 OB 위험이 커지므로, 중앙에서 약간 좌측을 목표로. 세컨은 오르막 때문에 실제 거리보다 길게", green: "짧은 미스보다 중앙까지 보내는 클럽 선택이 좋음" }
];

const HWASUNG_SANGNOK_SOUTH_HOLES = [
  { no: 1, par: 4, white: "380m", feature: "★핸디캡 높은홀 · 우도그렉 · 좌OB", target: "무리하게 중앙만 보지 말고 좌측 암벽 끝 방향을 기준", green: "첫 퍼트는 욕심내지 말고 2퍼트 안쪽으로 붙이는 느낌으로." },
  { no: 2, par: 5, white: "505m", feature: "최장거리 · 하향 Par5 · 3온 전략 ", target: "멀리 치려는 욕심보다 중앙 카트로 좌측 끝 방향으로 안정적으로. 세컨은 투온 욕심은 줄이고 써드샷 하기 좋은 거리", green: "핀이 앞에 있어도 짧게 떨어뜨리기보다 그린 중앙까지 보내는 클럽이 안전" },
  { no: 3, par: 3, white: "144m", feature: "계곡 넘기 · 양쪽 해저드 · 우측 공략", target: "계곡을 의식하면 몸이 빨리 열릴 수 있다. 핀보다 약간 우측을 보고, 한 클럽 편하게 ", green: "그린에 올리는 것이 최우선입니다. 핀을 직접 보지 말고 중앙~우측 중앙을 기준으로" },
  { no: 4, par: 4, white: "355m", feature: "좌도그렉 · 오르막 · 벙커 사이", target: "티샷은 중앙 벙커와 좌측 벙커 사이를 보고 안정적으로, 세컨은 오르막을 감안해 반 클럽~한 클럽 길게", green: "오르막 홀은 짧은 미스가 자주 나옵니다. 그린 앞 벙커를 피하려면 충분한 캐리가 필요" },
  { no: 5, par: 4, white: "367m", feature: "긴 Par4 · 내리막 티샷 · 좌측 시야 차단", target: "내리막이라 멀리 보낼 수 있지만, 좌측은 피해야 합니다.", green: "파온이 부담되면 그린 앞 안전한 곳에 두고 어프로치로 승부하는 것도 좋음" },
  { no: 6, par: 3, white: "155m", feature: "긴 Par3 · 바람 · 좌측 공략", target: "바람을 꼭 확인합니다. 우측에서 좌측으로 바람이 불면, 너무 우측을 보다가 해저드나 벙커 쪽으로 밀릴 수 있으니 핀보다 약간 좌측을 기준으로", green: "핀 위치보다 그린 전체 폭을 보고 안전하게 올리는 것이 우선" },
  { no: 7, par: 5, white: "465m", feature: "파3 가정 · 클럽 여유", target: "짧은 미스보다 중앙까지 가는 클럽. 바람이 있으면 한 클럽 여유.", green: "내리막이면 과감함 줄이기." },
  { no: 8, par: 4, white: "355m", feature: "★최고 난이도 · 심한 오르막 · 세컨 난도", target: "티샷은 무조건 페어웨이 중앙입니다. 오르막과 업다운 때문에 러프에 가면 세컨 거리 계산이 더 어려워", green: "파온 욕심이 강하면 큰 실수가 나올 수 있음. 긴 세컨이 남으면 그린 앞 안전지대에 두고 어프로치로" },
  { no: 9, par: 4, white: "350m", feature: "동코스와 함께 쓰는 원앙그린 · 우측 폰드", target: "우측 폰드를 절대 피해야. 목표를 넓게 보지 말고 페어웨이 중앙에서 약간 안전한 쪽으로 선명하게", green: "핀보다 그린 중앙을 기준으로" }
];

window.GOLF_VENUES["hwasung-sangnok"] = {
  id: "hwasung-sangnok",
  name: "화성상록CC",
  location: "경기 화성",
  holes: 18,
  sourceNotes: HWASUNG_SANGNOK_SOURCE_NOTES,
  courses: {
    west: {
      id: "hwasung-sangnok.west",
      venueId: "hwasung-sangnok",
      key: "west",
      name: "서",
      nameEn: "West",
      holes: 9,
      difficulty: "전략형",
      theme: ["예리한 해저드 라인", "까다로운 2단 그린", "오르막 세컨샷 지형"],
      style: "조밀한 장애물 배치와 그린 주변의 난이도가 높은 '타겟 골프(Target Golf)' 스타일",
      watch: "내리막 파3 홀의 경우 시각적인 고저차 극복 및 그린 단수 확인필수.",
      play: "아기자기하며 섬세한 플레이가 요구되는 서코스는 골퍼들에게 모험과 도전정신을 자극하고 다양한 공략과 두뇌플레이를 요구하는 전략적 코스로 난이도가 적절히 균형있게 배합되어 있다.",
      principles: ["정확한 티샷 IP 매니지먼트", "그린 중앙 우선 공략"],
      note: "좌우 OB와 해저드 경계선이 엄격하고, 그린 앞 벙커나 2단 경사 등 숏게임 능력 등의 정교함 필요.",
      holesData: buildHwasungSangnokHoles("west", HWASUNG_SANGNOK_WEST_HOLES)
    },
    south: {
      id: "hwasung-sangnok.south",
      venueId: "hwasung-sangnok",
      key: "south",
      name: "남",
      nameEn: "South",
      holes: 9,
      difficulty: "중상",
      theme: ["전형적인 한국형 산악코스", "호쾌한 장타 구역 (하향식 도그렉)", "천연 암벽과 법면"],
      style: "고저차가 확실한 하향(내리막) 홀이 많아 비거리 이득을 보기 좋지만, 그만큼 IP(인드롭 포인트) 부근에서 슬라이스가 나면 우측 해저드나 OB 구역으로 여지없이 밀리는 구조",
      watch: "후반으로 갈수록 스윙이 급해지기 쉬우니 루틴을 줄이지 않고 목표를 단순하게 잡는다.",
      play: "구릉지를 따라 부드러운 실루엣으로 파노라마처럼 펼쳐지는 남코스는 정교한 테크닉이 요구되는 여성적인 코스로 아기자기한 구릉과 탁트인 인공호수가 절경을 이루어 14개의 골프채를 골고루 사용할 수 있도록 전략적 요소를 가미한 섬세한 코스",
      principles: ["암벽 법면 적극 활용", "안전한 파온전략", "계곡 홀의 정밀한 거리 계산"],
      note: "페어웨이는 비교적 넓어 보이나 타겟 라인이 꺾여 있는 도그렉 홀이 많아 영리한 랜딩 지점 설정이 필요.",
      holesData: buildHwasungSangnokHoles("south", HWASUNG_SANGNOK_SOUTH_HOLES)
    }
  }
};
