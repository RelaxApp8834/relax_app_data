const list = [];
const eles = document.getElementsByClassName('video-box');
for (let i = 0; i < eles.length; i++) {
    try {
        let ele = eles[i];
        const name = ele.querySelector('.video-title').textContent.trim();
        let thumbEle = ele.querySelector('img'); 
        let thumb = thumbEle.getAttribute('src')+'';
        if(!thumb.startsWith('http')){
            thumb = thumbEle.getAttribute('data-src');
        }
        let viewCount = ele.querySelector('.video-best-resolution').textContent.trim();
        let duration = ele.querySelector('.video-duration').textContent.trim();
        // let preview = thumbEle.getAttribute('data-webm');
        let url = ele.querySelector('a').getAttribute('href'); 
        list.push({
            'name': name,
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
