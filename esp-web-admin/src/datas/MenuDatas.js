// 菜单模拟数据
export default {
  "entity": null,
  "childs": [
    {
      "entity": {
        "id": "1",
        "parentMenuId": "0",
        "name": "系统管理",
        "icon": "el-icon-s-tools",
        "state": "1",
        "value": null
      },
      "childs": [
        {
          "entity": {
            "id": "1-1",
            "parentMenuId": "1",
            "name": "配置管理",
            "icon": "el-icon-s-cooperation",
            "state": "1",
            "value": "/system/config"
          }
        },
        {
          "entity": {
            "id": "1-2",
            "parentMenuId": "1",
            "name": "数据源管理",
            "icon": "el-icon-s-help",
            "state": "1",
            "value": "/system/dataSource"
          }
        },
        {
          "entity": {
            "id": "1-3",
            "parentMenuId": "1",
            "name": "系统监控",
            "icon": "el-icon-s-platform",
            "state": "1",
            "value": "/system/monitor"
          }
        }
      ]
    },
    {
      "entity": {
        "id": "2",
        "parentMenuId": "0",
        "name": "用户管理",
        "icon": "el-icon-user-solid",
        "state": "1",
        "value": null
      },
      "childs": [
        {
          "entity": {
            "id": "2-1",
            "parentMenuId": "2",
            "name": "帐号管理",
            "icon": "el-icon-s-order",
            "state": "1",
            "value": "/user/account"
          }
        },
        {
          "entity": {
            "id": "2-2",
            "parentMenuId": "2",
            "name": "信息管理",
            "icon": "el-icon-warning",
            "state": "1",
            "value": "/user/info"
          }
        },
        {
          "entity": {
            "id": "2-3",
            "parentMenuId": "2",
            "name": "权限管理",
            "icon": "el-icon-info",
            "state": "1",
            "value": "/user/permission"
          }
        }
      ]
    },
    {
      "entity": {
        "id": "3",
        "parentMenuId": "0",
        "name": "应用管理",
        "icon": "el-icon-s-grid",
        "state": "1",
        "value": null
      },
      "childs": [
        {
          "entity": {
            "id": "3-1",
            "parentMenuId": "3",
            "name": "信息管理",
            "icon": "el-icon-warning",
            "state": "1",
            "value": "/app/info",
          }
        },
        {
          "entity": {
            "id": "3-2",
            "parentMenuId": "3",
            "name": "公章管理",
            "icon": "el-icon-camera-solid",
            "state": "1",
            "value": "/app/seal"
          }
        },
        {
          "entity": {
            "id": "3-3",
            "parentMenuId": "3",
            "name": "文档管理",
            "icon": "el-icon-s-order",
            "state": "1",
            "value": "/app/doc"
          }
        }
      ]
    }
  ]
}
