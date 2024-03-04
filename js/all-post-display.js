const cardContainer = document.getElementById("card-container");

const allDataDisplay = async () => {
  const respos = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const Data = await respos.json();
  const allData = Data.posts;
  
  allData.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="bg-[#797DFC1A] border-2 border-[#7D7DFC] p-4 rounded-xl">
    <!-- left side  -->
    <div class="flex flex-col lg:flex-row  gap-5">
      <!-- profile images  -->
    
     <div id="isOnline" class="avatar online mx-auto w-24 h-24">
     <div class="rounded-full ">
       <img class="" src="${element.image}" />
     </div>
   </div>

      <!-- discription  -->
      <div class="flex-1">
        <div class="p-5 border-b-2 border-dashed text-center lg:text-left space-y-3">
          <p class="inter font-medium text-xs lg:text-lg">
            #<span>${element.category} </span>Author : <span>${element.author.name}</span>
          </p>
          <h1 class="lg:text-2xl font-bold mulish text-[#12132D]">
            ${element.title}
          </h1>
          <p class="inter">
          ${element.description}
          </p>
        </div>
        <!-- conmments viewrs and time  -->
        <div class="flex justify-between py-5 lg:p-5 items-center">
          <div class="flex gap-3 lg:gap-5">
            <div class="flex gap-3">
              <img src="images/Vector.png" alt="" />
              <span class="inter">${element.comment_count}</span>
            </div>

            <div class="flex gap-3">
              <img src="images/Group 16.png" alt="" />
              <span class="inter">${element.view_count}</span>
            </div>

            <div class="flex gap-3">
              <img src="images/Group 18.png" alt="" />
              <p class="inter"><span class="inter">${element.posted_time}</span> min</p>
            </div>
          </div>
          <div onclick="displayItem('${element.id}')">
            <img  src="images/email 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>`;
    cardContainer.appendChild(div);
         
    const isOnline = document.getElementById('isOnline')
    if(element.isActive){
      isOnline.classList.add('avatar')
      isOnline.classList.add('online')
    }else{
      isOnline.classList.add('avatar')
      isOnline.classList.add('offline')
    }
    // console.log(element);
  });
};

allDataDisplay();


let counNumber = 1;
const displayItem = async (id) => {
  
  console.log(counNumber)
  const number = document.getElementById('coun-number')
  const innerNumber = number.innerText
  const convartNumber = parseInt(innerNumber)
  number.innerText = counNumber++
  console.log(convartNumber)

  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
  const data = await res.json();
  const allData = data.posts.find((item)=> item.id == id);
  const itemContainer = document.getElementById("item-container");
  const div2 = document.createElement("div");
  div2.innerHTML = `
    <div class="flex justify-between bg-white  p-5 rounded-xl">
                <h1 class="lg:text-2xl mulish text-[#12132D]">${allData.title}</h1>
                <div class="flex items-center p-2">
                  <img src="images/Group 16.png" alt="" />
                  <span id="viewrs" class="inter">${allData.view_count}</span>
                </div>
              </div>
    `;
  itemContainer.appendChild(div2);
};


