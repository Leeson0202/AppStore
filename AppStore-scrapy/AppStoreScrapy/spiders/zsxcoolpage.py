import scrapy
from AppStoreScrapy.items import AppStoreScrapyItem
from .zsxcool import parse_article


class ZsxcoolpageSpider(scrapy.Spider):
    name = 'zsxcoolpage'
    allowed_domains = ['zsxcool.com']
    start_urls = ['https://www.zsxcool.com/7086.html']

    # def start_requests(self):
    #     return scrapy.Request('https://www.zsxcool.com/29411.html', callback=self.parse)

    def parse(self, response):
        name = response.xpath('//*[@id="h2-0"]/text()').get()
        name = name.strip()[:-4]
        if not name:
            name = response.xpath('//article/p[1]/text()').get()
            index = name.find('是')
            name = name[:index].strip()
        article = response.xpath('//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/article').get()
        description = response.xpath(
            '//h1/text()').get().strip()
        date = response.xpath('//*[@id="main"]/div[2]/div/div[1]/div/div/div[2]/div[1]/span[1]/text()').get()
        import datetime
        date = datetime.datetime.strptime(date, '•̀.̫•́✧ · %m月%d日 · %Y年').strftime('%Y-%m-%d')

        item = AppStoreScrapyItem()

        item['name'] = name.strip()
        item['description'] = description
        article, link = parse_article(article)
        item['article'] = article.strip()
        item['link'] = link
        item['date'] = date

        with open(f'/Users/leeson/Documents/Code/Web/AppStore/AppStore-scrapy/datas/1.md', 'w+') as f:
            f.write(article)
        print(name)
        return item
