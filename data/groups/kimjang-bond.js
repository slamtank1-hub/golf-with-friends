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
        title: "오크밸리 라운드",
        copy: "첫날은 몸이 조금 덜 풀렸으니, 무리한 비거리보다는 방향성과 체력 관리에 집중하며 부드럽게 시작, 둘째 날은 산악 지형의 고도 보정과 마지막까지 잃지 않는 집중력이 핵심"
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
          courseKey: "oak",
          label: "오크 코스",
          note: "거리 욕심을 버리고 페어웨이 중앙을 지키는 안정적인 방향성 위주로 공략"
        },
        {
          id: "kimjang-bond.2026-06-04.maple",
          date: "2026-06-04",
          displayDate: "6.4",
          order: 2,
          courseId: "oakvalley.maple",
          courseKey: "maple",
          label: "메이플 코스",
          note: "무리하게 핀을 보고 지르기보다는, 넓은 안전지대로 끊어 가는 영리한 끊어 가기"
        },
        {
          id: "kimjang-bond.2026-06-05.oak",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 3,
          courseId: "oakvalley.oak",
          courseKey: "pine",
          label: "파인 코스",
          note: "전형적인 산악형 코스. 오르막 홀에서는 클럽을 한 클럽 여유 있게, 내리막 홀에서는 바람과 런을 계산"
        },
        {
          id: "kimjang-bond.2026-06-05.cherry",
          date: "2026-06-05",
          displayDate: "6.5",
          order: 4,
          courseId: "oakvalley.cherry",
          courseKey: "cherry",
          label: "체리 코스",
          note: "여기 원래 극악 난이도. 멘탈 비우고 편하게! 대신 그린 중앙만 보고"
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
             { text: "오늘 첫 굿샷은 페어웨이에 있는 공이다." }
        ],
        "oakvalley.pine.02": [
          { text: "내리막은 거리를 벌어주지만, 우측 미스와 짧은 그린은 스코어를 빼앗는다." }
        ],
        "oakvalley.pine.03": [
          { text: "Par 3는 핀보다 같은 단, 버디보다 2퍼트 파가 먼저다" }
        ],
        "oakvalley.pine.04": [
           { text: "우드 잡는 용기도 오늘은 실력이다." }
        ],
        "oakvalley.pine.05": [
           { text: "좌측은 버리고, 우측으로 길을 만들어 3온을 설계하라." }
        ],
        "oakvalley.pine.06": [
          { text: "코너를 욕심내면 길이 막히고, 중앙을 지키면 파 기회가 열린다." }
        ],
        "oakvalley.pine.07": [
          { text: "오르막보다 거리를 믿고, 우측 벙커보다 중앙을 믿어라" }
        ],
        "oakvalley.pine.08": [
             { text: "페어웨이에 있으면 아직 기회는 있다." }
        ],
        "oakvalley.pine.09": [
          { text: "짧다고 덤비지 말고, 그린이 보이는 자리까지 길을 만들어라.." }
        ],
        "oakvalley.maple.01": [
          { text: "메이플은 시작부터 신중하게 간다." }
        ],
        "oakvalley.maple.02": [
          { text: "각도 좋은 세컨이면 절반은 성공이다." }
        ],
        "oakvalley.maple.03": [
          { text: "내리막이면 착지 지점부터 생각하자." }
        ],
        "oakvalley.maple.04": [
          { text: "가장 익숙한 공으로 중앙만 보내자." }
        ],
        "oakvalley.maple.05": [
          { text: "짧은 홀일수록 방향이 먼저다." }
        ],
        "oakvalley.maple.06": [
          { text: "거리는 내리막이 벌어주지만, 스코어는 벙커와 3단 그린이 가져간다" }
        ],
        "oakvalley.maple.07": [
          { text: "벙커를 넘기면 기회, 애매하면 돌아가라" }
        ],
        "oakvalley.maple.08": [
          { text: "내리막은 클럽을 속이고, 넓은 그린은 퍼트를 속인다" }
        ],
        "oakvalley.maple.09": [
          { text: "큰 사고 없이 끝내면 그게 이긴 거다." }
        ],
        "oakvalley.oak.01": [
          { text: "첫 홀부터 힘 들어가면 남은 홀이 피곤해진다" }
        ],
        "oakvalley.oak.02": [
          { text: "세컨 욕심보다 다음 샷 편한 거리가 답이다." }
        ],
        "oakvalley.oak.03": [
          { text: "우측으로 지르고 싶은 유혹을 참아라.." }
        ],
        "oakvalley.oak.04": [
          { text: "서두르지 마라. 똑바로 세 번만 치면 무조건 버디나 파 찬스" }
        ],
        "oakvalley.oak.05": [
          { text: "일단 모래부터 피하고 이야기하자." }
        ],
        "oakvalley.oak.06": [
          { text: "내리막이라고 세게 치면 공이 먼저 여행 간다." }
        ],
        "oakvalley.oak.07": [
          { text: "멋진 탄도보다 멀쩡한 착지가 우선이다." }
        ],
        "oakvalley.oak.08": [
          { text: "짧으면 착한 샷이 아니라 다음 고생 예약이다." }
        ],
        "oakvalley.oak.09": [
          { text: "마지막 홀에서 갑자기 프로 되는 사람 아직 못 봤다." }
        ],
        "oakvalley.cherry.01": [
          { text: "첫 티샷 살아 있으면 후반 분위기가 편하다." }
        ],
        "oakvalley.cherry.02": [
          { text: "경치 감상은 카트에서, 짧다고 방심하지 말고, 물을 보지 말고 중앙을 보라." }
        ],
        "oakvalley.cherry.03": [
          { text: "벙커 넘기기는 마음속으로만 하자." }
        ],
        "oakvalley.cherry.04": [
          { text: "3온 전략은 부끄러운 게 아니라 현명한 거다." }
        ],
        "oakvalley.cherry.05": [
          { text: "티샷은 벙커 사이, 세컨은 핀과 같은 단이 정답이다.." }
        ],
        "oakvalley.cherry.06": [
          { text: "짧은 홀일수록 힘을 빼고, 핀보다 중앙을 믿어라." }
        ],
        "oakvalley.cherry.07": [
          { text: "좌측을 버리면 길이 열리고, 투온 욕심을 줄이면 파가 보인다." }
        ],
        "oakvalley.cherry.08": [
          { text: "이 홀은 파를 잡는 홀보다, 큰 실수를 막는 홀이다" }
        ],
        "oakvalley.cherry.09": [
          { text: "피날레는 과감하되 무모하지 않게." }
        ]
      }
    }
  }
};
