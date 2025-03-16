// 这只是一个练习，练习JS原生来实现数据插入html
// 这只是一个练习，练习JS原生来实现数据插入html
// 这只是一个练习，练习JS原生来实现数据插入html
(function () {
    let updates_vedios = {
        divider_index: 2,
        data: [
            {
                avatar: './public/head_bar_right_pop_updates_item_avatar.webp',
                name: '影视飓风',
                title: '躺着赚钱？片场最小打工人如何搬砖',
                time: '29分钟前',
                cover: './public/head_bar_right_pop_updates_item_cover.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar1.webp',
                name: '风-笑尘',
                title: '【原神·尘歌壶】今天简简单单搭建个天空之城（带教程）',
                time: '58分钟前',
                cover: './public/head_bar_right_pop_updates_item_cover1.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar2.webp',
                name: 'TIC觅见丛邻',
                title: '被一亿只蝴蝶环绕是什么体验？',
                time: '1小时前',
                cover: './public/head_bar_right_pop_updates_item_cover2.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar_yuanshen.webp',
                name: '原神',
                title: '分层地图？安排上啦！——06.20开发组座谈会',
                time: '2小时前',
                cover: './public/head_bar_right_pop_updates_item_cover_yuanshen.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar3.webp',
                name: '骆驼新星',
                title: '哈哈哈哈哈哈哈哈哈哈哈哈哈',
                time: '3小时前',
                cover: './public/head_bar_right_pop_updates_item_cover3.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar_yuanshen.webp',
                name: '崩坏星穹铁道',
                title: '呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵',
                time: '3小时前',
                cover: './public/head_bar_right_pop_updates_item_cover_yuanshen.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar_yuanshen.webp',
                name: '崩坏星穹铁道',
                title: '你好吗你好吗你好吗你好吗',
                time: '3小时前',
                cover: './public/head_bar_right_pop_updates_item_cover_yuanshen.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar_yuanshen.webp',
                name: '崩坏星穹铁道',
                title: '我很好我很好我很好嘎嘎嘎嘎嘎嘎嘎嘎嘎',
                time: '3小时前',
                cover: './public/head_bar_right_pop_updates_item_cover_yuanshen.webp'
            }, {
                avatar: './public/head_bar_right_pop_updates_item_avatar_yuanshen.webp',
                name: '崩坏星穹铁道',
                title: '你好嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎',
                time: '3小时前',
                cover: './public/head_bar_right_pop_updates_item_cover_yuanshen.webp'
            }
        ]
    }

    let updates_vedios_ul = document.querySelector('.head_bar_right_pop_updates_vedios');

    //生成更新视频列表html
    let html = ''
    updates_vedios.data.forEach((item, index) => {
        if (index == updates_vedios.divider_index) {
            html += `
            <li class="head_bar_right_pop_updates_split">
                <div class="head_bar_right_pop_updates_splitLine"></div>
                <div class="head_bar_right_pop_updates_split_title">历史动态</div>
                <div class="head_bar_right_pop_updates_splitLine"></div>
            </li>
            `
        }
        
        html += `
        <li class="head_bar_right_pop_updates_item">
            <img class="head_bar_right_pop_updates_item_avatar"
                src="${item.avatar}">
            <div class="head_bar_right_pop_updates_item_content">
                <p class="head_bar_right_pop_updates_item_name">${item.name}</p>
                <p class="head_bar_right_pop_updates_item_title">${item.title}</p>
                <p class="head_bar_right_pop_updates_item_time">${item.time}</p>
            </div>
            <img class="head_bar_right_pop_updates_item_cover"
                src="${item.cover}">
        </li>
        `
    })

    updates_vedios_ul.innerHTML = html;
})();

