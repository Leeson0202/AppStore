package cn.as.appstore.service;

import cn.as.appstore.entity.app.App;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("appstore-server-app")// zookeeper 中服务的名字
@RequestMapping("api")
public interface AppService {
    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @RequestMapping("app")
    ResponseEntity<App> queryById(@RequestParam("id") Integer id);
}
