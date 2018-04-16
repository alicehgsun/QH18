var overview = {
    type:"pie",
    data:{
        labels:["English","Korean","Japanese","None"],
        datasets:[{
            data:[10941, 2974, 59, 5337]
        }]
    },
    options:{responsive: true}
};

var overview2 = {
    type:"pie",
    data:{
        labels:["English","Korean"],
        datasets:[{
            data:[10941, 2974]
        }]
    },
    options:{responsive: true}
};



var QH = {};
QH.language = function(){

	var english = true;

	$(".en-option").click(function(){

		if(!english){
			//body text
      myPie.data.labels = ["English","Korean","Japanese","None"]
      myPie.update();
      myPie2.data.labels = ["English","Korean"]
      myPie2.update();
			TweenMax.to($(".kor"), 0.5, {autoAlpha: 0})
			TweenMax.set($(".kor"), {display: "none"})
			TweenMax.set($(".en"), {display: "block", autoAlpha: 0})
			TweenMax.to($(".en"), 0.5, {autoAlpha: 1, delay: 0.5})

		}
		english = true;
	})

	$(".kor-option").click(function(){

		if(english){
      myPie.data.labels = ["영어", "한국어", "일본어", "없음"]
      myPie.update();
      myPie2.data.labels = ["영어", "한국어"]
      myPie2.update();
			TweenMax.to($(".en"), 0.5, {autoAlpha: 0})
			TweenMax.set($(".en"), {display: "none"})
			TweenMax.set($(".kor"), {display: "block", autoAlpha: 0})
			TweenMax.to($(".kor"), 0.5, {autoAlpha: 1, delay: 0.5})
		}
		english = false;
	})
}


/* init */
$(document).ready(function(){
	QH.language()
})
window.onload = function() {
    window.myPie = new Chart(document.getElementById('overview_pie').getContext('2d'), overview);
    window.myPie2 = new Chart(document.getElementById("overview_pie2").getContext("2d"), overview2);
};
