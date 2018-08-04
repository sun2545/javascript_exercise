var news =[
  {
    "title":"sbs",
    "imgurl":"http://sattic.naver.com",
    "newslist" :[
       "asss","grher","grhhds","fhooek"
      
    ]
  },
  {
    "title":"mbc",
    "imgurl":"http://sssat.naver.com",
    "newlist" :[
      "qwww","oke","owksg","cndh"
    ]
    
  }
];

/*
let [,mbc]=news;
let {title,imgurl} = mbc;
console.log(title,imgurl);
*/

let [, {title,imgurl}] =news;
console.log(title,imgurl);