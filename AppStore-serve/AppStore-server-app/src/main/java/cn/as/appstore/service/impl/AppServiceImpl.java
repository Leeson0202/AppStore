package cn.as.appstore.service.impl;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.dao.AppDao;
import cn.as.appstore.entity.app.AppCard;
import cn.as.appstore.service.AppService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.List;

/**
 * (App)表服务实现类
 *
 * @author makejava
 * @since 2022-11-10 14:57:19
 */
@Service("appService")
@Slf4j
public class AppServiceImpl implements AppService {
    @Resource
    private AppDao appDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public App queryById(Integer id) {
        return this.appDao.queryById(id);
    }


    /**
     * 新增数据
     *
     * @param app 实例对象
     * @return 实例对象
     */
    @Override
    public App insert(App app) {
        this.appDao.insert(app);
        return app;
    }

    /**
     * 修改数据
     *
     * @param app 实例对象
     * @return 实例对象
     */
    @Override
    public App update(App app) {
        this.appDao.update(app);
        return this.queryById(app.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer id) {
        return this.appDao.deleteById(id) > 0;
    }

    /**
     * 通过type label 查询appCard
     *
     * @param type  机型
     * @param label 分类
     * @param page  页码
     * @return appCard列表
     */
    @Override
    public List<AppCard> queryByTypeLabel(String type, String label, Integer page) {
        return appDao.queryByTypeLabel(type, label, page);
    }
}
