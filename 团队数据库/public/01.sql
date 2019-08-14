SET NAMES UTF8;
DROP DATABASE IF EXISTS vvt;
CREATE DATABASE vvt CHARSET=UTF8;
USE vvt;

CREATE TABLE vvt_grade(
    grade_uid INT,  #等级编号
    grade_name VARCHAR(6), #等级名称
    discount VARCHAR(4)  #等级折扣
);
CREATE TABLE vvt_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
/**旅客登登记表**/
CREATE TABLE vvt_registration(
    user_id INT PRIMARY KEY AUTO_INCREMENT,               #顾客编号
    uname VARCHAR(16),         #顾客姓名
    gender INT,                #顾客性别
    dj_uid INT,                #顾客等级编号  ？？
    phone VARCHAR(16),         #顾客电话
    price  DECIMAL(10,2),      #顾客消费金额
    cart_id  VARCHAR(20),       #身份证号
    email VARCHAR(16),         #顾客邮箱
    record INT,                #记录状态
    information VARCHAR(20),   #备注信息
    room  VARCHAR(7),          #房间号
    upwd VARCHAR(32)          #顾客密码
);
/****首页轮播广告商品****/
CREATE TABLE vvt_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64)
);
/*民宿房屋及价格*/
CREATE TABLE vvt_family(
  fid INT PRIMARY KEY AUTO_INCREMENT, #房家编号  
  people_family VARCHAR(18),  #房主的家及地区
  price  DECIMAL(10,2)  #房屋价格
);

/*民宿房屋及价格*/
INSERT into vvt_family VALUES
(NULL,'屋里灰灰的家 - 苏州',240);
/****首页轮播广告商品****/
INSERT INTO vvt_index_carousel VALUES
(NULL, 'img/index/banner1.png','轮播广告商品1'),
(NULL, 'img/index/banner2.png','轮播广告商品2'),
(NULL, 'img/index/banner3.png','轮播广告商品3'),
(NULL, 'img/index/banner4.png','轮播广告商品4');
/**旅客登记表**/
INSERT INTO vvt_registration VALUES
(NULL,'张三','1','2','13284145601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-101','123456'),
(NULL,'李四','0','1','13284153254','1900','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-102','123456'),
(NULL,'张三','1','2','13284145601','3512','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-103','123456'),
(NULL,'张三','0','3','13584145601','2020','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-104','123456'),
(NULL,'张三','1','2','13284135301','1000','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-106','123456'),
(NULL,'张三','1','2','18848145601','1400','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-107','123456'),
(NULL,'张三','0','3','18284145601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-108','123456'),
(NULL,'张三','1','4','13841458601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-109','123456'),
(NULL,'张三','1','4','13888145601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-110','123456'),
(NULL,'张三','1','2','13288414601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-111','123456');
INSERT INTO vvt_laptop_family VALUES
(NULL,'西涌蝴蝶家客栈的家 - 深圳'),
(NULL,'风情帆都  ·  青岛'),
(NULL,'金陵春梦  ·  南京'),
(NULL,'最忆西湖  ·  杭州');
/**等级折扣介绍**/
INSERT INTO vvt_grade VALUES
(NULL,"钻石VIP",'8折'),
(NULL,"铂金VIP",'8.8折'),
(NULL,"黄金VIP",'9折'),
(NULL,"白银VIP",'9.5折'),
(NULL,"青铜VIP",'9.8折');