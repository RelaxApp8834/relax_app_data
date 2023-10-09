const list = [];
        const eles = document.querySelectorAll('.thumb-block');
        for (let i = 0; i < eles.length; i++) {
            try {
                const ele = eles[i];
                const name = ele.querySelector('.thumb-under a').getAttribute('title').trim();
                let thumb = ele.querySelector('img').getAttribute('data-src'); 
                thumb = thumb.replace('THUMBNUM', '1');
                  const viewCountEle = ele.querySelector('.right');
                let viewCount = '';
                for (let node of viewCountEle.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        viewCount += node.textContent.trim();
                    }
                }
                const durationEle = ele.querySelector('.metadata');
                let duration = '';
                for (let node of durationEle.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        duration += node.textContent.trim();
                    }
                }
                const url = ele.querySelector('a').getAttribute('href'); 
                list.push({
                    'name': name,
                    'thumb': thumb,
                    'viewCount': viewCount,
                    'duration': duration,
                    'url': url
                });
            } catch (e) {}
        }
       list;
