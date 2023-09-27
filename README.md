# 一起吃飯 Eat Shating 網站 react 切版

初步嘗試使用 react 進行切版實做，跳脫長期使用 vue 的思想邏輯進而達到拓展與探索，運用 redux 與 router 建立與使用情境，樣式採用 windicss 為主 sass 為輔(如套件使用 class 等權級使之無法變更可使用)，另外先不做 seo 等相關等非 react 內容(e.g robots.txt sitemap.xml)。

## 代辦

1. router 寫入登入狀態
2. style 寫入 hover 行為
3. 接入 firebase 或 notion

## 相關文件與專案走向

起手使用未打包整理好的環境包可再次熟悉 webpack 配置的設定，另外也參考了其他常見的包預設會預設哪些所需要的相關套件，文件上也會做參考的兩種取得方式。建立可用的環境可使用 vite 或官方的 npx 安裝已準備好的範例文件，但這邊會使用空白的資料夾從零開始去安裝自己要的套件與設定。

vite 的腳本內有包含 typescript 與沒有的版本，詳細可參考 [文件](https://vitejs.dev/guide/) 進行建立。


```sh
pnpm create vite
```

npx 官方使用 react-scripts 進行開發，另外有提供初始的模板設定，可參考 [文件](https://create-react-app.dev/)。

```sh
npx create-react-app my-app
```

---

## UI/UX
參考 Daisy 已完成專案 [一起吃飯 EatShring](https://daisyyyyy0.github.io/eat-share) 進行實做。

---

## 專案初始化步驟
### react & redux & router

基礎三套

```sh
pnpm install @reduxjs/toolkit react react-dom react-redux react-router-dom
```

### react-app-rewired

開發專案時預設使用 react-scripts ，可 react-scripts 已在 CRA 進行封裝，雖然可以 eject 進行調整，可套件相當多且繁雜，所以最後使用 react-app-rewired 更動需要更動的進行開發(start)與打包(build)工作。

```sh
pnpm install react-app-rewired
```

```sh
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
}
```


### 樣式

更換使用 react-app-rewired 的其中一個原因之一，windicss 須新增引入到 webpack.config.js 內，另外參考官方文件外，還需調整路徑，後續補充。(0919)

```sh
pnpm install -D sass windicss
```

### eslint

預設的 react 已加入，可還沒設定專案後面補。(0919)

```sh
pnpm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### typescript

還沒加入專案內後面補。(0919)

```sh
pnpm
```

---

## 未分類內容
```sh

// vite dev 裡面會出現的(?)
pnpm install -D @types/react @types/react-dom

```
