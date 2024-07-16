var movies = [
    {
        name: 'Thor: Love and Thunder',
        duration: '2022 ‧ Action/Adventure ‧ 1h 59m',
        des: 'Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.',
        image: 'loveandthunder.jpg'
    },
    {
        name: 'Ek Villain Returns',
        duration: '2022 ‧ Action/Adventure ‧ 1h 59m',
        des: 'Ek Villain Returns is a 2022 Indian Hindi-language psychological thriller film written and directed by Mohit Suri, being a spiritual successor to his 2014 film Ek Villain, and produced by T-Series and Balaji Motion Pictures. It stars John Abraham, Arjun Kapoor, Disha Patani and Tara Sutaria.',
        image: 'Ekvillianreturns.jpeg'
    },
    {
        name: 'K.G.F: Chapter 2',
        duration: '2022 ‧ Action/Adventure ‧ 1h 59m',
        des: 'Rocky takes control of the Kolar Gold Fields and his newfound power makes the government as well as his enemies jittery. However, he still has to confront Ramika, Adheera and Inayat.',
        image: 'KGFChp2.jpg'
    },
    {
        name: 'Khuda Haafiz: Chapter 2-Agni Pariksha',
        duration: '2022 ‧ Action/Adventure ‧ 1h 59m',
        des: 'Khuda Haafiz 2 is a 2022 Indian Hindi-language action thriller film written and directed by Faruk Kabir. A sequel to the 2020 film Khuda Haafiz, it stars Vidyut Jammwal and Shivaleeka Oberoi. ',
        image: 'Khuda-Haafiz-Chapter-2-1200.jpg'
    },
    {
        name: 'Rocketry: The Nambi Effect',
        duration: '2022 ‧ Action/Adventure ‧ 1h 59m',
        des: 'The Nambi Effect is a 2022 Indian biographical drama film written, produced and directed by R. Madhavan in his directorial debut.',
        image: 'rocketry.jpg'
    }
]

const slider = document.querySelector('.slidemovie');
var sliders = [];
var slideIndex = 0;

function createSlide()
{
    if(slideIndex >= movies.length)
    {
        slideIndex = 0;
    }
var slide = document.createElement('div');
var imgElement = document.createElement('img');
var content = document.createElement('div');
var h1 = document.createElement('h1');
var h3 = document.createElement('h3');
var p = document.createElement('p');

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
h3.appendChild(document.createTextNode(movies[slideIndex].duration));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(h3);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
slider.appendChild(slide);

//image setting
imgElement.src = movies[slideIndex].image;
slideIndex++;

//elements classname
slide.className = 'slider';
content.className = 'slide-content';
h1.className = 'movie-title';
h3.className = 'movie-duration';
p.className = 'movie-des';

sliders.push(slide);

if(sliders.length)
{
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length-2)}% - ${30 * (sliders.length - 2)}px)` ;
}
}

for (var i = 0 ; i < 3; i++)
{
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

/*setInterval(createSlide,3000);*/

//for open login popup 
function openForm() 
{
     var a = document.getElementById("myForm")
     a.style.display = "block";
}
  
function closeForm() 
{
    var a = document.getElementById("myForm")
    a.style.display = "none";
}
  
function validatephn()
        {
            var f1=document.querySelector('form');
            var u = f1.phone.value;
            const pswd = "@xyz12";
            var v = f1.psw.value;
            if (u.match(/^([1-9]{1})([0-9]{9})$/)==null)
            {
                alert("INVALID phone no!!")
            }
            if(pswd != v)
            {
                alert("Incorrect password");
            }
            else{
                alert("login successfull!!!");
            }
        }

function Subscribevalid(f1)
{
   var f = f1.Fname.value;
   if(f.match("[A-z]"))
   {
    alert("Enter Valid name!!")
   }
   var e = f1.email.value;
   var e1 = /^([A-z|0-9]{5,50})@([A-z]{5,50}).([A-z]{2,3})$/
   if(!(e.match(e1)))
   {
    alert("Enter Correct Email!!")
   }
   else{
    f1.action = "SuccessfulSubscription.html";
   }
}


//movie card previous and next sliders
var cardContainers = document.querySelectorAll('.card-container');
var prevBtns = document.querySelectorAll('.prev-button'); 
var nextBtns = document.querySelectorAll('.next-button');

cardContainers.forEach((item, i) =>{ 

    var containerDimensions = item.getBoundingClientRect();
    var containerWidth = containerDimensions.width

    nextBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200; 
    })
        
        prevBtns[i].addEventListener('click', () => { 
        item.scrollLeft -= containerWidth + 200;
        })
    })
