const list = [];
        const eles = document.querySelectorAll('.thumb-block');
        for (let i = 0; i < eles.length; i++) { 

            try {
                let ele = eles[i];
                let mName = ele.querySelector('.thumb-under a').getAttribute('title');
                let mThumb = ele.getElementsByTagName('img')[0].getAttribute('src'); 
                mThumb = mThumb.replace('THUMBNUM', '1');
                let viewCount = ele.querySelector('.right').textContent;
                let duration = ele.querySelector('.metadata').textContent;
                let url = ele.querySelector('a').getAttribute('href'); 
                list.push({
                    'name': mName,
                    'thumb': mThumb,
                    'viewcount': viewCount,
                    'duration': duration,
                    'url': url
                });
            } catch (e) {
                list.push(e);
            }
        }
        list;
