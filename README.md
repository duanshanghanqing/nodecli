## 创建目录
    nodecli

## 执行初始化
    npm init --yes

## 安装依赖包

    npm i commander git-clone shelljs -S

    commander: 快速开发命令行的包
    git-clone: 克隆远程仓库到本地的包
    shelljs: 包装了 shell

## 添加命令后默认命令
    package.json
        "bin": {
            "mycli": "./index.js"
        },

    // mycli 就是命令行默认的命令   
## 创建 index.js

    #!/usr/bin/env node
    // 解决了不同的用户node路径不同的问题，可以让系统动态的去查找node来执行你的脚本文件。
    // https://blog.csdn.net/liangtaox8/article/details/100039274

    console.log('lello');
    // 当前根目录执行 npm link
    // 其他任意目录执行 mycli，应该会打印出 “hello”

