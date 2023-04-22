package cn.as.appstore.entity.app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Link implements Serializable {
    private static final long serialVersionUID = 2301231578236123079L;
    private String name;
    private String version;
    private String link;
    private Date date;
}
