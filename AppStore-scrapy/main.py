from tools import SQLTool

# main 主函数
# 主要用于插入数据到数据库
if input("准备插入数据到数据库，是否继续？(y/n)") not in ['y','Y','yes','Yes','YES'] :
    print("退出成功，没有插入")
print("正在插入到数据库。。。")
SQLTool.commitToMySQL("./datas/zsxcoolSpiderData_Copy.json")
print("成功插入到MySQL数据库")
