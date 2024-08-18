const BASE_URL = "https://api.exchangeratesapi.io/v4/latest";
//  const key= access_key = API_KEY;

  // let promise =fetch(BASE_URL);
  // console.log(promise);

  const dropdowns =document.querySelectorAll(".drop-down select");
  const btn=document.querySelector("form button");
  const fromCurr=document.querySelector(".from select");
  const toCurr=document.querySelector(".To select");
  const msg = document.querySelector(".convertor");

  for (let select of dropdowns) {
    for( currCode in countryList) {
     
      let newOption =document.createElement("option");
      newOption.innerText = currCode;
      newOption.value =currCode;
      if(select.name==="from" && currCode==="USD") {
        newOption.selected="selected";
      } else if (select.name==="To" && currCode==="INR") {
        newOption.selected==="selected";
      }
      select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
      updateFlag(evt.target);
    })
  }

  const updateFlag=(element) => {
    let currCode=element.value;
    let countryCode =countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
  }

  btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount=document.querySelector(".input-section input");
   let amtVal=amount.value;
   if(amtVal==="" || amtVal<1) {
    amtVal=1;
    amount.value="1";
   }
  //  console.log(fromCurr.value, ToCurr.value)
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response =await fetch(URL);
   
    let data=await response.json();
    console.log(data); //error problem is here
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount=amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value}= ${finalAmount} ${toCurr.value}`;

  })
