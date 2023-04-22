package cn.as.appstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableDiscoveryClient
@EnableCaching
//@CrossOrigin
@Configuration
public class ServerNavigationMain {
    public static void main(String[] args) {
        SpringApplication.run(ServerNavigationMain.class, args);
    }
}