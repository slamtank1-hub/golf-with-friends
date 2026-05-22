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
        title: "센추리21 2일 라운드",
        copy: "첫날은 밸리와 필드에서 방향성을 확인하고, 둘째 날은 레이크와 파인에서 거리 배분과 마무리 집중으로 간다."
      },
      cover: {
        subtitle: "센추리21CC",
        image: null,
        imageSlotLabel: "도서반 센추리21CC 커버 이미지"
      },
      rounds: [
        {
          id: "doseoban.2026-06-20.valley",
          date: "2026-06-20",
          displayDate: "6.20",
          order: 1,
          courseId: "century21.valley",
          courseKey: "valley",
          label: "밸리 코스",
          note: "첫 라운드는 계곡 지형과 방향성 확인"
        },
        {
          id: "doseoban.2026-06-20.field",
          date: "2026-06-20",
          displayDate: "6.20",
          order: 2,
          courseId: "century21.field",
          courseKey: "field",
          label: "필드 코스",
          note: "오후 라운드는 바람과 페어웨이 우선 운영"
        },
        {
          id: "doseoban.2026-06-21.lake",
          date: "2026-06-21",
          displayDate: "6.21",
          order: 3,
          courseId: "century21.lake",
          courseKey: "lake",
          label: "레이크 코스",
          note: "둘째 날 시작은 물과 긴 홀 거리 배분"
        },
        {
          id: "doseoban.2026-06-21.pine",
          date: "2026-06-21",
          displayDate: "6.21",
          order: 4,
          courseId: "century21.pine",
          courseKey: "pine",
          label: "파인 코스",
          note: "마지막 코스는 수목 라인과 큰 사고 방지"
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
        "마지막 장까지 웃으면서 마무리"
      ],
      endingMessages: [
        "오늘의 명문장은 베스트 샷으로 남기고",
        "오타 같은 샷은 다음 모임에서 가볍게 복기하고",
        "다음 여행도 같은 멤버로 이어가기"
      ],
      courseMessages: {
        valley: {
          title: "첫 장은 밸리에서",
          comments: [
            "첫 라운드는 스코어보다 리듬이다.",
            "계곡과 숲은 구경하고, 공은 중앙으로 보낸다."
          ]
        },
        field: {
          title: "필드는 바람부터 읽기",
          comments: [
            "열린 시야일수록 목표를 하나로 줄인다.",
            "오후에는 체력보다 루틴이 더 중요하다."
          ]
        },
        lake: {
          title: "레이크는 거리 배분",
          comments: [
            "물 방향은 지우고 안전한 폭만 본다.",
            "긴 홀은 3샷 계획이 정답일 때가 많다."
          ]
        },
        pine: {
          title: "파인은 차분한 마무리",
          comments: [
            "나무 라인에 흔들리지 말고 페어웨이 중앙.",
            "마지막 코스는 큰 사고 없이 마무리한다."
          ]
        }
      },
      holeMessages: {}
    }
  }
};