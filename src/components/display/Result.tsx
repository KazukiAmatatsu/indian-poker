import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const Result = () => {
  const roomInfo = useRecoilValue(room)
  const member = roomInfo.member

  let markStrength = ['♠', '♥', '♦', '♣']

  const sorted =
    member &&
    Object.values(member).sort((a, b) => {
      if (a.number !== b.number) {
        return b.number - a.number
      }
      if (a.number === b.number && a.mark !== b.mark) {
        return markStrength.indexOf(a.mark) - markStrength.indexOf(b.mark)
      }
      return 0
    })

  return (
    <>
      {sorted?.map((p, key) => {
        return (
          <ul>
            <li key={key}>
              {key + 1}位<span></span>
              {p.name}
              {p.mark + p.number}
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default Result