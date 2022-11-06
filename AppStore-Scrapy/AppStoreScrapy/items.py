# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class AppStoreScrapyItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()

    type = scrapy.Field()  # 机型
    label = scrapy.Field()  # 分类

    name = scrapy.Field()  # app名字
    icon = scrapy.Field()  # 图标
    description = scrapy.Field()  # 介绍
    date = scrapy.Field()  # 发布时间

    version = scrapy.Field()  # 发布版本
    link = scrapy.Field()  # 链接


