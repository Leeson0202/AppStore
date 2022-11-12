package cn.as.appstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableDiscoveryClient
@EnableCaching
//@CrossOrigin
@Configuration
public class ServerAppMain {
    public static void main(String[] args) {
        SpringApplication.run(ServerAppMain.class, args);
    }

    @Bean
    public RestTemplate restTemplate() {
        // RestTemplate restTemplate = new RestTemplate();
        //设置中文乱码问题方式一
        // restTemplate.getMessageConverters().add(1,new StringHttpMessageConverter(Charset.forName("UTF-8")));
        // 设置中文乱码问题方式二
        // restTemplate.getMessageConverters().set(1,new StringHttpMessageConverter(StandardCharsets.UTF_8)); // 支持中文编码
        return new RestTemplate();
    }
}