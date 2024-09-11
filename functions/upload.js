export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText

  return fetch('http://store.liebao.cn/game/screenshot/postImage.php', request)
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
