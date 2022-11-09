## python scrapy
本爬虫框架使用了scrapy，scrapy很方便，学习时间大概不到一天，很简单，下面我来介绍一下我的爬虫构思。

大胆的尝试：这个spider解析了wordpress，并转换为了markdown文本储存，我也是第一次解析这么多的标签，真是太麻烦了。





## 启动方式

### 执行爬虫

- 方法一（写了个脚本）

​		主目录下运行 start.py

- 方法二（命令行）

  > // 输出文件为json
  >
  > scrapy crawl zsxcool -o ./datas/zsxcoolData.json 
  >
  > // 输出为csv
  >
  > scrapy crawl zsxcool -o ./datas/zsxcoolData.csv

默认文件储存在了 ./datas/zsxcoolData.json 

### 存入数据库

需要转数据库的需要先执行数据库脚步(appstore.sql)，再执行main.py

> // 在sql 命令行里面输入 
>
> source appstore.sql





## Scrapy的开始

  因为我要做一个AppStore的Web应用，没得数据所有自己也会爬虫，所有就直接干。（也只是练手哈，没有用于商用）

### 准备工作

#### 找一个好爬的应用网站

​	找了很久，感觉这个网站，分类比较符合我的预期（mac，windows，android），[字节智造](https://www.zsxcool.com)



![image-20221110021106185](https://ghproxy.com/https://raw.githubusercontent.com/Leeson0202/imgRepository/main/image-20221110021106185.png)



优点：

- 分类明确，通过系统来爬很方便
- 应用免费，而且没有什么广告
- 界面很好看，可以为后面vue抄袭下（那个轮播图真的好看）



#### 观察他的分类连接

他这个连接非常的简单，没有用js，数据就在html里面

- macOS: [https://www.zsxcool.com/mac/page/2](https://www.zsxcool.com/mac/page/2)
- windows: [https://www.zsxcool.com/windows/page/2](https://www.zsxcool.com/windows/page/2)
- android: [https://www.zsxcool.com/android/page/2](https://www.zsxcool.com/android/page/2)







### 正式开始

#### 每个标签有多少页？

鼠标移上来就看到了，直接xpath

<img src="https://ghproxy.com/https://raw.githubusercontent.com/Leeson0202/imgRepository/main/image-20221110022349929.png" alt="image-20221110022349929" style="width:90%;text-align: center" />



#### 获取卡片的连接

然后就可以获得他的那个具体应用的连接（使用xpath很快就搞出来了）

<img src="https://ghproxy.com/https://raw.githubusercontent.com/Leeson0202/imgRepository/main/image-20221110021924597.png" alt="image-20221110021924597" style="width:90%;" />



#### 获取应用详细内容

比如这个页面，这里主要是内容主体比较难爬，有文字和图片，最后转成markdown，方便储存。

![image-20221110022803586](https://ghproxy.com/https://raw.githubusercontent.com/Leeson0202/imgRepository/main/image-20221110022803586.png)



## 编程过程

scrapy基础的操作我就不说了。直接上目录

### 目录结构

```angular2html
.
├── AppStoreScrapy             // scrapy主要目录
│   ├── __init__.py
│   ├── items.py               // 数据结构
│   ├── middlewares.py
│   ├── pipelines.py           // 管道文件
│   ├── settings.py
│   └── spiders                // 三个spider
│       ├── __init__.py
│       ├── demo.py            // 测试使用
│       ├── zsxcool.py         // 主要的spider： scrapy crawl zsxcool
│       └── zsxcoolpage.py     // 测试具体页面: scrapy crawl zsxcoolpage
├── README.md
├── datas                            // 存放数据
│   ├── 1.md
│   ├── demoSpiderData.json
│   ├── labels.json                  // 解析标签得到的一个json，不要动
│   ├── zsxcoolSpiderData.json       // 每次start都会刷新
│   ├── zsxcoolSpiderData_Copy.json  // 我用的数据——测试成功的
│   ├── zsxcoolSpiderData_old.json   // 用于解析标签label的
│   └── zsxcoolpageSpiderData.json  
├── main.py               // zsxcoolSpiderData_Copy.json数据存入MySQL的启动文件
├── scrapy.cfg
├── start.py              // 启动文件（命令行启动比较麻烦），自己调试试一下
└── tools
    ├── LabelTool.py      // 当时解析标签的工具
    ├── SQLTool.py        // 数据入库核心文件
    └── __init__.py

```



### 实现细节

./AppStoreScrapy/spiders/**zsxcool.py** 文件，一看就懂

scrapy使用的多线程方式，py中使用了yield关键字来很好的响应。

```python
# 这里定义了一个方法 为了其他的模块方便调用
# 解析文章和链接的函数
# 传入的article的html字符串
# 返回文章主体和下载链接
def parse_article(article):
    # 
    pass

# 字节智造 爬虫-- scrapy 会制动调用该类的start_requests方法
class ZsxcoolSpider(scrapy.Spider):
    
    # 开始的地址
    def start_requests(self):
        pass
        
    # 解card 长度
    def parse(self, response):
        pass

    # 解析卡片链接
    def parse_link(self, response):
        pass

    # 解析item
    def parse_page(self, response):
        pass

```

大致流程

- start_requests 从【mac，windows，android】三个开始链接开始，提交给scrapy.Request，callback为parse_link

- parse 解析长度，解析【mac，windows，android】标签分别有多少页，进行遍历爬去，提交给scrapy.Request，callback为parse_link

  比如mac有4页：

  提交给scrapy 【https://www.zsxcool.com/mac/page/1  - https://www.zsxcool.com/mac/page/4】

- parse_link 解析每页的card，获得每个应用详细链接，提交给scrapy.Request，callback为parse_page

- parse_page 解析应用详情（这里解析了wordpress文章，转为了markdown语法）

  这里获取到应用的主体时调用了parse_article方法。具体实现还是比较简单，去调试看看
