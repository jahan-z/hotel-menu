const foodContainer = document.querySelector(".food-container");

const fooditem = [
  {
    FoodName: "Cheese paratha",
    foodimg: "images/cheese.jpg",
    price: "RS 150",
    type: "breakFast",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis. .",
  },
  {
    FoodName: "Aloo Paratha",
    foodimg: "images/alo.jpg",
    price: "RS 100",
    type: "breakFast",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Egg Paratha",
    foodimg: "images/egg.jpg",
    price: "RS 1300",
    type: "breakFast",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Daal Chawal",
    foodimg: "images/daal.jpg",
    price: "RS 200",
    type: "Lunch",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Palak Paneer",
    foodimg: "images/palak.jpg",
    price: "RS 300",
    type: "Lunch",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Aloo Ghobi",
    foodimg: "images/alo gobi.jpg",
    price: "RS 190",
    type: "Lunch",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Aloo Goshat",
    foodimg: "images/alo gosht.jpg",
    price: "RS 270",
    type: "Lunch",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Banana Shakes",
    foodimg: "images/bnana shake.jpg",
    price: "RS 200",
    type: "Shakes",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Mango Shakes",
    foodimg: "images/mango shake.jpg",
    price: "RS 250",
    type: "Shakes",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Biryani",
    foodimg: "images/biryani.jpg",
    price: "RS 500",
    type: "Dinner",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
  {
    FoodName: "Korma",
    foodimg: "images/korma.jpg",
    price: "RS 350",
    type: "Dinner",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, magnam aut nihil autem ipsam aliquam nam dolorum maxime vitae suscipit debitis ad ea aspernatur, doloribus saepe, officia accusantium voluptatibus nobis.",
  },
];



const food = fooditem.map(item => {
    const listitem = ` <div class="col-6 foodbox ${item.type}">
    <!-- content -->
    <div class="my-2 d-flex">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" class="item-img" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- item-title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})


const foodBox = document.querySelectorAll(".foodbox")
const menu = document.querySelectorAll("ul")

menu.forEach((m) => {
    m.addEventListener('click', (e) => {
        foodBox.forEach((box) => {
            box.classList.add('d-none')
            if(e.target.innerHTML == "All"){
                box.classList.remove('d-none')
            }else if(e.target.innerHTML == "Breakfast" && box.classList.contains('breakFast')){
                box.classList.remove('d-none')
            }else if(e.target.innerHTML == "Lunch" && box.classList.contains('Lunch')){
                box.classList.remove('d-none')
            }else if(e.target.innerHTML == "Dinner" && box.classList.contains('Dinner')){
                box.classList.remove('d-none')
            }else if(e.target.innerHTML == "Shakes" && box.classList.contains('Shakes')){
                box.classList.remove('d-none')
            }
        })
    })
})