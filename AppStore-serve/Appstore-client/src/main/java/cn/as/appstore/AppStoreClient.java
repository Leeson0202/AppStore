package cn.as.appstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
//@EnableDiscoveryClient
@EnableFeignClients  // 开启Feign服务调用
public class AppStoreClient {
    public static void main(String[] args) {
        SpringApplication.run(AppStoreClient.class, args);
    }
}