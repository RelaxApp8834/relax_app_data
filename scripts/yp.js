const list = [];
document.body.innerHTML
const eles = document.getElementsByClassName('video-box');
for (let i = 0; i < eles.length; i++) {
    try {
        let ele = eles[i];
        let mName = ele.querySelector('.video-title').textContent;
        let thumbEle = ele.getElementsByTagName('img'); 
        let thumb = thumbEle.getAttribute('src')+'';
        if(!thumb.startsWith('http')){
            thumb = thumbEle.getAttribute('data-src');
        }
        let viewCount = ele.querySelector('.video-best-resolution').textContent;
        let duration = ele.querySelector('.video-duration').textContent;
        // let preview = thumbEle.getAttribute('data-webm');
        let url = ele.querySelector('a').getAttribute('href'); 
        list.push({
            'name': mName,
            'thumb': thumb,
            'viewcount': viewCount,
            'duration': duration,
            // 'preview':preview,
            'url': url
        });
    } catch (e) {
        list.push(e.toString());
    }
}
list;
