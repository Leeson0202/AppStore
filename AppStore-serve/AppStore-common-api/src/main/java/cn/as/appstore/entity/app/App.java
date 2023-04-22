package cn.as.appstore.entity.app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * (App)实体类
 *
 * @author makejava
 * @since 2022-11-10 13:27:42
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class App implements Serializable {
    private static final long serialVersionUID = 230251578057610079L;
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
     * 正文
     */
    private String article;
    /**
     * 浏览数
     */
    private Integer view;
    /**
     * 发布时间
     */
    private Date date;
    /**
     * 原地址
     */
    private String href;
    /**
     * types 机型
     */
    private List<String> types;
    /**
     * labels
     */
    private List<String> labels;
    /**
     * links 下载链接
     */
    private List<Link> links;

}

