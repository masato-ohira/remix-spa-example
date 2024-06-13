import type { MetaFunction } from '@remix-run/node'
import { type ClientLoaderFunctionArgs, useLoaderData } from '@remix-run/react'
import type { PostType } from './top/types'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = (await res.json()) as PostType[]
  return json
}

export default function Index() {
  const data = useLoaderData<typeof clientLoader>()

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-10">
          {data.map((i) => {
            return (
              <div key={i.id}>
                <img
                  className={`
                    aspect-[1.414/1]
                    object-cover
                    block
                    w-full
                    h-auto
                  `}
                  src={`https://placehold.jp/ddd/ffffff/600x400.jpg?text=${i.id}`}
                  alt=""
                />
                <p className={`mt-4`}>{i.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
