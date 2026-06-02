# Codex

完整教程可以看 [菜鸟教程](https://www.runoob.com/codex/codex-tutorial.html)

## 一. 安装 Codex

### 1. `Codex App`

前往官网下载：https://chatgpt.com/zh-Hans-CN/codex/

或直接在应用市场搜索 `Codex` 下载安装

> 如果显示网络问题就关闭梯子，大概率是你的梯子没有绕过UWP应用限制，临时关闭是最简单的解决方式

如果是编程的话，在 VSCode 中安装 `Codex` 插件也可以体验 GUI 图形页面

### 2. `Codex CLI`

> 以下是推荐安装方式

1. 没有安装 nodejs的，先下载并安装 [nodejs24](https://nodejs.org/dist/v24.16.0/node-v24.16.0-x64.msi)

   验证安装：

   ```bash
   node -v
   npm -v
   ```

2. 全局安装 `Codex CLI`：

   ```bash
   npm install -g @openai/codex
   ```

   验证安装：

   ```bash
   codex --help
   ```

## 二. 导入

使用 [CC-Switch](./cc-switch.md) 图形页面导入

## 三、其他

如果想在 codex 中使用 `deepseek`, 且不接入当前中转站的情况下，下载个 `CC-Switch`, 然后开启路由即可使用
