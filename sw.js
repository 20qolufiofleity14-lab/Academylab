/* 取り消し用：以前入ったサービスワーカーを外し、保存した分を消す */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('acad-'))await caches.delete(k);await self.registration.unregister()})()));
