# embemorning

Microsite chuc mung sinh nhat duoc tach tu base `BirthDays` va duoc su dung cho project `embemorning`.

## Chinh sua noi dung

Mo file `script.js` va cap nhat cac truong trong `birthdayConfig`:

- `recipientName`: ten nguoi nhan
- `fromName`: ten cua ban
- `birthdayDate`: ngay sinh theo dinh dang `YYYY-MM-DD`
- `heroLead`, `heroNote`, `storyIntro`, `finalTitle`, `finalCopy`
- `wishes`, `moments`, `letterTitle`, `letterBody`

Mo file `index.html` neu can doi text co dinh o section phao hoa hoac 3D.

## Chay local

Khong mo `index.html` bang `file://`. Browser se chan `type="module"` va import map, dan den phan 3D bi loi CORS.

Cach nhanh nhat tren Windows:

1. Chay `start-local.bat`
2. Trang se mo tai `http://127.0.0.1:4173`

Neu muon chay bang terminal:

```bash
node serve-local.js
```

## Deploy

Repo nay duoc publish truc tiep tu nhanh `main` va thu muc goc `/` bang GitHub Pages.
