SET NAMES UTF8;
DROP DATABASE IF EXISTS ar;
CREATE DATABASE ar CHARSET=UTF8;
USE ar;

/****首页轮播广告商品****/
CREATE TABLE ar_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,   #轮播编号
  img VARCHAR(128),    #轮播图路径
  title VARCHAR(64)   #标题
);
/**旅客登登记表**/
CREATE TABLE ar_registration(
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
/*顾客等级设置表*/
CREATE TABLE ar_grade(
    grade_uid INT,  #等级编号
    grade_name VARCHAR(6), #等级名称
    discount VARCHAR(4)  #等级折扣
);

/*员工信息表*/
CREATE TABLE ar_gaff(
   id INT PRIMARY KEY AUTO_INCREMENT,           #编号
   uname VARCHAR(16), #员工姓名
   gender int,        #员工性别
   avatar VARCHAR(128),        #头像图片路径
   phone VARCHAR(16),  #电话
   gaff_id VARCHAR(18), #身份证号
   mailbox VARCHAR(18), #员工邮箱
   remarks VARCHAR(30), #备注信息
   record INT    #记录状态
);
/*住宿表*/
CREATE TABLE ar_accommodation(
    card_number VARCHAR(10),
    sirial_number INT
);
/*房屋类型家族*/
CREATE TABLE ar_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT, #地区编号
  fname VARCHAR(32)  #房屋类型及地区
);
/*民宿房屋及价格*/
CREATE TABLE ar_family(
  fid INT PRIMARY KEY AUTO_INCREMENT, #房家编号  
  people_family VARCHAR(18),  #房主的家及地区
  img VARCHAR(128),           #图片
  people_img VARCHAR(128),    #人物图片
  price  DECIMAL(10,2)  #房屋价格
);

/*预定/入住信息表*/
CREATE TABLE ar_reserve(
    fid  INT PRIMARY KEY AUTO_INCREMENT, #房家编号
    ftime VARCHAR(16),    #入住时间
    ser_time VARCHAR(16), #预定退房时间   
    actual_time VARCHAR(16), #实际退房时间 
    fday VARCHAR(5),  #居住天数
    price DECIMAL(10,2), #消费金额
    order_time VARCHAR(16), #下单时间
    remarks VARCHAR(30), #备注信息
    record INT,    #记录状态 0-已离住 1-在住状态
    adult  INT,    #入住成人数
    jl_id  INT,    #记录编号
    grade  VARCHAR(6)  #顾客等级     
);

/*房间分类表*/
CREATE TABLE ar_room(
  rid INT PRIMARY KEY AUTO_INCREMENT, #房间编号
  rname VARCHAR(10),  #房间类别
  price DECIMAL(10,2), #房间价格
  chuang_price DECIMAL(10,2), #加床费用
  jia_cahuang VARCHAR(6), #加床
  remarks VARCHAR(30) #备注信息
);
/*热门客源*/
CREATE TABLE ar_source(
  s_id INT PRIMARY KEY AUTO_INCREMENT, #编号
  title VARCHAR(32),  #客源标题
  img VARCHAR(128),           #图片
  position VARCHAR(32),  #客源位置
  price DECIMAL(10,2) #消费金额
);
/*为您订购*/
CREATE TABLE ar_suji(
  o_id INT PRIMARY KEY AUTO_INCREMENT, #编号
  img VARCHAR(128),           #图片
  subtitle VARCHAR(32),    #副标题
  details VARCHAR(1024),      #详细说明
  or_uname  VARCHAR(16),        #作者
  name_img VARCHAR(128),     #作者头像
  or_time VARCHAR(20)       #记录时间
);
/*楼信息表*/
CREATE TABLE ar_floor(
  f_id INT PRIMARY KEY AUTO_INCREMENT, #编号
  category  INT,   #房间类别编号
  floor_user  VARCHAR(128), #房间使用状况
  storey  INT,  #楼层编号
  remarks VARCHAR(30), #备注信息
  room_number VARCHAR(6) #房间号
);
/*留言信息表*/
CREATE TABLE ar_message(
  m_id INT PRIMARY KEY AUTO_INCREMENT, #顾客编号
  mname VARCHAR(16),  #顾客姓名
  leaving VARCHAR(128), #留言
  email VARCHAR(6),           #邮编
  record INT,    #记录状态0-已离住 1-在住状态
  phone INT,     # 电话
  ly_id int       #留言编号
);
INSERT INTO ar_message VALUES
(NULL,'dingding','天气转冷，注意添加衣物，冬季空气干燥，要多喝水，多吃水果，房间为您配备了果盘，请您享用。祝您入住愉快！','ding@qq.com','1','12345678910','001'),
(NULL,'dangdang','天气转冷，注意添加衣物，冬季空气干燥，要多喝水，多吃水果，房间为您配备了果盘，请您享用。祝您入住愉快！','dang@qq.com','2','12345678910','002'),
(NULL,'xiaoming','天气转冷，注意添加衣物，冬季空气干燥，要多喝水，多吃水果，房间为您配备了果盘，请您享用。祝您入住愉快！','ming@qq.com','3','12345678910','003'),
(NULL,'sanmao','天气转冷，注意添加衣物，冬季空气干燥，要多喝水，多吃水果，房间为您配备了果盘，请您享用。祝您入住愉快！','mao@qq.com','4','12345678910','004'),
(NULL,'xiaolu','天气转冷，注意添加衣物，冬季空气干燥，要多喝水，多吃水果，房间为您配备了果盘，请您享用。祝您入住愉快！','lu@qq.com','5','12345678910','005');
/*楼信息表*/
INSERT INTO ar_floor VALUES
(NUll,'01','别墅装修的话春亭装饰做得很专业，中式风格做的很不错，','001','需要保持有热水','2-202'),
(NUll,'02','别墅装修的话春亭装饰做得很专业，中式风格做的很不错，','002','需要保持有热水','1-203'),
(NUll,'03','别墅装修的话春亭装饰做得很专业，中式风格做的很不错，','003','需要保持有热水','2-203'),
(NUll,'04','别墅装修的话春亭装饰做得很专业，中式风格做的很不错，','004','需要保持有热水','2-205'),
(NUll,'05','别墅装修的话春亭装饰做得很专业，中式风格做的很不错，','005','需要保持有热水','5-201');
/*为您订购*/
INSERT INTO ar_suji VALUES
(NUll,'img/source/52fq.jpg','避开拥挤，遇见最美丽、最安静的束河古镇','很多人第一次去丽江，满眼新鲜。第二次去丽江，已经觉得变味了。 满眼的“一米阳光”和“千里走单骑”。夜晚的酒吧，灯红酒绿， 早已不是原','红豆包','img/source/raw.jpg','2019-08-02 16:30:46'),
(NUll,'img/source/53fq.jpg','未来30天，国内最值得去的地方，安排吗？','青岛崂山，是一个神仙般的地方，忽闻海上有仙山，山在虚无缥缈间。崂山是山东半岛的主要山脉，是中国海岸线第一高峰，有着海上“第一名山”之称。','野小贝','img/source/raw03.jpg','2019-08-02 17:14:18'),
(NUll,'img/source/54fq.jpg','去乡间“野”一回，过向往的生活','从小在小镇长大的我，对于乡野有一种天生的亲近， 双脚在大地上，沾满泥土的芬芳。家门前是大山， 四周全是一望无垠的田野。','野小贝','img/source/raw.jpg','2019-08-02 16:30:46'),
(NUll,'img/source/55fq.jpg','住过扬州宅叁月，彻底忘记超星酒店','为什么越来越多的人做了民宿， 却只有极少数的人脱颖而出？住过扬州宅叁月，答案自会不言而喻。','猴小胖','img/source/raw03.jpg','2019-08-05 09:49:58'),
(NUll,'img/source/56fq.jpg','超清新！她把女孩梦想的小窝窝搬进了扬州瘦西湖','扬州是个温软的地方，无论是那句“烟花三月下扬州”，还是帝王将相、落魄才子、 商贾贵胄在江南流连的韵事，总有点唯独偏爱扬州的感觉。江南韵致里，扬州因为古词有了淡淡的相思离愁，反而让人牵肠挂肚。一如我对扬州的印象：踏着幽长弄堂里的青石板，古琴吟唱巷间，走过细雨微湿的季节，桃红柳醉后的瘦西湖风姿婀娜，亭台楼阁、白石桥宛如丹青水墨般若隐若现；月上柳梢时分，便是“天下三分明月夜，二分无赖是扬州”，淡妆素裹的纤纤女子扬起笛萧。','布帕','img/source/raw04.jpg','2019-08-06 09:46:32'),
(NUll,'img/source/57fq.jpg','号称扬州“小拙政园”的民宿，听起来就很炸裂','这一次，我们来到扬州，有幸走进扬州院——豪第坊独栋别墅，这座古香古色的江南小院','Kelly雅','img/source/raw05.jpg','2019-08-07 10:09:04'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39'),
(NUll,'img/source/58fq.jpg','在扬州运河边的院里，翻着她的藏书安然入睡','王燕的铁粉们大约是此世间最幸福的一个群体，因为他们与精神偶像维系情感的码头，被主持人挪到了千年古运河边——“听说之间”民宿客栈。','花叔','img/source/raw06.jpg','2019-08-08 09:58:39');

/*旅游速记*/
CREATE TABLE ar_order(
 sj_id INT PRIMARY KEY AUTO_INCREMENT, #编号 
 img VARCHAR(128),           #图片
  title VARCHAR(32),         #标题
  subtitle VARCHAR(32)     #说明
);
/*为您订购*/
INSERT INTO ar_order VALUES
(NUll,'img/source/47fq.jpg','家庭出游','一房多个卧室,亲子设施齐全'),
(NUll,'img/source/48fq.jpg','家庭出游','一房多个卧室'),
(NUll,'img/source/49fq.jpg','私人派对','轰趴气氛绝佳，自定个性主题'),
(NUll,'img/source/50fq.jpg','网红打卡','网红热门房源，爆款预定体验'),
(NUll,'img/source/51fq.jpg','家庭出游','一房多个卧室');
/*热门客源*/
INSERT INTO ar_source VALUES
(NULL,'大理观云海景别墅· 双露台','img/source/43fq.jpg','大理','178'),
(NULL,'三亚格睿森豪华私墅—花园墅','img/source/44fq.jpg','三亚 · 亚龙湾','3888'),
(NULL,'『晓燕艺墅』九华山庄☆娱乐聚会团建独栋别墅☆可烧烤','img/source/45fq.jpg','北京 · 昌平区','2580'),
(NULL,'较场尾沙滩超大奢美别墅【一线海景、度假首选】','img/source/46fq.jpg','深圳 · 龙岗','9800');
/*房间分类表*/
INSERT INTO ar_room VALUES
(NULL,'农园民宿','520','50','1张大床','人多加床才够住'),
(NULL,'海滨民宿','1120','150','1张大床','人多加床才够住'),
(NULL,'温泉民宿','720','100','1张大床','人多加床才够住'),
(NULL,'运动民宿','540','50','1张大床','人多加床才够住'),
(NULL,'传统建筑民宿','510','80','1张大床','人多加床才够住');

/*预定/入住信息表*/
INSERT INTO ar_reserve VALUES
(NULL,'2019-8-11 11:20','2019-8-12 12:00','2019-8-12 13:10','1天','235','2019-8-10 18:10','明天早上11点之前入住','1','2','001','钻石'),
(NULL,'2019-7-11 11:20','2019-7-12 12:00','2019-7-12 13:10','1天','235','2019-7-10 18:10','明天早上10点之前入住','1','2','002','白银'),
(NULL,'2019-8-11 11:20','2019-8-12 12:00','2019-8-12 13:10','1天','235','2019-8-10 18:10','明天早上13点之前入住','1','2','003','黄金'),
(NULL,'2019-8-11 11:20','2019-8-12 12:00','2019-8-12 13:10','1天','235','2019-8-10 18:10','明天早上9点之前入住','1','2','004','青铜');

/*民宿房屋及价格*/
INSERT INTO ar_family VALUES
(NULL,'屋里灰灰的家 - 苏州','img/index/fq_v6.jpg','img/index/gu2.jpg',240),
(NULL,'米舍庄主的家 - 苏州','img/index/fq_v4.jpg','img/index/gu2.jpg',698),
(NULL,'西涌蝴蝶家客栈的家 - 深圳','img/index/fq_v1.jpg','img/index/gu2.jpg',168),
(NULL,'胡小花的家 - 深圳','img/index/fq_v6.jpg','img/index/gu2.jpg',469),
(NULL,'北京路的宅先生的家 - 广州','img/index/f6.jpg','img/index/gu2.jpg',359),
(NULL,'星空舍_Starrys的家 - 上海','img/index/f6.jpg','img/index/gu2.jpg',498);

INSERT INTO ar_laptop_family VALUES
(NULL,'西涌蝴蝶家客栈的家 - 深圳'),
(NULL,'风情帆都  ·  青岛'),
(NULL,'金陵春梦  ·  南京'),
(NULL,'最忆西湖  ·  杭州');
/**住宿表**/
INSERT INTO ar_accommodation VALUES
('A-102',NULL),
('B-112',NULL),
('C-304',NULL);

/*轮播图*/
INSERT INTO ar_index_carousel VALUES
(NULL, 'img/index/banner1.png','轮播广告1'),
(NULL, 'img/index/banner2.png','轮播广告2'),
(NULL, 'img/index/banner3.png','轮播广告3'),
(NULL, 'img/index/banner4.png','轮播广告4');

/**旅客登记表**/
INSERT INTO ar_registration VALUES
(NULL,'张三','1','2','13284145601','2100','521214XXXXXXXXXXX2','123456@qq.com','1','正在入住中','A-101','123456'),
(NULL,'李四','0','1','13284153254','1900','521214XXXXXXXXXXX2','1235636@qq.com','1','正在入住中','A-102','123456'),
(NULL,'老王','1','2','13284145601','3512','521214XXXXXXXXXXX2','2542546@qq.com','1','正在入住中','A-103','123456'),
(NULL,'张麻子','0','3','13584145601','2020','521214XXXXXXXXXXX2','17532@qq.com','1','正在入住中','A-104','123456'),
(NULL,'孙三','1','2','13284135301','1000','521214XXXXXXXXXXX2','145546@qq.com','1','正在入住中','A-106','123456'),
(NULL,'小明','1','2','18848145601','1400','521214XXXXXXXXXXX2','154242@qq.com','1','正在入住中','A-107','123456'),
(NULL,'小红','0','3','18284145601','2100','521214XXXXXXXXXXX2','352452@qq.com','1','正在入住中','A-108','123456'),
(NULL,'小刚','1','4','13841458601','2100','521214XXXXXXXXXXX2','132520@qq.com','1','正在入住中','A-109','123456'),
(NULL,'小李','1','4','13888145601','2100','521214XXXXXXXXXXX2','821422@qq.com','1','正在入住中','A-110','123456'),
(NULL,'小三','1','2','13288414601','2100','521214XXXXXXXXXXX2','025242@qq.com','1','正在入住中','A-111','123456');

/**等级折扣介绍**/
INSERT INTO ar_grade VALUES
('1',"钻石VIP",'8折'),
('2',"铂金VIP",'8.8折'),
('3',"黄金VIP",'9折'),
('4',"白银VIP",'9.5折'),
('5',"青铜VIP",'9.8折');

/*员工信息*/
INSERT INTO ar_gaff VALUES
(NULL,'dingding','1','img/avatar/default.png','15229997011','5524324XXXXXXXXXXX4','dingding@qq.com','工作中','1'),
(NULL,'qianqian','0','img/avatar/default.png','15522423532','5524324XXXXXXXXXXX4','qianqian@qq.com','工作中','1'),
(NULL,'fengfeng','0','img/avatar/default.png','15425822546','5524324XXXXXXXXXXX4','fengfeng@qq.com','已离职','0'),
(NULL,'yangyang','0','img/avatar/default.png','17254255223','5524324XXXXXXXXXXX4','yangyang@qq.com','工作中','0'),
(NULL,'luoluoqi','0','img/avatar/default.png','15285154252','5524324XXXXXXXXXXX4','luoluo@qq.com','工作中','1'),
(NULL,'qingqing','0','img/avatar/default.png','19252242657','5524324XXXXXXXXXXX4','qingqing@qq.com','已离职','0');