// 创建悬浮图片按钮
function createFloatingImgBtn() {
    var imgBtn = document.createElement('img');
    imgBtn.src = "http://www.qu1.com/code/ai.png";
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
createFloatingLayer();
}
   })
    document.body.appendChild(imgBtn);
}

// 创建浮动层
function createFloatingLayer() {
    var div = document.createElement('div');
    div.id = 'floating-layer';
    div.style.width = '420px';
    div.style.height = '100%';
    div.style.position = 'fixed';
    div.style.boxShadow = '0px 5px 5px #ccc';
    div.style.bottom = '0';
    div.style.right = '0';
    div.style.backgroundColor = '#fff';
    div.style.zIndex = "10000"; 
    // 添加关闭按钮
    var closeButton = document.createElement('button');
    closeButton.innerText = '关闭';
    closeButton.addEventListener('click', function() {
        div.parentNode.removeChild(div);
    });
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.padding = '5px';
    closeButton.style.backgroundColor = '#ccc';
    closeButton.style.border = 'none';
    div.appendChild(closeButton);

    var iframe = document.createElement('iframe');
    iframe.src = "https://ai.qu1.com/web/";
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    div.appendChild(iframe);
    document.body.appendChild(div);
}

// 创建悬浮图片按钮
createFloatingImgBtn();