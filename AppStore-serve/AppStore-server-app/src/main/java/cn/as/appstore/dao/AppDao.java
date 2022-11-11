package cn.as.appstore.dao;

import cn.as.appstore.entity.app.App;
import cn.as.appstore.entity.app.AppCard;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * (App)表数据库访问层
 *
 * @author makejava
 * @since 2022-11-10 14:56:47
 */
@Mapper
public interface AppDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    App queryById(Integer id);

    /**
     * 统计总行数
     *
     * @param app 查询条件
     * @return 总行数
     */
    long count(App app);

    /**
     * 新增数据
     *
     * @param app 实例对象
     * @return 影响行数
     */
    int insert(App app);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<App> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<App> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<App> 实例对象列表
     * @return 影响行数
     * @throws org.springframework.jdbc.BadSqlGrammarException 入参是空List的时候会抛SQL语句错误的异常，请自行校验入参
     */
    int insertOrUpdateBatch(@Param("entities") List<App> entities);

    /**
     * 修改数据
     *
     * @param app 实例对象
     * @return 影响行数
     */
    int update(App app);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Integer id);

    /**
     * 通过 type label page
     *
     * @param type
     * @param label
     * @param page
     * @return list appCard对象
     */
    List<AppCard> queryByTypeLabel(@Param("type") String type, @Param("label") String label, @Param("page") Integer page);
}

