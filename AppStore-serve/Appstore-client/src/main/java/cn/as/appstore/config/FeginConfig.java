package cn.as.appstore.config;

import feign.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeginConfig {
    @Bean
    public Logger.Level feginLoggerLevel(){
        return Logger.Level.FULL;//日志级别
    }
}

