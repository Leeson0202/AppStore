package cn.as.appstore.controller;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.service.AppListService;
import cn.as.appstore.service.AppService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

@Controller
public class AppController {

    @Resource
    private AppService appService;
    @Resource
    private AppListService appListService;

    /**
     * 通过type 分页查询 cards和总数量total
     *
     * @param type  机型
     * @param label 分类
     * @param page  页数
     * @return 查询结果
     */
    @RequestMapping("/cards")
    public ResponseEntity<Map<String, Object>> queryCard(
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "label", required = false) String label,
            @RequestParam(value = "page", required = false) String page) {
        HashMap<String, String> map = new HashMap<>();
        map.put("type", type);
        map.put("label", label);
        map.put("page", page);
        System.out.println(map);

        return this.appListService.queryCards(map);
    }


    /**
     * 通过 type和label 获取 总数量total
     */
    @RequestMapping("/total")
    public ResponseEntity<Map<String, Object>> queryCardTotal(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String label) {
        HashMap<String, String> map = new HashMap<>();
        map.put("type", type);
        map.put("label", label);
        return this.appListService.queryCardTotal(map);
    }


    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/types")
    public ResponseEntity<Map<String, String>> queryTypes() {
        return this.appListService.queryTypes();
    }


    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/labels")
    public ResponseEntity<Map<String, String>> queryLabels() {
        return this.appListService.queryLabels();
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @RequestMapping("/app")
    ResponseEntity<App> queryById(@RequestParam("id") Integer id) {
        return this.appService.queryById(id);
    }

}
