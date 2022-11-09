import json


# 统计 json 文件中的 type 和 label
# 输出为 datas下的labels.json 文件
# 我们可以根据里面的数据进行修改 value 值
def countLabels(filename):
    basePath = '../datas/'
    types = {
        "Android": "android",
        "MacOS": "mac",
        "Windows": "windows",
    }
    labels = dict()
    result = None
    with open(basePath + filename, 'r', encoding='utf-8') as a:
        result = json.load(a)
    if not result:
        return

    for item in result:
        # 获取type
        itemType = item.get('type')
        key = types.get(itemType)
        # 获取label
        for lab in item.get('label'):
            labels.setdefault(lab, lab)

    with open(basePath + 'labels.json', 'w', encoding='utf-8') as f:
        # f.write(result)
        json.dump(labels, f, ensure_ascii=False)
    print(labels)
