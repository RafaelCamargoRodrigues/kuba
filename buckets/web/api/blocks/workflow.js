export default function (_request, response) {
  response.json({
    title: 'In non consectetur ante.',
    description: 'Vestibulum dapibus tortor magna, quis cursus nunc vestibulum nec. Nam in magna sagittis, eleifend ante nec, rhoncus libero.',
    steps: [
      {
        title: 'Ut enim libero',
        description: 'Praesent pellentesque mauris dui, a fringilla urna ultrices id. Fusce efficitur elit vel gravida aliquam. Sed lobortis orci.'
      },
      {
        title: 'Morbi erat urna',
        description: 'Pellentesque dignissim tortor lectus, sit amet imperdiet leo convallis pharetra. Integer venenatis mi odio, in dictum mauris mollis.'
      },
      {
        title: 'Sed mattis arcu',
        description: 'Nam ac erat faucibus, venenatis quam imperdiet, commodo leo. Suspendisse sollicitudin quam at purus pellentesque, quis euismod risus.'
      },
      {
        title: 'Integer a sollicitudin',
        description: 'Vestibulum egestas dolor urna, sollicitudin posuere turpis bibendum sed. Integer quis bibendum nibh. Integer ac eleifend leo. Sed.'
      }
    ]
  })
}
