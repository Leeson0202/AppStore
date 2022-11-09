# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html

# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import json


class AppstorescrapyPipeline:
    labels = None
    types = {'MacOS': 'mac', 'Android': 'android', 'Windows': 'windows'}

    def process_item(self, item, spider):
        if not self.labels:
            print('1')
            with open("./datas/labels.json", 'r') as f:
                self.labels = json.load(f)
        # print(item)
        itemType = item['type']
        newType = [itemType]
        newLabel = []
        itemLabels = item['label']
        for ilab in itemLabels:
            # 如果属于type 加入type
            if self.types.get(itemType):
                newType.append(self.types.get(ilab))
            # 属于 type
            elif self.labels.get(ilab):
                newLabel.append(self.labels.get(ilab))
        item['type'] = newType
        item['label'] = newLabel
        return item

    def getLabels(self):
        try:
            with open("../datas/labels.json", 'r') as f:
                self.labels = json.load(f)
        except Exception as e:
            print(e)
