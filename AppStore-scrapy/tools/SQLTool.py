import pymysql
import json


class ToSql:
    conn = None
    host = 'localhost'
    user = 'root'
    password = 'root'
    database = 'appstore'

    # 连接database
    def __init__(self):
        self.conn = pymysql.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database,
            charset='utf8')

    def close(self):
        # 关闭数据库连接
        self.conn.close()

    def executeSql(self, sql):
        cursor = self.conn.cursor()
        # 执行SQL语句
        cursor.execute(sql)

        # 关闭光标对象
        cursor.close()


# noinspection SqlNoDataSourceInspection
def commitToMySQL(filename):
    print('commitToMySQL 函数...')
    result = None
    # 读取文件 数据文件
    with open(filename, 'r', encoding='utf-8') as f:
        result = json.load(f)
    if not result:
        print("数据文件为空，请重写爬取：执行AppStore-scrapy的start.py文件")
        return
    print('读取数据成功。。开始插入')
    # 连接数据库
    cursor = ToSql()
    index = 210138
    appSqlFormat = """insert into app(`id`, `icon`, `name`, `description`, `article`, `href`) values {};"""
    linkSqlFormat = """insert into appLink(`id`, `name`, `link`) values {};"""
    typeSqlFormat = """insert into appType(`app_id`, `type_key`) values {};"""
    labelSqlFormat = """insert into appLabel(`app_id`, `label_key`) values {};"""
    for item in result:
        index += 1
        name = item.get('name')
        icon = item.get('icon')
        description = item.get('description')
        article = item.get('article')
        typel = item.get('type')
        label = item.get('label')
        date = item.get('date')
        links = item.get('link')
        href = item.get('href')
        cursor.conn.begin()
        # 构建 applist
        appSql = appSqlFormat.format(f"('{index}', '{icon}', '{name}', '{description}', '{article}', '{href}')")
        try:
            cursor.executeSql(appSql)
        except Exception as e:
            continue

        # 构建 link
        linkSql = ""
        for link in links:
            linkSql = linkSqlFormat.format(f" ('{index}', '{link.get('name')}', '{link.get('link')}')")
            cursor.executeSql(linkSql)
        # 构建type
        typeSql = ""
        for tp in typel:
            typeSql = typeSqlFormat.format(f" ('{index}','{tp}')")
            cursor.executeSql(typeSql)

        # 构建 label
        labelSql = ""
        for lb in label:
            labelSql = labelSqlFormat.format(f"('{index}','{lb}')")
            cursor.executeSql(labelSql)

        print(f'{index}, {name}')
        cursor.conn.commit()
    cursor.close()


print("SQLTool文件正在运行 ")
if __name__ == '__main__':
    print("SQLTool文件 本地启动")
    commitToMySQL("../datas/zsxcoolSpiderData_Copy.json")
