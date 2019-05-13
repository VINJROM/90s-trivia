// Variables ===========================================================================================================
var q = ["1. What is the name of Will Smith’s character in Independence Day?<br /><br />", "2. What year was Forrest Gump released?<br /><br />", "3.  Which musical star was knighted by Queen Elizabeth II in 1998? <br /><br />", "4. Which 90s TV show features characters with the name Tommy, Zack, Kimberly, Billy, and Trini? <br /><br />", "5. What movie was Robin Williams’ first animated film?<br /><br />"];
var a1 = ["<button class=buttons002 onclick=q1i()>Avery J. Johnson</button>",
    "<button class=buttons002 onclick=q2i()>1991</button>",
    "<button class=buttons002 onclick=q3i()>David Bowie</button>",
    "<button class=buttons002 onclick=q4i()>Rugrats</button>",
    "<button class=buttons002 onclick=q5i()>Aladdin</button>",

];

var a2 = ["<button class=buttons002 onclick=q1i()>Captain James Price</button>",
    "<button class=buttons002 onclick=q2i()>1992</button>",
    "<button class=buttons002 onclick=q3i()>Paul David Hewson</button>",
    "<button class=buttons002 onclick=q4c()>The Mighty Morphin Power Rangers </button>",
    "<button class=buttons002 onclick=q5i()>Rabbit Ears</button>",
];

var a3 = ["<button class=buttons002 onclick=q1c()>Captain Steve Miller</button>",
    "<button class=buttons002 onclick=q2i()>1993</button>",
    "<button class=buttons002 onclick=q3c()>Elton John</button>",
    "<button class=buttons002 onclick=q4i()>Recess</button>",
    "<button class=buttons002 onclick=q5i()>The Timekeeper</button>",
];

var a4 = ["<button class=buttons002 onclick=q1i()>Fresh Prince of Bel-Air</button>",
    "<button class=buttons002 onclick=q2c()>1994</button>",
    "<button class=buttons002 onclick=q3i()>Paul McCartney</button>",
    "<button class=buttons002 onclick=q4i()>Barney & Friends</button>",
    "<button class=buttons002 onclick=q5c()>Ferngully: The Last Rainforest</button>",

];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct"];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

var n = 0;
n++;
var s = 0;
s++;

// FUNCTIONS =====================================================================================================
var counter = 0;
var timeLeft = 30;

function countDown() {
    noCanvas();

    var timer = $('#timer');
    timer.html(timeLeft - counter);

    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }
    setInterval(timeIt, 1000);
}

function begin001() {
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    number001.innerHTML = n++;
}

function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score.innerHTML = s++;
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    score.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
    question001.innerHTML = q[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
    score.innerHTML = s++;
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
    question001.innerHTML = q[4];
    option001.innerHTML = a1[4];
    option002.innerHTML = a2[4];
    option003.innerHTML = a3[4];
    option004.innerHTML = a4[4];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q5c() {
    answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    score.innerHTML = s++;
}

function q5i() {
    answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

function end001() {
    disappear002
    message001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<div id=topButton>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001() {
    location.reload();
}