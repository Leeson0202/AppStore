package cn.as.appstore.controller;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.entity.app.AppCard;
import cn.as.appstore.entity.app.Label;
import cn.as.appstore.entity.app.Type;
import cn.as.appstore.service.AppService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * (App)表控制层
 *
 * @author Leeson0202
 * @since 2022-11-10 14:56:47
 */
@RestController
@Slf4j
@RequestMapping("api")
public class AppListController {
    @Resource
    private AppService appService;
//    @Resource
//    private RedisTemplate redisTemplate;


    /**
     * 通过type 分页查询 cards和总数量total
     * <p>
     * map封装
     * type  机型
     * label 分类
     * page 页码
     *
     * @return 查询结果
     */
    @RequestMapping("/cards")
    public ResponseEntity<Map<String, Object>> queryCards(
            Map<String, String> map) {
        System.out.println(map);
        String type = map.get("type");
        String label = map.get("label");
        Integer page = map.get("page") == null ? 1 : Integer.parseInt(map.get("page"));

        HashMap<String, Object> res = new HashMap<>();
        res.put("cards", this.appService.queryByTypeLabel(type, label, page));
        res.put("total", this.appService.queryCardTotal(type, label));
        return ResponseEntity.ok(res);
    }

    /**
     * 通过 type和label 获取 总数量total
     */
    @RequestMapping("/total")
    public ResponseEntity<Map<String, Object>> queryCardTotal(
           Map<String, String> map
    ) {
        String type = map.get("type");
        String label = map.get("label");
        HashMap<String, Object> res = new HashMap<>();
        res.put("total", appService.queryCardTotal(type, label));
        return ResponseEntity.ok(res);
    }


    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/types")

    public ResponseEntity<Map<String, String>> queryTypes() {
        List<Type> types = appService.queryTypes();
        Map<String, String> res = new HashMap<>();
        res.put("all", "全部");
        for (Type type : types) {
            res.put(type.getTypeKey(), type.getName());
        }
        return ResponseEntity.ok(res);
    }

    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/labels")
    public ResponseEntity<Map<String, String>> queryLabels() {
        List<Label> labels = appService.queryLabels();
        Map<String, String> res = new HashMap<>();
        res.put("all", "全部");
        for (Label label : labels) {
            res.put(label.getLabelKey(), label.getName());
        }
        return ResponseEntity.ok(res);
    }


}
