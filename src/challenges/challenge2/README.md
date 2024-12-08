# Autocomplete

과제 설명: https://gyulstudy.notion.site/2-Autocomplete-132bca4d89dd804ca5eff0d7cf3e0dff

# 인수조건

### 기본 스펙

1. input 클릭 시 dropdown 열림
2. 마우스 호버 시 아이템 하이라이트
3. 검색어 입력 시 대소문자 관계없이 매칭
4. 아이템 클릭 시 콘솔에 기록

### 추가스펙

1. esc 키로 dropdown 닫기
   // 키 입력 검사하여 닫기
2. 바깥 영역 클릭하여 dropdown 닫기
   // 가장 외부 영역에서 마우스 입력 검사하여 ul 외부를 클릭했을 시 닫기
3. 마우스와 ↑ ↓ 커서 이어가기
   1. 검색어를 입력하고 바로 ↑ ↓ 커서로 이동할 수 있습니다.
      // 키보드 입력 검사, ↓ 방향키 입력 시 ul로 포커스 옮기기
   2. 마우스로 특정 아이템이 하이라이트 된 상태에서, ↑ ↓ 커서를 누르면 그 위치에 이어서 위 아래로 하이라이트가 이동합니다.
      // 아이템이 마우스 입력이 있을 때마다 index를 상태로 기록
   3. 엔터키를 누르면 마우스로 하이라이트 했든 ↑ ↓ 커서로 하이라이트 했든 상관 없이, 하이라이트 된 아이템이 선택됩니다.
      // 키 입력 검사하여 엔터키일 시 하이라이트 index에 해당하는 아이템 선택

(+)커스텀 구현: 화면 상 어느 곳을 눌러도 click away가 작동하도록 minHeight를 100vh로 맞춤

### 함수 작성 계획

1. 동작별

   - openList // open list and reset highlight index
   - closeList
   - highlightItem // set highlight index; onMouseEnter, onKeyDown
   - selectItem // set selected item index and input value, then close list

2. 핸들러
   - handleInputChange // attatched to input, set input value and reset highlitem item index
   - handleKeyDown
   - handleClickAway // ~get list's size and close the list when mouse pointer is outside of the bounding box~ attatched to body, check if the target is ancestor of autocomplete

### 과제 수행 중 고민지점

- ul 컴포넌트를 새로 렌더링할까? 아니면 시각적으로만 숨겨둘까?
  - 화면 높이 변화 때문에 고민했지만, 어차피 리스트 길이가 가변이므로 새로 렌더함.
- onMouseOver와 onMouseEnter의 차이는?
  - onMouseOver 버블링이 있고, onMouseEnter는 버블링이 없다.
- 함수 네이밍
  - setter 함수를 그대로 노출하기보다 직관적인 이름을 달아 가독성을 높이고 추상화하기
- key 입력에 대한 핸들러는 어느 컴포넌트에 달아야 할까?
  - 키보드 입력 시 포커스가 input에서 ul로 옮겨가야 한다고 잘못 이해하여 고민함. 전부 input에 달았음.
  - keydown 이벤트는 포커스를 가진 요소에서만 발생하는데, <ul> 또는 <div> 같은 비포커스 요소에서는 기본적으로 keydown 이벤트를 감지하지 못한다고 한다.
  - 포커스가 없는 요소에서 키보드 이벤트를 감지하려면 tabIndex 속성을 추가해서 해당 요소가 포커스를 받을 수 있도록 만들면 된다.
- key를 길게 누를 경우에 연속해서 이동하며 가속도를 붙이는 방법은?
  - 놀랍게도 OS(와 브라우저)가 기본적으로 처리해주는 동작이었다.

### 시간 기록

- 인수조건 분석 및 계획 : 1시간
- 구현: 1시간 40분
