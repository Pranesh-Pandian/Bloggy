var images=["assets/spy.jpg","assets/demon.jpg","assets/jjk.jpg","assets/poke.jpg","assets/cs.jpg","assets/nar.jpg","assets/mov.jpg"];
var lines=["SPY X FAMILY","DEMON SLAYER","JUJUTSU KAISEN","POKEMON","CHAINSAW MAN","NARUTO","TOKYO REVENGERS"];

var num=0;
setTimeout(load,800);
setInterval(next,3000);

function home(){
    location.href="#homep"
}

function blog(){
    location.href="#blogs"
}

function about(){
    location.href="html/about.html"
}

function cnct(){
    location.href="html/about.html" 
}

function next(){
    var slider=document.getElementById("img");
    var line=document.getElementById("imgp");
    num++;
    if(num>=images.length){
        num=0;
    }
    slider.src=images[num];
    line.innerHTML=lines[num];
}

function prev(){
    var slider=document.getElementById("img");
    var line=document.getElementById("imgp");
    num--;
    if(num<0){
        num=images.length-1;
    }
    slider.src=images[num];
    line.innerHTML=lines[num];

}

function spy(){
    location.href="html/spy.html";
}
function demon(){
    location.href="html/demon.html";
}
function jjk(){
    location.href="html/jujutsu.html";
}
function pkm(){
    location.href="html/pokemon.html";
}
function csm(){
    location.href="html/chainsaw.html";
}
function nar(){
    location.href="html/naruto.html";
}
function mov(){
    location.href="html/tokyo.html";
}


function nextb(){
    var fir1=document.getElementById("spyi");
    var fir2=document.getElementById("spyp");
    var sec=document.getElementById("second");
    var thir=document.getElementById("third");
    var four=document.getElementById("fourth");
    var fif=document.getElementById("fifth");
    var six=document.getElementById("sixth");
    var prev=document.getElementById("prevb");
    var nex=document.getElementById("nextb");

    fir1.src="assets/mov.jpg";
    fir2.innerHTML="TOKYO REVENGERS";

    prev.style.display="block";
    nex.style.display="none";
    
    sec.style.display="none";
    thir.style.display="none";
    four.style.display="none";
    fif.style.display="none";
    six.style.display="none";

    document.getElementById("first").removeEventListener("click",spy);
    document.getElementById("first").addEventListener("click",mov);
    
}

function prevb(){
    var fir1=document.getElementById("spyi");
    var fir2=document.getElementById("spyp");
    var sec=document.getElementById("second");
    var thir=document.getElementById("third");
    var four=document.getElementById("fourth");
    var fif=document.getElementById("fifth");
    var six=document.getElementById("sixth");
    var prev=document.getElementById("prevb");
    var nex=document.getElementById("nextb");

    fir1.src="assets/spy.jpg";
    fir2.innerHTML="SPY X FAMILY";

    prev.style.display="none";
    nex.style.display="block";
    
    sec.style.display="Block"
    thir.style.display="block";
    four.style.display="block";
    fif.style.display="block";
    six.style.display="block";

    document.getElementById("first").removeEventListener("click",mov);
    document.getElementById("first").addEventListener("click",spy);

}

window.addEventListener('scroll',reveal);
function reveal(){
    var reveals= document.querySelectorAll('.reveal');

    for(var i=0;i<reveals.length;i++){

        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=350;

        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function load(){
    document.getElementById("loader").remove();
    location.href="#homep";
}