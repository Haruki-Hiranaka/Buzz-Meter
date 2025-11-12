# BuzzMeter - 学園祭リアルタイム盛り上がり可視化システム

学園祭会場の「盛り上がり（熱気）」をリアルタイムに可視化するWebアプリケーションです。

## 🎉 デモ

GitHub Pagesでホスティング中！

## ✨ 特徴

- 🗺️ **インタラクティブな会場マップ** - 校舎・体育館・グラウンドの平面図
- 🔥 **リアルタイムヒートマップ** - 盛り上がり度を色で可視化（50-198%）
- 🏆 **TOP5ランキング** - 人気ブースをリアルタイム表示
- 📊 **詳細トレンドチャート** - 15分間の盛り上がり推移
- ✨ **スムーズなアニメーション** - 60fps の滑らかな動き
- 📱 **レスポンシブデザイン** - モバイル・デスクトップ対応

## 🛠️ 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **状態管理**: Zustand

## 🚀 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 📦 デプロイ

### GitHub Pages（自動デプロイ）

1. GitHubリポジトリを作成
2. コードをプッシュ
3. リポジトリ設定 → Pages → Source を「GitHub Actions」に設定
4. mainブランチにプッシュすると自動デプロイ

### 手動デプロイ（Vercel / Netlify）

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📄 ライセンス

MIT

## 👨‍💻 作成者

Gemini Ambassador Program - BuzzMeter Team
