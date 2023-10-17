# 기업 소개 페이지 제작
<p>기업에서 데이터 검수쪽 일을 진행하다 요청받아서 4일에 걸쳐서 html페이지를 react화면에 페이지로 수정했습니다.</p>
<p>html페이지는 단순히 페이지만 있어서 안에 버튼이나,화면전체,구성등을 수정하였고
모바일 반응형 기능들이 동작하도록 페이지를 수정해서 각페이지들을 핸드폰으로 볼때 어플처럼 간단하게 볼수있도록 제작하였습니다.</p>




## 배포 링크
https://kengine.vercel.app
## QR코드 :<br />

<img src="https://github.com/KKKHun2/kengine/assets/105702862/60d0f476-e3c0-4ecb-a7f6-c6c509817ff9.png" alt="k엔진" width="250" height="250">




# app 메인화면 (/)

  메인화면에 기업에서 제작한 애니메이션인 비디오 파일을 public에 넣고 컴퍼넌트로 만들어서 메인페이지에서 동작하도록 하였습니다.
    <br />
    <img src="https://github.com/KKKHun2/kengine/assets/105702862/9d69a16f-a47e-42e5-9f78-0e3843f58284" width="600" height="700">

<br />

영상또한 화면 전체크기에 맞춰서 모두 보이도록 페이지를 구성했습니다.

<img width="1000" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/7311c974-9316-4657-ab48-c7d3b464f106">


<br />

<br />

# 페이지마다의 반응형기능

페이지마다 반응형 기능들을 넣었고 모든페이지에서 타이틀또한 왼쪽 상단에 위치해서 글을 읽게 편하게 했지만 
 <br />
모바일에서는 중앙으로 배치해서 가독성을 더욱 훌륭하도록 제작했습니다.
 <br />
 
side3페이지는 기존화면에서는 2행2열로 그림이 크게 보이지만 모바일에서는 가로로 내리면서 앱 처럼 이용하도록 했습니다.

 <br />


<img width="1000" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/2bcfea33-92b4-4988-bfb8-4c8f77723b28">

<img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/4f599d86-81ab-4312-84cb-c99e92f8fc52">


  <br />
  <br />

 <h3> 모바일 헤더</h3>
 
모바일 버전에서는 기존의 헤더의 아이템 부분들이 사라지고 메뉴버튼 새롭게 생기고 로고버튼 색상변경 버튼만 남습니다.
<div>
   메뉴버튼을 누르면 사진처럼 오버레이가 생기고 x버튼이나 오버레이를 클릭하면 메뉴버튼이 종료됩니다. 각 메뉴버튼을 눌러 이동이가능합니다.
</div>


 <br />

   <br />

<img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/bf08aba3-50a1-4d71-9fd5-8e6579f724a6">

<br />

# Header

헤더 부분에 framer-motion 기능을 이용해서 각 사이즈페이지로 이동하는 버튼 밑에 얇은 박스모양이 내가 이동한곳으로 부드럽게 따라서 
<br />

이동하도록 제작했습니다. gif로 변환해서 살짝 끊기지만 실제 페이지에서는 부드럽게 동작합니다. 

<br />

pc버전에서만 보이도록 하였고 모바일에서는 메뉴버튼을 눌러서 헤더에있던 아이템들을 메뉴아이템으로 보도록 했습니다.

<br />

<img width="800" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/447455a9-ae9b-4d7b-b88d-65a95a851497">



<br />
<br />
  
<h3>메뉴 버튼</h3>


  
<img width="340" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/315542aa-d8aa-48d4-bc57-4c7717adde22">



## 색상테마(다크모드,라이트모드)
색상테마 기능을 넣어서 다크모드, 라이트모드로 사용자가 화면을 더 편안하게 사용하고 시야 피로를 줄이는 데 도움이 되며, 사용자에게 선택권을 제공하여
<br /> 개인적인 환경에 맞게 설정할 수 있도록 하였습니다. 해 아이콘과,달 아이콘을 써서 사용자들이 편하게 기능을 사용하도록하였고, 
 pc버전에서는 항상 화면 하단에 위치하도록 해서 사용에 용이하도록 하였고 모바일 버전에서도 항상 화면 우측상단에 위치하도록 해서 언제든 사용가능하도록 했습니다.
 
<h3> pc버전 </h3>
  
 <h3> 다크모드 (기존 어두운 달아이콘이지만 마우스 호버시 좀 더 밝아지는 배경 달 아이콘으로 밝아진다는걸 간접적으로 표현) </h3>
<img width="1000" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/066e8141-53ac-42f5-85bf-db414ec286b8">
 <br />
 
 <h3> 라이트모드 <br />
   
   (밝은 빛의 해 아이콘이지만 호버시 살짝 어두워지는 해 아이콘으로 인해 누르면 화면이 어두워지게 보이도록 간접적으로 표현) </h3>
<img width="1000" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/3f34d761-533d-409a-841e-6435b0a5bd04">
 <br />

 <br />
 
<h3> Mobile 버전에서의 다크모드,라이트모드 </h3>
  <br />
  
<p align="center">

  <img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/565bbc9e-4f00-4d51-bb4a-f003798f37da">

  <img width="500" alt="image" src="https://github.com/KKKHun2/kengine/assets/105702862/484bc08c-bfd8-4c36-b096-beb27e19678e">
</p>

<br />
<br />







#
<div align=center><h1>📚 FE STACKS</h1></div>

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">

<img src="https://img.shields.io/badge/TypeScript-273c75?style=for-the-badge&logo=TypeScript&logoColor=white">

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">


</div>

