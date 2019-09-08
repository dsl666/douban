var Mock=require("mockjs");
Mock.mock('/mnwjhome',"get",require('./json/mnwjhome.json'));
Mock.mock('/dianying',"get",require('./json/dianying.json'));
Mock.mock('/book',"get",require('./json/book.json'));
Mock.mock('/findgoodbook',"get",require('./json/findgoodbook.json'));
Mock.mock('/xiaozu',"get",require('./json/xiaozu.json'));
