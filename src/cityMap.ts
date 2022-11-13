const cityMap: Record<string, [number, number]> = {
  '北京': [40.1824, 116.4142],
  '上海': [31.2304, 121.4737],
  '广州': [23.1291, 113.2644],
  '深圳': [22.5431, 114.0579],
  '杭州': [30.25, 120.16],
  '成都': [30.67, 104.06],
  '武汉': [30.58, 114.27],
  '南京': [32.04, 118.78],
  '天津': [39.12, 117.2],
  '重庆': [29.59, 106.54],
  '苏州': [31.29, 120.62],
  '西安': [34.27, 108.95],
  '长沙': [28.21, 112.91],
  '沈阳': [41.8, 123.38],
  '青岛': [36.07, 120.33],
  '郑州': [34.76, 113.62],
  '大连': [38.92, 121.62],
  '宁波': [29.86, 121.54],
  '东莞': [23.02, 113.75],
  '无锡': [31.59, 120.29],
  '佛山': [23.02, 113.11],
  '合肥': [31.86, 117.28],
  '昆明': [25.04, 102.73],
  '哈尔滨': [45.8, 126.63],
  '长春': [43.88, 125.32],
  '济南': [36.65, 117.12],
  '福州': [26.08, 119.3],
  '厦门': [24.48, 118.1],
  '常州': [31.79, 119.95],
  '南昌': [28.68, 115.89],
  '石家庄': [38.05, 114.48],
  '南宁': [22.84, 108.33],
  '海口': [20.02, 110.35],
  '惠州': [23.12, 114.4],
  '贵阳': [26.65, 106.71],
  '太原': [37.87, 112.53],
  '泉州': [24.93, 118.58],
  '南通': [32.03, 120.88],
  '嘉兴': [30.75, 120.76],
  '扬州': [32.39, 119.42],
  '珠海': [22.3, 113.52],
  '徐州': [34.26, 117.2],
  '烟台': [37.46, 121.39],
  '绍兴': [30.01, 120.58],
  '台州': [28.68, 121.420757],
  '兰州': [36.06, 103.73],
  '南充': [30.83, 106.110698],
  '乌鲁木齐': [43.8, 87.68],
  '呼和浩特': [40.83, 111.65],
  '拉萨': [29.65, 91.1],
  '银川': [38.47, 106.27],
  '潍坊': [36.71, 119.1],
  '威海': [37.5, 122.1],
  '日照': [35.42, 119.46],
  '莱芜': [36.21, 117.67],
  '聊城': [36.45, 115.97],
  '滨州': [37.38, 117.97],
  '菏泽': [35.23, 115.480656],
  '吉林': [43.88, 125.32],
  '唐山': [39.63, 118.180194],
  '廊坊': [39.53, 116.7],
  '保定': [38.87, 115.48],
  '沧州': [38.3, 116.83],
  '衡水': [37.73, 115.72],
  '邢台': [37.05, 114.48],
  '邯郸': [36.6, 114.47],
  '秦皇岛': [39.93, 119.57],
  '张家口': [40.82, 114.87],
  '承德': [40.97, 117.93],
  '湖州': [30.86, 120.1],
  '盐城': [33.35, 120.13],
  '金华': [29.08, 119.64],
  '衢州': [28.97, 118.88],
  '舟山': [30.0, 122.2],
  '丽水': [28.45, 119.92],
  '洛阳': [34.62, 112.44],
  '开封': [34.79, 114.35],
  '焦作': [35.22, 113.21],
  '鹤壁': [35.75, 114.17],
  '新乡': [35.3, 113.9],
  '安阳': [36.1, 114.35],
  '濮阳': [35.71, 115.03],
  '许昌': [34.02, 113.81],
  '漯河': [33.56, 114.02],
  '三门峡': [34.75, 111.19],
  '南阳': [32.99, 112.52],
  '商丘': [34.44, 115.65],
  '信阳': [32.13, 114.07],
  '周口': [33.63, 114.63],
  '驻马店': [32.98, 114.02],
  '黄石': [30.2, 115.03],
  '十堰': [32.63, 110.78],
  '宜昌': [30.7, 111.28],
  '襄樊': [32.02, 112.15],
  '鄂州': [30.39, 114.88],
  '荆门': [31.02, 112.19],
  '孝感': [30.92, 113.92],
  '荆州': [30.33, 112.23],
  '黄冈': [30.44, 114.87],
  '咸宁': [29.85, 114.32],
  '随州': [31.69, 113.37],
  '恩施': [30.3, 109.5],
  '仙桃': [30.37, 113.45],
  '潜江': [30.42, 112.88],
  '天门': [30.66, 113.16],
  '神农架': [31.75, 110.67],
  '株洲': [27.83, 113.16],
  '湘潭': [27.87, 112.91],
  '衡阳': [26.89, 112.61],
  '邵阳': [27.24, 111.5],
  '岳阳': [29.37, 113.09],
  '常德': [29.05, 111.69],
  '张家界': [29.12, 110.47],
  '益阳': [28.6, 112.33],
  '郴州': [25.79, 113.02],
  '永州': [26.43, 111.63],
  '怀化': [27.57, 109.95],
  '娄底': [27.71, 111.96],
  '湘西': [28.32, 109.73],
  '赣州': [25.83, 114.93],
  '吉安': [27.12, 114.97],
  '宜春': [27.81, 114.38],
  '抚州': [27.95, 116.36],
  '上饶': [28.47, 117.97],
  '鹰潭': [28.23, 117.06],
  '萍乡': [27.62, 113.85],
  '新余': [27.81, 114.92],
}

export {
  cityMap,
}