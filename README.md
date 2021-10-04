# How to Use Global State with CreateContext

### src配下に適当なファイルを作成する。今回は`components/providers/AdminFlagProvider.jsx`

#### components/providers/AdminFlagProvider.jsx

1. `React.createContext`でcontextの器を作成する
2. 作成したContextのProviderでグルーバルStateを扱いたいコンポーネントを囲む。一般的にルートコンポーネントが多い
3. Stateを参照したいコンポーネントで`React.useContext`を使う

```jsx
// AdminFlagProvider.jsx

import { createContext, useState } from 'react'

export const AdminFlagContext = createContext({})
// デフォルト値として空のオブジェクトを指定
export const AdminFlagProvider = (props) => {
  const {children} = props;

  const [isAdmin, setIsAdmin] = useState(false)

  // Providerコンポーネントはルートコンポーネントで使用するため、childrenを受け取れるように
  return (
    // ContextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  )
}
```

#### index.js内でProviderをimport

ルートコンポーネントとなるindex.js内でimportする

Providerで囲む

```js
import { AdminFlagProvider } from './components/providers/AdminFlagProvider'

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
)
```

#### App.jsx

参照するコンポーネントではuseContextを使用しglobal stateを参照する

```jsx
import { useContext } from 'react'
import { AdminFlagContext } from './components/providers/AdminFlagProvider'
import { Card } from './Card'

export const App = () => {
  const {isAdmin, setAdmin} = useContext(AdminFlagContext)
  //
  <CardisAdmin={isAdmin} />
}
```

#### Card

EditButtonにpropsを渡す必要がなくなる

```jsx
import { EditButton } from './EditButton'

export const Card = () => {
  return (
    <div>
      <p>Haryu</p>
      <EditButton />
    </div>
  )
}
```


#### EditButton

参照するコンポーネントではuseContextを使用しglobal stateを参照する

```jsx
// EditButton.jsx
import { AdminFlagContext } from './components/providers/AdminFlagProvider'
import { useContext } from 'react'

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext)
  return (
    <button disabled={!isAdim} >Edit</button>
  )
}
```
