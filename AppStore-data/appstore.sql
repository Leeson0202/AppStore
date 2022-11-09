drop database if exists appstore;

create DATABASE appstore;
use appstore;

-- 下载的 机型
create table type
(
    `key`  varchar(30) primary key comment 'type key',
    `name` varchar(40) not null comment 'type名称'
);
insert into type(`key`, `name`)
values ('mac', 'Mac OS'),
       ('windows', 'Windows'),
       ('android', 'Android');

-- 下载的 分类
create table label
(
    `key`  varchar(30) primary key comment 'label key',
    `name` varchar(40) not null comment 'label名称'
);
insert into label(`key`, `name`)
values ('learn', '学习'),
       ('enjoy', '娱乐'),
       ('game', '游戏'),
       ('tools', '工具');

-- 软件介绍
create table app
(
    `id`          int primary key auto_increment comment 'appID',
    `icon`        varchar(500) not null default '' comment '图标',
    `name`        varchar(100) not null comment 'app name',
    `description` varchar(200) not null comment '描述',
    `article`     text         not null comment '正文',
    `view`        int                   default 0 comment '浏览数',
    `date`        datetime              default NOW() comment '发布时间',
    `href`        varchar(200) comment '原地址',
    fulltext idx_name (name),
    fulltext idx_des (description)
);

-- 软件版本和链接
create table appLink
(
    `id`      int comment 'appID',
    `name`    varchar(300) not null comment '下载名称',
    `version` varchar(20) default '1.1' comment '版本',
    `link`    varchar(500) not null comment '链接',
    `date`    datetime    default now() comment '发布时间',
    index idx_id (id)
);

-- 软件 机型表
create table appType
(
    `type_key` varchar(30) comment 'type key',
    `app_id`   int comment 'appID',
    index idx_app (`app_id`)

);

-- 软件 分类表
create table appLabel
(
    `label_key` varchar(30) comment 'label key',
    `app_id`    int comment 'appID',
    index idx_app (`app_id`)
);





