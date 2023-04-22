package cn.as.appstore.controller;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.service.AppService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.awt.*;

/**
 * (App)表控制层
 *
 * @author makejava
 * @since 2022-11-10 14:56:47
 */
@RestController
@Slf4j
@RequestMapping("api")
public class AppController {
    /**
     * 服务对象
     */
    @Resource
    private AppService appService;
//    @Resource
//    private RestTemplate restTemplate;


    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @RequestMapping("app")
    public ResponseEntity<App> queryById(@RequestParam("id") Integer id) {
        if (id == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(this.appService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param app 实体
     * @return 新增结果
     */
    @PostMapping
    public ResponseEntity<App> add(App app) {
        return ResponseEntity.ok(this.appService.insert(app));
    }


    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping
    public ResponseEntity<Boolean> deleteById(Integer id) {
        return ResponseEntity.ok(this.appService.deleteById(id));
    }

}

