# CC Switch

## 一. 安装 CC Switch

官网地址：https://www.ccswitch.io/zh/

下载地址：https://github.com/farion1231/cc-switch/releases

使用下载地址中的`系统要求`目录中的安装包进行安装。

> Windows 推荐 `CC-Switch-v3.16.1-Windows.msi`
>
> Mac 推荐 `CC-Switch-v3.16.1-macOS.dmg`
>
> Linux 根据自身的架构来选择

## 二. 配置 CC Switch

在 [API Keys](https://susutoken.com/keys) 页面创建一个新的 API Key，并点击 `导入到 CCS` 然后同意导入

## 三. 测试模型

点击右边的`测试模型`图标，如果能正常返回结果说明配置成功。

> 如果返回模型不可用等错误，可能是因为没修改测试模型的默认值，
>
> 需要手动打开 Codex 等客户端，发送 `hi` 等请求测试是否成功

## 四、开启路由（推荐）

开启路由可以快速切换不同的模型，还可以使用 官方 `deepseek` API等功能，推荐开启

> 但是 `claude code` 中要关闭并添加一些配置才可以吃满 `deepseek` 的缓存

1. 点击首页左上角的`设置`图标，然后点击顶部的 `路由`

2. 点击 `本地路由` , 把这个中的所有能打开的开关都打开即可

3. 之后想要开启或关闭直接在首页就可以切换了
