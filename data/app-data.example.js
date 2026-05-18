const APP_DATA = {
  meta: {
    schemaVersion: "0.1.0",
    updatedAt: "2026-05-17",
    defaultTripId: null,
    requireTripParam: true
  },

  groups: [
    {
      id: "group.kimjang-bond",
      name: "김장채권",
      displayName: "김장채권 골프여행",
      tone: "친구끼리 장난스럽지만 과하지 않게",
      members: [],
      defaultMottos: [
        "멀리보다 안 죽기",
        "핀보다 그린 중앙",
        "끝까지 웃은 사람이 승자"
      ]
    },
    {
      id: "group.sepis",
      name: "SEPIS모임",
      displayName: "SEPIS 골프모임",
      tone: "편안하고 유쾌한 모임",
      members: [],
      defaultMottos: []
    },
    {
      id: "group.sds-finance",
      name: "SDS금융모임",
      displayName: "SDS금융 골프모임",
      tone: "깔끔하고 실용적인 모임",
      members: [],
      defaultMottos: []
    },
    {
      id: "group.book-club",
      name: "도서반모임",
      displayName: "도서반 골프모임",
      tone: "차분하지만 농담이 있는 모임",
      members: [],
      defaultMottos: []
    }
  ],

  venues: [
    {
      id: "venue.oakvalley",
      name: "오크밸리CC",
      location: "강원 원주",
      courses: [
        {
          id: "course.oakvalley.pine",
          venueId: "venue.oakvalley",
          name: "파인",
          nameEn: "Pine",
          holes: 9,
          difficulty: "상",
          theme: ["소나무 숲", "물길", "전략형"],
          overview: "연못과 계류가 많은 편으로 알려진 전략형 코스.",
          watchouts: [
            "티샷보다 세컨샷 위치가 중요",
            "물과 숲을 동시에 의식하면 스윙이 급해질 수 있음",
            "초반 라운드라 무리한 장타보다 리듬 우선"
          ],
          holesData: []
        },
        {
          id: "course.oakvalley.maple",
          venueId: "venue.oakvalley",
          name: "메이플",
          nameEn: "Maple",
          holes: 9,
          difficulty: "중상",
          theme: ["단풍나무", "리듬", "체력 관리"],
          overview: "오후 라운드에서 체력과 집중력이 중요해지는 코스.",
          watchouts: [
            "오후 라운드 집중력 저하 주의",
            "티샷 루틴을 짧게 고정",
            "그린 중앙 공략으로 더블 보기 방지"
          ],
          holesData: []
        },
        {
          id: "course.oakvalley.oak",
          venueId: "venue.oakvalley",
          name: "오크",
          nameEn: "Oak",
          holes: 9,
          difficulty: "상",
          theme: ["참나무 숲", "고도 변화", "정교한 보정"],
          overview: "고도 변화가 크게 느껴지는 전략형 코스.",
          watchouts: [
            "오르막/내리막 보정 필요",
            "평지 거리만 믿으면 짧거나 길 수 있음",
            "그린 중앙 공략이 안전"
          ],
          holesData: [
            {
              id: "hole.oakvalley.oak.01",
              courseId: "course.oakvalley.oak",
              number: 1,
              par: 4,
              teeDistances: {
                black: 363,
                blue: 339,
                white: 316,
                redSenior: 282
              },
              handicap: 11,
              characterTags: ["오르막", "좌측 벙커", "우측 숲"],
              elevation: {
                ip: "+12.6m",
                green: "+23.6m",
                summary: "티에서 그린까지 지속적으로 오르는 오르막 홀"
              },
              landingZones: [
                {
                  id: "lz.oakvalley.oak.01.white.200",
                  tee: "white",
                  baseDistance: 200,
                  expectedDistance: 190,
                  label: "200m 기준 오르막 보정",
                  note: "평지 200m 골퍼 기준 약 190m 착지 예상"
                }
              ],
              strategy: {
                teeShot: "좌측 벙커와 우측 숲을 피해 페어웨이 중앙 우측 공략.",
                secondShot: "오르막을 감안해 한 클럽 길게.",
                greenApproach: "그린 앞 급경사 주의. 중앙 우측이 안전.",
                crucialWatchout: "짧으면 굴러 내려올 수 있어 핀보다 중앙."
              },
              green: {
                safeZone: "중앙 우측",
                dangerZone: "앞쪽 급경사",
                breakGuide: "서쪽이 높음",
                note: "오르막 퍼트를 남기는 방향이 안전"
              },
              assets: {
                composite: "assets/oak/sample_hole_01.jpg",
                courseMap: "assets/oak/course_01.png",
                elevation: "assets/oak/slope_01.png",
                greenMap: "assets/oak/green_01.jpg"
              }
            }
          ]
        },
        {
          id: "course.oakvalley.cherry",
          venueId: "venue.oakvalley",
          name: "체리",
          nameEn: "Cherry",
          holes: 9,
          difficulty: "중상",
          theme: ["벚나무", "리노베이션", "공격과 방어"],
          overview: "마지막 라운드에서 체력과 멘탈 관리가 중요한 코스.",
          watchouts: [
            "마지막 코스라 체력과 집중력 저하 주의",
            "넓어 보여도 위험 구역 앞에서는 끊어가기",
            "큰 사고 없는 마무리 우선"
          ],
          holesData: []
        }
      ]
    }
  ],

  trips: [
    {
      id: "trip.kimjang-bond.2026-oakvalley-jun",
      groupId: "group.kimjang-bond",
      title: "김장채권 골프여행",
      venueId: "venue.oakvalley",
      dateRange: {
        start: "2026-06-04",
        end: "2026-06-05",
        display: "2026.6.4 ~ 6.5"
      },
      cover: {
        subtitle: "오크밸리CC",
        image: null,
        imageSlotLabel: "모임 참석 이미지"
      },
      rounds: [
        {
          id: "round.kimjang-bond.2026-06-04.pine",
          date: "2026-06-04",
          order: 1,
          courseId: "course.oakvalley.pine",
          displayTime: "6.4",
          label: "파인 코스",
          note: "첫 라운드는 방향성과 체력 관리"
        },
        {
          id: "round.kimjang-bond.2026-06-04.maple",
          date: "2026-06-04",
          order: 2,
          courseId: "course.oakvalley.maple",
          displayTime: "6.4",
          label: "메이플 코스",
          note: "오후 라운드는 무리 금지"
        },
        {
          id: "round.kimjang-bond.2026-06-05.oak",
          date: "2026-06-05",
          order: 3,
          courseId: "course.oakvalley.oak",
          displayTime: "6.5",
          label: "오크 코스",
          note: "고도 보정 확인"
        },
        {
          id: "round.kimjang-bond.2026-06-05.cherry",
          date: "2026-06-05",
          order: 4,
          courseId: "course.oakvalley.cherry",
          displayTime: "6.5",
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
  ],

  overlays: [
    {
      id: "overlay.kimjang-bond.2026-oakvalley-jun",
      tripId: "trip.kimjang-bond.2026-oakvalley-jun",
      groupId: "group.kimjang-bond",
      globalMessages: {
        openingMottos: [
          "멀리보다 안 죽기",
          "핀보다 그린 중앙",
          "영웅샷은 저녁 이야기로만"
        ],
        endingMessages: [
          "오늘의 승자는 끝까지 웃은 사람",
          "저녁에는 모두가 싱글"
        ]
      },
      courseMessages: [
        {
          courseId: "course.oakvalley.pine",
          title: "첫 코스는 몸풀기",
          comments: [
            "시작부터 영웅 금지.",
            "페어웨이에 있으면 이미 잘하고 있는 것."
          ]
        }
      ],
      holeMessages: [
        {
          holeId: "hole.oakvalley.oak.01",
          comments: [
            {
              label: "카트 안 조언",
              text: "첫 홀은 스코어보다 표정 관리."
            },
            {
              label: "오늘의 한마디",
              text: "드라이버는 힘 빼고, 변명은 더 빼고."
            }
          ],
          personalized: []
        }
      ]
    }
  ]
};
