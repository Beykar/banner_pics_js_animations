/**
 * Created by Hamid on 21/03/2017.
 * @name    script.js
 * @desc    this script will animate the bag images in the banner section, and make them appear one after the other
 *
 */


(function(){

    var


        img1            =   document.getElementById("img1"),
        img2            =   document.getElementById("img2"),
        img3            =   document.getElementById("img3"),
        banHead         =   document.getElementById("banHead"),
        left1           =   1300,
        left2           =   1200,
        left3           =   300,
        leftBanner      =   300,
        top1            =   500,
        top2            =   -10,
        top3            =   10,



        animateBag1 =   function(){

            if (left1 >= 850 && top1 >=250){
                img1.style.display = 'block';
                left1 -=5;
                top1 -=3;
                img1.style.left= left1 + 'px';
                img1.style.top= top1 + 'px';
            }
            setTimeout(function () {
                animateBag1();
            },5);
        },//animateBag1

        animateBag2 =   function(){

            if (left2 >= 970 && top2 <= 140){
                img2.style.display = 'block';
                left2 -=5;
                top2 +=3;
                img2.style.left= left2 + 'px';
                img2.style.top= top2 + 'px';
            }
            setTimeout(function () {
                animateBag2();
            },5);
        },//animateBag2

        animateBag3 =   function(){

            if (left3 <= 800 && top3 <=140){
                img3.style.display = 'block';
                left3 +=5;
                top3 +=1;
                img3.style.left= left3 + 'px';
                img3.style.top= top3 + 'px';
            }
            setTimeout(function () {
                animateBag3();
            },5);
        },//animateBag3

        animateHeader   =   function(){

            if (leftBanner >= 100) {
                banHead.style.display = 'block';
                leftBanner -= 5;
                banHead.style.top = leftBanner + 'px';
            }
            setTimeout(function () {
                animateHeader();
            },10)
        },//animateHeader


    init        =   function(){

            animateBag1();
            animateBag2();
            animateBag3();
            animateHeader();
        };//init




    window.addEventListener("load", init);
})();