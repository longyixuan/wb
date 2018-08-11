var zjlxArray = [ //证件类型list
    {
        code: '01', //出生日期自动读取
        name: '居民身份证'
    },
    {
        code: '03',
        name: '港澳台身份证'
    },
    {
        code: '04',
        name: '华侨身份证件'
    }
];
var xbArray = [ //性别list
    {
        code: '1',
        name: '男'
    },
    {
        code: '2',
        name: '女'
    }
];
var hfArray = [ //婚姻状况list
    {
        code: '1',
        name: '未婚'
    },
    {
        code: '2',
        name: '已婚'
    },
    {
        code: '3',
        name: '丧偶'
    },
    {
        code: '4',
        name: '离婚'
    },
    {
        code: '9',
        name: '其他'
    },

];
var xyjrArray = [ //现役军人list
    {
        code: '0',
        name: '非现役军人'
    },
    {
        code: '1',
        name: '军队在职干部'
    },
    {
        code: '2',
        name: '军校应届本科毕业生'
    },
    {
        code: '3',
        name: '国防生'
    }
];
var zzmmArray = [ //政治面貌list
    {
        code: '03',
        name: '中国共产主义青年团团员'
    },
    {
        code: '01',
        name: '中国共产党党员'
    },
    {
        code: '02',
        name: '中国共产党预备党员'
    },
    {
        code: '04',
        name: '中国国民党革命委员会会员'
    },
    {
        code: '05',
        name: '中国民主同盟盟员'
    },
    {
        code: '06',
        name: '中国民主建国会会员'
    },
    {
        code: '07',
        name: '中国民主促进会会员'
    },
    {
        code: '08',
        name: '中国农工民主党党员'
    },
    {
        code: '09',
        name: '中国致公党党员'
    },
    {
        code: '10',
        name: '九三学社社员'
    },
    {
        code: '11',
        name: '台湾民主自治同盟盟员'
    },
    {
        code: '12',
        name: '无党派民主人士'
    },
    {
        code: '13',
        name: '群众'
    }
];
var xueliArray = [ //学历
    {
        code: '2',
        name: '本科毕业'
    },
    {
        code: '1',
        name: '研究生'
    },
    {
        code: '3',
        name: '本科结业'
    },
    {
        code: '4',
        name: '高职高专'
    }
]
var xueweiArray = [ //学位
    {
        code: '3',
        name: '学士学位'
    },
    {
        code: '2',
        name: '硕士学位'
    },
    {
        code: '1',
        name: '博士学位'
    },
    {
        code: '4',
        name: '无'
    }
]
var kslyArray = [ //考生来源
    {
        code: '5',
        name: '普通全日制应届本科毕业生'
    },
    {
        code: '1',
        name: '科学研究人员'
    },
    {
        code: '2',
        name: '高等教育教师'
    },
    {
        code: '3',
        name: '中等教育教师'
    },
    {
        code: '4',
        name: '其他在职人员'
    },
    {
        code: '6',
        name: '成人应届本科毕业生'
    },
    {
        code: '7',
        name: '其他人员'
    }
];
var bklbArray = [ //报考类别
    {
        code: '11',
        name: '非定向就业'
    },
    {
        code: '12',
        name: '定向就业'
    }
];
var ksfsArray = [ //考试方式
    {
        code: '21',
        name: '全国统考'
    },
    // {
    //     code: '22',
    //     name: '推荐免试'
    // },
    {
        code: '23',
        name: '单独考试'
    },
    {
        code: '25',
        name: '管理类联考'
    },
    {
        code: '26',
        name: '法硕联考'
    },
    {
        code: '27',
        name: '强军计划'
    },
    {
        code: '28',
        name: '援藏计划'
    }
    // {
    //     code: '29',
    //     name: '农村师资计划'
    // },
    // {
    //     code: '30',
    //     name: '少数民族骨干计划'
    // }
];
var zxjhArray = [
    {
        code: '0',
        name: '无'
    },
    {
        code: '1',
        name: '强军计划'
    },
    {
        code: '02',
        name: '援藏计划'
    },
    // {
    //     code: '3',
    //     name: '农村师资计划'
    // },
    {
        code: '4',
        name: '少数民族骨干计划'
    },
    // {
    //     code: '5',
    //     name: '支教团推免计划'
    // },
    // {
    //     code: '6',
    //     name: '免费师范生推免计划'
    // },
    {
        code: '7',
        name: '退役大学生计划'
    }
];
var xxfsArray = [
    {
        code: '1',
        name: '全日制'
    },
    {
        code: '2',
        name: '非全日制'
    }
]
var xxxsArray = [ //学习形式
    {
        code: '1',
        name: '普通全日制'
    },
    {
        code: '2',
        name: '成人教育'
    },
    {
        code: '3',
        name: '自学考试'
    },
    {
        code: '4',
        name: '网络教育'
    },
    {
        code: '5',
        name: '获境外学历或学位证书者'
    },
    {
        code: '6',
        name: '其他'
    }
];
var minzuArray = [ //民族list
    {
        code: '01',
        name: '汉族'
    },
    {
        code: '02',
        name: '蒙古族'
    },
    {
        code: '03',
        name: '回族'
    },
    {
        code: '04',
        name: '藏族'
    },
    {
        code: '05',
        name: '维吾尔族'
    },
    {
        code: '06',
        name: '苗族'
    },
    {
        code: '07',
        name: '彝族'
    },
    {
        code: '08',
        name: '壮族'
    },
    {
        code: '09',
        name: '布依族'
    },
    {
        code: '10',
        name: '朝鲜族'
    },
    {
        code: '11',
        name: '满族'
    },
    {
        code: '12',
        name: '侗族'
    },
    {
        code: '13',
        name: '瑶族'
    },
    {
        code: '14',
        name: '白族'
    },
    {
        code: '15',
        name: '土家族'
    },
    {
        code: '16',
        name: '哈尼族'
    },
    {
        code: '17',
        name: '哈萨克族'
    },
    {
        code: '18',
        name: '傣族'
    },
    {
        code: '19',
        name: '黎族'
    },
    {
        code: '20',
        name: '傈僳族'
    },
    {
        code: '21',
        name: '佤族'
    },
    {
        code: '22',
        name: '畲族'
    },
    {
        code: '23',
        name: '高山族'
    },
    {
        code: '24',
        name: '拉祜族'
    },
    {
        code: '25',
        name: '水族'
    },
    {
        code: '26',
        name: '东乡族'
    },
    {
        code: '27',
        name: '纳西族'
    },
    {
        code: '28',
        name: '景颇族'
    },
    {
        code: '29',
        name: '柯尔克孜族'
    },
    {
        code: '30',
        name: '土族'
    },
    {
        code: '31',
        name: '达斡尔族'
    },
    {
        code: '32',
        name: '仫佬族'
    },
    {
        code: '33',
        name: '羌族'
    },
    {
        code: '34',
        name: '布朗族'
    },
    {
        code: '35',
        name: '撒拉族'
    },
    {
        code: '36',
        name: '毛南族'
    },
    {
        code: '37',
        name: '仡佬族'
    },
    {
        code: '38',
        name: '锡伯族'
    },
    {
        code: '39',
        name: '阿昌族'
    },
    {
        code: '40',
        name: '普米族'
    },
    {
        code: '41',
        name: '塔吉克族'
    },
    {
        code: '42',
        name: '怒族'
    },
    {
        code: '43',
        name: '乌孜别克族'
    },
    {
        code: '44',
        name: '俄罗斯族'
    },
    {
        code: '45',
        name: '鄂温克族'
    },
    {
        code: '46',
        name: '德昂族'
    },
    {
        code: '47',
        name: '保安族'
    },
    {
        code: '48',
        name: '裕固族'
    },
    {
        code: '49',
        name: '京族'
    },
    {
        code: '50',
        name: '塔塔尔族'
    },
    {
        code: '51',
        name: '独龙族'
    },
    {
        code: '52',
        name: '鄂伦春族'
    },
    {
        code: '53',
        name: '赫哲族'
    },
    {
        code: '54',
        name: '门巴族'
    },
    {
        code: '55',
        name: '珞巴族'
    },
    {
        code: '56',
        name: '基诺族'
    },
    {
        code: '97',
        name: '其他'
    },
    {
        code: '98',
        name: '外国血统'
    }
];
export var shengshiArray = [  //省市list
    {
        code: '11',
        name: '北京市'
    },
    {
        code: '12',
        name: '天津市'
    },
    {
        code: '13',
        name: '河北省'
    },
    {
        code: '14',
        name: '山西省'
    },
    {
        code: '15',
        name: '内蒙古自治区'
    },
    {
        code: '21',
        name: '辽宁省'
    },
    {
        code: '22',
        name: '吉林省'
    },
    {
        code: '23',
        name: '黑龙江省'
    },
    {
        code: '31',
        name: '上海市'
    },
    {
        code: '32',
        name: '江苏省'
    },
    {
        code: '33',
        name: '浙江省'
    },
    {
        code: '34',
        name: '安徽省'
    },
    {
        code: '35',
        name: '福建省'
    },
    {
        code: '36',
        name: '江西省'
    },
    {
        code: '37',
        name: '山东省'
    },
    {
        code: '41',
        name: '河南省'
    },
    {
        code: '42',
        name: '湖北省'
    },
    {
        code: '43',
        name: '湖南省'
    },
    {
        code: '44',
        name: '广东省'
    },
    {
        code: '45',
        name: '广西壮族自治区'
    },
    {
        code: '46',
        name: '海南省'
    },
    {
        code: '50',
        name: '重庆市'
    },
    {
        code: '51',
        name: '四川省'
    },
    {
        code: '52',
        name: '贵州省'
    },
    {
        code: '53',
        name: '云南省'
    },
    {
        code: '54',
        name: '西藏自治区'
    },
    {
        code: '61',
        name: '陕西省'
    },
    {
        code: '62',
        name: '甘肃省'
    },
    {
        code: '63',
        name: '青海省'
    },
    {
        code: '64',
        name: '宁夏回族自治区'
    },
    {
        code: '65',
        name: '新疆维吾尔自治区'
    }
    // {
    //     code: '00',
    //     name: '无(军人)'
    // }
];
var shengshi2Array = [  //省市list
    {
        code: '11',
        name: '北京市'
    },
    {
        code: '12',
        name: '天津市'
    },
    {
        code: '13',
        name: '河北省'
    },
    {
        code: '14',
        name: '山西省'
    },
    {
        code: '15',
        name: '内蒙古自治区'
    },
    {
        code: '21',
        name: '辽宁省'
    },
    {
        code: '22',
        name: '吉林省'
    },
    {
        code: '23',
        name: '黑龙江省'
    },
    {
        code: '31',
        name: '上海市'
    },
    {
        code: '32',
        name: '江苏省'
    },
    {
        code: '33',
        name: '浙江省'
    },
    {
        code: '34',
        name: '安徽省'
    },
    {
        code: '35',
        name: '福建省'
    },
    {
        code: '36',
        name: '江西省'
    },
    {
        code: '37',
        name: '山东省'
    },
    {
        code: '41',
        name: '河南省'
    },
    {
        code: '42',
        name: '湖北省'
    },
    {
        code: '43',
        name: '湖南省'
    },
    {
        code: '44',
        name: '广东省'
    },
    {
        code: '45',
        name: '广西壮族自治区'
    },
    {
        code: '46',
        name: '海南省'
    },
    {
        code: '50',
        name: '重庆市'
    },
    {
        code: '51',
        name: '四川省'
    },
    {
        code: '52',
        name: '贵州省'
    },
    {
        code: '53',
        name: '云南省'
    },
    {
        code: '54',
        name: '西藏自治区'
    },
    {
        code: '61',
        name: '陕西省'
    },
    {
        code: '62',
        name: '甘肃省'
    },
    {
        code: '63',
        name: '青海省'
    },
    {
        code: '64',
        name: '宁夏回族自治区'
    },
    {
        code: '65',
        name: '新疆维吾尔自治区'
    },
    {
        code: '71',
        name: '台湾'
    },
    {
        code: '81',
        name: '香港'
    },
    {
        code: '82',
        name: '澳门'
    },
    {
        code: '00',
        name: '境外'
    }
];
function getCodeName(type, code) {
    for (var i = 0; i < type.length; i++) {
        if (type[i].code === code) {
            return type[i].name;
        }
    }
}