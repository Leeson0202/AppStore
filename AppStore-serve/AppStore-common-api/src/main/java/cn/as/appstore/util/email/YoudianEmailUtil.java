package cn.as.appstore.util.email;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class YoudianEmailUtil {
    public static String title = "悠点单词";
    private final Map<Integer, String> map = new HashMap<Integer, String>() {{
        put(0, "【悠点单词】您正在申请邮箱注册，验证码为：%s，5分钟内有效！");
        put(1, "【悠点单词】验证码为：%s，您正在登录，若非本人操作，请勿泄露。");
        put(2, "【悠点单词】验证码为：%s，您正在尝试变更重要信息，请妥善保管账户信息。");
    }};

    public void send(String destEmail, String code, int opt) {
        try {
            if (opt >= 0 && code.length() == 6) {
                String context = String.format(map.get(opt), code);
                new EmailUtil().send(destEmail, title, context);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new YoudianEmailUtil().send("2224351168@qq.com", "123456", 1);
        new YoudianEmailUtil().send("2224351168@qq.com", "123456", 2);
        new YoudianEmailUtil().send("2224351168@qq.com", "123456", 0);
    }


}
