window.GOLF_GROUPS = window.GOLF_GROUPS || {};

window.GOLF_GROUPS["kimjang-bond"] = {
  id: "kimjang-bond",
  name: "김장채권",
  displayName: "김장채권 골프여행",
  tone: "친구끼리 장난스럽지만 과하지 않게",
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
      cover: {
        subtitle: "오크밸리CC",
        image: "data/groups/kimjan-bond_titie.png",
        imageSlotLabel: "모임 참석 이미지"
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
          note: "첫 라운드는 방향성과 체력 관리"
        },
        {
          id: "kimjang-bond.2026-06-04.maple",
          date: "2026-06-04",
          displayDate: "6.4",
          order: 2,
          courseId: "oakvalley.maple",
          courseKey: "maple",
          label: "메이플 코스",
          note: "오후 라운드는 무리 금지"
        },
        {
          id: "kimjang-bond.2026-06-05.oak",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 3,
          courseId: "oakvalley.oak",
          courseKey: "oak",
          label: "오크 코스",
          note: "고도 보정 확인"
        },
        {
          id: "kimjang-bond.2026-06-05.cherry",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 4,
          courseId: "oakvalley.cherry",
          courseKey: "cherry",
          label: "체리 코스",
          note: "끝까지 큰 사고 없이"
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
        "영웅샷은 저녁 이야기로만",
        "끝까지 웃은 사람이 오늘의 승자"
      ],
      endingMessages: [
        "베스트 샷은 기억하고",
        "최악의 샷은 더 오래 기억하고",
        "저녁에는 모두가 싱글"
      ],
      courseMessages: {
        pine: {
          title: "첫 코스는 몸풀기",
          comments: [
            "시작부터 영웅 금지.",
            "페어웨이에 있으면 이미 잘하고 있는 것."
          ]
        }
      },
      holeMessages: {
        "oakvalley.oak.01": [
          { label: "카트 안 조언", text: "첫 홀은 스코어보다 표정 관리." },
          { label: "오늘의 한마디", text: "드라이버는 힘 빼고, 변명은 더 빼고." }
        ],
        "oakvalley.oak.02": [
          { label: "카트 안 조언", text: "여기서 투온 말 꺼내면 저녁에 증거자료로 쓴다." },
          { label: "오늘의 한마디", text: "영웅샷보다 세 번째 샷이 편한 사람이 이긴다." }
        ],
        "oakvalley.oak.03": [
          { label: "카트 안 조언", text: "잘 맞았는데 왼쪽이면 그냥 왼쪽으로 잘 맞은 거다." },
          { label: "오늘의 한마디", text: "오늘은 가운데가 제일 멋있는 방향." }
        ],
        "oakvalley.oak.04": [
          { label: "카트 안 조언", text: "파5에서 제일 위험한 말: '한 번 가볼까?'" },
          { label: "오늘의 한마디", text: "끊어가는 사람은 재미없어 보여도 지갑은 지킨다." }
        ],
        "oakvalley.oak.05": [
          { label: "카트 안 조언", text: "파3는 원온보다 다음 퍼트가 더 중요하다." },
          { label: "오늘의 한마디", text: "니어 욕심은 좋은데, 일단 모래부터 피하자." }
        ],
        "oakvalley.oak.06": [
          { label: "카트 안 조언", text: "내리막이라고 세게 치면 공이 먼저 여행 간다." },
          { label: "오늘의 한마디", text: "오늘의 기술샷: 욕심을 줄이는 샷." }
        ],
        "oakvalley.oak.07": [
          { label: "카트 안 조언", text: "여기서 멋진 샷보다 멀쩡한 샷이 더 귀하다." },
          { label: "오늘의 한마디", text: "클럽 고민 오래 하면 더 틀린다." }
        ],
        "oakvalley.oak.08": [
          { label: "카트 안 조언", text: "오르막은 체력도 스코어도 같이 올라간다." },
          { label: "오늘의 한마디", text: "짧으면 착한 샷이 아니라 다음 고생 예약." }
        ],
        "oakvalley.oak.09": [
          { label: "카트 안 조언", text: "마지막 홀에서 갑자기 프로 되는 사람 아직 못 봤다." },
          { label: "오늘의 한마디", text: "스코어 정리는 저녁에, 지금은 한 번만 더 가운데." }
        ]
      }
    }
  }
};
