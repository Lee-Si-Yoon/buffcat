const subpage = document.querySelector('.subpage');
const weight = subpage.querySelector('#weight'),
  status = subpage.querySelector('#status'),
  food = subpage.querySelector('#food');
const form = subpage.querySelector('form');
const final = document.querySelector('.result');

function paintPEND(w,s,f){
  console.log(w,s,f);
  let stat = 0;
  if (s){
    if(s == "중성화 안한 성묘"){
      stat += 1.2;
    }else if(s == "중성화 성묘"){
      stat += 1.4;
    }else if(s == "활발한 성묘"){
      stat += 1.6;
    }else if(s == "비만 고양이"){
      stat += 1;
    }else if(s == "임신 중인 고양이"){
      stat += 1.8;
    }else{
      console.log("wrong");
    }
  };

  const basicKcal = (30 * w) + 70;
  const resultKcal = basicKcal * stat;
  const resultProtein = (4.4 * w);
  const resultFood = resultKcal * 1000 / f;
  
  const weightText = final.querySelector('.result__weight'),
    kcalText = final.querySelector('.result__kcal'),
    pText = final.querySelector('.result__p'),
    foodText = final.querySelector('.result__food');

  weightText.innerHTML = `몸무게: ${Number(w).toFixed(1)}kg`;
  kcalText.innerHTML = `필요 칼로리: ${Number(resultKcal).toFixed(1)}kcal`;
  pText.innerHTML = `단백질량: ${Number(resultProtein).toFixed(1)}g(${Number(resultProtein*4).toFixed(1)}kcal)`;
  if (f == 0){
    foodText.innerHTML = '';
  }else{
    foodText.innerHTML = `하루 급여량: ${Number(resultFood).toFixed(1)}g / 1회분: ${Number(resultFood/3).toFixed(1)}g`;
  }  
}

function paintResult(){
  const finalR = final.querySelector('.result__container');
  final.style.display = 'flex';
  finalR.style.display = 'flex';
  final.scrollIntoView();
};

function handleSubmit(event){
  event.preventDefault();
  const currentWeight = Number(weight.value);
  const currentStatus = status.value;
  const currentFood = Number(food.value);
  paintPEND(currentWeight, currentStatus, currentFood);
  weight.value = "";
  status.value = "";
  food.value = "";
  paintResult();
}

function init(){
  form.addEventListener('submit', handleSubmit);
}
init();