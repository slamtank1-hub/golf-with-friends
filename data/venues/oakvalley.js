window.GOLF_VENUES = window.GOLF_VENUES || {};

const OAKVALLEY_ASSETS = {
  pine: { folder: "fine", prefix: "pine" },
  maple: { folder: "maple", prefix: "maple" },
  oak: { folder: "oak", prefix: "oak" },
  cherry: { folder: "cherry", prefix: "cherry" }
};

const OAKVALLEY_SOURCE_NOTES = [
  "대한골프협회 코스레이팅 자료: 오크밸리CC는 오크, 메이플, 파인, 체리 4개 코스 구성.",
  "공개 코스 리뷰 자료: 산악 지형, 홀 간 분리감, 수목/호수/계류를 활용한 36홀 코스.",
  "언론 보도: 2026년 리뉴얼로 파인 9번 홀 재구성, 전 홀 벙커 규사 교체, 체리 1번 홀 하프웨이 하우스 신설.",
  "언론 보도: 메이플/체리 코스 편의시설 보강 및 체리 후반 홀 야간 조명 설치 이력."
];

function assetPaths(courseKey, holeNo) {
  const asset = OAKVALLEY_ASSETS[courseKey];
  return {
    summaryImage: `assets/oakvalley/${asset.folder}/${asset.prefix}summary_hole${holeNo}.png`,
    assets: {
      course: `assets/oakvalley/${asset.folder}/${asset.prefix}course_hole${holeNo}.png`,
      slope: `assets/oakvalley/${asset.folder}/${asset.prefix}slope_hole${holeNo}.png`,
      green: `assets/oakvalley/${asset.folder}/${asset.prefix}green_hole${holeNo}.jpg`
    }
  };
}

function buildHole(courseKey, hole) {
  return {
    par: "확인 예정",
    white: "확인 예정",
    elevation: "경사 이미지 확인",
    ...hole,
    id: `oakvalley.${courseKey}.${String(hole.no).padStart(2, "0")}`,
    ...assetPaths(courseKey, hole.no)
  };
}

function buildHoles(courseKey, holes) {
  return holes.map(hole => buildHole(courseKey, hole));
}

const PINE_HOLES = [
  { no: 1, par: 4, white: "347m", mood: "우측 해저드 배제, 안전한 출발", landing: "첫 홀은 넓은 쪽으로 보고 티샷 리듬을 만드는 홀", target: "페어웨이 중앙. 몸이 덜 풀린 상태라 80% 스윙으로 시작.", danger: "초반 힘 들어간 티샷, 좌우 큰 미스", safe: "중앙 랜딩 후 그린 중앙", green: "첫 퍼트는 라인보다 거리감 확인. 짧은 퍼트 남기는 방향." },
  { no: 2, par: 4, white: "364m", mood: "좌측 2단 페어웨이 활용, 철저한 3온 작전", landing: "나무 라인을 의식하되 목표는 페어웨이 중앙으로 단순화", target: "티샷은 안전한 폭을 먼저 보고, 세컨은 핀보다 그린 중앙.", danger: "나무 쪽으로 감기는 샷, 무리한 세컨", safe: "다음 샷이 보이는 페어웨이", green: "그린 이미지를 보고 높은 쪽/낮은 쪽을 먼저 체크." },
  { no: 3, par: 3, white: "107m", mood: "우측 도그렉, 끊어 가는 지혜가 필요한 홀", landing: "물길이나 계류가 보이면 그 앞뒤 거리부터 확인", target: "위험 구역을 넘기려 하지 말고, 남길 거리를 정하고 치기.", danger: "애매한 거리에서 넘기려는 선택", safe: "한 클럽 짧게 끊어도 보기 가능", green: "핀 위치보다 넓은 면에 올리고 2퍼트." },
  { no: 4, par: 4, white: "268m", mood: "내리막 파3, 산악 바람과 우측 대형 해저드 극복", landing: "티샷 거리보다 착지 폭이 중요", target: "드라이버가 부담되면 우드/유틸로 페어웨이 확보.", danger: "좁아지는 지점까지 밀고 가는 장타 욕심", safe: "넓은 랜딩존에 두고 세컨 승부", green: "얕거나 좁게 보이면 핀 하이보다 중앙." },
  { no: 5, par: 5, white: "471m", mood: "가파른 오르막 우도그렉, 철저한 '좌측 바라보기'", landing: "벙커와 러프 방향을 먼저 확인하고 안전 라인 설정", target: "짧은 미스보다 방향 미스를 줄이는 샷.", danger: "벙커 방향 핀 공략, 짧은 어프로치 남김", safe: "중앙 크게 보고 2퍼트", green: "벙커가 가까우면 핀보다 반대쪽 안전 면." },
  { no: 6, par: 4, white: "333m", mood: "파인코스 최고의 보너스 홀, 페어웨이 중앙 강타", landing: "후반으로 넘어가기 전 루틴을 다시 짧게 고정", target: "페어웨이 중앙. 세컨은 무리하지 않고 좋은 각도 남기기.", danger: "이전 홀 결과를 끌고 오는 샷", safe: "큰 미스 없는 티샷", green: "첫 퍼트 속도만 맞춰도 충분." },
  { no: 7, par: 3, white: "151m", mood: "거대한 해저드를 넘기는 캐리 거리의 싸움", landing: "티잉 구역에서 바람과 고저 차이를 먼저 확인", target: "핀보다 그린 넓은 면. 짧은 쪽 미스만 피하기.", danger: "핀만 보고 한 클럽 작게 잡기", safe: "중앙 착지 후 2퍼트", green: "내리막 퍼트가 남지 않게 착지 지점 보수적으로." },
  { no: 8, par: 4, white: "342m", mood: "핸디캡 홀, 좌측 OB와 우측 법면의 영리한 이용", landing: "남은 홀 욕심보다 페어웨이에 공을 살려두는 선택", target: "티샷은 중앙. 세컨은 그린 앞 위험 구역을 피해 안전 면.", danger: "스코어 만회용 장타", safe: "페어웨이 우선, 중앙 공략", green: "그린 경사 이미지를 보고 첫 퍼트 방향을 단순화." },
  { no: 9, par: 5, white: "421m", mood: "내리막 우도그렉, 우측 해저드를 피해 클럽하우스로", landing: "리뉴얼로 전략성이 강화된 홀로 보고 티샷 옵션을 보수적으로 선택", target: "넓어 보이는 쪽보다 다음 샷 각도가 좋은 쪽으로.", danger: "마지막 홀 무리, 벙커 방향", safe: "중앙 랜딩, 그린 중앙", green: "마지막 홀은 3퍼트 방지. 첫 퍼트 거리감 우선." }
];

const MAPLE_HOLES = [
  { no: 1, par: 4, white: "274m", mood: "전략형 출발 · 그린 경사 · 신중", landing: "초반부터 그린 경사와 세컨 위치를 함께 보는 코스", target: "티샷은 반복 가능한 구질로 페어웨이 중앙.", danger: "첫 홀부터 핀 직접 공략", safe: "그린 중앙, 보기 방어", green: "메이플은 그린 확인이 중요. 높은 쪽과 빠른 쪽을 먼저 보기." },
  { no: 2, par: 4, white: "382m", mood: "랜딩존 · 벙커 위치 · 각도", landing: "벙커가 시야에 들어오면 넘길지 피할지 먼저 결정", target: "착지 지점을 하나로 정하고 세컨 각도 확보.", danger: "벙커를 의식한 당김/밀림", safe: "벙커 반대쪽 페어웨이", green: "핀보다 안전한 면. 옆 경사는 과하게 보지 않기." },
  { no: 3, par: 3, white: "102m", mood: "파3 가정 · 내리막 · 가드 벙커", landing: "내리막과 벙커를 함께 보고 한 클럽 보수적으로", target: "핀보다 그린 중앙. 짧은 벙커 방향 제외.", danger: "짧은 클럽 선택, 핀 직선 공략", safe: "중앙 착지 후 2퍼트", green: "내리막이면 캐리보다 착지 지점." },
  { no: 4, par: 4, white: "253m", mood: "중반 리듬 · 방향성 · 세컨 거리", landing: "페어웨이 폭과 세컨 남길 거리를 이미지로 확인", target: "티샷은 중앙, 세컨은 핀보다 넓은 면.", danger: "무리한 드로우/페이드", safe: "스트레이트 기준 중앙", green: "오르막 퍼트가 남는 쪽 선호." },
  { no: 5, par: 4, white: "322m", mood: "거리감 홀 · 벙커 회피 · 2퍼트", landing: "그린 주변 벙커와 짧은 미스를 먼저 제거", target: "한 클럽 여유 있게 그린 중앙.", danger: "짧은 미스, 벙커 방향", safe: "중앙 크게 보고 2퍼트", green: "핀 위치보다 큰 경사와 속도 우선." },
  { no: 6, par: 5, white: "464m", mood: "런 계산 · 좌우 미스 관리 · 보수", landing: "경사에 따른 런을 계산해 목표를 짧게 잡기", target: "중앙 라인 유지. 위험 쪽 핀은 포기.", danger: "오버 런, 좌우 미스", safe: "짧아도 중앙", green: "어프로치는 굴러가는 방향 확인 후 착지." },
  { no: 7, par: 4, white: "272m", mood: "후반 집중 · 루틴 · 안전", landing: "체력 저하를 감안해 루틴을 짧고 일정하게", target: "핀보다 넓은 면. 실수해도 다음 샷 쉬운 쪽.", danger: "욕심낸 핀 공략", safe: "그린 중앙, 보기 방어", green: "첫 퍼트는 라인보다 속도." },
  { no: 8, par: 3, white: "177m", mood: "마무리 전 · 고도 보정 · 중앙", landing: "고도와 바람을 같이 보고 넉넉한 클럽 선택", target: "세컨은 짧지 않게 안전한 면으로.", danger: "짧은 세컨, 벙커 방향", safe: "한 클럽 여유, 중앙 공략", green: "내리막 퍼트가 길면 무리하지 않기." },
  { no: 9, par: 5, white: "439m", mood: "조명 이력 · 마무리 · 집중", landing: "마지막 홀은 시야와 집중력 관리가 핵심", target: "중앙 라인. 큰 위험 구역을 확실히 피하기.", danger: "마지막 홀 욕심, 해저드/벙커", safe: "중앙 랜딩, 그린 중앙", green: "마지막 퍼트는 짧지 않게, 그래도 2퍼트 우선." }
];

const CHERRY_HOLES = [
  { no: 1, par: 4, white: "347m", mood: "하프웨이 하우스 · 출발 · 리듬", landing: "체리 시작 홀은 분위기에 휩쓸리지 말고 루틴부터 고정", target: "페어웨이 중앙. 첫 티샷은 방향성 우선.", danger: "시작부터 장타 욕심", safe: "중앙 랜딩 후 그린 중앙", green: "첫 퍼트 속도를 확인하고 다음 홀 기준 만들기." },
  { no: 2, par: 4, white: "347m", mood: "수려한 조경 · 집중 · 세컨 각도", landing: "경치보다 착지 지점과 세컨 각도를 먼저 보기", target: "티샷은 안전한 폭, 세컨은 그린 넓은 면.", danger: "시야 분산, 좌우 큰 미스", safe: "다음 샷이 보이는 위치", green: "그린 주변 경사와 벙커를 함께 확인." },
  { no: 3, par: 4, white: "347m", mood: "전략형 · 벙커 회피 · 중앙", landing: "벙커 위치가 부담되면 반대쪽 넓은 면 선택", target: "페어웨이 중앙보다 안전한 쪽. 핀보다 중앙.", danger: "벙커 넘기기 욕심", safe: "벙커 반대편 랜딩", green: "핀 직접 공략보다 2퍼트 라인." },
  { no: 4, par: 4, white: "347m", mood: "긴 홀 가정 · 끊어가기 · 리듬", landing: "장타보다 다음 샷 각도가 좋은 지점", target: "위험 구역 앞에서 끊고 다음 샷 편한 거리 남기기.", danger: "무리한 세컨, 좌우 숲", safe: "3온 전략 허용", green: "넓은 면에 올리고 첫 퍼트 거리감." },
  { no: 5, par: 4, white: "347m", mood: "야간 조명 구간 · 거리감 · 짧은 미스 금지", landing: "체리 후반 조명 구간 진입으로 보고 시야 변화에 대비", target: "그린 중앙. 짧은 벙커/러프 방향 제외.", danger: "짧은 미스, 시야 착시", safe: "중앙 크게 보고 2퍼트", green: "밝기와 그림자 착시보다 실제 경사 이미지 우선." },
  { no: 6, par: 4, white: "347m", mood: "야간 조명 구간 · 방향성 · 런", landing: "런이 커지는 방향을 확인하고 목표를 짧게 잡기", target: "중앙 라인만 지키기. 위험 쪽 핀은 포기.", danger: "오버 런, 좌우 미스", safe: "클럽 선택 보수적으로", green: "착지 후 굴러가는 방향 확인." },
  { no: 7, par: 4, white: "347m", mood: "후반 집중 · 클럽 선택 · 안전", landing: "후반 체력과 집중력 저하를 감안", target: "핀보다 넓은 면. 실수해도 다음 샷 쉬운 쪽.", danger: "긴 미스, 핀 욕심", safe: "그린 중앙, 보기 방어", green: "내리막 퍼트가 남으면 속도 우선." },
  { no: 8, par: 4, white: "347m", mood: "야간 조명 구간 · 마무리 전 · 큰 사고 방지", landing: "남은 홀 욕심보다 큰 미스 제거", target: "페어웨이 중앙. 세컨은 짧지 않게 안전한 면.", danger: "스코어 만회용 장타", safe: "페어웨이 우선", green: "첫 퍼트는 과감하되 지나치게 길지 않게." },
  { no: 9, par: 4, white: "347m", mood: "조명 이력 · 피날레 · 멘탈", landing: "마지막 홀은 스코어보다 공을 살리는 선택", target: "중앙 라인. 벙커와 물을 확실히 피하기.", danger: "마지막 홀 욕심, 해저드", safe: "중앙 랜딩, 그린 중앙", green: "마지막 퍼트도 2퍼트 기준. 짧지 않게만." }
];

const OAK_HOLES = [
  { no: 1, par: 4, white: "316m", mood: "오르막 · 좌측 벙커 · 우측 숲", elevation: "IP +12.6m / 그린 +23.6m", landing: "200m 기준 오르막 보정, 약 190m 착지", target: "페어웨이 중앙보다 살짝 우측. 무리한 장타보다 살아있는 티샷.", danger: "좌측 벙커, 우측 숲", safe: "중앙 랜딩 후 한 클럽 길게", green: "뒤가 높고 앞이 낮은 그린. 짧으면 굴러 내려올 수 있어 중앙 우측 추천." },
  { no: 2, par: 5, white: "470m", mood: "큰 내리막 · 긴 홀 · 세컨 욕심 금지", elevation: "IP -14m / IP -31.9m / 그린 -36m", landing: "내리막이라 평소보다 더 굴러갈 수 있음", target: "티샷은 페어웨이 넓은 쪽으로. 세컨은 다음 샷 편한 거리만 남기기.", danger: "과한 드로우, 내리막 과속", safe: "짧아도 페어웨이 우선", green: "내리막 홀은 거리감이 흔들리기 쉬움. 핀보다 그린 중앙." },
  { no: 3, par: 4, white: "363m", mood: "완만한 오르막 · 좌측 라인 주의", elevation: "IP +3.6m / 그린 +7.5m", landing: "살짝 오르막, 평지보다 반 클럽 정도 보수적으로", target: "페어웨이 중앙. 왼쪽으로 감기면 다음 샷 각도가 답답함.", danger: "좌측 나무, 짧은 세컨", safe: "중앙 랜딩, 그린 중앙", green: "그린 주변 경사보다 퍼트 라인 착시를 조심. 안전하게 중앙 공략." },
  { no: 4, par: 5, white: "458m", mood: "내리막 · 긴 전장 · 리듬 유지", elevation: "IP -12.5m / IP -22.6m / 그린 -20.4m", landing: "내리막 보정으로 착지 후 런을 더 계산", target: "티샷은 넓은 랜딩존. 세컨은 위험 구역을 피해서 끊어가기.", danger: "무리한 세컨, 좌우 숲", safe: "3온 전략, 어프로치 거리 남기기", green: "앞뒤 거리감이 어려운 홀. 핀 하이보다 중앙에 올리는 쪽." },
  { no: 5, par: 3, white: "151m", mood: "짧은 내리막 · 거리감 홀", elevation: "그린 -2.9m", landing: "짧은 홀, 바람과 내리막만 확인", target: "핀보다 안전한 그린 중앙. 벙커 방향은 과감히 제외.", danger: "짧은 미스, 그린 주변 벙커", safe: "중앙 크게 보고 2퍼트", green: "색 차이가 큰 그린. 높은 쪽에서 낮은 쪽으로 흐름을 먼저 보기." },
  { no: 6, par: 4, white: "382m", mood: "강한 내리막 · 런 계산 · 방향성", elevation: "IP -25.8m / 그린 -36.4m", landing: "내리막이 커서 평소보다 멀리 도망갈 수 있음", target: "짧게 잡아도 충분. 페어웨이 중앙 라인만 지키기.", danger: "오버 런, 좌우 미스", safe: "클럽 선택 보수적으로", green: "내리막 접근은 캐리보다 착지 지점이 중요. 앞쪽에 세우려 하지 말기." },
  { no: 7, par: 3, white: "168m", mood: "내리막 파3 · 클럽 선택", elevation: "그린 -23.3m", landing: "큰 내리막, 한 클럽 이상 짧게 볼 수 있음", target: "핀 위치보다 그린 넓은 면. 짧은 쪽 미스만 피하기.", danger: "긴 미스, 바람 오판", safe: "중앙 착지 후 2퍼트", green: "그린 높낮이 차이가 커 보이는 홀. 첫 퍼트 속도만 살리기." },
  { no: 8, par: 4, white: "337m", mood: "오르막 · 그린 뒤 높음 · 짧은 미스 주의", elevation: "IP +8.2m / 그린 +24m", landing: "오르막 보정 필요, 세컨은 한 클럽 길게", target: "페어웨이 중앙. 세컨은 짧지 않게 그린 중앙.", danger: "짧은 세컨, 앞쪽 경사", safe: "한 클럽 길게, 중앙 공략", green: "상단이 높은 그린. 핀보다 앞에 세우면 퍼트가 남고, 너무 짧으면 고생." },
  { no: 9, par: 4, white: "334m", mood: "마무리 오르막 · 좌우 벙커 · 집중력", elevation: "IP +0.7m / 그린 +6.7m", landing: "완만한 오르막, 마지막까지 방향성 우선", target: "중앙 라인. 벙커를 피하고 그린 앞 공간 확인.", danger: "페어웨이 벙커, 마지막 홀 욕심", safe: "중앙 랜딩, 그린 중앙", green: "큰 경사보다 속도감 관리. 마지막 퍼트는 과감하지만 짧지 않게." }
];

window.GOLF_VENUES.oakvalley = {
  id: "oakvalley",
  name: "오크밸리CC",
  location: "강원 원주",
  designer: "Robert Trent Jones Jr.",
  opened: "1998",
  sourceNotes: OAKVALLEY_SOURCE_NOTES,
  courses: {
    pine: {
      id: "oakvalley.pine",
      venueId: "oakvalley",
      key: "pine",
      name: "파인",
      nameEn: "Pine",
      holes: 9,
      difficulty: "중",
      theme: ["명품 송림", "연못과 계류", "전략형 지형"],
      style: "수목, 연못, 계류를 살린 자연형 코스. 파인+체리 조합의 전반 축으로 보기 전략이 잘 맞는다.",
      watch: "티샷보다 세컨샷 위치가 중요하다. 물과 숲을 동시에 의식하면 스윙이 급해지므로 목표를 하나로 줄인다.",
      play: "오크밸리에서 가장 편안하고 시각적인 개방감이 좋은 코스. 초반은 페어웨이 우선, 중반은 위험 구역 앞 끊어가기, 후반은 그린 중앙과 2퍼트 기준으로 운영.",
      principles: ["초반은 페어웨이 우선", "위험 구역 앞에서 끊어가기", "그린 중앙과 2퍼트 기준"],
      note:  "홀별 정보는 종합이미지 확인.",
      holesData: buildHoles("pine", PINE_HOLES)
    },
    maple: {
      id: "oakvalley.maple",
      venueId: "oakvalley",
      key: "maple",
      name: "메이플",
      nameEn: "Maple",
      holes: 9,
      difficulty: "상",
      theme: ["붉은 단풍", "대회형 레이아웃", "착시형 그린"],
      style: "도그렉와 계곡을 넘기는 홀이 많아 영리한 방향성 플레이가 스코어를 보장해 주는 코스 .",
      watch: "오후 라운드라면 체력 저하와 집중력 하락이 변수. 그린 경사와 벙커 위치를 먼저 보고 보수적으로 친다.",
      play: "생각 없는 샷은 페널티로 돌아오는 코스. 도그렉홀이 많고, 티잉 그라운드 앞에 거대한 계곡을 넘겨 쳐야 하는 홀들이 배치되어 있어 심리적 압박감이 엄청. 티샷 루틴을 짧게 고정하고, 핀보다 그린 중앙으로 더블 보기를 막는다.",
      principles: ["티샷 루틴 짧게 고정", "핀보다 그린 중앙", "더블 보기 방지"],
      note: "홀별 정보는 종합이미지 확인.",
      holesData: buildHoles("maple", MAPLE_HOLES)
    },
    oak: {
      id: "oakvalley.oak",
      venueId: "oakvalley",
      key: "oak",
      name: "오크",
      nameEn: "Oak",
      holes: 9,
      difficulty: "중상",
      theme: ["웅장한 오크림", "입체적 고저차", "트러블 라이"],
      style: "고도 차와 숲 라인이 강하게 느껴지는 코스. 현재 홀별 고도/공략 메모가 가장 많이 정리된 메인 야디지북 코스.",
      watch: "오르막/내리막 차이가 큰 홀이 많아 평지 거리만 믿으면 위험하다. 착지 지점과 런을 함께 계산한다.",
      play: "오크밸리의 산악 지형 맛을 보여주는 코스. 드라이버를 시원하게 지르고 싶은 골퍼의 무대지만, 티샷 시 우측의 OB 위험 구역이 많아 정교한 에이밍(주로 좌측 공략)이 요구됨. 200m 기준 랜딩존, 고도 보정, 그린 경사를 같이 확인해야 한다.",
      principles: ["우측 OB를 지우는 에이밍", "200m 기준 랜딩존 확인", "고도 보정 후 그린 중앙"],
      note:  "홀별 정보는 종합이미지 확인.",
      holesData: buildHoles("oak", OAK_HOLES)
    },
    cherry: {
      id: "oakvalley.cherry",
      venueId: "oakvalley",
      key: "cherry",
      name: "체리",
      nameEn: "Cherry",
      holes: 9,
      difficulty: "극상",
      theme: ["화려한 벚림", "고난도 승부처 (후반 집중)", "공격과 방어 (전략의 공존)"],
      style: "파인과 함께 자연 조건을 살린 코스. 후반부 조명 설치 이력이 있어 시야 변화와 집중력 관리가 중요하다.",
      watch: "거리가 짧으니 드라이버로 무조건 지르자는 생각 자체가 가장 큰 함정",
      play: "전장은 가장 짧지만, 아마추어 골퍼들에게 가장 공포스러운 코스. 가파른 오르막과 내리막의 고저차가 극심하고, 착시를 일으키는 마운틴 브레이크 그린이 많아 스코어 카드를 무너뜨림. 넓어 보여도 위험 구역 앞에서는 끊어가고, 벙커와 물 중 하나는 확실히 피한다.",
      principles: ["고저차 보정 먼저", "위험 구역 앞에서 끊어가기", "벙커와 물 중 하나는 확실히 피하기"],
      note:  "홀별 정보는 종합이미지 확인.",
      holesData: buildHoles("cherry", CHERRY_HOLES)
    }
  }
};
