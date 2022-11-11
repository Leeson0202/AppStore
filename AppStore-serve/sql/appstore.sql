drop database if exists appstore;

create database  appstore;
use appstore;


CREATE TABLE `app`
(
    `id`          int          NOT NULL AUTO_INCREMENT COMMENT 'appID',
    `icon`        varchar(500) NOT NULL DEFAULT '' COMMENT '图标',
    `name`        varchar(100) NOT NULL COMMENT 'app name',
    `description` varchar(200) NOT NULL COMMENT '描述',
    `article`     text         NOT NULL COMMENT '正文',
    `view`        int                   DEFAULT '0' COMMENT '浏览数',
    `date`        datetime              DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
    `href`        varchar(200)          DEFAULT NULL COMMENT '原地址',
    PRIMARY KEY (`id`),
    FULLTEXT KEY `idx_name` (`name`),
    FULLTEXT KEY `idx_des` (`description`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 210971
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;


CREATE TABLE `appLabel`
(
    `label_key` varchar(30) DEFAULT NULL COMMENT 'label key',
    `app_id`    int         DEFAULT NULL COMMENT 'appID',
    KEY `idx_app` (`app_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;



CREATE TABLE `appLink`
(
    `id`      int         DEFAULT NULL COMMENT 'appID',
    `name`    varchar(300) NOT NULL COMMENT '下载名称',
    `version` varchar(20) DEFAULT '1.1' COMMENT '版本',
    `link`    varchar(500) NOT NULL COMMENT '链接',
    `date`    datetime    DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
    KEY `idx_id` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;



CREATE TABLE `appType`
(
    `type_key` varchar(30) DEFAULT NULL COMMENT 'type key',
    `app_id`   int         DEFAULT NULL COMMENT 'appID',
    KEY `idx_app` (`app_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;



CREATE TABLE `label`
(
    `label_key` varchar(30) NOT NULL COMMENT 'label key',
    `name`      varchar(40) NOT NULL COMMENT 'label名称',
    PRIMARY KEY (`label_key`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;



CREATE TABLE `type`
(
    `type_key` varchar(30) NOT NULL COMMENT 'type key',
    `name`     varchar(40) NOT NULL COMMENT 'type名称',
    PRIMARY KEY (`type_key`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

insert into type(type_key, name)
values ('android', 'Android'),
       ('mac', 'Mac OS'),
       ('windows', 'Windows');
insert into label(label_key, name)
values ('program', '编程'),
       ('cut', '剪辑'),
       ('system', '系统'),
       ('tool', '工具');



