interface DeviceData {
  device: {
    [key: string]: DeviceInfo
  }
}

interface DeviceInfo {
  device: string
  name: string
  size: string
  pixel: string
  aspect: string
}

const deviceData: DeviceData = {
  "device": {
    "iphone_7": {
      "device": "iphone_7",
      "name": "iPhone 7",
      "size": "4.7",
      "pixel": "750x1334",
      "aspect": "9:16",
    },
    "iphone_7_plus": {
      "device": "iphone_7_plus",
      "name": "iPhone 7 plus",
      "size": "5.5",
      "pixel": "1242x2208",
      "aspect": "9:16"
    },
    "iphone_8": {
      "device": "iphone_8",
      "name": "iPhone 8",
      "size": "4.7",
      "pixel": "750x1334",
      "aspect": "9:16"
    },
    "iphone_8_plus": {
      "device": "iphone_8_plus",
      "name": "iPhone 8 plus",
      "size": "5.5",
      "pixel": "1242x2208",
      "aspect": "9:16"
    },
    "iphone_x": {
      "device": "iphone_x",
      "name": "iPhone X",
      "size": "5.8",
      "pixel": "1125x2436",
      "aspect": "9:19.5"
    },
    "iphone_xs": {
      "device": "iphone_xs",
      "name": "iPhone XS",
      "size": "6.5",
      "pixel": "1125x2436",
      "aspect": "9:19.5"
    },
    "iphone_xs_max": {
      "device": "iphone_xs_max",
      "name": "iPhone XS Max",
      "size": "6.1",
      "pixel": "1242x2688",
      "aspect": "9:19.5"
    },
    "iphone_xr": {
      "device": "iphone_xr",
      "name": "iPhone XR",
      "size": "6.1",
      "pixel": "828x1792",
      "aspect": "9:19.5"
    },
    "iphone_11": {
      "device": "iphone_11",
      "name": "iPhone 11",
      "size": "6.1",
      "pixel": "828x1792",
      "aspect": "9:19.5"
    },
    "iphone_11_pro": {
      "device": "iphone_11_pro",
      "name": "iPHone 11 Pro",
      "size": "5.8",
      "pixel": "1125x2436",
      "aspect": "9:19.5"
    },
    "iphone_11_pro_max": {
      "device": "iphone_11_pro_max",
      "name": "iPHone 11 Pro MAX",
      "size": "6.5",
      "pixel": "1242x2688",
      "aspect": "9:19.5"
    },
    "iphone_se_2": {
      "device": "iphone_se_2",
      "name": "iPhone SE(2nd gen)",
      "size": "4.7",
      "pixel": "750x1334",
      "aspect": "9:16"
    },
    "iphone_12_mini": {
      "device": "iphone_12_mini",
      "name": "iPhone 12 mini",
      "size": "5.4",
      "pixel": "1080x2340",
      "aspect": "9:19.5"
    },
    "iphone_12": {
      "device": "iphone_12",
      "name": "iPhone 12",
      "size": "6.1",
      "pixel": "1170x2532",
      "aspect": "9:19.5"
    },
    "iphone_12_pro": {
      "device": "iphone_12_pro",
      "name": "iPhone 12 Pro",
      "size": "6.1",
      "pixel": "1170x2532",
      "aspect": "9:19.5"
    },
    "iphone_12_pro_max": {
      "device": "iphone_12_pro_max",
      "name": "iPhone 12 Pro MAX",
      "size": "6.7",
      "pixel": "1284x2778",
      "aspect": "9:19.5"
    },
    "iphone_13_mini": {
      "device": "iphone_13_mini",
      "name": "iPHone 13 mini",
      "size": "5.4",
      "pixel": "1125x2436",
      "aspect": "9:19.5"
    },
    "iphone_13": {
      "device": "iphone_13",
      "name": "iPhone 13",
      "size": "6.1",
      "pixel": "1170x2532",
      "aspect": "9:19.5"
    },
    "iphone_13_pro": {
      "device": "iphone_13_pro",
      "name": "iPhone 13 Pro",
      "size": "6.1",
      "pixel": "1170x2532",
      "aspect": "9:19.5"
    },
    "iphone_13_pro_max": {
      "device": "iphone_13_pro_max",
      "name": "iPhone 13 Pro MAX",
      "size": "6.7",
      "pixel": "1284x2778",
      "aspect": "9:19.5"
    },
    "iphone_se_3": {
      "device": "iphone_se_3",
      "name": "iPhone SE(3nd gen)",
      "size": "4.7",
      "pixel": "750x1334",
      "aspect": "9.16"
    },
    "iphone_14": {
      "device": "iphone_14",
      "name": "iPHone 14",
      "size": "6.1",
      "pixel": "1170x2532",
      "aspect": "9:19.5"
    },
    "iphone_14_plus": {
      "device": "iphone_14_plus",
      "name": "iPhone 14 Plus",
      "size": "6.7",
      "pixel": "1284x2778",
      "aspect": "9:19.5"
    },
    "iphone_14_pro": {
      "device": "iphone_14_pro",
      "name": "iPhone 14 Pro",
      "size": "6.1",
      "pixel": "1179x2556",
      "aspect": "9:19.5"
    },
    "iphone_14_pro_max": {
      "device": "iphone_14_pro_max",
      "name": "iPhone 14 Pro Max",
      "size": "6.7",
      "pixel": "1290x2796",
      "aspect": "9:19.5"
    }
  }
}

export { deviceData }
export type { DeviceData, DeviceInfo }

