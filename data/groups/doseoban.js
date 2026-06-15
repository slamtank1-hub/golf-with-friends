window.GOLF_GROUPS = window.GOLF_GROUPS || {};

window.GOLF_GROUPS.doseoban = {
  id: "doseoban",
  name: "도서반",
  displayName: "도서반 골프여행",
  tone: "편안하고 차분하지만 라운드 중에는 가볍게 웃을 수 있게",
  members: [],
  trips: {
    "2026-century21-jun": {
      id: "2026-century21-jun",
      groupId: "doseoban",
      title: "도서반 센추리21CC 골프여행",
      venueId: "century21",
      dateRange: {
        start: "2026-06-20",
        end: "2026-06-21",
        display: "2026.6.20 ~ 6.21"
      },
      schedule: {
        eyebrow: "2일 · 4라운드 · 센추리21CC",
        title: "센추리21CC 밸리·필드·레이크·파인 라운드",
        copy: "6월 20일 오후에는 밸리와 필드에서 방향성과 페어웨이 안착을 우선하고, 6월 21일 오전에는 레이크와 파인에서 물·수목 라인을 지우며 차분하게 마무리한다."
      },
      cover: {
        subtitle: "센추리21CC",
        image: "data/groups/doseoban_century21_title.png",
        imageSlotLabel: "도서반 센추리21CC 커버 이미지"
      },
      rounds: [
        {
          id: "doseoban.2026-06-20.valley",
          date: "2026-06-20",
          displayDate: "6.20",
          timeOfDay: "오후",
          order: 1,
          courseId: "century21.valley",
          courseKey: "valley",
          label: "밸리 코스",
          note: "첫날 오후 첫 코스. 계곡 지형과 수목 라인을 의식하되, 장타보다 페어웨이 중앙과 세컨 각도를 우선한다."
        },
        {
          id: "doseoban.2026-06-20.field",
          date: "2026-06-20",
          displayDate: "6.20",
          timeOfDay: "오후",
          order: 2,
          courseId: "century21.field",
          courseKey: "field",
          label: "필드 코스",
          note: "첫날 오후 두 번째 코스. 열린 시야와 바람에 흔들리지 말고, 목표를 하나로 줄여 안정적으로 운영한다."
        },
        {
          id: "doseoban.2026-06-21.lake",
          date: "2026-06-21",
          displayDate: "6.21",
          timeOfDay: "오전",
          order: 3,
          courseId: "century21.lake",
          courseKey: "lake",
          label: "레이크 코스",
          note: "둘째 날 오전 첫 코스. 물 방향을 지우고, 긴 홀에서는 3샷 계획과 거리 배분으로 보기 방어를 우선한다."
        },
        {
          id: "doseoban.2026-06-21.pine",
          date: "2026-06-21",
          displayDate: "6.21",
          timeOfDay: "오전",
          order: 4,
          courseId: "century21.pine",
          courseKey: "pine",
          label: "파인 코스",
          note: "둘째 날 오전 마지막 코스. 수목 라인에 시야가 좁아져도 페어웨이 중앙, 그린 중앙, 2퍼트 기준을 유지한다."
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
    "2026-century21-jun": {
      tripId: "2026-century21-jun",
      openingMottos: [
        "멀리보다 또박또박",
        "책갈피처럼 공도 페어웨이에 꽂기",
        "핀보다 그린 중앙",
        "오후에는 체력 관리, 오전에는 차분한 마무리"
      ],
      endingMessages: [
        "좋은 샷은 오래 기억하고",
        "아쉬운 샷은 가볍게 웃고 넘기고",
        "다음 모임도 같은 리듬으로 이어가기"
      ],
      courseMessages: {
        valley: {
          title: "6.20 오후 첫 장은 밸리",
          comments: [
            "첫 코스는 스코어보다 리듬이다.",
            "계곡과 숲은 구경하고, 공은 중앙으로 보낸다."
          ]
        },
        field: {
          title: "6.20 오후 필드는 바람부터",
          comments: [
            "열린 시야일수록 목표를 하나로 줄인다.",
            "오후 두 번째 코스는 체력보다 루틴이 더 중요하다."
          ]
        },
        lake: {
          title: "6.21 오전 레이크는 거리 배분",
          comments: [
            "물 방향은 지우고 안전한 폭만 본다.",
            "긴 홀은 3샷 계획이 정답일 때가 많다."
          ]
        },
        pine: {
          title: "6.21 오전 파인은 차분한 마무리",
          comments: [
            "나무 라인에 흔들리지 말고 페어웨이 중앙.",
            "마지막 코스는 큰 사고 없이 2퍼트 기준으로 마무리한다."
          ]
        }
      },
      holeMessages: {
        "century21.valley.01": [
          { text: "첫 홀은 몸 푸는 장이다. 멀리보다 페어웨이에 공을 꽂자." }
        ],
        "century21.valley.02": [
          { text: "계곡과 숲은 구경만 하고, 세컨 치기 좋은 각도만 남기자." }
        ],
        "century21.valley.03": [
          { text: "고저차가 보이면 힘보다 클럽 선택이 먼저다." }
        ],
        "century21.valley.04": [
          { text: "긴 홀은 한 번에 해결하지 말고, 다음 문장처럼 차분히 이어가자." }
        ],
        "century21.valley.05": [
          { text: "벙커와 핀 사이에서 고민되면 중앙이 정답이다." }
        ],
        "century21.valley.06": [
          { text: "경사에서 욕심내면 공이 흘러간다. 중앙 라인을 지키자." }
        ],
        "century21.valley.07": [
          { text: "파3는 핀보다 그린, 버디보다 2퍼트가 먼저다." }
        ],
        "century21.valley.08": [
          { text: "오후 첫날의 피로가 온다. 루틴을 줄이고 목표도 하나로 줄이자." }
        ],
        "century21.valley.09": [
          { text: "전반 마무리는 큰 사고 없이. 보기면 충분히 좋은 문장이다." }
        ],
        "century21.field.01": [
          { text: "필드는 넓어 보여도 목표는 하나만 잡자." }
        ],
        "century21.field.02": [
          { text: "바람이 있으면 멋진 구질보다 낮고 안정적인 샷이 낫다." }
        ],
        "century21.field.03": [
          { text: "세컨 각도 좋은 곳에 있으면 이미 절반은 성공이다." }
        ],
        "century21.field.04": [
          { text: "긴 홀은 3샷 계획. 억지 2온보다 편한 어프로치가 좋다." }
        ],
        "century21.field.05": [
          { text: "중간 홀일수록 집중이 흐려진다. 중앙만 보고 치자." }
        ],
        "century21.field.06": [
          { text: "런이 많을 수 있다. 떨어지는 곳보다 멈추는 곳을 생각하자." }
        ],
        "century21.field.07": [
          { text: "파3에서 짧은 미스는 마음이 급했다는 뜻이다. 한 클럽 여유." }
        ],
        "century21.field.08": [
          { text: "마지막 전 홀은 체력보다 루틴이다. 짧게 보고 정확히 치자." }
        ],
        "century21.field.09": [
          { text: "첫날 마지막은 스코어보다 분위기. 공을 살리고 웃으면서 끝내자." }
        ],
        "century21.lake.01": [
          { text: "둘째 날 첫 티샷은 차분하게. 물보다 페어웨이를 보자." }
        ],
        "century21.lake.02": [
          { text: "긴 파5는 욕심을 내려놓으면 오히려 기회가 온다." }
        ],
        "century21.lake.03": [
          { text: "물과 벙커가 보여도 눈은 그린 중앙에 둔다." }
        ],
        "century21.lake.04": [
          { text: "짧은 파4는 유혹이 많다. 안전한 위치가 더 좋은 공격이다." }
        ],
        "century21.lake.05": [
          { text: "레이크의 중간 홀은 방향성이 점수다. 중앙 라인만 지키자." }
        ],
        "century21.lake.06": [
          { text: "짧은 파3는 쉬워 보일 때 더 조심. 힘을 빼고 중앙." }
        ],
        "century21.lake.07": [
          { text: "핸디캡 홀은 이기려 하지 말고 지나가자. 보기면 성공이다." }
        ],
        "century21.lake.08": [
          { text: "마무리 전에는 큰 실수 하나만 피하면 된다." }
        ],
        "century21.lake.09": [
          { text: "레이크 마지막은 물을 지우고, 2퍼트 기준으로 닫자." }
        ],
        "century21.pine.01": [
          { text: "파인은 나무 라인에 흔들리지 말고 출발은 페어웨이 중앙." }
        ],
        "century21.pine.02": [
          { text: "시야가 좁아질수록 목표는 단순해야 한다." }
        ],
        "century21.pine.03": [
          { text: "파3는 핀을 보는 순간 어려워진다. 넓은 면을 보자." }
        ],
        "century21.pine.04": [
          { text: "긴 홀에서는 다음 샷이 보이는 자리가 최고의 자리다." }
        ],
        "century21.pine.05": [
          { text: "벙커를 피하면 파 기회가 남고, 벙커에 가면 이야깃거리가 남는다." }
        ],
        "century21.pine.06": [
          { text: "경사와 런을 생각하고, 짧아도 안전한 쪽으로." }
        ],
        "century21.pine.07": [
          { text: "마지막 코스 후반이다. 힘보다 리듬을 믿자." }
        ],
        "century21.pine.08": [
          { text: "세컨은 핀보다 그린 중앙. 마지막까지 같은 원칙이다." }
        ],
        "century21.pine.09": [
          { text: "마지막 장은 멋지게보다 안전하게. 웃으면서 마무리하자." }
        ]
      }
    }
  }
};
