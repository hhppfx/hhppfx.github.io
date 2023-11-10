// 创建悬浮图片按钮
function createFloatingImgBtn() {
    var imgBtn = document.createElement('img');
    imgBtn.src = "//www.qu1.com/code/ai.png";
    imgBtn.style.width = "46px";
    imgBtn.style.bottom = "20px";
    imgBtn.style.right = "20px";
    imgBtn.style.position = "fixed";
    imgBtn.style.borderRadius = "50%";
    imgBtn.style.background = "transparent";
    imgBtn.style.boxShadow = "0px 0px 10px #ccc";
    imgBtn.style.zIndex = "1000"; // 设置层级为1000
    imgBtn.addEventListener("mouseenter", function() {
        imgBtn.style.boxShadow = "0 0 20px #999";
        imgBtn.style.cursor = "pointer";
    })
    imgBtn.addEventListener("mouseleave", function() {
        imgBtn.style.boxShadow = "0 0 10px #ccc";
        imgBtn.style.cursor = "default";
    })
    imgBtn.addEventListener("click", function() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
window.open("https://qu1com-9gsf962ka31eb938-1318380566.tcloudbaseapp.com/");
} else {
var height = window.innerHeight; // 新窗口高度（设置为屏幕高度）
var left = screen.width - 380;
window.open('https://ai.qu1.com/web/', '_blank', 'width=380,height=' + height + ',left='+ left +',top=0,location=no,toolbar=no');
}
   })
    document.body.appendChild(imgBtn);
}

// 创建悬浮图片按钮
createFloatingImgBtn();
