package cn.as.appstore.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient("appstore-server-app")  // zookeeper 中服务的名字
@RequestMapping("api")
public interface AppListService {
    /**
     * 通过type 分页查询 cards和总数量total
     *
     * @param map
     * @return 查询结果
     */
    @RequestMapping("/cards")
    ResponseEntity<Map<String, Object>> queryCards(
            @RequestParam Map<String, String> map);

    /**
     * 通过 type和label 获取 总数量total
     */
    @RequestMapping("/total")
    ResponseEntity<Map<String, Object>> queryCardTotal(
            @RequestParam("map") Map<String, String> map);

    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/types")
    ResponseEntity<Map<String, String>> queryTypes();

    /**
     * 获取 download types
     *
     * @return Map<key, value>
     */
    @RequestMapping("/labels")
    ResponseEntity<Map<String, String>> queryLabels();

    /**
     * 热门app
     * @return
     */
    @RequestMapping("/hot/apps")
    ResponseEntity<Map<String, Object>> hotApps();
}
