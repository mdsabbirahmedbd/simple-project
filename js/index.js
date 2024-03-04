const letestPostCardContainer = document.getElementById("letest-post-card");

const letestPost = async () => {
  const resposns = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const datas = await resposns.json();
    datas.forEach(data => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card h-[600px] bg-[#FFFFFF] text-[#12132D99]  border-2 border-[#12132D26]  p-5">
                <figure><img class="rounded-xl " src="${data.cover_image}" alt="Shoes" /></figure>
                <div class=" space-y-4 p-5">
                  <span><i class="fa-regular fa-calendar"></i></span>
                  <span class="mulish lg:text-xl">${data.author.posted_date}</span>
                 <h1 class="lg:text-3xl text-2xl font-bold text-[#12132D]">${data.title}</h1>
                 <p class="mulish lg:text-xl">${data.description}</p>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full w-20 h-20" src="${data.profile_image}" alt="">
                    <div>
                        <h1 class="lg:text-2xl text-[#12132D] font-bold ">${data.author.name}</h1>
                        <p class="lg:text-xl mulish ">${data.author.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
        `
        letestPostCardContainer.appendChild(div)
        console.log(data)
    });
};

letestPost();
