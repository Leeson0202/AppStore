package cn.as.appstore.entity.app;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Label implements Serializable {
    private static final long serialVersionUID = 2302515781236123079L;
    private String labelKey;
    private String name;
}
