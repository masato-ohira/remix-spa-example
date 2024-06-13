import { LuLoader2 } from 'react-icons/lu'

export const Loader = () => {
  return (
    <div className={'center min-h-[100svh]'}>
      <LuLoader2 className={'animate-spin text-5xl text-neutral-300'} />
    </div>
  )
}
