const connect1 = document.getElementById("text1");
connect1.onmouseover = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(255, 255, 0)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 0, 0.3), 0 0 50px rgba(255, 255, 0), 0 0 100px rgba(255, 255, 0)";
	  }
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgb(255, 100, 0)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgb(255, 100, 0, 0.3), 0 0 50px rgb(255, 100, 0), 0 0 100px rgb(255, 100, 0)";
	  }
    let Text = document.getElementById("instrument");
    Text.innerHTML = "古文字学";Text.style.color = "white";
    connect1.style.zIndex = "99";
};
connect1.onmouseout = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	  }
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	  }
    let Text = document.getElementById("instrument");
    Text.style.color = "transparent";
    connect1.style.zIndex = "1";
};
connect1.onclick = function () {
    window.location.href = "html/paleography/paleography.html";
}

const connect2 = document.getElementById("text2");
connect2.onmouseover = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(0, 200, 0)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(0, 200, 0, 0.3), 0 0 50px rgba(0, 200, 0), 0 0 100px rgba(0, 200, 0)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgb(255, 255, 0)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgb(255, 255, 0, 0.3), 0 0 50px rgb(255, 255, 0), 0 0 100px rgb(255, 255, 0)";
	}
  connect2.style.zIndex = "99";
};
connect2.onmouseout = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
  connect2.style.zIndex = "1";
};
connect2.onclick = function () {
  window.location.href = "404.html";
}

const connect3 = document.getElementById("text3");
connect3.onmouseover = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(53, 164, 255)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(53, 164, 255, 0.3), 0 0 50px rgba(53, 164, 255), 0 0 100px rgba(53, 164, 255)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(0, 200, 0)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(0, 200, 0, 0.3), 0 0 50px rgba(0, 200, 0), 0 0 100px rgba(0, 200, 0)";
	}
  connect3.style.zIndex = "99";
};
connect3.onmouseout = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
  connect3.style.zIndex = "1";
};
connect3.onclick = function () {
  window.location.href = "404.html";
}

const connect4 = document.getElementById("text4");
connect4.onmouseover = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(136, 25, 255)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(136, 25, 255, 0.3), 0 0 50px rgba(136, 25, 255), 0 0 100px rgba(136, 25, 255)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(53, 164, 255)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(53, 164, 255, 0.3), 0 0 50px rgba(53, 164, 255), 0 0 100px rgba(53, 164, 255)";
	}
  let Text = document.getElementById("instrument");
  Text.innerHTML = "计算机科学（建设中）";Text.style.color = "white";
  connect4.style.zIndex = "99";
};
connect4.onmouseout = function () {
    let Bubbles1 = document.getElementsByClassName("color1");
    for(var i = 0; i < Bubbles1.length; i++) {
		Bubbles1[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles1[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
    let Bubbles2 = document.getElementsByClassName("color2");
    for(var i = 0; i < Bubbles2.length; i++) {
		Bubbles2[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        Bubbles2[i].style.boxShadow = "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5)";
	}
  let Text = document.getElementById("instrument");
    Text.style.color = "transparent";
    connect4.style.zIndex = "1";
};
connect4.onclick = function () {
  window.location.href = "html/computerScience/computerScience.html";
}