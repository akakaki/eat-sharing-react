# 一起吃飯 Eat Shating 網站 react 切版

初步嘗試使用 react 進行切版實做，盡量跳脫長期使用 vue 的思想邏輯進而達到拓展與探索，會運用到 redux 與 router 建立與使用情境，樣式相關採用 windicss 為主 sass 為輔(如套件使用 class 等權級使之無法變更可使用)，另外先不做 seo 等相關等非 react 內容(e.g robots.txt sitemap.xml)。

## 相關文件與專案走向

建立可用的環境可使用 vite 或官方的 npx 安裝已準備好的範例文件，但這邊會使用空白的資料夾從零開始去安裝自己要的套件與設定。

vite 的腳本內有包含 typescript 與沒有的版本，詳細可參考 [文件](https://vitejs.dev/guide/) 進行建立。


```JSON5
$ pnpm create vite
```

npx 官方使用 react-scripts 進行開發，另外有提供初始的模板設定，可參考 [文件](https://create-react-app.dev/)。

```JSON5
$ npx create-react-app my-app
```

---

## UI/UX
參考 Daisy 已完成的版型進行練習。
```
https://daisyyyyy0.github.io/eat-share
```

---

## 專案初始化
### react & redux & router

基礎三套

```JSON5
$ pnpm install @reduxjs/toolkit react react-dom react-redux react-router-dom
```

### react-app-rewired

開發專案時預設使用 react-scripts ，可 react-scripts 已封裝，雖然可以進行 eject 但東西相當多且複雜，故使用 react-app-rewired 更動需要更動的進行開發(start)與打包(build)工作。

```JSON5
$ pnpm install react-app-rewired
```

```JSON5
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
}
```


### themes

樣式

```JSON5
pnpm install -D sass windicss
```

### eslint

還沒加入專案內後面補

```JSON5
$ pnpm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### typescript

還沒加入專案內後面補

```JSON5
$ pnpm
```

---

?????文件還未整理的內容?????
```JSON5
// webpack
pnpm install -D webpack webpack-cli

// vite dev 裡面會出現的
pnpm install -D @types/react @types/react-dom

```

