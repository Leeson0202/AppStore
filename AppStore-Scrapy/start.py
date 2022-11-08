from scrapy import cmdline
import datetime
import os

# 选取spider
spider_index = 1
# spider list
spider_list = ['demo', 'zsxcool', 'zsxcoolpage']
# spider 的名字
spider_name = spider_list[spider_index]

# 保存的文件以时间命名
filename = datetime.datetime.now().strftime('%Y年%m月%日%H_%M_%S') + '.json'
filename = f'{spider_name}SpiderData.json'
filePath = f'./datas/{filename}'

cmd = f'scrapy crawl {spider_name} -o {filePath}'
print(cmd)
if os.path.exists(filePath):
    os.remove(filePath)
cmdline.execute(cmd.split())
