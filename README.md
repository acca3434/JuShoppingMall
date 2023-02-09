# <div align="center">**JuShoppingmall**</div>

## Shoppingmall

### 기간 : 2022.10.21 ~ 2022.10.28

### 개발자 : 주병현

### 본인 역할

- **로그인**

  - Mysql을 이용한 로그인 구현
  
  - JWT를 이용한 로그인 유지

- **회원가입**

  - Mysql을 이용한 회원가입 구현

- ** Mysql설계 **

  - 로그인 : 로그인에 필요한 쇼핑몰 유저 저장

  - 회원가입 : 유입된 회원들을 저장할 수 있는 저장소 구현

  - 자유게시판 : 유저들이 자유롭게 글을 쓸 수 있는 게시판 구현
  
  - 댓글 : 유저들이 자유게시판에 있는 특정 글에 댓글을 달 수 있는 공간 구현
  
  - 장바구니 : 유저들이 마음에 드는 상품을 골라 담을 수 있는 저장공간 구현

- **프론트**

  - 로그인페이지

  - 회원가입 페이지

  - 자유게시판 페이지

  - 장바구니 페이지

---

## 목차

- [**개요**](#개요)
  - [Scripts](#Scripts)
- [**주요 페이지**](#주요-페이지)
  - [MainPage](#Main-Page)
  - [ShopPage](#Shop-Page)
  - [SwapPage](#Swap-Page)
  - [MyPage](#My-Page)
- [**주요 기능**](#주요-기능)
  - [지갑 연결](#지갑연결)
  - [민팅](#민팅)
  - [거래](#거래)
- [**기타**](#기타)
  - [PPT](#PPT)

---

## **개요**

### **Scripts**

#### client

`cd project`

npm start

#### backend

`cd backend`

npm start

---

## 사용 **기술**

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
<img src="https://img.shields.io/badge/Mysql-2496ED?style=for-the-badge&logo=Mysql&logoColor=black"> 
<img src="https://img.shields.io/badge/Express.js-363636?style=for-the-badge&logo=Express.js&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-F16822?style=for-the-badge&logo=Node.js&logoColor=white"> 
<img src="https://img.shields.io/badge/JWT-FF9900?style=for-the-badge&logo=JWT&logoColor=black">

---

## 주요 페이지

### **Main Page**

<br/>
<img src='https://user-images.githubusercontent.com/107897972/209746878-ba082079-c9c6-4297-83dd-09e74477a9d6.png' />

<br/>

- 메인 페이지

<br/>
<img src='https://user-images.githubusercontent.com/107897972/209747377-97644b06-4716-470a-8ac7-a32904cbe922.png' />

<br/>

- 민팅 버튼

### **Shop Page**

<br/>

<img src='https://user-images.githubusercontent.com/107897972/209747764-3479426b-edd9-4906-b011-55dc2ee98e35.png' />

<br/>

- 거래 페이지

<br/>
<img src='https://user-images.githubusercontent.com/107897972/209748087-7d435ecf-bdb7-4d75-9c46-fc046fe46466.png' />

<br/>

- 판매 페이지

<br/>

<img src='https://user-images.githubusercontent.com/107897972/209747974-b841791c-bde4-46a3-9554-373be6900064.png' />

<br/>

- 내가 보유한 NFT 선택창
- 판매중인 NFT는 제외

<br/>

  <br/>

### **Swap Page**

<br/>

<img src="https://user-images.githubusercontent.com/107897972/209748375-9fea183a-d177-47b3-969e-e1937fbbcbeb.png"/>

<br/>

- 스왑 페이지 스왑시 컨트랙트 최초 실행자가 5% 수수료를 받는다.

<br/>

### **My Page**

<br/>

<img src="https://user-images.githubusercontent.com/107897972/209748799-5acf3e16-0fa5-4403-9e54-2856ef40f5f3.png"/>

- 실시간으로 바뀌는걸 감지해서 나의 NFT를 보여준다.
- 내가 보유한 NFT, 판매중인 NFT를 보여준다.
- 내가 현재 연결된 메타마스크 주소를 보여준다.

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/209749085-920f4734-ce1a-4745-9c1e-90766a28317f.png"/>

<br/>
- 보유중인 NFT 클릭시 판매페이지으로 이동

## 주요 기능

### **지갑연결**

```JS
const connectWallet = async () => {
    const account = await getRequestAccount();
    setAccount(account);
    localStorage.setItem("account", account);
    window.ethereum.on("accountsChanged", async () => {
      const account = await getRequestAccount();
      setAccount(account);
      localStorage.setItem("account", account);
    });
  };
```

지갑 연결 버튼 클릭시 메타마스크에 account 요청

on 함수를 통해 계정이 변경시 인식하도록 로직 구성

### **민팅**

```js
function _minting(uint _mintAmount) public mintRequire(_mintAmount){
  require(coin.balanceOf(msg.sender) >= mintPrice * _mintAmount, "Insufficient funds!");
  require(mintCount[msg.sender] + _mintAmount <= mintLimit, "mint limit exceeded");
  coin.mintNft(msg.sender, mintPrice * _mintAmount);

  _safeMint(msg.sender, _mintAmount);
}

// nft민팅할때 토큰 보내는 함수
function mintNft(address _address, uint _price) external {
    _transfer(_address, owner(), _price);
}
```

민팅시 토큰을 owner에게 보내고 민팅한 사람에게 NFT를 보낸다.

### **거래**

거래를 하기전 front에서 setApprovalForAll 함수로 NFT를 보내는 권한을 준다.

```js
// NFT구매
function purchaseToken(uint _tokenId) public{
  address tokenOwner = nft.ownerOf(_tokenId);
  require(tokenOwner != msg.sender, "You can't buy your own NFT!");
  require(tokenPrices[_tokenId] > 0,"This NFT is not for sale!");
  // 가격 체크하는곳
  require(coin.checkCoinBalance(msg.sender) >= tokenPrices[_tokenId], "Not enough seed!");
  coin.mintNft(msg.sender, tokenPrices[_tokenId]);
  nft.transferFrom(tokenOwner, msg.sender, _tokenId);
  tokenPrices[_tokenId] = 0;
  popSaleToken(_tokenId);
}
```

## **기타**

### **PPT**

[발표용ppt(Close Sea).pptx](https://github.com/HanGyeol9931/TeamProject-HoneyBee/files/10311764/261CF148558BF19003.pptx)
