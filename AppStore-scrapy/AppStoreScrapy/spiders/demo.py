import scrapy

from AppStoreScrapy.items import AppStoreScrapyItem




class DemoSpider(scrapy.Spider):
    name = 'demo'
    allowed_domains = ['zsxcool.com']

    # start_urls = ['https://gofans.cn']

    def start_requests(self):
        base_url = 'https://www.zsxcool.com/mac/page/'
        for i in range(10):
            yield scrapy.Request(base_url + str(i + 1), callback=self.parse)

    def parse(self, response):
        # 存放疾病信息的集合
        items = []

        for each in response.xpath(
                '//*[@id="main"]/div[2]/div/div[1]/div[3]/div/div/div[@class="col-xxs-6 col-xs-4 col-sm-6 col-md-4 col-lg-3 post-card-wrapper"]'):
            # 将我们得到的数据封装到一个 `AppStoreScrapyItem` 对象
            item = AppStoreScrapyItem()
            # extract()方法返回的都是unicode字符串
            name = each.xpath(
                'div/div[2]/h2/a/text()').extract()
            # 'div[2]/div/div[1]/figure/a/img'
            icon = each.xpath(
                'div/div[1]/a[2]/img/@src').extract()
            article = each.xpath(
                'div/div[2]/article/text()').extract()

            type1 = each.xpath(
                'div/div[2]/div[2]/a[1]/text()').extract()
            label = each.xpath(
                'div[2]/div/div[2]/div/div[1]/div/span[2]/text()').extract()

            # xpath返回的是包含一个元素的列表
            if name:
                item['name'] = name[0]
            if icon:
                item['icon'] = icon[0]
            if article:
                item['article'] = article[0]
            if type1:
                item['type'] = type1[0]
            if label:
                item['label'] = label[0]

            items.append(item)

        print(len(items))

        # 直接返回最后数据
        return items

    # def parse(self, response):
    #     lists = response.xpath(
    #         '//*[@id="__layout"]/div/section/div[1]/div[2]/div[1]/div[1]/article')
    #     print(
    #         [i.xpath('div[2]/div/div[2]/div/div[1]/a/strong/text()').extract()[0] for i in lists])
