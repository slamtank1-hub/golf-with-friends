window.GOLF_GROUPS = window.GOLF_GROUPS || {};

window.GOLF_GROUPS["kwon-family"] = {
  id: "kwon-family",
  name: "권패밀리",
  displayName: "권패밀리 골프여행",
  tone: "가족끼리 편안하지만 라운드 집중은 잃지 않게",
  members: [
    { id: "person.kwon-family.01", name: "권패밀리 1", nickname: "권1", role: "member" },
    { id: "person.kwon-family.02", name: "권패밀리 2", nickname: "권2", role: "member" },
    { id: "person.kwon-family.03", name: "권패밀리 3", nickname: "권3", role: "member" },
    { id: "person.kwon-family.04", name: "권패밀리 4", nickname: "권4", role: "member" }
  ],
  trips: {
    "2026-hwasung-sangnok-jun": {
      id: "2026-hwasung-sangnok-jun",
      groupId: "kwon-family",
      title: "권패밀리 화성상록CC 골프여행",
      venueId: "hwasung-sangnok",
      dateRange: {
        start: "2026-06-26",
        end: "2026-06-26",
        display: "2026.6.26 오전"
      },
      schedule: {
        eyebrow: "1일 · 2코스 · 화성상록CC",
        title: "화성상록 라운드",
        copy: "일모, 진모와 함께 하는 첫 라운드. 서코스에서 리듬을 만들고 남코스에서는 방향성과 그린 중앙 공략으로 안정적으로 마무리한다."
      },
      cover: {
        subtitle: "화성상록CC",
        image:  "data/groups/kwon-family.jpg",
        imageSlotLabel: "권패밀리 화성상록CC 라운드북"
      },
      rounds: [
        {
          id: "kwon-family.2026-06-26.west",
          date: "2026-06-26",
          displayDate: "6.26 오전",
          order: 1,
          courseId: "hwasung-sangnok.west",
          courseKey: "west",
          label: "서코스",
          note: "첫 9홀은 무리한 장타보다 페어웨이 중앙과 세컨 각도 확보에 집중"
        },
        {
          id: "kwon-family.2026-06-26.south",
          date: "2026-06-26",
          displayDate: "6.26 오전",
          order: 2,
          courseId: "hwasung-sangnok.south",
          courseKey: "south",
          label: "남코스",
          note: "후반 9홀은 체력과 템포를 관리하면서 그린 중앙, 2퍼트 기준으로 마무리"
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
    "2026-hwasung-sangnok-jun": {
      tripId: "2026-hwasung-sangnok-jun",
      openingMottos: [
        "권패밀리는 페어웨이에서 만난다",
        "멀리보다 살아 있기",
        "핀보다 그린 중앙",
        "오전 라운드는 리듬이 전부"
      ],
      endingMessages: [
        "오늘의 승자는 끝까지 웃은 사람",
        "권패밀리 라운드는 다음 약속으로 이어진다",
        "좋은 샷은 기억하고, 아쉬운 샷은 점심 전에 잊기"
      ],
      courseMessages: {
        west: {
          title: "서코스는 리듬 만들기",
          comments: [
            "첫 코스는 스코어보다 몸 풀기와 방향성 확인이 먼저다.",
            "티샷은 넓은 쪽, 세컨은 그린 중앙. 단순한 기준이 오전 라운드를 편하게 만든다."
          ]
        },
        south: {
          title: "남코스는 차분한 마무리",
          comments: [
            "후반으로 갈수록 힘보다 루틴이 중요하다.",
            "무리한 핀 공략보다 안전한 온그린과 2퍼트 기준으로 운영한다."
          ]
        }
      },
      holeMessages: {
        "hwasung-sangnok.west.01": [
             { text: "첫 홀의 드라이버는 비거리가 아니라 방향이다." }
        ],
        "hwasung-sangnok.west.02": [
             { text: "도그렉 홀에서 지름길을 택하는 자는 벙커와 친구가 된다." }
        ],
        "hwasung-sangnok.west.03": [
             { text: "아이언 티샷은 찍어 치는 것이 아니라 떨어뜨리는 것이다." }
        ],
        "hwasung-sangnok.west.04": [
             { text: "그린 중앙은 언제나 골퍼를 배신하지 않는다." }
        ],
        "hwasung-sangnok.west.05": [
             { text: "오르막 세컨샷은 한 클럽 더 잡는 것이 과학이다." }
        ],
        "hwasung-sangnok.west.06": [
             { text: "만만한 거리일수록 힘이 들어가기 쉽다, 평소 스윙 리듬만 지켜라." }
        ],
        "hwasung-sangnok.west.07": [
             { text: "가장 긴 홀일수록 드라이버는 멀리가 아니라 '넘겨야 할 경사면'과 '방향'만 생각하라." }
        ],
        "hwasung-sangnok.west.08": [
             { text: "물을 넘길 때는 힘이 아니라 리듬으로 넘긴다." }
        ],
        "hwasung-sangnok.west.09": [
             { text: "마지막 홀은 멋진 샷보다 안전한 마무리가 이긴다." }
        ],
        "hwasung-sangnok.south.01": [
             { text: "첫 홀은 버디보다 리듬을 얻는 홀이다." }
        ],
        "hwasung-sangnok.south.02": [
             { text: "긴 Par5는 세 번 잘 치는 사람이 이긴다." }
        ],
        "hwasung-sangnok.south.03": [
             { text: "계곡은 눈으로만 넘기고, 스윙은 평소처럼 한다." }
        ],
        "hwasung-sangnok.south.04": [
             { text: "오르막 세컨은 짧은 미스가 가장 흔한 실수다." }
        ],
        "hwasung-sangnok.south.05": [
             { text: "내리막 티샷은 거리보다 다음 샷의 시야가 중요하다." }
        ],
        "hwasung-sangnok.south.06": [
             { text: "긴 Par3는 버디를 잡는 홀보다 보기를 막는 홀이다." }
        ],
        "hwasung-sangnok.south.07": [
             { text: "Par5의 승부는 첫 샷에서 시작되고, 세 번째 샷에서 끝난다." }
        ],
        "hwasung-sangnok.south.08": [
             { text: "핸디캡 1번 홀에서는 파보다 더블보기를 막는 것이 실력이다." }
        ],
        "hwasung-sangnok.south.09": [
             { text: "물이 보이면 더 세게 치는 것이 아니라 더 정확히 쳐야 한다." }
        ]
      }
    }
  }
};
