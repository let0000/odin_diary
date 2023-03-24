# odin_diary

## 🌟 서비스 소개
<p align='center'>
<img width='400px' src='https://user-images.githubusercontent.com/21376061/218392015-e198ef26-ee61-4b6e-b3df-0571003a82e6.gif'>
</p>

   모바일 게임 오딘을 플레이하면서 하루동안 얻은 아이템들을 기록하는 일기 형식의 웹 어플리케이션
   
  Vue를 이용하여 프론트엔드를 구성하고 node와 mariaDB 를 이용하여 백엔드를 구성하여 개발

배포 : [https://port-0-odin-diary-dist-1jx7m2gldba9am1.gksl2.cloudtype.app](https://port-0-odin-diary-dist-1jx7m2gldba9am1.gksl2.cloudtype.app)

<p align='center'>
    <img src="https://img.shields.io/badge/vue-v3.2.13-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/vue cli-v2.9.6-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/vue router-v4.0.3-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/vue sweetalert2-v5.0.5-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/vuex-v4.0.2-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/vuex persistedstate-v4.1.0-4FC08D?logo=Vue.js"/>
   <img src="https://img.shields.io/badge/moment-^2.29.4-764ABC"/>
   <img src="https://img.shields.io/badge/axios-^1.2.6-5A29E4?logo=Axios"/>
   <img src="https://img.shields.io/badge/bootstrap-^5.2.3-7952B3?logo=Bootstrap"/>
   <img src="https://img.shields.io/badge/bootstrap icons-^1.10.3-7952B3?logo=Bootstrap"/>
</p>
    
## 🌟 주요 기능

### 👌 로그인 기능

<p align='center'>
  <img width="400px" src="https://user-images.githubusercontent.com/21376061/227470168-f25bae0d-b16d-463c-8ab1-824164980266.png"/>
</p>

* 로그인을 하지 않으면 splash 화면을 보여줍니다.
* Kakao Auth 를 통해 로그인 기능 구현 

<p align='center'>
  <img width='400px' src="https://user-images.githubusercontent.com/21376061/227470349-f6ffa855-15bc-4d28-8de4-f242b6ea82c0.png"/>
</p>

* 로그인에 성공하면 메인 화면을 보여줍니다.
* 로그아웃 버튼을 통하여 로그아웃을 할 수 있습니다.

### 👌 일기 목록

<p align='center'>
  <img width='400px' src = "https://user-images.githubusercontent.com/21376061/227470448-8de0e1ae-d4dd-4606-bbec-ecd7a2481ded.png"/>
</p>

* 좌측 상단의 버튼을 눌러 일기목록을 리스트형식과 카드형식으로 볼 수 있습니다.
* 우측 상단의 날짜 조회를 통해 원하는 날짜의 일기를 볼 수 있습니다.
* 일기 작성 버튼을 통하여 오늘의 일기를 작성할 수 있습니다.


<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227470596-3cf704c7-e7ae-4083-b484-d49f1d8387e0.png"/>
  <h4 align='center'> 카드 형식 </h4>
</p>

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227470701-9dbadcce-a4fa-4eef-9729-fdbdf5c0b836.png"/>
  <h4 align='center'> 리스트 형식 </h4>
</p>


<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227172176-dc509dc7-bf9a-4091-9f83-29ff54662aed.png"/>
</p>

### 👌 일기 작성

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227471102-f1a182db-66b7-483f-b295-1bcc94cdad9b.png"/>
</p>

* 정보들을 입력한 후에 체크 버튼을 눌러 일기를 작성할 수 있습니다.


<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227471646-b41e55ae-4306-4705-ac20-86c2fd2bbbfd.png"/>
</p>

* 일기를 모두 작성하면 완료 버튼을 통해 일기 목록으로 돌아갈 수 있습니다.

### 👌 일기 상세 정보

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227471880-2ac811b2-6d80-4a51-afaf-0b158215651c.png"/>
</p>

* 일기목록에서 원하는 일기를 선택하면 일기 상세 정보를 볼 수 있습니다.
* 수정 버튼을 통해 일기를 수정 할 수 있습니다.

### 👌 일기 수정

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227476909-25cb56f6-20a9-4768-971f-5cd453461a1e.png"/>
</p>

* 해당 일기에 새로 추가하거나 삭제하는 등 일기를 수정 할 수 있습니다.


### 👌 일기 삭제

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227472144-9b4acf2d-3f55-4f8a-8c02-24f17d98242c.png"/>
</p>

* 삭제 버튼을 누르면 정말 삭제할건지 묻는 알림창이 나타납니다.

<p align='center'>
  <img width='300px' src = "https://user-images.githubusercontent.com/21376061/227472197-9012c547-ff66-46b0-a1b8-bd106b3316dc.png"/>
</p>

* 삭제가 완료되면 삭제 완료 알림창이 나타나며 해당 일기가 삭제됩니다.


## 🌟 배포

<p align='center'>
  <img width='400px' src = "https://user-images.githubusercontent.com/21376061/227477748-8d2096ae-365f-4e5a-9adf-5747070952df.png"/>
</p>

* 데이터를 관리하는 마리아DB 를 Cloudtype 을 이용하여 배포합니다.
* Vue에서 dist 파일을 만들어 백엔드와 함께 github 저장소에 저장합니다.
* Cloudtype 을 이용하여 github 저장소에 저장한 파일을 배포합니다.

배포용 저장소 : [https://github.com/let0000/odin_diary_dist](https://github.com/let0000/odin_diary_dist)
