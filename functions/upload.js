export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText
  // 获取用户上传的文件
  const formData = await request.formData()
  const imgFile = formData.get('img')
  // 创建 FormData 对象
  const data = new FormData()
  data.append('img', imgFile)

  // 发送请求到目标 URL
  return fetch('http://store.liebao.cn/game/screenshot/postImage.php', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Referer: 'https://www.liebao.com/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
  })
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
