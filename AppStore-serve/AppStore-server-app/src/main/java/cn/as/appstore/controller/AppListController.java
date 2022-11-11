package cn.as.appstore.controller;

import cn.as.appstore.entity.app.AppCard;
import cn.as.appstore.service.AppService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * (App)表控制层
 *
 * @author Leeson0202
 * @since 2022-11-10 14:56:47
 */
@RestController
@Slf4j
public class AppListController {
    @Resource
    private AppService appService;
    @Resource
    private RedisTemplate redisTemplate;

    /**
     * 分页查询 通过type
     *
     * @param type  机型
     * @param label 分类
     * @return 查询结果
     */
    @GetMapping("/applist")
    public ResponseEntity<List<AppCard>> queryCard(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String label,
            @RequestParam(required = false, defaultValue = "0") Integer page) {
        return ResponseEntity.ok(this.appService.queryByTypeLabel(type, label, page));
    }


}
