// _app.jsは特殊なファイル。全てのコンポーネントに適用される処理を記述する。この_app.jsに組み込むCSSファイルをグローバルCSSと言い、グローバルCSSは他ファイルで読み込むことは不可。
// コンポーネントはインポートする必要はなし。全ページで共通して実行させたいファイルを読み込んだり、処理を実行させたりレイアウトを組み込むことが可能。
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

