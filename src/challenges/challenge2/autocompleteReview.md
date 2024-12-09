# autocomplete

## Pull Request

## 요약

과제의 기본 스펙과 추가 스펙 3가지를 구현하였습니다.

## 설명

직접 구현해 본 적이 없는 UI라서 시작 전 구상하고 계획하는 시간을 충분히 가지려고 했습니다.

사실 가장 고민했던 부분은 input 부분과 list 부분을 어떻게 조합해야 평소 보던 autocomplete의 동작을 구현할 수 있는가 하는 것이었습니다.
이 부분은 이미 골조가 input과 ul로 짜여 있어서, input과 select를 사용하려던 계획보다 훨씬 단순하게 만들 수 있다는 걸 배웠습니다.

그 다음 고민 지점은 키보드 입력이나 마우스 입력에 대한 리스너를 어디에 달아야 할까 하는 부분이었습니다.
키보드 입력의 경우, 포커스가 input에서 ul로 옮겨가야 한다고 인수조건을 잘못 이해해서 고민했었는데 영상을 보니 그렇지 않아 모두 input에 달았습니다.
clickaway는 컴포넌트에 종속된 동작이다보니 app에 임의로 추가하기보다는 component 안에서 추가하는 게 맞지 않을까 싶어 body에 달았습니다. 이렇게 body에 때려박는 게 맞는지 알쏭달쏭한 느낌입니다.

지난번 과제 때 함수 네이밍, 추상화, 분리 등을 신경써서 완성하신 과제를 보고 저도 최대한 잘 구성해보려고 했는데
회사에서 특별하게 합의한 방식이 없다보니🥲 이 부분도 조금 확신이 없습니다.
좋은 의견이 있다면 감사히 받겠습니다!

그 외 과제를 하면서 고민되거나 궁금했던 지점들을 readme에 남겨 두었습니다.

---

대략적인 실제 소요 시간

- 인수조건 분석 및 계획 : 1시간
- 구현: 1시간 40분

## Reviews on my PR

### Good 👍

- readme에 spec, 접근방법, 문제점과 해결방식 등을 문서화한 것
- onMouseOver와 onMouseEnter의 차이에 대한 고민
- clickaway 기능을 e.target.closest()를 활용해 클래스를 가진 컨테이너 요소 외부에 있는지를 판별하여 구현한 부분이 참신

### How about 🤔

- 질문: default value와 key를 사용하지 않고 value를 사용한 이유
  - 답변:어떤 상황에서 default value와 key의 조합이 필요한 것일지가 궁금했는데 문서에서 UI를 아예 언마운트해서 값을 초기화하는 경우에 사용하는 것을 보았고, 저도 이전에 서로 의존하는 input이 20개쯤 되는 form을 만들 때 리렌더링이 심해서 비제어 form 라이브러리를 사용했던 것이 생각났어요.
    실제로 어떻게 활용하셨는지 리뷰하면서 참고해보도록 하겠습니다!
- input 상호작용 시 list를 열기 위해 사용한 이벤트: 나는 '클릭할 때도 열려야 하고 tab으로 접근했을 때도 열려야 한다'는 생각에 onClick과 onFocus에 같은 handler를 넣었다. 하지만 onClick시에도 결국 onFocus가 트리거될 것이므로 중복해서 사용할 필요가 없었다.

## WIL from others' PR

이번 과제에서는 특히 UI 컴포넌트 구조와 설계에 대한 다양한 구현 방식을 배웠다. 사내에서는 이미 완성된 MUI를 사용하다보니 UI 구조에 대한 특별한 컨벤션이 없었기에 귀중한 배움이었다.
우선 개념을 한 번 정리해 보고, 다음 번에는 과제 수행 시 실제로 적용하는 실습을 해야겠다👍

### Headless UI

- **Component UI vs Headless UI**
  - Component UI: 기능과 스타일이 함께 존재하는 방식이다. 라이브러리 중에는 대표적으로 Material UI, Ant Design가 있다. 모든 곳에서 일관된 스타일과 기능을 보장할 수 있다.
  - Headless UI: 기능은 있지만 스타일이 없는 방식으로, 라이브러리 중에는 Headless UI, Radix UI, Reach UI 등이 있다. 마크업과 스타일 수정이 자유롭기 때문에 기능 변경이 많은 곳에서 유용하다. Component UI libray 중에도 내부적으로는 Headless 방식으로 구현된 것이 많다.
- **설계 원칙**
  - 먼저 해당 UI에서 무엇을 수행할 수 있는지 명확히 정하고, 사용자가 사용할 수 있는 기능들과 방법을 제공해야 한다.
  - 기능의 구현 방법을 외부에서 전혀 알 필요가 없도록 하는 것이 중요하다. 외부가 변경되었다 하더라도 내부 컴포넌트가 영향을 받아서도 안되고, 내부가 수정되었다 하더라도 외부가 변경되어서도 안된다.
  - 기본적으로 유지보수하기 좋은 컴포넌트를 만드는 원칙이다.
- **여러 설계 방법들**

  1. Compound Component

     - 함게 사용되는 컴포넌트들이 상태(state)를 공유할 수 있게 만들어주는 패턴이다.
     - Context API를 사용해 컴포넌트 내부에서 state를 공유하고, UI를 이루는 각 요소를 <Wrapper /> 의 property로 등록한 뒤, 사용 시 꺼내어 다시 <Wrapper />의 children으로 넘긴다.
     - 단점: Context API를 사용하기 위한 보일러플레이트가 많다. (스터디원 분 중에는 보일러플레이트 없이 사용할 수 있게 해 주는 constate라는 라이브러리를 활용하신 분도!)
     - 장점: 컴포넌트를 사용하는 곳에서는 <Wrapper /> 하위에 어떤 컴포넌트가 있는지 볼 수 있고, 위치도 자유롭게 수정 가능하다.

  2. Function as Child Component

     - 자식에 어떤 것이 들어올지 예상할 수 없기 때문에 children prop으로 받아 그대로 전달하는 방식이다.
     - <Headless /> 컴포넌트 내부에서 state와 기능을 정의한 뒤 children을 함수 형태로 받아, state와 기능을 children의 인자로 전달한다. 실제 UI 형태는 사용 시 children이 return하는 것에 달려 있다.
     - 장점: 사용하려는 state를 내부에서 선언하여 간편하며, 해당 state를 실수로 다른 컴포넌트에 전달할 염려가 적다.
     - 단점: 컴포넌트의 state를 다른 컴포넌트와 공유해야 할 경우, <Headless /> 가 감싸야 할 코드량이 많아진다.

  3. Custom hooks
     - 컴포넌트 없이 기능만 따로 분리하여 간단하고 직관적이다.

  참고: https://www.howdy-mj.me/design/headless-components

### FDS(Feature Sliced Design) Architecture

- **FDS의 멘탈 모델, FDA(Feature Driven Architecture)**

  - 작은 규모의 프로젝트라면 모놀리스 형식으로 프로젝트를 구성해도 충분하지만, 프로젝트가 커질 예정이라면 FDA를 적용하는 것이 좋은 방법이다.
  - A set of principles that helps you to define the boundaries
    1. Discoverability: 프로젝트가 커지고 한 코드에 여러 의존관계에 놓여 있더라도 탐색하기 쉬워야 한다.
    2. Work parallelisation: 코드를 수정함으로 인해 다른 기능에 버그를 발생시키지 않으리라는 확신이 있어야 한다.
    3. Controlling shared absractions: 공통적으로 사용되는 코드들은 찾기 쉬운 곳에 직관적인 이름으로 작성되어야 한다. 너무 많은 내용을 담지 않고 재활용되기 쉬운 규모로 작성되어야 한다.
  - 주요 달성 방식
    1. Decentralization: 피처와 타입 단위로 코드를 잘게 나누어 영향 범위를 구분한다. 더 나아가 index.js를 통해서만 접근할 수 있도록 캡슐화할 수 있다.
    2. Explicit Sharing: 공용 코드는 특정 도메인에 결합되지 않아야 하고 변경 가능성이 적어야 한다.
    3. co-location: 한 피쳐 내부에서 쓰이는 도메인 코드는 최대한 한 폴더 내부에 위치시킨다.
    4. de-coupling isolation: 피쳐 코드 내부에서 사용하는 코드들은 다른 피쳐 모듈을 의존하지 않는다.

- **FSD의 구성 요소**
  1. layers
  - 상위 레이어는 하위 레이어를 의존성으로 가질 수 있지만 그 반대는 성립될 수 없다.
  - 하위로 갈수록 추상화가 심화되고, 상위로 갈 수록 비즈니스 로직이 심화된다.
  2. slices
  - 각 layer의 하위 계층이다.
  3. segments
