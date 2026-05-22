window.GOLF_GROUPS = window.GOLF_GROUPS || {};

window.GOLF_GROUPS["kimjang-bond"] = {
  id: "kimjang-bond",
  name: "김장채권",
  displayName: "김장채권 골프여행",
  tone: "친구끼리 편하게 놀리되 과하지 않게",
  members: [],
  trips: {
    "2026-oakvalley-jun": {
      id: "2026-oakvalley-jun",
      groupId: "kimjang-bond",
      title: "김장채권 골프여행",
      venueId: "oakvalley",
      dateRange: {
        start: "2026-06-04",
        end: "2026-06-05",
        display: "2026.6.4 ~ 6.5"
      },
      schedule: {
        eyebrow: "2일 · 4라운드 · 오크밸리CC",
        title: "오크밸리 2일 라운드",
        copy: "첫날은 방향성과 체력 관리, 둘째 날은 고도 보정과 마무리 집중. 코스별 공략만 빠르게 확인하자."
      },      cover: {
        subtitle: "오크밸리CC",
        image: "data/groups/kimjan-bond_titie.png",
        imageSlotLabel: "김장채권 오크밸리CC 커버 이미지"
      },
      rounds: [
        {
          id: "kimjang-bond.2026-06-04.pine",
          date: "2026-06-04",
          displayDate: "6.4",
          order: 1,
          courseId: "oakvalley.pine",
          courseKey: "pine",
          label: "파인 코스",
          note: "첫 라운드는 페어웨이 우선, 몸 풀기와 방향성 확인"
        },
        {
          id: "kimjang-bond.2026-06-04.maple",
          date: "2026-06-04",
          displayDate: "6.4",
          order: 2,
          courseId: "oakvalley.maple",
          courseKey: "maple",
          label: "메이플 코스",
          note: "오후 라운드는 체력 관리와 그린 중앙 공략"
        },
        {
          id: "kimjang-bond.2026-06-05.oak",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 3,
          courseId: "oakvalley.oak",
          courseKey: "oak",
          label: "오크 코스",
          note: "고도 보정, 런 계산, 세컨 위치 확인"
        },
        {
          id: "kimjang-bond.2026-06-05.cherry",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 4,
          courseId: "oakvalley.cherry",
          courseKey: "cherry",
          label: "체리 코스",
          note: "마지막 코스는 큰 사고 없이 마무리"
        }
      ],
      postTrip: {
        photos: [],
        awards: [],
        recapMessages: []
      }
    }
  },
  overlays: {
    "2026-oakvalley-jun": {
      tripId: "2026-oakvalley-jun",
      openingMottos: [
        "멀리보다 안 죽기",
        "핀보다 그린 중앙",
        "오늘의 영웅담은 살아있는 공에서 시작",
        "끝까지 웃는 사람이 오늘의 승자"
      ],
      endingMessages: [
        "베스트 샷은 기억하고",
        "최악의 샷은 오래 놀리고",
        "다음 라운드에서 모두가 다시 우승 후보"
      ],
      courseMessages: {
        pine: {
          title: "첫 코스는 몸 풀기",
          comments: [
            "초반부터 영웅 금지. 페어웨이에 공이 있으면 충분하다.",
            "물과 숲은 구경만 하고, 공은 중앙으로 보내자."
          ]
        },
        maple: {
          title: "생각 없는 샷 금지",
          comments: [
            "메이플은 핀보다 그린 중앙이 친구다.",
            "오후 체력 떨어질 때일수록 루틴을 짧게 가져가자."
          ]
        },
        oak: {
          title: "고도 보정 확인",
          comments: [
            "오르막과 내리막이 스코어를 흔든다. 평지 거리만 믿지 말자.",
            "200m 랜딩존과 그린 경사를 같이 보면 사고가 줄어든다."
          ]
        },
        cherry: {
          title: "마무리는 큰 사고 없이",
          comments: [
            "마지막 코스는 멘탈과 체력이 승부다.",
            "좋은 스코어보다 공을 살리는 선택이 먼저다."
          ]
        }
      },
      holeMessages: {
        "oakvalley.pine.01": [
          { text: "첫 홀은 몸 풀기다. 멀리보다 살아있게 시작하자." },
          { text: "오늘 첫 굿샷은 페어웨이에 있는 공이다." }
        ],
        "oakvalley.pine.02": [
          { text: "나무랑 싸우지 말고 빈 곳으로 보내자." },
          { text: "방향만 살리면 세컨은 우리 편이다." }
        ],
        "oakvalley.pine.03": [
          { text: "물 보이면 욕심을 한 클럽 내려놓자." },
          { text: "넘기는 샷보다 안 빠지는 샷이 더 멋있다." }
        ],
        "oakvalley.pine.04": [
          { text: "좁아지는 곳까지 굳이 가볼 필요 없다." },
          { text: "우드 잡는 용기도 오늘은 실력이다." }
        ],
        "oakvalley.pine.05": [
          { text: "벙커 방향 핀은 오늘 모르는 사람 취급." },
          { text: "중앙에 올리고 퍼터로 일하자." }
        ],
        "oakvalley.pine.06": [
          { text: "이전 홀은 끝났다. 루틴만 다시 시작." },
          { text: "좋은 각도 하나 남기면 충분하다." }
        ],
        "oakvalley.pine.07": [
          { text: "파3는 핀보다 그린이 크다." },
          { text: "짧은 쪽 미스만 피하면 이미 잘한 샷이다." }
        ],
        "oakvalley.pine.08": [
          { text: "만회 샷은 대체로 사고를 부른다." },
          { text: "페어웨이에 있으면 아직 기회는 있다." }
        ],
        "oakvalley.pine.09": [
          { text: "마지막은 멋보다 마무리다." },
          { text: "3퍼트만 피하면 파인 코스는 잘 지나왔다." }
        ],
        "oakvalley.maple.01": [
          { text: "메이플은 시작부터 신중하게 간다." },
          { text: "핀 욕심보다 그린 중앙이 스코어를 지킨다." }
        ],
        "oakvalley.maple.02": [
          { text: "벙커를 보면 먼저 피할 쪽을 정하자." },
          { text: "각도 좋은 세컨이면 절반은 성공이다." }
        ],
        "oakvalley.maple.03": [
          { text: "짧은 클럽으로 멋 부릴 홀 아니다." },
          { text: "내리막이면 착지 지점부터 생각하자." }
        ],
        "oakvalley.maple.04": [
          { text: "구질 만들려다 구질서 무너진다." },
          { text: "가장 익숙한 공으로 중앙만 보내자." }
        ],
        "oakvalley.maple.05": [
          { text: "벙커에 들어가면 대화가 길어진다." },
          { text: "한 클럽 여유가 오늘은 예의다." }
        ],
        "oakvalley.maple.06": [
          { text: "런이 나면 공은 생각보다 멀리 간다." },
          { text: "위험 쪽 핀은 오늘 양보하자." }
        ],
        "oakvalley.maple.07": [
          { text: "후반에는 루틴이 체력이다." },
          { text: "핀보다 넓은 면, 말은 쉬운데 이게 정답이다." }
        ],
        "oakvalley.maple.08": [
          { text: "짧은 세컨은 다음 고생 예약이다." },
          { text: "중앙으로 길게 보는 게 낫다." }
        ],
        "oakvalley.maple.09": [
          { text: "마지막 홀에서 영웅 될 필요 없다." },
          { text: "큰 사고 없이 끝내면 그게 이긴 거다." }
        ],
        "oakvalley.oak.01": [
          { text: "첫 홀은 오크보다 스코어 관리가 먼저다." },
          { text: "드라이버 힘 빼고 변명도 빼자." }
        ],
        "oakvalley.oak.02": [
          { text: "여기는 살아온 말 꺼내면 대화가 길어진다." },
          { text: "세컨 욕심보다 다음 샷 편한 거리가 답이다." }
        ],
        "oakvalley.oak.03": [
          { text: "잘 맞았는데 왼쪽이면 그냥 왼쪽으로 잘 맞은 거다." },
          { text: "오늘은 가운데가 제일 멋있는 방향이다." }
        ],
        "oakvalley.oak.04": [
          { text: "여기서 제일 위험한 말은 한번 가볼까다." },
          { text: "넓어 보이는 곳과 안전한 곳은 다를 수 있다." }
        ],
        "oakvalley.oak.05": [
          { text: "짧은 파3일수록 마음이 길어진다." },
          { text: "일단 모래부터 피하고 이야기하자." }
        ],
        "oakvalley.oak.06": [
          { text: "내리막이라고 세게 치면 공이 먼저 여행 간다." },
          { text: "오늘의 기술샷은 욕심을 줄이는 샷이다." }
        ],
        "oakvalley.oak.07": [
          { text: "멋진 탄도보다 멀쩡한 착지가 우선이다." },
          { text: "이 홀은 클럽 선택이 스윙보다 중요하다." }
        ],
        "oakvalley.oak.08": [
          { text: "오르막은 체력도 스코어도 같이 올라간다." },
          { text: "짧으면 착한 샷이 아니라 다음 고생 예약이다." }
        ],
        "oakvalley.oak.09": [
          { text: "마지막 홀에서 갑자기 프로 되는 사람 아직 못 봤다." },
          { text: "스코어 정리는 나중에, 지금은 가운데 한 번만 더." }
        ],
        "oakvalley.cherry.01": [
          { text: "체리 시작은 들뜨지 말고 방향부터 잡자." },
          { text: "첫 티샷 살아 있으면 후반 분위기가 편하다." }
        ],
        "oakvalley.cherry.02": [
          { text: "경치 감상은 카트에서, 샷은 목표 하나만." },
          { text: "다음 샷이 보이면 이미 좋은 선택이다." }
        ],
        "oakvalley.cherry.03": [
          { text: "벙커 넘기기는 마음속으로만 하자." },
          { text: "반대편 넓은 면도 충분히 훌륭하다." }
        ],
        "oakvalley.cherry.04": [
          { text: "긴 홀은 한 번에 끝내는 게임이 아니다." },
          { text: "3온 전략은 부끄러운 게 아니라 현명한 거다." }
        ],
        "oakvalley.cherry.05": [
          { text: "조명과 그림자에 속지 말고 이미지부터 보자." },
          { text: "짧은 미스만 피하면 체리는 웃어준다." }
        ],
        "oakvalley.cherry.06": [
          { text: "런 계산 안 하면 공이 먼저 퇴근한다." },
          { text: "중앙 라인 지키는 사람이 결국 웃는다." }
        ],
        "oakvalley.cherry.07": [
          { text: "후반 핀 욕심은 대체로 비싸다." },
          { text: "넓은 면에 올리고 퍼터에게 맡기자." }
        ],
        "oakvalley.cherry.08": [
          { text: "만회 장타보다 살아있는 티샷." },
          { text: "마지막 전 홀은 사고 안 내는 사람이 고수다." }
        ],
        "oakvalley.cherry.09": [
          { text: "피날레는 과감하되 무모하지 않게." },
          { text: "마지막까지 가운데면 오늘 여행은 성공이다." }
        ]
      }
    }
  }
};
