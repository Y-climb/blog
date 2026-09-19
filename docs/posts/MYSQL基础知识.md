**启动与停止**：
cmd输入services.msc
或者命令行中输入：
**启动**：
`net start mysql80`
**停止**：
`net stop mysql80`
%%mysql80是服务名称%%

**连接客户端**：
从开始菜单或者从命令行输入
`mysql [-h 127.0.0.1] [-P 3306] -u root -p`
%%需要配置环境变量%%
`C:\Program Files\MySQL\MySQL Server 8.0\bin\`

**关系型数据库（RDBMS)**
*建立在关系模型基础上，有多张相互连接的二维表组成的数据库*
***特点**：*
*1.使用表存储数据，格式统一，便于维护*
*2.使用SQL语言操作,标准统一，使用方便*
![[Pasted image 20260910205337.png]]
*MySQL 数据模型：客户端连接DBMS，DBMS可以创建多个数据库，一个数据库可以创建多个二维表*

**SQL通用语法**
*1.SQL语句可以单行或多行书写，以分号结尾。*
*2.SQL语句可以使用空格/缩进来增强语句的可读性。*
*3.MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。*
*4.注释：*
*单行注释：--注释内容或#注释内容*
*多行注释：/**   

**SQL分类**
![[Pasted image 20260910210532.png]]DDL：数据定义语言，用来定义数据库对象（数据库，表，字段）
DML:数据操作语言，用来对数据库表中的数据进行增删改查
DQL:数据查询语言，用来查询数据库中表的记录
DCL：数据控制语言，用来创建数据库用户、控制数据库的 

**DDL语句**
查询：
1.查询所有数据库：
`SHOW DATABASES;`

2.查询当前数据库：
`SHOW DATABASE();`

创建：
`CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];`

删除：
`DROP DATABASE [IF EXISTS]数据库名;`

使用：
`USE 数据库名;`

查询当前所在数据库：
`select database();`

**表操作**

查询当前数据库所有表：
`SHOW TABLES;`	

查询表结构：
`DESC 表名;`

查询指定表的建表语句：
`SHOW CREATE TABLE 表名;`

创建表：
`CREATE TABLE 表名(
	字段1 字段1类型[COMMENT 字段1注释],
	字段n 字段n类型[COMMENT 字段n注释]
)[COMMENT 表注释];`

**MySQL数据类型**
	![[Pasted image 20260917093024.png]]![[Pasted image 20260917093417.png]]![[Pasted image 20260917094102.png]]


**MySQL表修改**
`ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];`

`ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度) ;`

`ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];`

`ALTER TABLE 表名 DROP 字段名;`

`ALTER TABLE 表名 RENAME TO 新表名;`

**DDL-表操作-删除**
*删除表*
`DROP TABLE [IF EXISTS] 表名；`
*删除指定表，并重新创建该表*
`TRUNCATE TABLE 表名;`

**DML-添加数据**
1.*给指定字段添加数据*
`INSERT INTO 表名(字段1,字段2,...) VALUES(值1,值2,值3...);`

2.*给全部字段添加数据*
`INSERT INTO 表名 VALUES(值1,值2,值3...);`

*3.批量添加数据*
`INSERT INTO 表名(字段1,字段2,...) VALUES(值1,值2,值3...),(值1,值2,值3...),(值1,值2,值3...),(值1,值2,值3...);`


`INSERT INTO 表名 VALUES(值1,值2,值3...),(值1,值2,值3...),(值1,值2,值3...);`
%%
注意：
插入数据时，指定的字段顺序需要与值的顺序一一对应。
字符串和日期型数据应该包含在引号中。
插入的数据大小，应该在字段的规定范围内。%%


**DML-修改数据**
`UPDATE 表名 SET 字段名1=值1,字段名2=值2,...[WHERE 条件];`

%%注意：修改语句的条件可以有也可以没有，如果没有条件，则会修改整张表的所有数据。%%

**DML-删除数据**
`DELETE FROM 表名[WHERE 条件];`
%%注意：
delete语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的所有数据。
delete语句不能删除某一个字段的值（可以使用update）%%

**DQL-语法**

`SELECT`
	`字段列表`
`FROM`
	`表名列表`
`WHERE`
	`条件列表`
`GROUP BY`
	`分组字段列表`
`HAVING`
	`分组后条件列表`
`ORDER BY`
	`排序字段列表`
`LIMIT`
	`分页参数`

**DQL-基本查询**
*1.查询多个字段*
`SELECT 字段1,字段2,字段3...FROM` 表名;
`SELECT * FROM 表名;`

*2.设置别名*
`SELECT 字段1 [AS 别名1],字段2[AS 别名2] ... FROM 表名;`

*3.去除重复记录*
`SELECT DISTINCT 字段列表 FROM 表名;`

**DQL-条件查询**
*1.语法*
`SELECT 字段列表 FROM 表名 WHERE 条件列表`;
*2.条件*
![[Pasted image 20260918191120.png]]
%%判断null 要用is%%

**DQL-聚合函数**
`count - 统计数量`
`max - 最大值`
`min - 最小值`
`avg - 平均值`
`sum - 求和`
**语法：**
`select 聚合函数(字段列表) from 表名;`


**DQL-分组查询**
1.语法:
`select 字段列表 from 表名[where 条件] group by 分组字段名 [having 分组后过滤条件];`
%%
where 与 having 的区别%%
![[Pasted image 20260919094618.png]]

**DQL-排序查询**
1.语法:

`select 字段列表 from 表名 order by 字段1 排序方式1 字段2 排序方式2;

2.排序方式:

`asc:升序(默认值)
`desc:降序`

**DQL-分页查询**
1.语法:
`select 字段列表 from 表名 limit 起始索引,查询记录数;`

注意:
%%起始索引从0开始,起始索引 = (查询页面 -1 )* 每页显示记录数.
分页查询是数据库的方言,不同的数据库有不同的实现
如果查询的是第一页数据,起始索引可以省略,直接简写为limit 10.%%