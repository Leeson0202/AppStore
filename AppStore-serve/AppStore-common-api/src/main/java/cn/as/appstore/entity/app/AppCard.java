package cn.as.appstore.entity.app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * (App)实体类
 *
 * @author makejava
 * @since 2022-11-10 13:27:42
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppCard implements Serializable {
    private static final long serialVersionUID = 230251578057610180L;
    /**
     * appID
     */
    private Integer id;
    /**
     * 图标
     */
    private String icon;
    /**
     * app name
     */
    private String name;
    /**
     * 描述
     */
    private String description;
    /**
     * 浏览数
     */
    private Integer view;
}
