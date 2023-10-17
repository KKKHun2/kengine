# 기업 소개 페이지 제작
기업에서 데이터 검수쪽 일을 진행하다 요청받아서 4일에 걸쳐서 html페이지를 react화면에 페이지로 수정했습니다.
html페이지는 단순히 페이지만 있어서 안에 버튼이나,화면전체,구성등을 수정하였고
모바일 반응영 페이지로 수정해서 각페이지들을 핸드폰으로 볼때 어플처럼 간단하게 볼수있도록 제작하였습니다.



## 배포 링크
https://kengine.vercel.app
## QR코드 :<br />

<img src="https://github.com/KKKHun2/kengine/assets/105702862/a524325d-ac7e-41bd-83a6-c80a2a357761.png" alt="훈플릭스" width="250" height="250">




# app 메인화면 (/)

  메인화면에 기업에서 제작한 애니메이션인 비디오 파일을 public에 넣고 컴퍼넌트로 만들어서 메인페이지에서 동작하도록 하였습니다.
    <br />
    <img src="https://github.com/KKKHun2/kengine/assets/105702862/9d69a16f-a47e-42e5-9f78-0e3843f58284" width="600" height="700">


  <br />
   <br />
    <br /> 
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/94ccd7e6-1169-4d5a-8d29-1a6bfab06b8b.png" width="600" height="400">
    <br />
배너 및 모달 배경 이미지 코드
<br />
 <img width="603" height="400"  alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/7e31c24d-5169-46e4-a62c-105f3bf3e125">
    
  <br />
 Home 화면에는 상영중,출시예정,인기 영화들로 3개의 슬라이드를 구성했습니다.
 

 
  해당 api 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/dcd2d25e-e21c-4b18-8d9b-4106d6ae165c.png" width="600" height="400">


# 헤더부분 

헤더 부분에 framer-motion 기능을 이용해서 각 사이즈페이지로 이동하는 버튼 밑에 얇은 박스모양이 내가 이동한곳으로 부드럽게 따라서 이동하도록 제작했습니다.
gif로 변환해서 살짝 끊기지만 실제 페이지에서는 부드럽게 동작합니다.
<br />


<img width="800" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/447455a9-ae9b-4d7b-b88d-65a95a851497">

<br />

<img width="1420" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/cdeacaf3-2f4d-4b37-8e4e-b13d05fd58a9">

  <br />
api코드로 데이터를 가져오는 코드
  <br />
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/95789d1d-3603-4f07-88e1-dffc20e3d13c.png" width="600" height="400">

<img width="1419" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/8505f09e-47ac-4352-bfd0-9c2d1e9cf2ff">



# app 검색화면(/Search)


<div style="display: flex; align-items: center;">
  <div style="position: relative;">
    <img src="https://github.com/KKKHun2/Hunflix/assets/105702862/3c61e10a-6889-47ef-aa70-06c0a6b888fa.png" width="800" height="400">
    <p style="position: absolute; top: 0; left: 0; width: 100%; text-align: center;">키워드 검색시</p>
  </div>
  <div style="position: relative;">
    <img src="https://github.com/KKKHun2/Hunflix/assets/105702862/4e0e3f69-853b-4215-86f8-3651f34eb1e3.png" width="800" height="400">
    <p style="position: absolute; top: 0; left: 0; width: 100%; text-align: center;">키워드 검색이 없을때</p>
  </div>
</div>

# 모달기능
각각 페이지마다 있는 슬라이드에 마우스를 가져다 대면 해당 슬라이드 컷이 위로이동하면서 제목이 나오고 클릭을 하면 새로운 모달창이 열리게 됩니다.
<br />
해당 모달에는 api로 받아온 정보인 영화 또는 Tv에 관한 설명이 되어있습니다.(년도,상영시간,종류,평점등)
 <br />
  <br />
<img width="1418" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/2cdbf3bd-4c92-4a5a-a3c2-73ef8c587f9a">

 <br />

## Header

헤더부분에도 에니메이션 효과를 넣어서 Home화면과 TvShow 페이지 둘 중 현재 어떤 페이지에 있는지 확인 가능하도록 하였습니다.

그리고 검색부분은 누르면 검색 아이콘을 누르면 애니메이션 효과와 함께 인풋창이 나오고 검색이 가능합니다.

 <br />
 <br />

## 색상테마(다크모드,라이트모드)
색상테마 기능을 넣어서 다크모드, 라이트모드로 사용자가 화면을 더 편안하게 사용하고 시야 피로를 줄이는 데 도움이 되며, 사용자에게 선택권을 제공하여
<br /> 개인적인 환경에 맞게 설정할 수 있도록 하였습니다. 햋빛 아이콘과,달빛 아이콘을 써서 사용자들이 편하게 기능을 사용하도록하였고, 
<br /> 항상 화면 하단에 위치하도록 해서 사용에 용이하도록 했습니다.
 <br />
 pc버전
  <br />
  
 다크모드 (평소에 어두운 달아이콘이지만 마우스 호버시 좀 더 밝아지는 배경 달 아이콘으로 밝아진다는걸 간접적으로 표현 했습니다.)
<img width="1100" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/066e8141-53ac-42f5-85bf-db414ec286b8">
 <br />
 
라이트모드 (평소에 밝은 빛으로의 해 아이콘이지만 마우스 호버시 살짝 어두워지는 배경 해 아이콘으로 인해 누르면 어두워지는 페이지가 보인단느걸 간접적으로 표현 했습니다.)
<img width="1100" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/3f34d761-533d-409a-841e-6435b0a5bd04">

 <br />
 
 Mobile 버전에서의 다크모드,라이트모드
  <br />
  
<p align="center">

  <img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/565bbc9e-4f00-4d51-bb4a-f003798f37da">

  <img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/484bc08c-bfd8-4c36-b096-beb27e19678e">
</p>

<br />
<br />

# MainLogo,Favicon,예외처리

## 로고와 파비콘도 직접 제작 및 적용
<br />
로고
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/915a3c5a-cc95-4e90-87a8-e90399e6c5d3.png" width="300" height="200">
<br />
파비콘
<img src="https://github.com/KKKHun2/Hunflix/assets/105702862/ef76d229-dcc5-4ea7-8039-0b769e0b491b.png" width="100" height="100">
<br />
가끔 배경이미지가 존재하지 않는 영화,tv쇼가 있어서 해당 이미지로 예외처리 상황에 대체하였습니다.
<br />
 <img width="253" alt="image" src="https://github.com/KKKHun2/Hunflix/assets/105702862/3bb81856-973e-4940-ad07-5470bc516319">
<br /> 





#
<div align=center><h1>📚 FE STACKS</h1></div>

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">

<img src="https://img.shields.io/badge/TypeScript-273c75?style=for-the-badge&logo=TypeScript&logoColor=white">

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">


</div>

