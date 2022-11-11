package cn.as.appstore.service;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.entity.app.AppCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

/**
 * (App)表服务接口
 *
 * @author makejava
 * @since 2022-11-10 14:57:16
 */
public interface AppService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    App queryById(Integer id);


    /**
     * 新增数据
     *
     * @param app 实例对象
     * @return 实例对象
     */
    App insert(App app);

    /**
     * 修改数据
     *
     * @param app 实例对象
     * @return 实例对象
     */
    App update(App app);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Integer id);

    /**
     * 通过type label 查询appCard
     *
     * @param type  机型
     * @param label 分类
     * @param page  页码
     * @return appCard列表
     */
    List<AppCard> queryByTypeLabel(String type, String label, Integer page);
}
