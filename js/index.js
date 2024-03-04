const letestPostCardContainer = document.getElementById("letest-post-card");

const letestPost = async () => {
  const resposns = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const datas = await resposns.json();
  datas.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card h-[600px] bg-[#FFFFFF] text-[#12132D99]  border-2 border-[#12132D26]  p-5">
                <figure><img class="rounded-xl " src="${data.cover_image}" alt="Shoes" /></figure>
                <div class=" space-y-4 p-5">
                  <span><i class="fa-regular fa-calendar"></i></span>
                  <span class="mulish lg:text-xl">${data.author.posted_date || 'No pablish Date'}</span>
                 <h1 class="lg:text-3xl text-2xl font-bold text-[#12132D]">${data.title}</h1>
                 <p class="mulish lg:text-xl">${data.description}</p>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full w-20 h-20" src="${data.profile_image}" alt="">
                    <div>
                 <h1 class="lg:text-2xl text-[#12132D] font-bold ">${data.author.name}<h1>
                        <p id="designation" class="lg:text-xl mulish ">${data.author.designation || 'Unknown'}</p>
                    </div>
                  </div>
                </div>
              </div>
        `;
    
    letestPostCardContainer.appendChild(div);
    const designation  = document.getElementById('designation')
    if(data.author.designation){
        designation.innerText = data.author.designation
    }else{
        designation.innerText = 'Unknown'
    }
});
console.log(datas)
};
letestPost();

// seach and display item by category

const seachCategory = async (seachText) => {
    loadingSpinner(true)
  const respos = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${seachText}`);
  const data = await respos.json();

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""
  data.posts.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="bg-[#797DFC1A] border-2 border-[#7D7DFC] p-4 rounded-xl">
    <!-- left side  -->
    <div class="flex flex-col lg:flex-row  gap-5">
      <!-- profile images  -->
    
     <div id="isOnline" class="${element.isActive ? 'avatar online' : 'avatar offline'} mx-auto w-24 h-24">
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
         
 
    // console.log(element);
  });
  loadingSpinner(false)
};

const seachResult = () => {
  const seachFild = document.getElementById("search-button");
  seachFild.addEventListener("click", () => {
    const inputFild = document.getElementById("input-fild").value;
    seachCategory(inputFild);
  });
};
seachResult();

const loadingSpinner = (isloading)=>{
    const loading = document.getElementById('loading-spinner')
    if(isloading){
        loading.classList.remove('hidden')
    }else{
        loading.classList.add('hidden')
    }
}
