# movie_app
React JS Fundamentals Course 


https://nomadcoders.co/react-fundamentals/lobby

작업기간: 2021.10.26 - 2021.10.29 
사용언어: html, Javascript, CSS
사용프레임워크: React 
----------------------------------------------------------------------------
App.js

React 의 Route를 이용하여 Navigation 생성 후 영화,영화정보, 페이지에 관한 정보 페이지들을 나눔

Home.js

getMovies : Api를 axios와 비동기처리를 이용하여 데이터를 받아옴
componentDidMount : react의 life-cycle에 따라 삽입될때 순서를 이용하여 getMovies를 실행
map : 비동기처리 후 isLoading의 값이 false 로 바뀌면 Movie()를 실행하여 정보를 받아옴
Link를 사용하여 Detail.js에 state값을 전달

Movie.js

Movie : state값들을 받아온 후 router를 통해 Detail에 state를 전달하고 Home.js에 화면에 출력할 정보들을 전달
propTypes : data들의 type을 검사하고 필요 유무를 설정

Navigation.js

Navigation : {LINK}를 이용하여 각 페이지를 이용할 수 있는 side-bar 생성

Detail.js

componentDidMount : Home에서 클릭을 하지 않고 주소를 통하여 들어갈 때 state값이 undefine 되어있으므로 state값이 undefined일때 홈페이지로 이동
Movie.js에서 받은 state값을 화면에 출력
