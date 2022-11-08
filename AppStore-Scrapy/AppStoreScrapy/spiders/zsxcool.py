import scrapy


# 获取 分类列表

# 获取 标签列表
# 在不同


class ZsxcoolSpider(scrapy.Spider):
    name = 'zsxcool'
    allowed_domains = ['zxcool.com']
    base_url = 'https://www.zsxcool.com/'
    # type_list = ['windows', 'android', 'mac']
    type_list = ['mac']
    cardCount = {'windows': 0, 'android': 0, 'mac': 0}
    label_list = []

    # 开始的地址
    def start_requests(self):
        for _type in self.type_list:
            url = self.base_url + _type
            yield scrapy.Request(url=url, callback=self.parse, meta={'type': _type})

    # 解析列表 长度
    def parse(self, response):
        _type = response.meta['type']

        href = response.xpath('//*[@id="main"]/div[3]/div/ul/li[last()-1]/a/@href').extract_first()
        pageNum = href.split('/')[-1]
        # for page in range(1, eval(pageNum) + 1):
        for page in range(1, 2):
            url = self.base_url + _type + '/page/' + str(page)
            print(str(page) + " : " + url)
            yield scrapy.Request(url=url, callback=self.parse_link, dont_filter=True, meta={"type": _type})

    # 解析卡片链接
    def parse_link(self, response):
        _type = response.meta["type"]
        for card in response.xpath(
                '//*[@id="main"]/div[2]/div/div[1]/div[3]/div/div/div[@class="col-xxs-6 col-xs-4 col-sm-6 col-md-4 col-lg-3 post-card-wrapper"]'):
            link = card.xpath('div/div[1]/a[1]/@href').get()
            yield scrapy.Request(url=link, callback=self.parse_page, dont_filter=True,
                                 meta={"type": _type, 'link': link})

    # 解析item
    def parse_page(self, response):
        _type = response.meta["type"]
        link = response.meta["link"]
        name = response.xpath('//*[@id="h2-0"]/text()').get()
        # 判断是否存在
        if name[:5]=='应用简介' or name[:5]=='软件简介': return
        name = name[:-4].strip()
        tags = response.xpath('//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/div[1]/span[2]/a/text()').getall()
        for description in response.xpath('//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/article'):
            description.xpath()
            

        self.cardCount[_type] += 1
        # print(link + "  " + _type + " count: " + str(self.cardCount[_type]))
        print(f"{name:^30},{len(description)}")



