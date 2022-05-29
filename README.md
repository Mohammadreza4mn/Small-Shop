This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Before the project:

1- npm install -g json-server
2- create a file db.json
3- copy and paste to db.json:

```bash
{
  "products": [
    {
      "id": 1,
      "name": "کیبورد گیمینگ مکانیکی Rapoo مدل V500 PRO",
      "price": 1197000,
      "img": "/images/rapoo.jpeg",
      "description": "درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان"
    },
    {
      "id": 2,
      "name": "لوستر 12 شعله چشمه نور کد C2735.6+6-BO",
      "price": 4275600,
      "img": "/images/C2735.jpg",
      "description": "برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد"
    },
    {
      "id": 3,
      "name": "هودی مردانه کد HG6707",
      "price": 445000,
      "img": "/images/HG6707.jpg",
      "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
    }
  ],
  "shoppingCart": []
}
```

4- terminal run command > json-server --watch db.json --port 3001
5- open [Vercel](http://small-shop-snowy.vercel.app/)
