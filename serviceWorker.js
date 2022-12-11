const staticDevCangrejo = "PikiAventuras_upmh"
const assets = [
  "index.html",
  "js/jquery.js",
  "Cangre_img/Ambiente.png",
  "Cangre_img/BANANA.png",
  "Cangre_img/Cangrego.png",
  "Cangre_img/nube.png",
  "Cangre_img/Piso.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCangrejo).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })