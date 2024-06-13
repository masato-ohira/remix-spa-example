import { includes, map, split } from 'lodash-es'

const isTsx = (src: string) => {
  switch (true) {
    case includes(src, 'MyMetas'):
    case includes(src, 'index.tsx'):
    case includes(src, '/pages'):
      return false
    default:
      return src.endsWith('.tsx')
  }
}

export const dataIsPlugin = () => {
  return {
    name: 'data-is-plugin',
    // ViteのHTML生成フックを使用してタグを制御
    async transform(code: string, id: string) {
      try {
        if (isTsx(id)) {
          // インポートしたtsxコンポーネントのタグにdata-testid属性を追加する
          const componentId = split(id, '/').reverse()[0].replace('.tsx', '')
          console.log({ componentId })
          console.log({ code })
          const flag = `return /* @__PURE__ */ jsx`
          const blankTag = `XXX(_Fragment`

          let codes = split(code, '\n')

          if (code.includes(flag) && !code.includes(blankTag)) {
            let count = 0
            // map(codes, (i, key) => {
            //   if (i.includes(flag)) {
            //     count++
            //     const dataId =
            //       count > 1 ? `${componentId}_${count}` : componentId
            //     codes.splice(key + 1, 0, `'data-is': '${dataId}',`)
            //   }
            // })
          }

          return {
            code: codes.join('\n'),
            map: null,
          }
        }
      } catch (error) {
        return {
          code,
          map: null,
        }
      }
    },
  }
}
