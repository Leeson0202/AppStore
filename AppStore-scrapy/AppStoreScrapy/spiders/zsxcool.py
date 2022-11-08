import scrapy
from AppStoreScrapy.items import AppStoreScrapyItem
from bs4 import BeautifulSoup


# 解析文章和链接的函数
def parse_article(article):
    article = article.replace("<strong>", "**")
    article = article.replace("</strong>", "**")
    soup = BeautifulSoup(article, 'html.parser')
    iterator = soup.article.children
    resArticle = ""
    linkTag = False
    linkList = list()
    for node in iterator:
        if node.name == 'div':
            # div 下 [title, tips, image]  --> [文字，图片]
            divClass = node.attrs['class']
            if 'wp-block-pandastudio-title' in divClass:
                # title
                text = node.text.strip()
                if resArticle[-4:] == '\n\n':
                    pass
                else:
                    resArticle += '\n'
                if text.find("下载") >= 0 and node.find_all(name='h2'):
                    # 表示已经遍历到下载链接位置，标记一下，直接退出
                    linkTag = True
                    continue
                if node.find_all(name='h2'):
                    resArticle += "\n## " + text + '\n'
                elif node.find_all(name='h3'):
                    resArticle += "### " + text + '\n'
                elif node.find_all(name='h4'):
                    resArticle += "#### " + text + '\n'
                elif node.find_all(name='h5'):
                    resArticle += "##### " + text + '\n'

            elif 'wp-block-pandastudio-tips' in divClass:
                # tips
                p = node.find_all(name='p')
                for _ in p:
                    resArticle += "> " + _.text.strip() + '\n'

            elif 'wp-block-image' in divClass:
                # image
                img = node.find_all(name='img')
                if img:
                    img = '<img src="' + img[0].attrs['src'].strip() + '" style="width:80%;" alt="' + img[0].attrs[
                        'alt'].strip() + '" />\n\n'
                    resArticle += img

        elif node.name == 'p':
            # 直接解析, 链接 --> 文字
            if linkTag:
                name = ""
                url = ""
                for index, _ in enumerate(node.contents):
                    if index != 1:
                        name += _.text.strip()
                if name[-1] == '：':
                    name = name[:-1]
                if len(node.contents) > 1:
                    url = node.contents[1].text.strip()
                linkList.append({
                    'name': name.replace('*', ''),
                    'url': url
                })
            else:
                resArticle += node.text.strip() + '\n\n'

        elif node.name == 'ul':
            # li --> 文字
            lis = node.find_all(name='li')
            for _ in lis:
                resArticle += "- " + _.text.strip() + '\n'
            resArticle += '\n'

        elif node.name == 'ol':
            # li --> 文字
            lis = node.find_all(name='li')
            for _ in lis:
                resArticle += "- " + _.text.strip() + '\n'

        elif node.name == 'figure':
            # image --> 图片 src
            img = node.find_all(name='img')
            if img:
                img = '<img src="' + img[0].attrs['src'] + '" style="width:80%;" alt="' + img[0].attrs[
                    'alt'] + '" />\n\n'
                resArticle += img

    return resArticle.strip(), linkList


# 字节智造 爬虫
class ZsxcoolSpider(scrapy.Spider):
    name = 'zsxcool'
    allowed_domains = ['zsxcool.com']
    base_url = 'https://www.zsxcool.com/'
    type_list = ['windows', 'android', 'mac']
    # type_list = ['android']
    cardCount = {'windows': 0, 'android': 0, 'mac': 0}
    label_list = []

    # 开始的地址
    def start_requests(self):
        for _type in self.type_list:
            url = self.base_url + _type
            yield scrapy.Request(url=url, callback=self.parse, meta={'type': _type})

    # 解card 长度
    def parse(self, response):
        _type = response.meta['type']
        href = response.xpath(
            '//*[@id="main"]/div[3]/div/ul/li[last()-1]/a/@href').extract_first()
        pageNum = href.split('/')[-1]
        for page in range(1, eval(pageNum) + 1):
            url = self.base_url + _type + '/page/' + str(page)
            print(str(page) + " : " + url)
            yield scrapy.Request(url=url, callback=self.parse_link, dont_filter=True, meta={"type": _type})

    # 解析卡片链接
    def parse_link(self, response):
        _type = response.meta["type"]
        # //*[@id="main"]/div[2]/div/div[1]/div[3]/div/div/div[1]/div/div[1]/a[1]
        for card in response.xpath(
                '//*[@id="main"]/div[2]/div/div[1]/div[3]/div/div/div'):
            link = card.xpath('div/div[1]/a[1]/@href').get()
            if not link:
                link = card.xpath('div/div[1]/a[2]/@href').get()
            # 少爬点，差不多行了
            if self.cardCount[_type] > 250:
                return
            yield scrapy.Request(url=link, callback=self.parse_page, dont_filter=True,
                                 meta={"type": _type, 'link': link})

    # 解析item
    def parse_page(self, response):
        _type = response.meta["type"]
        href = response.meta["link"]

        # 解析labels
        labels = response.xpath(
            '//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/div[1]/span[2]/a/text()').getall()
        # 解析描述
        description = response.xpath(
            '//h1/text()').get().strip()
        # 解析图标
        icon = response.xpath(
            '//*[@id="coverflow"]/div[1]').get()
        start = icon.index("url(") + 4
        end = icon.index("webp);") + 4
        icon = icon[start:end]
        # 解析文章主体
        article = response.xpath(
            '//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/article').get()
        # 解析日期
        date = response.xpath('//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/div[1]/span[1]/text()').get()
        import datetime
        date = datetime.datetime.strptime(date, '•̀.̫•́✧ · %m月%d日 · %Y年').strftime('%Y-%m-%d')
        # 解析名字
        name = response.xpath('//*[@id="h2-0"]/text()').get()
        if name:
            name = name.strip()[:-4]
        if not name:
            name = description.strip()
        if len(name) > 20:
            index = name.find('v')
            if index > 0:
                name = name[:index].strip()
        # 构建返回对象
        item = AppStoreScrapyItem()
        item['type'] = _type
        item['label'] = labels
        item['name'] = name.strip()
        item['icon'] = icon
        item['description'] = description
        # 调用自定义函数 解析文章和下载链接
        article, link = parse_article(article)
        item['article'] = article
        item['link'] = link
        item['date'] = date
        item['href'] = href

        # 测试 markdown
        # with open(f'/Users/leeson/Documents/Code/Web/AppStore/AppStore-scrapy/datas/md/{name}.md', 'w+') as f:
        #     f.write(article)

        self.cardCount[_type] += 1
        # print(link + "  " + _type + " count: " + str(self.cardCount[_type]))
        print("{:^8} {:>3} {:<20}  {}".format(_type, self.cardCount[_type], name, href, chr(12288)))
        yield item


"""
enter: https://www.zsxcool.com/32791.html
enter: https://www.zsxcool.com/7086.html
"""
