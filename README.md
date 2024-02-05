# react eat shating redesign react

嘗試使用 react 進行切版實做，跳脫長期使用 vue 的思想邏輯進而達到拓展與探索，運用 redux 與 router 建立與使用情境，樣式採用 windicss 為主 sass 為輔(如套件使用 class 等權級使之無法變更可使用)，另外先不做 seo 等相關等非 react 內容(e.g robots.txt sitemap.xml)。

## Feature

1. write login status router
2. write hover style
3. Firebase

## 相關文件與專案走向

起手使用未打包整理好的環境包可再次熟悉 webpack 配置的設定，另外也參考了其他常見的包預設會預設哪些所需要的相關套件，文件上也會做參考的兩種取得方式。建立可用的環境可使用 vite 或官方的 npx 安裝已準備好的範例文件，但這邊會使用空白的資料夾從零開始去安裝自己要的套件與設定。

npx 官方使用 react-scripts 進行開發，另外有提供初始的模板設定，可參考 [文件](https://create-react-app.dev/)。

```
npx create-react-app my-app
```

<!-- ## UI/UX
參考 Daisy 已完成專案 [一起吃飯 EatShring](https://daisyyyyy0.github.io/eat-share) 進行實做。 -->

---

## Init Project

舊的開發環境下預設使用 react-scripts ，但以進行了 CRA 封裝，雖然可以用 eject 進行調整，但環境內就會下載相當多的套件、依賴與設定，所以最後使用 react-app-rewired 更動需要更動的進行開發 (start) 與打包 (build) 工作。

```
pnpm install @reduxjs/toolkit react react-dom react-redux react-router-dom react-app-rewired
```

```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
}
```

### 樣式

更換使用 react-app-rewired 的其中一個原因之一，windicss 須新增引入到 webpack.config.js 內，另外參考官方文件外，還需調整路徑，後續補充。(0919)

```
pnpm install -D sass windicss
```

### eslint

預設的 react 已加入，可還沒設定專案後面補。(0919)

```
pnpm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### typescript

還沒加入專案內後面補。(0919)

