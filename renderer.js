const infomation = document.getElementById('info')
infomation.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
  const res = await window.versions.ping()
  console.log(res)
}

func()
