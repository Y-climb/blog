---
title: MySQL 基础知识
date: 2026-09-19
tags:
  - MySQL
  - 数据库
  - SQL
---

# MySQL 基础知识

## 启动与停止

`cmd` 输入 `services.msc`，或者在命令行中输入：

**启动：**

```bash
net start mysql80
```

**停止：**

```bash
net stop mysql80
```

::: tip
`mysql80` 是服务名称。
:::

## 连接客户端

从开始菜单或者从命令行输入：

```bash
mysql [-h 127.0.0.1] [-P 3306] -u root -p
```

::: tip
需要配置环境变量：`C:\Program Files\MySQL\MySQL Server 8.0\bin\`
:::

## 关系型数据库（RDBMS）

建立在关系模型基础上，由多张相互连接的二维表组成的数据库。

**特点：**

1. 使用表存储数据，格式统一，便于维护
2. 使用 SQL 语言操作，标准统一，使用方便

![MySQL 数据模型](/images/mysql/Pasted%20image%2020260910205337.png)

MySQL 数据模型：客户端连接 DBMS，DBMS 可以创建多个数据库，一个数据库可以创建多个二维表。

## SQL 通用语法

1. SQL 语句可以单行或多行书写，以分号结尾。
2. SQL 语句可以使用空格/缩进来增强语句的可读性。
3. MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
4. 注释：
   - 单行注释：`-- 注释内容` 或 `# 注释内容`
   - 多行注释：`/* 注释内容 */`

## SQL 分类

![SQL 分类](/images/mysql/Pasted%20image%2020260910210532.png)

- **DDL**：数据定义语言，用来定义数据库对象（数据库，表，字段）
- **DML**：数据操作语言，用来对数据库表中的数据进行增删改查
- **DQL**：数据查询语言，用来查询数据库中表的记录
- **DCL**：数据控制语言，用来创建数据库用户、控制数据库的访问权限

## DDL 语句

### 数据库操作

**查询所有数据库：**

```sql
SHOW DATABASES;
```

**查询当前数据库：**

```sql
SELECT DATABASE();
```

**创建：**

```sql
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];
```

**删除：**

```sql
DROP DATABASE [IF EXISTS] 数据库名;
```

**使用：**

```sql
USE 数据库名;
```

### 表操作

**查询当前数据库所有表：**

```sql
SHOW TABLES;
```

**查询表结构：**

```sql
DESC 表名;
```

**查询指定表的建表语句：**

```sql
SHOW CREATE TABLE 表名;
```

**创建表：**

```sql
CREATE TABLE 表名(
    字段1 字段1类型 [COMMENT 字段1注释],
    字段n 字段n类型 [COMMENT 字段n注释]
) [COMMENT 表注释];
```

### MySQL 数据类型

![MySQL 数据类型 1](/images/mysql/Pasted%20image%2020260917093024.png)
![MySQL 数据类型 2](/images/mysql/Pasted%20image%2020260917093417.png)
![MySQL 数据类型 3](/images/mysql/Pasted%20image%2020260917094102.png)

### 表修改

```sql
-- 添加字段
ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];

-- 修改字段数据类型
ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);

-- 修改字段名和类型
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];

-- 删除字段
ALTER TABLE 表名 DROP 字段名;

-- 修改表名
ALTER TABLE 表名 RENAME TO 新表名;
```

### 表删除

**删除表：**

```sql
DROP TABLE [IF EXISTS] 表名;
```

**删除指定表，并重新创建该表：**

```sql
TRUNCATE TABLE 表名;
```

## DML 语句

### 添加数据

**1. 给指定字段添加数据：**

```sql
INSERT INTO 表名(字段1, 字段2, ...) VALUES(值1, 值2, 值3...);
```

**2. 给全部字段添加数据：**

```sql
INSERT INTO 表名 VALUES(值1, 值2, 值3...);
```

**3. 批量添加数据：**

```sql
INSERT INTO 表名(字段1, 字段2, ...) VALUES(值1, 值2, 值3...), (值1, 值2, 值3...), (值1, 值2, 值3...);

INSERT INTO 表名 VALUES(值1, 值2, 值3...), (值1, 值2, 值3...), (值1, 值2, 值3...);
```

::: warning 注意
- 插入数据时，指定的字段顺序需要与值的顺序一一对应。
- 字符串和日期型数据应该包含在引号中。
- 插入的数据大小，应该在字段的规定范围内。
:::

### 修改数据

```sql
UPDATE 表名 SET 字段名1 = 值1, 字段名2 = 值2, ... [WHERE 条件];
```

::: warning 注意
修改语句的条件可以有也可以没有，如果没有条件，则会修改整张表的所有数据。
:::

### 删除数据

```sql
DELETE FROM 表名 [WHERE 条件];
```

::: warning 注意
- DELETE 语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的所有数据。
- DELETE 语句不能删除某一个字段的值（可以使用 UPDATE）。
:::

## DQL 语句

### 语法

```sql
SELECT
    字段列表
FROM
    表名列表
WHERE
    条件列表
GROUP BY
    分组字段列表
HAVING
    分组后条件列表
ORDER BY
    排序字段列表
LIMIT
    分页参数;
```

### 基本查询

**1. 查询多个字段：**

```sql
SELECT 字段1, 字段2, 字段3... FROM 表名;
SELECT * FROM 表名;
```

**2. 设置别名：**

```sql
SELECT 字段1 [AS 别名1], 字段2 [AS 别名2] ... FROM 表名;
```

**3. 去除重复记录：**

```sql
SELECT DISTINCT 字段列表 FROM 表名;
```

### 条件查询

**语法：**

```sql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

**常用条件：**

![条件查询](/images/mysql/Pasted%20image%2020260918191120.png)

::: tip
判断 NULL 要用 `IS`。
:::

### 聚合函数

| 函数 | 作用 |
| ---- | -------- |
| `count` | 统计数量 |
| `max` | 最大值 |
| `min` | 最小值 |
| `avg` | 平均值 |
| `sum` | 求和 |

**语法：**

```sql
SELECT 聚合函数(字段列表) FROM 表名;
```

### 分组查询

**语法：**

```sql
SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件];
```

**WHERE 与 HAVING 的区别：**

![where 与 having 的区别](/images/mysql/Pasted%20image%2020260919094618.png)

### 排序查询

**语法：**

```sql
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;
```

### 分页查询
**语法：**
```sql
select 字段列表 from 表名 limit 起始索引,查询记录数;
```

::: warning 注意
- 起始索引从0开始,起始索引 = (查询页面 -1 )* 每页显示记录数.
- 分页查询是数据库的方言,不同的数据库有不同的实现
- 如果查询的是第一页数据,起始索引可以省略,直接简写为limit 10.
:::

### 执行顺序
![执行顺序](/images/mysql/Pasted%20image%2020260920081748.png)