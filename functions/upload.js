export async function onRequest({ request }) {
  // const { method, headers, body } = request
  // const { file, ...bd } = body
  // const newUrl = new URL(url)
  // console.log(newUrl)
  // const res = await fetch(`https://api.imgur.com/3/upload`, { method, headers: { ...headers, Authorization: 'Client-ID 546c25a59c58ad7' }, body: { ...bd, image: file } })
  // const resText = await res.text()
  // return resText

  return fetch('http://store.liebao.cn/game/screenshot/postImage.php', {
    headers: {
      'Content-Type': 'multipart/form-data',
      Cookie:
        'uname=1730133222; fid=2095; pid=37422; _uid=58325849; uf=da0883eb5260151e9771b2917d13293487e97982db3438fe848556b0bf3221ea6a1594bcc9b36905d575a4a7cd31cd9fc49d67c0c30ca5047c5a963e85f11099fb84102a2be4f082ce71fc6e59483dd3aaece5e46c58b7a925f51c3260bc2991368438860d2f03d8; _d=1581340181717; UID=58325849; vc=F5278DC2E0BA66043C9E4580A21D969A; vc2=B077D97E3A97852D67191359950981A0; vc3=YRp7r9bzhtTdoSEF0oXo7JGSW07N4KA6RSiBcFhimigkBMeq1Dt7IJNt8UZm9l4S5pmXhQ6oOACuEP0lgd%2FJ1qBPH45%2BdNM1oPwjJ%2BL2L%2FRPVZAB4f4Ih9lwULdYdqX7FRYVRp0UYj%2FP5B1BZfpirnvelJ8LW5R3%2BF4WoXTrcsQ%3D709336d094173d65a57652f8f85665bc; xxtenc=d07d351e7eb8c0b1077961f98d783b6d; DSSTASH_LOG=C_38-UN_557-US_58325849-T_1581340181718; cookiecheck=true; duxiu=userName%5fdsr%2c%3dtfm%2c%21userid%5fdsr%2c%3d23224%2c%21char%5fdsr%2c%3d%u752b%2c%21metaType%2c%3d9%2c%21dsr%5ffrom%2c%3d1%2c%21logo%5fdsr%2c%3dlogo0408%2ejpg%2c%21logosmall%5fdsr%2c%3dsmall0408%2ejpg%2c%21title%5fdsr%2c%3d%u6c5f%u82cf%u5efa%u7b51%u804c%u4e1a%u6280%u672f%u5b66%u9662%2c%21url%5fdsr%2c%3debook%2c%21compcode%5fdsr%2c%3d2231%2c%21province%5fdsr%2c%3d%u6c5f%u82cf%2c%21readDom%2c%3d%2c%21isdomain%2c%3d3%2c%21showcol%2c%3d0%2c%21hu%2c%3d0%2c%21areaid%2c%3d0%2c%21uscol%2c%3d0%2c%21isfirst%2c%3d0%2c%21istest%2c%3d0%2c%21cdb%2c%3d0%2c%21og%2c%3d0%2c%21ogvalue%2c%3d0%2c%21testornot%2c%3d1%2c%21remind%2c%3d0%2c%21datecount%2c%3d3613%2c%21userIPType%2c%3d1%2c%21my%2c%3d1%2c%21lt%2c%3d0%2c%21ttt%2c%3dfxlogin%2echaoxing%2c%21enc%5fdsr%2c%3dB6EF070A6274B7004097D03CBC2833F6; AID_dsr=557; superlib=""; msign_dsr=1581340188528; search_uuid=7ec91008%2da5d0%2d4d51%2db95f%2ddf89f5c2c996; mqs=19e3b526c24d6396e1d1d379000611b1ab7ea64b18143053f590d9e4528a8e813d559792cf552bd5434fead216a363ce3ac258ebe06024271fb79cbe3f1747a0ca1d7888427ca131082e6e7c673ea267b17b7752fdcfa048a750dbef249d808bdf25975d611ca11721a81eac5cbad674; UM_distinctid=1702f3865df2-0244f777db0a8f-366b420b-1fa400-1702f3865e1d0; source=""; thirdRegist=0; rt=-2; tl=0; _industry=6; route=b0c381e8d0ae5368be4dce472f741d17; JSESSIONID=AE1B603EF51B883F1392302B5FE0A7B9.GroupTopic_WEB',
      Referer: 'https://groupweb.chaoxing.com/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    },
    body: request.body,
    method: request.method
  })
}

// const client_id = () => `${Array.from({ length: 15 }, () => Math.random().toString(36).slice(2)).join('')}`
// console.log(client_id)
