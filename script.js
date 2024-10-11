
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '11f8874ccbmsh529386aac013f01p1c7461jsn58a66800d96c',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};



let btn = document.querySelector(".btn");
let sumArticles = document.querySelector(".sumArt")

btn.addEventListener("click" , (e) => {
  // console.log("hello")
  e.preventDefault()
  let inputUrl = document.querySelector(".inp-url").value;
   const url =`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${inputUrl}&lang=en&engine=2`;
   
  let sumContainer = document.querySelector(".summary-art");
  sumContainer.style.opacity = 1;
  sumArticles.innerText = "Please wait articles is summarizing.....";

  if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(inputUrl)){

    sumArticles.innerText = "Please enter valid URL...!!!";
  }else {
    fetch(url , options) 
    .then(data => data.json()
    ) 
    .then( data => {
      sumArticles.innerText = data?.summary;
    })
    .catch(error => {
      console.log(error);
    })
   
  }
})