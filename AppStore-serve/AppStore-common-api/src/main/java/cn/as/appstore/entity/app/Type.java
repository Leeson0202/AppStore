package cn.as.appstore.entity.app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Type implements Serializable {
    private static final long serialVersionUID = 230251578123610079L;
    private String typeKey;
    private String name;

}
