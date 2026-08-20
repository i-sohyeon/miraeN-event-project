# 📌 miraeN-event-project (퍼블리싱 과제)

> 미래엔 이벤트 페이지 반응형 웹 퍼블리싱 프로젝트입니다.

## 🔗 Demo
- Live Demo: https://i-sohyeon.github.io/miraeN-event-project/index.html
- Repository: https://github.com/i-sohyeon/miraeN-event-project
---

## 🛠 사용 기술 및 라이브러리

* **Markup & Style**: HTML5, CSS3
* **JavaScript**: Swiper.js, AOS.js, jQuery
* **CSS 단위 & Responsive**: `rem` 기반 유동형 비율 축소 반응형 (`calc()` 활용)
* **CSS Layout**: Flexbox, CSS Grid
* **Typography & Icons**: Pretendard, Gmarket Sans, Jalnan2, [Font Awesome v6](https://fontawesome.com/)
    - (산돌체 등 유료 폰트는 웹 표준 폰트 대체 또는 이미지 그래픽으로 처리)
* **Libraries**:
    - [Swiper.js](https://swiperjs.com/demos) (스와이퍼 슬라이드)
    - [AOS.js](https://michalsnik.github.io/aos/) (스크롤 모션 애니메이션)


## ✨ 주요 구현 기능
- 반응형 이벤트 랜딩 페이지 (`rem` + `calc()` 기반 유동형 레이아웃)
- Swiper 콘텐츠 슬라이더
- 커스텀 체크박스 및 라디오 버튼
- 설문 UI Grid 레이아웃
- AOS.js 모션

## ♿ 웹 접근성 고려
- 시맨틱 HTML5 태그를 활용하여 문서 구조 구성
- 이미지의 콘텐츠 목적에 따라 대체텍스트 제공
- 폼 요소는 실제 `<input>` 요소와 `<label>`을 연결하여 키보드 및 스크린리더 접근성 고려
- 단순 꾸밈 이미지는 대체텍스트를 비워 콘텐츠와 장식을 구분
---

## 📐 주요 구현 포인트 & 기술적 고려사항

### 1. `rem` 단위를 활용한 비율 유지 유동형 레이아웃
* 시안 기준(1920px) 해상도부터 `html`의 `font-size`를 `calc(100vw / 1920 * 16)` 공식으로 유동적으로 조절.
* 레이아웃, 여백, 폰트, 이미지 크기를 `rem` 단위로 지정하여 화면 너비가 줄어들어도 디자인 비율이 깨지지 않고 통이미지처럼 자연스럽게 축소되도록 구현.

### 2. 폼 요소(Form Elements) 및 UI 커스텀
* **체크박스/라디오 버튼**: 기본 브라우저 `<input>` 스타일을 제거하고, `input:checked + label` 선택자 구조와 가상 요소(`::before`, `::after`)를 이용해 커스텀 UI 디자인 반영.
* **설문 조사 그리드**: CSS Grid (`repeat(4, 1fr)`)와 Flexbox를 조합하여 알약 형태(Pill style) 라디오 버튼을 가로/세로 균등하게 배치.

### 3. 코드 최적화 및 유지보수성 향상
* 반복되는 `::before`, `::after` 그래픽 요소(배경 이미지, 별 아이콘, 밧줄 모션 등) 스타일을 공통 클래스 및 그룹 선택자로 통합 관리.
* 시맨틱 태그 (`header`, `main`, `section`, `footer`) 중심의 들여쓰기 구조로 마크업 가독성 확보.
* `csscomb`를 활용해 CSS 속성 선언 순서(Layout → Box Model(크기, 여백) → Typography → Visual → Interaction )의 일관성 유지.

---

## 🌐 Cross Browsing

### Test Environment

- Chrome — Desktop / Android
- Safari — macOS / iOS
- Edge — Desktop

최신 브라우저를 기준으로 주요 UI 및 인터랙션의 정상 동작을 확인.

--

## 💡 주요 트러블슈팅 (Troubleshooting)

### 🔴 Swiper 화살표 버튼 위치 및 슬라이드 가림막 이슈
* **문제 상황**: 
  * Swiper 내부 버튼이 `-70px` 위치로 슬라이드 박스 밖을 벗어나야 하는 디자인 구조.
  * Swiper 컨테이너(`.cotentSlide`)에 `overflow: hidden`을 주면 **화살표가 잘리고**, `overflow: visible`을 주면 **좌우로 스와이프되는 다음/이전 슬라이드가 옆에 비쳐 보이는 현상** 발생.
* **해결 방법**:
  1. **마크업 구조 개선**: Swiper 영역 바깥에 전체를 감싸는 `.swiper_wrap` 부모 요소를 추가하고 화살표 버튼(`.swiper-button-prev/next`)을 Swiper 외부로 분리.
  2. **상대 위치(Relative) 제어**: `.swiper_wrap`을 기준으로 화살표 위치를 Absolute 배치하고, 내부 `.cotentSlide`는 `overflow: hidden`을 유지하여 슬라이드는 깔끔하게 가리면서 화살표 버튼은 노출되도록 구현.
  3. **기본 아이콘 겹침 해결**: Swiper 기본 라이브러리의 `::after` 폰트 아이콘이 커스텀 배경 이미지와 겹치는 현상을 `.swiper-button-prev::after { display: none; }` 처리로 깔끔하게 제거.

### 🔴 화면 축소 시 발생하는 가로 스크롤바(Overflow) 이슈
* **문제 상황**: 화면 너비를 줄였을 때 또는 요소를 영역 밖으로 배치했을 때 부모 요소 밖으로 그래픽 요소가 돌출되어 가로 스크롤바가 생성됨.
* **해결 방법**: `overflow-x: hidden` 사용 시 내부 `position: sticky` 동작이 깨지는 문제를 방지하기 위해 최신 CSS 속성인 `overflow-x: clip`을 적용하여 Sticky 기능을 유지하면서 가로 넘침만 깔끔하게 제어.

---

## 📁 프로젝트 파일 구조

```text
├── index.html          # 이벤트 페이지 마크업
├── css/
│   ├── reset.css       # 기본 CSS 초기화
│   ├── font.css        # 웹 폰트
│   ├── common.css      # 공통 변수 및 공통 레이아웃
│   ├── layout.css      # 메인 이벤트 페이지 상세 스타일
│   └── style.css       # 전체 css 파일 import
├── fonts/              # 로컬 폰트 파일
├── img/                # 이미지 및 그래픽 자원
└── js/
    └── script.js       # 스크립트
ㅡ
