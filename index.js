#!/usr/bin/env node

const program = require('commander');
const shell = require('shelljs');
const download = require('git-clone');
const { spwan } = require('child_process');

// 版本
program.version('1.0.0'); 

// 定义命令
// 1.创建项目
program.command('new <name>')
    .description('创建目录')
    .action(name => {
        const gitUrl = 'https://github.com/duanshanghanqing/webpack-react16.8-hot.git';
        download(gitUrl, `./${name}`, () => {
            shell.rm('-rm', `${name}/.git`); // 删除 git 隐藏文件
            // shell.cd(name); // 进入项目
            // shell.exec('npm install'); // 安装依赖
            console.log(`
                cd ${name}
                npm start
            `);
        });
    });

// 2.运行项目
program.command('run')
    .description('运行项目')
    .action(() => {
        // console.log(`成功运行项目`);
        // shell.exec('npm run dev');
        let cp = spwan('npm',['run', 'dev']); // 相当与执行 npm run dev
        cp.stdout.pipe(process.stdout);
        cp.stdout.pipe(process.stdout);
        cp.on('close', () => {
            console.log('启动项目成功');
        });
    });

// 解析命令行参数
program.parse(process.argv);
