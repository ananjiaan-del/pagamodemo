# 地方作伙｜關西地方創生任務（GitHub Pages 版）

以關西產業聯盟為案例的地方創生互動學習網站。使用者會先認識地方創生、完成心理測驗，再依照行動類型進入專屬地圖、案例圖鑑與實作關卡。

## 主要功能

- 地方創生基礎介紹
- 六題行動性格測驗
- 文化說書人、產業設計師、社群連結者、永續實踐家四種類型
- 專屬與綜合關西探索地圖
- 石店子69、玉山麵、福臨飯店、關西產業聯盟案例圖鑑
- 課題理解、行動建立、商業模式與影響評估四階段關卡

## 上傳到 pagamodemo

1. 進入 <https://github.com/ananjiaan-del/pagamodemo>。
2. 將這個資料夾內的所有檔案上傳到儲存庫根目錄；必須包含隱藏的 `.github` 資料夾。
3. 儲存庫預設分支請使用 `main`。
4. 前往 **Settings → Pages**。
5. 在 **Build and deployment** 的 Source 選擇 **Deploy from a branch**。
6. Branch 選擇 **main**，資料夾選擇 **/docs**，然後按 **Save**。
7. 等候 GitHub Pages 完成發布。

完成後網址為：<https://ananjiaan-del.github.io/pagamodemo/>

## 本機執行

需要 Node.js 22.13 以上版本與 pnpm。

```bash
pnpm install
pnpm dev
```

開啟終端機顯示的 `/pagamodemo/` 網址即可瀏覽。

## 建置

```bash
pnpm build
```

## 專案結構

- `app/`：頁面、元件、案例資料與樣式
- `public/`：靜態素材
- `docs/`：已完成建置、可直接由 GitHub Pages 發布的網站
- `.github/workflows/deploy-pages.yml`：日後更新程式時可使用的自動部署設定
- `package.json`：套件與執行指令

## 主要頁面

- `/`：首頁
- `/about`：地方創生介紹
- `/quiz`：心理測驗
- `/map`：關西探索地圖
- `/atlas`：地方創生故事圖鑑
- `/missions`：地方創生關卡

## 授權與內容

網站案例文字為學習用途整理。若要公開商業使用，請另行確認引用資料、品牌名稱與圖文授權。
