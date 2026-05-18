# Golf Trip Yardage Book Data Structure

이 문서는 여러 모임, 여러 골프 여행, 여러 골프장/코스를 같은 앱에서 재사용하기 위한 데이터 구조 초안이다.

핵심 원칙은 세 가지다.

1. 모임 정보와 골프장/코스 정보는 분리한다.
2. 코스에 고정되는 공략 정보와 여행마다 바뀌는 친구 멘트는 분리한다.
3. 화면은 ID 연결만 따라가며 렌더링한다.

## 1. 최상위 구조

```js
const APP_DATA = {
  meta: {},
  groups: [],
  venues: [],
  trips: [],
  overlays: []
};
```

| 키 | 역할 |
| --- | --- |
| `meta` | 데이터 버전, 마지막 수정일 등 관리 정보 |
| `groups` | 김장채권, SEPIS, SDS금융, 도서반 같은 모임 정보 |
| `venues` | 오크밸리CC 같은 골프장과 하위 코스/홀 정보 |
| `trips` | 특정 모임이 특정 날짜에 가는 골프 여행 일정 |
| `overlays` | 여행/모임별 커스텀 문구, 친구 전용 멘트, 표지 이미지 연결 |

## 2. ID 규칙

ID는 사람이 읽기 쉽고, 나중에 파일로 쪼개도 충돌이 적게 만든다.

```text
group.kimjang-bond
group.sepis
group.sds-finance
group.book-club

venue.oakvalley

course.oakvalley.pine
course.oakvalley.maple
course.oakvalley.oak
course.oakvalley.cherry

hole.oakvalley.oak.01
hole.oakvalley.oak.02

trip.kimjang-bond.2026-oakvalley-jun

overlay.kimjang-bond.2026-oakvalley-jun
```

추천 규칙:

- 영문 소문자, 숫자, 하이픈만 사용한다.
- 날짜가 들어가는 여행 ID는 `YYYY`와 장소/월을 포함한다.
- 홀 ID는 항상 두 자리 숫자를 쓴다. 예: `01`, `09`, `18`.

## 3. 모임 데이터

모임은 여행과 독립된 장기 단위다.

```js
{
  id: "group.kimjang-bond",
  name: "김장채권",
  displayName: "김장채권 골프여행",
  tone: "친구끼리 장난스럽지만 과하지 않게",
  members: [
    {
      id: "person.kimjang-bond.suwon",
      name: "채수원",
      nickname: "채프로",
      role: "organizer"
    }
  ],
  defaultMottos: [
    "멀리보다 안 죽기",
    "핀보다 그린 중앙",
    "끝까지 웃은 사람이 승자"
  ]
}
```

모임에 넣을 것:

- 모임 이름
- 멤버 이름/별명
- 기본 분위기
- 반복해서 쓸 수 있는 기본 문구

모임에 넣지 않을 것:

- 특정 여행 날짜
- 특정 골프장 공략
- 특정 라운드 순서

## 4. 골프장/코스/홀 데이터

골프장과 코스 정보는 모든 모임에서 재사용된다.

```js
{
  id: "venue.oakvalley",
  name: "오크밸리CC",
  location: "강원 원주",
  courses: [
    {
      id: "course.oakvalley.oak",
      venueId: "venue.oakvalley",
      name: "오크",
      nameEn: "Oak",
      holes: 9,
      par: null,
      theme: ["참나무 숲", "고도 변화", "정교한 보정"],
      difficulty: "상",
      overview: "고도 변화가 크게 느껴지는 전략형 코스.",
      watchouts: [
        "오르막/내리막 보정 필요",
        "평지 거리만 믿으면 짧거나 길 수 있음",
        "그린 중앙 공략이 안전"
      ],
      holesData: []
    }
  ]
}
```

### 홀 데이터

홀 데이터는 코스에 고정되는 정보다. 모임이 달라져도 바뀌지 않는 내용을 넣는다.

```js
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
```

코스/홀 데이터에 넣을 것:

- par, 거리, 핸디캡
- 코스 성격
- 위험 구역
- 티샷/세컨/그린 공략
- 경사/그린 정보
- 코스 이미지 경로

코스/홀 데이터에 넣지 않을 것:

- 친구 이름이 들어간 농담
- 특정 여행 날짜 문구
- 특정 모임의 분위기

## 5. 여행 데이터

여행은 특정 모임이 특정 날짜에 어떤 코스를 치는지 연결한다.

```js
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
  ]
}
```

여행 데이터에 넣을 것:

- 제목
- 날짜
- 어떤 모임인지
- 어떤 골프장인지
- 라운드 순서
- 코스 연결
- 표지 이미지
- 일정별 한 줄 메모

여행 데이터에 넣지 않을 것:

- 코스 고정 공략
- 홀별 거리/경사 원본 데이터

## 6. 커스텀 오버레이 데이터

오버레이는 특정 여행/모임에서만 바뀌는 말이다.

```js
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
      personalized: [
        {
          personId: "person.kimjang-bond.suwon",
          text: "여기서는 무리하지 말고 중앙만 보자."
        }
      ]
    }
  ]
}
```

오버레이 데이터에 넣을 것:

- 친구 전용 멘트
- 이번 여행에서만 쓰는 농담
- 표지/엔딩 문구
- 특정 홀에서 특정 친구에게 하는 말

오버레이 데이터에 넣지 않을 것:

- 코스 자체의 고정 공략
- 홀 거리, par, 고도 원본

## 7. 데이터 결합 방식

화면은 다음 순서로 데이터를 합친다.

1. `tripId`를 선택한다.
2. `trip.groupId`로 모임을 찾는다.
3. `trip.venueId`로 골프장을 찾는다.
4. `trip.rounds[].courseId`로 코스 순서를 만든다.
5. 각 코스의 `holesData`를 화면에 표시한다.
6. `overlay.tripId`가 같은 오버레이를 찾아 문구를 덮어쓴다.

우선순위:

```text
기본 화면 문구 < 코스/홀 고정 데이터 < 여행 오버레이 < 홀별 커스텀 멘트
```

## 8. 파일 분리 추천

처음에는 하나의 파일로 시작해도 되지만, 데이터가 늘어나면 아래처럼 나누는 것이 좋다.

```text
data/
  app-data.js
  groups.js
  venues/
    oakvalley.js
  trips/
    kimjang-bond-2026-oakvalley-jun.js
  overlays/
    kimjang-bond-2026-oakvalley-jun.js
```

더 단순한 초기 구조:

```text
data/
  app-data.js
```

## 9. 추가 검토할 것

아래 항목은 코딩 전에 결정하면 좋다.

1. 한 여행에서 9홀 코스만 칠지, 18홀 조합도 한 화면에서 이어볼지
2. 같은 코스를 여러 번 방문했을 때 과거 멘트를 보존할지
3. 친구 이름을 실명으로 표시할지 별명으로 표시할지
4. 이미지가 없는 홀을 어떻게 보여줄지
5. 코스 정보 출처와 신뢰도를 데이터에 남길지
6. 라운드 후 완성판을 만들 때 사진/후기를 어느 데이터에 붙일지

추천은 `postTrip` 영역을 별도로 두는 것이다.

```js
postTrip: {
  photos: [],
  awards: [],
  recapMessages: []
}
```

이렇게 하면 라운드 전 야디지북과 라운드 후 기념판을 같은 여행 ID 안에서 분리할 수 있다.
