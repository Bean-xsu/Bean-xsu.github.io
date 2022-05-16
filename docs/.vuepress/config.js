module.exports = {
    title: 'Hiyiin',
    description: '睡不醒  •  看不清  •  记不住',
    dest: './docs/.vuepress/dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '../logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}