# 💵Currency Exchange Converter

## 프로젝트 소개

    currencylayer API를 활용하여 Select Box 전환기와 Tab Select 전환기, 두 종류의 환율 전환기를 각각 동작하도록 구현하는 것을 목표로 하는 프로젝트입니다.

---

## 배포 주소

https://

---

## 기능별 영상

### 1. Select Box 전환기 (민지연, 박서윤)

구현 영상

<img src="https://user-images.githubusercontent.com/53133662/151083076-0cad58cc-a165-47fb-a38b-8590f1ab2813.gif">

alert 창

<img src="https://user-images.githubusercontent.com/53133662/151083796-51247a9a-ecad-45f0-b104-4d31f15719bb.png">

### 2. Tab Select 전환기 (박서영, 양다혜)

<img src ="https://user-images.githubusercontent.com/58350897/151084527-8bbef6a7-3157-4591-8150-2f8d16a3c8e7.gif">

---

## 과제 구현 목록

### 1. Select Box 전환기 (민지연, 박서윤)

- currencylayer API 데이터를 실시간으로 활용
- select box에서 option 값 선택해 저장
- 수취국가에 따라 하단 환율값 변동
- 송금액 input창에 조건에 부합하지 않는 값 입력 시, 팝업창 출력
- Submit을 누르면 수취금액이 KRW, JPY, PHP 중 하나로 계산, 결과값 출력
- utils 활용해 환율과 수취금액 소숫점 2째자리까지, 3자리 이상 되면 콤마(,) 처리
- 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 alert 창으로 띄우도록 처리

### 2. Tab Select 전환기 (박서영, 양다혜)

- 유저값 input창에 숫자만 입력 가능
- 유저값 input창에 1000 이상을 입력할 경우 자동적으로 “1,000”와 같이 변경
- 드롭다운 메뉴를 선택할 경우, 탭 title을 선택한 값을 제외하고 “USD”로 생성
- 사용자의 수치 입력 혹은 드롭다운 메뉴를 이용한 통화 변경시 변경될 환율 타이틀, 기준일 정보 동기화 변경

---

## 프로젝트 구조 설명

````bash
├── node_modules
├── .github
├── public
│   └── index.html
├── src
│   ├── api
│   ├── assets
│   ├── components
│   │   └── componentName
│   │         └── style
│   ├── costants
│   ├── data
│   ├── hooks
│   ├── pages
│   │   └── App.jsx
│   ├── styles
│   │   └── globalStyle.js
│   └── utils
│       ├── comma.js
│       └── date.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md```

---

````

---

## 설치 및 시작하는 법

#프로젝트 클론

```
$ git clone https://github.com/On-Basic/currency-converter.git
```

#패키지 설치

```
$ npm install
```

#서버 실행

```
$ npm start
```
