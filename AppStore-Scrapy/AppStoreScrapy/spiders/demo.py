import scrapy

from AppStoreScrapy.items import AppStoreScrapyItem


class DemoSpider(scrapy.Spider):
    name = 'demo'
    allowed_domains = ['gofans.cn']
    start_urls = ['https://gofans.cn']

    def parse(self, response):
        # 存放疾病信息的集合
        items = []

        for each in response.xpath('//*[@id="__layout"]/div/section/div[1]/div[2]/div[1]/div[1]/article'):
            # 将我们得到的数据封装到一个 `AppStoreScrapyItem` 对象
            item = AppStoreScrapyItem()
            # extract()方法返回的都是unicode字符串
            name = each.xpath(
                'div[2]/div/div[2]/div/div[1]/a/strong/text()').extract()
            # 'div[2]/div/div[1]/figure/a/img'
            icon = each.xpath(
                'div[2]/div/div[1]/figure/a').extract()
            description = each.xpath(
                'div[2]/div/div[2]/p/text()').extract()

            type1 = each.xpath(
                'div[2]/div/div[2]/div/div[1]/div/span[1]/text()').extract()
            label = each.xpath(
                'div[2]/div/div[2]/div/div[1]/div/span[2]/text()').extract()

            # xpath返回的是包含一个元素的列表
            item['name'] = name[0]
            item['icon'] = icon[0]
            item['description'] = description[0]
            item['type'] = type1[0]
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
