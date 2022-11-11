package cn.as.appstore.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommenResult<T> {
    private Integer code;
    private String message;
    private T data;
    private static final HashMap<Integer, String> map = new HashMap<Integer, String>() {
        {
            put(200, "请求成功");
            put(400, "请求错误");
            put(500, "服务器故障");
        }
    };

    public CommenResult(Integer code) {
        this(code, map.get(code), null);
    }

    public CommenResult(Integer code, String message) {
        this(code, message, null);
    }

    public static CommenResult<String> Success() {
         return new CommenResult<String>(200);
    }
    public static CommenResult<String> ClientErr() {
        return new CommenResult<String>(400);
    }
    public static CommenResult<String> ServerErr() {
        return new CommenResult<String>(500);
    }

}
