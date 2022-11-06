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
values ('all', '全部'),
       ('mac', 'Mac OS'),
       ('windows', 'Windows'),
       ('android', 'Android');

-- 下载的 分类
create table label
(
    `key`  varchar(30) primary key comment 'label key',
    `name` varchar(40) not null comment 'label名称'
);
insert into label(`key`, `name`)
values ('all', '全部'),
       ('learn', '学习'),
       ('enjoy', '娱乐'),
       ('game', '游戏'),
       ('tools', '工具');

-- 软件介绍
create table app
(
    `id`          int primary key auto_increment comment 'appID',
    `icon`        varchar(500) not null default '' comment '图标',
    `name`        varchar(100) not null comment 'app name',
    `description` text         not null comment '介绍',
    `date`        date         not null comment '发布时间',
    index idx_name (name),
    fulltext idx_des (description)
);

-- 软件版本和链接
create table appVersion
(
    `id`      int comment 'appID',
    `name`    varchar(100) not null comment 'app name',
    `version` varchar(20) comment '版本',
    `link`    varchar(500) not null comment '链接',
    `date`    date         not null comment '发布时间',
    index idx_id (id)
);

-- 软件 机型表
create table appType
(
    `Type-key` varchar(30) comment 'type key',
    `app-id`   int comment 'appID',
    index idx_app (`app-id`)

);

-- 软件 分类表
create table appLabel
(
    `label-key` varchar(30) comment 'label key',
    `app-id`    int comment 'appID',
    index idx_app (`app-id`)
);





