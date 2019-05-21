package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages="com.example")
@MapperScan("com.example.mapper")
public class Demo0519Application {

	public static void main(String[] args) {
		SpringApplication.run(Demo0519Application.class, args);
	}

}
