let image = document.getElementById("image");
// document.getElementById("image").style.background ( linear-gradient( rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3)))
let arrOfImage = ["image10.webp", "image11.webp", "image12.webp", "image13.webp"]
image.src = "image21.webp"
let text1 = ["2 DAYS TOUR", "10 DAYS CRUISE", "EXPLORE OUR MOST TRAVEL AGENCY", "EXPERIENCE THE"]
let text2 = ["Amazing Maldives Tour", "From Greece to Spain", "Our Travel Agency", "Best Trip Ever"]

setInterval(function() {
    let random = Math.floor(Math.random() * 4)
    let centerText1 = document.getElementById("S1_div_centertext1")
    centerText1.textContent = text1[random]
    let centerText2 = document.getElementById("S1_div_centertext2")
    centerText2.textContent = text2[random]
    image.src = arrOfImage[random]
        // image.style.filter = "brightness(0.5)";
        // image.style.filter = "opacity(0.2)";
}, 2000)


var tabButtons = document.querySelectorAll(".S1_tab .S1_button_container button");
var S1_tab_pannels = document.querySelectorAll(".S1_tab  .S1_tab_pannel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    S1_tab_pannels.forEach(function(node) {
        node.style.display = "none";
    });
    S1_tab_pannels[panelIndex].style.display = "block";
    S1_tab_pannels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#2c2e3e');

// section 2 start/ /


//--------------------- hotal slider //----------------

var s2_left = 1;
var s2_right = 3;

if (window.innerWidth <= 750) {
    s2_left = 1;
    s2_right = 2;
}

if (window.innerWidth <= 420) {
    s2_left = 1
    s2_right = 1
}


window.addEventListener("load", s2_show)

var s2_a = 0

setInterval(s2_moveleft, 6000)

function s2_show() {

    for (var i = s2_left; i <= s2_right; i++) {
        document.getElementById("s2_img" + i).style.display = "inline-block"
    }
}

function s2_moveleft() {
    if (s2_left <= 2 && s2_right <= 6) {
        document.getElementById("s2_img" + s2_left).style.display = "none"
        s2_left++;
        s2_right++;
        for (var i = s2_left; i <= s2_right; i++) {
            document.getElementById("s2_img" + i).style.display = "inline-block"
        }
    } else {
        return
    }
    s2_a++
    if (s2_a >= 2 && s2_a <= 5) {
        setTimeout(s2_moveright, 6000)
    }
}

function s2_moveright() {
    if (s2_left >= 2 && s2_right >= 3) {
        document.getElementById("s2_img" + s2_right).style.display = "none"
        s2_left--;
        s2_right--;
        for (var i = s2_left; i <= s2_right; i++) {
            document.getElementById("s2_img" + i).style.display = "inline-block"
        }
    } else {
        return
    }
}


//--------------------- hotal slider //----------------


//--------------------- guest slider //----------------

var s2_guestleft = 1;
var s2_guestright = 1;

window.addEventListener("load", s2_guestshow)

var s2_b = 0

setInterval(s2_guestmoveleft, 6000)

function s2_guestshow() {
    for (var i = s2_guestleft; i <= s2_guestright; i++) {
        document.getElementById("s2guest" + i).style.display = "inline-block"
    }
}


function s2_guestmoveleft() {
    if (s2_guestleft <= 2 && s2_guestright <= 2) {
        document.getElementById("s2guest" + s2_guestleft).style.display = "none"
        s2_guestleft++;
        s2_guestright++;
        for (var i = s2_guestleft; i <= s2_guestright; i++) {
            document.getElementById("s2guest" + i).style.display = "inline-block"
        }
    } else {
        return
    }
    s2_b++
    if (s2_b >= 2 && s2_b <= 5) {
        setTimeout(s2_guestmoveright, 6000)
    }
}

function s2_guestmoveright() {
    if (s2_guestleft >= 2 && s2_guestright >= 2) {
        document.getElementById("s2guest" + s2_guestright).style.display = "none"
        s2_guestleft--;
        s2_guestright--;
        for (var i = s2_guestleft; i <= s2_guestright; i++) {
            document.getElementById("s2guest" + i).style.display = "inline-block"
        }
    } else {
        return
    }
}



// --------------------- guest slider //----------------



//--------------------- animate on scroll //----------------

window.addEventListener("scroll", animate);

function animate() {
    var compo = document.querySelectorAll(".s_2_animateOnScroll")

    for (var i = 0; i < compo.length; i++) {
        var windowHeight = window.innerHeight;
        var top = compo[i].getBoundingClientRect().top;

        if (top < windowHeight) {
            compo[i].classList.add("active");
        } else {
            compo[i].classList.remove("active");
        }
    }

}


//--------------------- animate on scroll  //----------------


// section 2 end //


// scroll btn 


var mybutton = document.getElementById("s2_topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}