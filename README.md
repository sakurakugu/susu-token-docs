# SusuToken Docs

SusuToken 文档站，使用 VitePress 构建并发布到 GitHub Pages。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建检查

```bash
npm run docs:build
```

## 发布

推送到 `main` 分支后，GitHub Actions 会构建 `docs/.vitepress/dist` 并发布到 GitHub Pages。

自定义域名：

- https://docs.susutoken.com
